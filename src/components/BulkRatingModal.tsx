import { useLazyQuery, useMutation } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { ADD_RATINGS_BY_FILE, FETCH_SPRINTS } from "../Mutations/Ratings"
import { toast } from "react-toastify"

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
    const [fetchSprints, {data: sprints, loading: loadingSprints, error: sprintsError}] = useLazyQuery(FETCH_SPRINTS,{
        variables:{
            orgToken
        },
        fetchPolicy: 'network-only'
    })
    const [addRatingsByFile,{data: ratings, loading: loadingRatings, error: ratingsError}] = useMutation(ADD_RATINGS_BY_FILE)
    const [formData, setFormData] = useState<AddRatingsByFileFormData>({
        sprint: '',
        file: null
    })

    const saveRatings=async(e: React.FormEvent)=>{
        try{
            e.preventDefault()
            await addRatingsByFile({
                variables: {
                    file:formData.file,
                    sprint:parseInt(formData.sprint),
                    orgToken
                },
            })
            console.log(ratings)
            toast.success("Rating completed susccefully")
        }catch(err: any){
            toast.error(err?.message)
        }
    }

    useEffect(()=>{
        fetchSprints()
    },[])

    return (
        <div className={`${bulkRateModal? "block" : "hidden"} h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center px-4`}>
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
                        onChange={(e)=>{
                            e.preventDefault()
                            setFormData({...formData, sprint: e.target.value})
                        }}
                        >
                            {
                                sprints?
                                [...sprints.fetchSprints, sprints.fetchSprints[sprints.fetchSprints.length-1]+1].map((sprint: number)=>(<option key={sprint} value={sprint}>Sprint {sprint}</option>))
                                :<option>loading...</option>
                            }
                        </select>
                        </div>

                        <input 
                        className=""
                        type="file"
                        onChange={(e)=>{
                            const file = e.target.files?.[0]
                            setFormData({...formData, file: file ? file : null})
                        }}
                        >
                        </input>
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