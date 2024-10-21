import React from "react"
import { useTranslation } from "react-i18next"

type BulkRatingModalProps = {
    bulkRateModal: boolean,
    setBulkRateModal: React.Dispatch<React.SetStateAction<boolean>>
}

const BulkRatingModal = ({ bulkRateModal, setBulkRateModal }: BulkRatingModalProps) => {
    const { t } = useTranslation()
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
                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                        <label>Choose a cohort</label>
                        <select className="p-2 text-black dark:text-white rounded-lg bg-white dark:bg-dark border-2 border-primary">
                            <option value={"Cohort 1"}>Cohort 1</option>
                        </select>
                        </div>
                        <div className="flex flex-col gap-1">
                        <label>Choose a sprint</label>
                        <select className="p-2 text-black dark:text-white rounded-lg bg-white dark:bg-dark border-2 border-primary">
                            <option value={"Cohort 1"}>Cohort 1</option>
                        </select>    
                        </div>

                        <input className="" type="file"></input>
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