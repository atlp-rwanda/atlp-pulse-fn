import { useLazyQuery, useMutation } from "@apollo/client"
import React, { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import * as XLSX from "xlsx"
import { ADD_RATINGS_BY_FILE, GET_RATINGS_BY_COHORT } from "../Mutations/Ratings"
import { toast } from "react-toastify"
import { GET_TEAMS_BY_COHORT } from "../Mutations/teamMutation"
import { GET_USER_COHORTS } from "../Mutations/cohortMutations"

type AddRatingsByFileFormData = {
    cohortId: string,
    sprint: string,
    file: File | null,
}

const BulkRatingModal = ({ setBulkRateModal }: {setBulkRateModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { t } = useTranslation()
    const [formData, setFormData] = useState<AddRatingsByFileFormData>({
        cohortId: '',
        sprint: '',
        file: null
    })

    const [getUserCohorts, { data: cohorts, loading: loadingCohorts, error: cohortsError }] = useLazyQuery(GET_USER_COHORTS,{
        variables: {
            orgToken: localStorage.getItem('orgToken')
        },
        fetchPolicy: 'network-only'
    })
    const [getRatingsByCohort, { data: ratings, loading: loadingRatings, error: ratingsError }] = useLazyQuery(GET_RATINGS_BY_COHORT, {
        fetchPolicy: 'network-only',
    })
    const [getTeamsByCohort, {data: teams, loading: loadingTeams, error: teamsError}] = useLazyQuery(GET_TEAMS_BY_COHORT, {
        fetchPolicy: 'network-only',
    })
    const [addRatingsByFile, { data: bulkRatings, loading: loadingBulkRatings, error: bulkRatingsError }] = useMutation(ADD_RATINGS_BY_FILE)
    
    const [selectedTeam, setSelectedTeam] = useState<string>('')
    const fileUploadRef = useRef<HTMLInputElement>(null)

    const saveRatings = async (e: React.FormEvent) => {
        try {
            e.preventDefault()
            if(!formData.cohortId) throw new Error("Please select a cohort")
            if(!formData.sprint) throw new Error("Please select a sprint")
            if(!formData.file) throw new Error("Please select a file")
            await addRatingsByFile({
                variables: {
                    file: formData.file,
                    cohortId: formData.cohortId,
                    sprint: parseInt(formData.sprint, 10),
                    orgToken: localStorage.getItem('orgToken')
                },
            })
            await getRatingsByCohort({
                variables: {
                    cohortId: formData.cohortId,
                    orgToken: localStorage.getItem('orgToken')
                }
            })
            toast.success("Rating completed successfully")
            if(fileUploadRef.current){
                fileUploadRef.current.value = ''
                setFormData({...formData, file: null})
            }
        } catch (err: any) {
            toast.error(err?.message)
            if(fileUploadRef.current){
                fileUploadRef.current.value = ''
                setFormData({...formData, file: null})
            }
        }
    }

    const downloadTeamFile = async(e: any)=>{
        try{
            if(selectedTeam === '') throw new Error("No Team was selected")
            const team = teams.getTeamsByCohort.find((team:any)=>team.id === selectedTeam)
            const rows: any = []
            team.members.forEach((member: any) => {
                if (member.role === "trainee") {
                    rows.push({
                        email: member.email,
                        quantity: '',
                        quality: '',
                        professional_skills: '',
                        feedBacks: ''
                    })
                }
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

    const selectCohort= async(e: React.ChangeEvent<HTMLSelectElement>)=>{
        try{
            setFormData({...formData, cohortId: e.target.value })
            await getRatingsByCohort({
                variables: {
                    cohortId: e.target.value,
                    orgToken: localStorage.getItem('orgToken')
                }
            })
            await getTeamsByCohort({
                variables: {
                    cohortId: e.target.value,
                    orgToken: localStorage.getItem('orgToken')
                }
            })
        }catch(err: any){
            toast.error(err?.message)
        }
    }

    useEffect(() => {
        getUserCohorts()
        getRatingsByCohort()
    }, [])

    return (
        <div className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center px-4`}>
            <div className="w-full p-4 pb-8 bg-indigo-100 rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
                <div className="flex flex-wrap items-center justify-center w-full card-title">
                    <h3 className="w-11/12 text-sm font-bold text-center dark:text-white">
                        {t('Bulk Rating')}
                    </h3>
                    <hr className="w-full my-3 border-b bg-primary" />
                </div>
                <div>
                    <form data-testid="bulk-rating-form" className="flex flex-col gap-2" onSubmit={saveRatings}>
                        <div className="flex flex-col">
                            <label>Choose a cohort</label>
                            <select data-testid="select-cohort" className="p-2 my-2 text-sm text-black dark:text-white rounded-lg bg-white dark:bg-dark border-2 border-primary"
                            onChange={selectCohort}
                            >
                                <option value={""}>Choose a cohort</option>
                                {
                                    cohorts && cohorts.getUserCohorts.length ?
                                    cohorts.getUserCohorts.map((cohort: any)=>
                                    <option data-testid={`cohort-option-${cohort.id}`} key={cohort.id} value={cohort.id}>{cohort.name}</option>)
                                    : ''
                                }
                                {
                                    loadingCohorts ?
                                    <option data-testid="cohort-loading-option">loading ...</option>
                                    : ''
                                }
                                {
                                    cohortsError ?
                                    <option data-testid="cohort-error-option">No cohorts found</option>
                                    : ''
                                }
                            </select>
                            <label>Choose a sprint</label>
                            <select data-testid="select-sprint" className="p-2 my-2 text-sm text-black dark:text-white rounded-lg bg-white dark:bg-dark border-2 border-primary"
                                onChange={(e) => {
                                    e.preventDefault()
                                    setFormData({ ...formData, sprint: e.target.value })
                                }}
                            >
                                <option value={""}>Choose a sprint</option>
                                {
                                    ratings && !ratings.getRatingsByCohort.length ?
                                        <option data-testid="sprint-default-option" value={1}>Sprint 1</option>
                                        : ''
                                }
                                {
                                    ratings && ratings.getRatingsByCohort.length ?
                                        [...ratings.getRatingsByCohort].map((rating: any) =>
                                            <option data-testid={`sprint-option-${rating.id}`} key={rating.id} value={rating.sprint}>Sprint {rating.sprint}</option>
                                        )
                                        : ''
                                }
                                {
                                    ratings && ratings.getRatingsByCohort.length ?
                                        <option data-testid="sprint-new-option" value={[...ratings.getRatingsByCohort].pop().sprint+1}>Sprint {[...ratings.getRatingsByCohort].pop().sprint+1}</option>
                                        : ''
                                }
                                {
                                    loadingRatings ?
                                        <option data-testid="sprint-loading-option">Loading...</option>
                                        : ''
                                }
                                {
                                    ratingsError ?
                                        <option data-testid="sprint-error-option">No sprints found...</option>
                                        : ''
                                }
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Upload a rating file (.xlsx or .xlx):</label>
                            <input
                                data-testid="file-input"
                                className="w-full bg-gray-600 rounded-md"
                                type="file"
                                ref={fileUploadRef}
                                onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    setFormData({ ...formData, file: file ? file : null })
                                }}
                                accept=".xlsx, .xls"
                            >
                            </input>
                        <div>
                            {
                                bulkRatings && bulkRatings.addRatingsByFile.RejectedRatings.length > 0 ?
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
                                                {bulkRatings.addRatingsByFile?.RejectedRatings.map((rating: any, index: number) =>
                                                    <tr key={`${Math.random() * Date.now()}`} className="text-red-400">
                                                        <td className="text-left py-1 px-2">{rating.email ? rating.email : "No Value"}</td>
                                                        <td className="text-left py-1 px-2">{rating.quantity !== null ? rating.quantity : "No Value"}</td>
                                                        <td className="text-left py-1 px-2">{rating.quality !== null ? rating.quality : "No Value"}</td>
                                                        <td className="text-left py-1 px-2">{rating.professional_skills !== null ? rating.professional_skills : "No Value"}</td>
                                                        <td className="text-left py-1 px-2">{rating.feedBacks ? rating.feedBacks : "No Value"}</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    : ''
                            }
                        </div>
                        <div className="flex justify-between w-full my-2">
                            <button className="w-[40%] md:w-1/4 p-3 text-white rounded-lg bg-primary text-sm font-serif font-semibold" type="button" onClick={()=> setBulkRateModal(false)}>
                                Cancel
                            </button>
                            <button className="w-[40%] md:w-1/4 p-3 text-white rounded-lg bg-primary text-sm font-serif font-semibold" type="submit">
                                Save
                            </button>
                        </div>
                            {
                                teams ?
                                    <>
                                        <hr className="mt-5 border-b" />
                                        <div className="flex flex-col gap-3 p-3 rounded-md text-sm bg-neutral-700">
                                            <p className="">Would you like to download a team template .xlsx file for easier rating?</p>
                                            <div className="flex gap-2">
                                                <select data-testid="select-team" className="p-1 text-sm text-black dark:text-white rounded-lg bg-white dark:bg-dark border-2 border-primary" defaultValue={""} onChange={(e) => setSelectedTeam(e.target.value)}>
                                                    <option data-testid="team-default-option">Choose a team</option>
                                                    {
                                                        teams.getTeamsByCohort.length > 0 ?
                                                            teams.getTeamsByCohort.map((team: any) => <option data-testid={`team-option-${team.id}`} key={team.id} value={team.id}>{team.name}</option>)
                                                            : <option data-testid="team-empty-option" value="">No teams found...</option>
                                                    }
                                                </select>
                                                <button data-testid="download-button" type="button" onClick={downloadTeamFile} className="py-1 px-2 text-white rounded-lg bg-green-700 text-sm font-serif font-semibold">Download</button>
                                            </div>
                                        </div>
                                    </>
                                : ''
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BulkRatingModal