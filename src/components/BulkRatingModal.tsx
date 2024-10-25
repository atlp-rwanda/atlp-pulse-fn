import { useLazyQuery, useMutation } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import * as XLSX from "xlsx"
import { ADD_RATINGS_BY_FILE, FETCH_SPRINTS } from "../Mutations/Ratings"
import { toast } from "react-toastify"
import { GET_TEAMS_BY_ROLE } from "../Mutations/teamMutation"

type BulkRatingModalProps = {
    bulkRateModal: boolean,
    setBulkRateModal: React.Dispatch<React.SetStateAction<boolean>>
}

type AddRatingsByFileFormData = {
    sprint: string,
    file: File | null,
}

const orgToken = localStorage.getItem('orgToken')

const BulkRatingModal = ({ bulkRateModal, setBulkRateModal }: BulkRatingModalProps) => {
    const { t } = useTranslation()
    const [fetchSprints, { data: sprints, loading: loadingSprints, error: sprintsError }] = useLazyQuery(FETCH_SPRINTS, {
        variables: {
            orgToken
        },
        fetchPolicy: 'network-only',
    })
    const [getTeamsByRole, {data: teams, loading: loadingTeams, error: teamsError}] = useLazyQuery(GET_TEAMS_BY_ROLE, {
        variables: {
            orgToken
        },
        fetchPolicy: 'network-only',
    })
    const [addRatingsByFile, { data: ratings, loading: loadingRatings, error: ratingsError }] = useMutation(ADD_RATINGS_BY_FILE)
    const [formData, setFormData] = useState<AddRatingsByFileFormData>({
        sprint: '',
        file: null
    })
    const [selectedTeam, setSelectedTeam] = useState<string>('')

    const saveRatings = async (e: React.FormEvent) => {
        try {
            e.preventDefault()
            if(formData.sprint === '') throw new Error("Please select a sprint")
            if(!formData.file) throw new Error("Please select a file")
            await addRatingsByFile({
                variables: {
                    file: formData.file,
                    sprint: parseInt(formData.sprint),
                    orgToken
                },
            })
            fetchSprints()
            toast.success("Rating completed succefully")
        } catch (err: any) {
            toast.error(err?.message)
        }
    }

    const downloadTeamFile = async(e: any)=>{
        try{
            if(selectedTeam === '') throw new Error("No Team was selected")
            const team = teams.getTeamsByRole.find((team:any)=>team.id === selectedTeam)
            const rows: any = []
            team.members.forEach((member: any)=>{
                console.log(member)
                if(member.role !== "trainee") return
                rows.push({
                    email: member.email,
                    quantity: '',
                    quality: '',
                    professional_skills:'',
                    feedBacks: ''
                })
            })
            const workSheet = rows.length ? XLSX.utils.json_to_sheet(rows) : XLSX.utils.json_to_sheet([{
                email: '',
                quantity: '',
                quality: '',
                professional_skills:'',
                feedBacks: ''
            }])
            const workBook = XLSX.utils.book_new()
            workSheet["!cols"] = [ { wch: 20 } ]
            XLSX.utils.book_append_sheet(workBook, workSheet,"ratings")
            XLSX.writeFile(workBook, `${team.name.replace(' ','')}_Ratings.xlsx`)
        }catch(err: any){
            toast.error(err?.message)
        }
    }

    useEffect(() => {
        fetchSprints()
        getTeamsByRole()
    }, [])

    return (
        <div className={`${bulkRateModal ? "block" : "hidden"} h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center px-4`}>
            <div className="w-full p-4 pb-8 bg-indigo-100 rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
                <div className="flex flex-wrap items-center justify-center w-full card-title">
                    <h3 className="w-11/12 text-sm font-bold text-center dark:text-white">
                        {t('Bulk Rating')}
                    </h3>
                    <hr className="w-full my-3 border-b bg-primary" />
                </div>
                <div>
                    <form className="flex flex-col gap-5" onSubmit={saveRatings}>
                        <div className="flex flex-col gap-1">
                            <label>Choose a sprint</label>
                            <select className="p-2 text-black dark:text-white rounded-lg bg-white dark:bg-dark border-2 border-primary"
                                defaultValue={""}
                                onChange={(e) => {
                                    e.preventDefault()
                                    setFormData({ ...formData, sprint: e.target.value })
                                }}
                            >
                                <option>Choose a sprint</option>
                                {
                                    sprints && !sprints.fetchSprints.length ?
                                        <option value={1}>Sprint 1</option>
                                        : ''
                                }
                                {
                                    sprints && sprints.fetchSprints.length ?
                                        [...sprints.fetchSprints, sprints.fetchSprints[sprints.fetchSprints.length - 1] + 1].map((sprint: number) =>
                                            <option key={sprint} value={sprint}>Sprint {sprint}</option>
                                        )
                                        : ''
                                }
                                {
                                    loadingSprints ?
                                        <option>Loading ...</option>
                                        : ''
                                }
                                {
                                    sprintsError ?
                                        <option>No sprints found...</option>
                                        : ''
                                }
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <input
                                className="w-1/2 h-full bg-gray-600 rounded-md"
                                type="file"
                                onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    setFormData({ ...formData, file: file ? file : null })
                                }}
                            >
                            </input>
                            <div className="flex gap-2">
                                    <select className="p-2 text-sm text-black dark:text-white rounded-lg bg-white dark:bg-dark border-2 border-primary" defaultValue={""} onChange={(e)=>setSelectedTeam(e.target.value)}>
                                        <option>Choose a team</option>
                                        {
                                            teams && teams.getTeamsByRole.length > 0 ?
                                            teams.getTeamsByRole.map((team: any)=><option key={team.id} value={team.id}>{team.name}</option>)
                                            : ''
                                        }
                                    </select>
                                    <button type="button" onClick={downloadTeamFile} className="p-3 text-white rounded-lg bg-green-500 text-sm font-serif font-semibold">Download</button>
                            </div>
                        </div>

                        <div>
                            {
                                ratings && ratings.addRatingsByFile.RejectedRatings.length > 0 ?
                                    <div className="my-1 overflow-x-auto">
                                        <table className="table-fixed min-w-full">
                                            <caption className="caption-top text-left my-2">
                                                Rejected Ratings
                                            </caption>
                                            <thead className="border-b bg-neutral-700 border-neutral-400">
                                                <tr>
                                                    <th scope="col" className="text-left py-4 px-2">Email</th>
                                                    <th scope="col" className="text-left py-4 px-2">Quantity</th>
                                                    <th scope="col" className="text-left py-4 px-2">Quality</th>
                                                    <th scope="col" className="text-left py-4 px-2">Professional_Skills</th>
                                                    <th scope="col" className="text-left py-4 px-2">Feedback</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ratings.addRatingsByFile?.RejectedRatings.map((rating: any, index: number) =>
                                                    <tr key={index} className="text-red-400">
                                                        <td className="text-left py-1 px-2">{rating.email ? rating.email : "null"}</td>
                                                        <td className="text-left py-1 px-2">{rating.quantity ? rating.quantity : "null"}</td>
                                                        <td className="text-left py-1 px-2">{rating.quality ? rating.quality : "null"}</td>
                                                        <td className="text-left py-1 px-2">{rating.professional_skills ? rating.professional_skills : "null"}</td>
                                                        <td className="text-left py-1 px-2">{rating.feedBacks ? rating.feedBacks : "null"}</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    : ''
                            }
                        </div>
                        <div className="flex justify-between w-full">
                            <button className="w-[40%] md:w-1/4 p-3 text-white rounded-lg bg-primary text-sm font-serif font-semibold" type="button" onClick={() => setBulkRateModal(false)}>
                                Cancel
                            </button>
                            <button className="w-[40%] md:w-1/4 p-3 text-white rounded-lg bg-primary text-sm font-serif font-semibold" type="submit">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BulkRatingModal