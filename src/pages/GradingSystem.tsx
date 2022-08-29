/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useTranslation } from 'react-i18next';
import grade from '../dummyData/gradingSystem.json';
import Button from '../components/Buttons';

const GradingSystem = () => {
  const [addGradingSystemModel, setAddGradingSystemModel] = useState(false);
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  let fileteredData;
  const [formData, setFormData] = useState({
    label: '',
  });

  if (formData.label === 'gpa') {
    fileteredData = grade.filter((item: any) => item.label === formData.label);
  } else if (formData.label === 'letter') {
    fileteredData = grade.filter((item: any) => item.label === formData.label);
  } else if (formData.label === 'atlp') {
    fileteredData = grade.filter((item: any) => item.label === formData.label);
  }

  useEffect(() => {
    if (formData.label === 'gpa') {
      setTitle('Grade Point Average');
    }
    if (formData.label === 'letter') {
      setTitle('Letter Grading');
    }
    if (formData.label === 'atlp') {
      setTitle('ATLP Grading System');
    }
    if (formData.label === 'atlp') {
      setTitle('ATLP Grading System');
    }
    if (formData.label === 'custom') {
      setTitle('Custom Name');
      setAddGradingSystemModel(true);
    }
  }, [formData.label]);

  const removeModel = () => {
    let newState = !addGradingSystemModel;
    setAddGradingSystemModel(newState);
  };

  return (
    <>
      {/* =========================== Start::  GradingSystemModel =============================== */}
      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${
          addGradingSystemModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
              {t('Add Grading System')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="gpa"
                    className=" dark:bg-dark-tertiary border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                    placeholder={t('Label. eg:GPA')}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="definition"
                    className=" dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('Definition')}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="percentage"
                    className=" dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('Percentage')}
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="grade"
                    className=" dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('Grade')}
                  />
                </div>
              </div>

              <div className="w-full flex justify-between">
                <Button
                  data-testid="removeModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => removeModel()}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                >
                  {t('Save')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  GradingSystemModel =============================== */}
      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          <Sidebar toggle={handleClick} style="hidden lg:flex" />
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg  min-h-screen overflow-y-auto overflow-x-hidden">
                <div className="flex items-left px-7 lg:px-64 pt-24">
                  <div className="flex px-5 py-2 pb-8 w-fit">
                    <select
                      className="flex bg-primary rounded-md py-2 px-1 text-white font-medium cursor-pointer"
                      value={formData.label}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          label: event.target.value,
                        })
                      }
                    >
                      <option selected value="">
                        {' '}
                        ---Select---{' '}
                      </option>
                      <option value="gpa">
                        {' '}
                        {t('GradePointAverage')} (GPA){' '}
                      </option>
                      <option value="letter">
                        {' '}
                        {t('LetterGrading')} (A - F){' '}
                      </option>
                      <option value="atlp">
                        {' '}
                        {t('ATLPGradingSystem')} (0 - 2){' '}
                      </option>
                      <option value="custom"> {t('Custom')} </option>
                    </select>
                  </div>
                </div>
                <div className="px-3 md:px-8">
                  <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[80%] lg:ml-60 mb-10">
                    <div className=" flex items-center justify-between pb-6">
                      <div>
                        <h2 className="text-gray-800 dark:text-white font-semibold text-xl">
                          {title}
                        </h2>
                      </div>
                    </div>
                    <div>
                      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                          <table className="min-w-full leading-normal">
                            <thead className=" w-full px-32">
                              <tr>
                                <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary sm:text-center text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                                  {t('grade')}
                                </th>

                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary sm:text-center text-left text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell tracking-wider">
                                  {t('Gradedefition')}
                                </th>

                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary sm:text-center text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                                  {t('ApproximatePercentage')}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {fileteredData?.map((item: any, index: any) => {
                                let rowTheme =
                                  index % 2 !== 0
                                    ? 'bg-light-bg dark:bg-dark-tertiary'
                                    : 'bg-white dark:bg-dark-bg';
                                return (
                                  <tr className={`${rowTheme} `} key={index}>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <div className="flex sm:justify-center items-center">
                                        <div className="">
                                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                                            {item.grade}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <div className="flex sm:justify-center items-center">
                                        <div className="">
                                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                                            {item.definition}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <div className="flex sm:justify-center items-center">
                                        <div className="">
                                          <p className="text-gray-900 items-center dark:text-white whitespace-no-wrap">
                                            {item.percentage}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GradingSystem;
