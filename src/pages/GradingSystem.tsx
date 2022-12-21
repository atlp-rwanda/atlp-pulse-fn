/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hook/useDocumentTitle';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import DataTable from '../components/DataTable';
import DeleteGradingsModal from '../containers/admin-dashBoard/DeleteGradingsModal';
import MakeDefaultModal from '../containers/admin-dashBoard/MakeDefaultModal';
import Button from '../components/Buttons';
import { useMutation, useQuery, useApolloClient } from '@apollo/client';
import DELETE_GRADING_SYSTEM from '../Mutations/DeleteGrading';
import GRADING_SYSTEM_QUERY from './GradingSystemQuery';
import MAKE_DEFAULT_GRADING_SYSTEM from '../Mutations/MakeDefault';
import GRADING_SYSTEM_MUTATION from './GradingSystemMutation';
const GradingSystem = () => {
const [addGradingSystemModel, setAddGradingSystemModel] = useState(false);
const [defaultGrade, setDefaultGrade] = useState('');
const {
register,
handleSubmit,
reset,
formState: { errors },
setError,
}: any = useForm();
const { data } = useQuery(GRADING_SYSTEM_QUERY, {variables: {orgToken: localStorage.getItem('orgToken')}});
const [CreateRatingSystem, { loading }] = useMutation(
GRADING_SYSTEM_MUTATION,
);
const [deleteGradingModal, setDeleteGradingModal] = useState(false);
const [removeMakeDefaultModal, setRemoveMakeDefaultModal] = useState(false);
useDocumentTitle('Cohorts');
const removeDeleteModel = () => {
/* istanbul ignore next */
const newState = !deleteGradingModal;
setDeleteGradingModal(newState);
};
const makeGradeDefaultModel = () => {
/* istanbul ignore next */
const newState = !removeMakeDefaultModal;
setRemoveMakeDefaultModal(newState);
};
const removeModel = () => {
let newState = !addGradingSystemModel;
setAddGradingSystemModel(newState);
};
const { t } = useTranslation();
const [title, setTitle] = useState('');
const [nav, setNav] = useState(false);
const [value, setValue] = useState<any>('');
const client = useApolloClient();
/* istanbul ignore next */
const onSubmit = async (userInput: any) => {
let filter = {
name: userInput.name,
grade: userInput.grade.split(','),
percentage: userInput.percentage.split(','),
description: userInput.description.split(','),
};
const { data }: any = await CreateRatingSystem({
variables: {
name: filter.name,
grade: filter.grade,
percentage: filter.percentage,
description: filter.description,
orgToken: localStorage.getItem('orgToken')
},
});
await client.refetchQueries({
include: [GRADING_SYSTEM_QUERY],
});
reset();
removeModel();
setValue('');
};
const handleClick = () => setNav(!nav);
useDocumentTitle('Grading System');
let dataValues: any = [];
!loading &&
data?.getRatingSystems &&
data?.getRatingSystems.forEach((rating: any) => {
for (let i = 0; i < rating.grade.length; i++) {
const ratingObj = {
id: rating.id,
name: rating.name,
grade: rating.grade[i],
definition: rating.description[i],
percentage: rating.percentage[i],
userId: rating.userId,
};
dataValues.push(ratingObj);
}
});
let fileteredData;
const [formData, setFormData] = useState({
label: '',
id: '',
});
const [deleteRatingSystem] = useMutation(DELETE_GRADING_SYSTEM, {
variables: {
deleteRatingSystemId: formData.id,
},
onCompleted: () => {
/* istanbul ignore next */
toast.success('grading system deleted');
setDeleteGradingModal(false);
},
onError() {
/* istanbul ignore next */
setDeleteGradingModal(false);
toast.error('Something went wrong!?!?');
},
refetchQueries: [{ query: GRADING_SYSTEM_QUERY }],
});
const [makeRatingdefault] = useMutation(MAKE_DEFAULT_GRADING_SYSTEM, {
variables: {
makeRatingdefaultId: defaultGrade,
},
onCompleted: () => {
/* istanbul ignore next */
toast.success('make a default grading ');
setRemoveMakeDefaultModal(false);
},
/* istanbul ignore next */
onError() {
toast.error('Something went wrong!?!?');
setRemoveMakeDefaultModal(false);
},
refetchQueries: [{ query: GRADING_SYSTEM_QUERY }],
});
if (!loading) {
fileteredData = dataValues.filter(
(item: any) => item.name === formData.label,
);
}
useEffect(() => {
if (formData.label === 'custom') {
/* istanbul ignore next */
setValue('');
setTitle('custom Name');
setAddGradingSystemModel(true);
} else {
setTitle(formData.label);
fileteredData = dataValues.filter(
(item: any) => item.name === formData.label,
);
if (fileteredData[0] != undefined) {
formData.id = fileteredData[0].id;
setFormData({ ...formData });
}
}
}, [formData.label, value]);
const GradingsColumn = [
{ Header: t('Names'), accessor: 'name' },
{
Header: t('action'),
accessor: 'id',
Cell: ({ row }: any) => (
<Button
variant="primary"
size="sm"
onClick={() => {
const ID = row?.cells[1].value;
setDefaultGrade(ID);
makeGradeDefaultModel();
}}
style="px-4 py-0 text-sm"
>
{t('Make default')}
</Button>
),
},
];
const gradingData =
data &&
data?.getRatingSystems.length &&
data?.getRatingSystems.map(({ name, id }: any) => ({
name,
id,
}));
return (
<>
{/* =========================== Start:: GradingSystemModel =============================== */}
<DeleteGradingsModal
deleteGradingModal={deleteGradingModal}
removeModel={removeDeleteModel}
/* istanbul ignore next */
deleteFunc={() => deleteRatingSystem()}
setValue={setValue}
/>
;
<MakeDefaultModal
removeModel={makeGradeDefaultModel}
makeDefaultModal={removeMakeDefaultModal}
makeDefaultFunc={() => makeRatingdefault()}
/>
<div
className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
addGradingSystemModel === true ? 'block' : 'hidden'
}`}
>
<div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 xl:w-4/12 rounded-lg p-4 pb-8">
<div className="card-title w-full flex flex-wrap justify-center items-center ">
<h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
{t('Add Grading System')}
</h3>
<hr className=" bg-primary border-b my-3 w-full" />
</div>
<div className="card-body">
<form onSubmit={handleSubmit(onSubmit)} className=" py-3 px-8">
<div className="input my-3 h-9 ">
<div className="grouped-input flex items-center h-full w-full rounded-md">
<input
type="text"
name="name"
{...register('name', { required: 'Grade is required' })}
className=" dark:bg-dark-tertiary border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
placeholder={t('Label. eg:Name of grading system')}
/>
</div>
</div>
<div className="text-left mb-1 pl-4">
{errors.name && (
<small className="text-red-600">{errors.name.message}</small>
)}
</div>
<div className="input my-3 h-9 ">
<div className="grouped-input flex items-center h-full w-full rounded-md">
<input
type="text"
name="percentage"
{...register('percentage')}
className=" dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
placeholder={t('Grading Ranges')}
/>
</div>
</div>
<div className="text-left mb-1 pl-4"></div>
<div className="input my-3 h-9 ">
<div className="grouped-input flex items-center h-full w-full rounded-md">
<input
type="text"
name="description"
{...register('description', {
required: 'Description is required',
})}
className=" dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
placeholder={t(' Grade description')}
/>
</div>
</div>
<div className="text-left mb-1 pl-4">
{errors.description && (
<small className="text-red-600">
{errors.description.message}
</small>
)}
</div>
<div className="input my-3 h-9 ">
<div className="grouped-input flex items-center h-full w-full rounded-md">
<input
type="text"
name="grade"
{...register('grade', { required: 'Grade is required' })}
className=" dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
placeholder={t('Grade')}
/>
</div>
</div>
<div className="text-left mb-1 pl-4">
{errors.grade && (
<small className="text-red-600">{errors.grade.message}</small>
)}
</div>
<div className="w-full flex justify-between">
<Button
data-testid="removeModel"
variant="info"
size="sm"
style="w-[30%] md:w-1/4 text-sm font-sans"
onClick={() => {
removeModel(), setValue('');
}}
>
{t('Cancel')}
</Button>
<Button
type="submit"
variant="primary"
size="sm"
style="w-[30%] md:w-1/4 text-sm font-sans"
onClick={() => {
toast.success('grading system created');
}}
>
{t('Save')}
</Button>
</div>
</form>
</div>
</div>
</div>
{/* =========================== End:: GradingSystemModel =============================== */}
<div className="flex flex-col h-screen">
<div className="flex flex-row">
<Sidebar toggle={handleClick} style="hidden lg:flex" />
<div className="w-full">
<div>
<div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden">
<div className="flex items-left px-7 lg:px-64 pt-24">
<div className="flex px-5 py-2 pb-8 w-fit">
<select
className="flex bg-primary rounded-md py-2 px-1 text-white font-medium cursor-pointer"
value={value}
onChange={(event) => {
/* istanbul ignore next */
setFormData({
...formData,
label: event.target.value,
});
setValue(event.target.value);
}}
>
<option selected value="">
{' '}
---Select Grading System---{' '}
</option>
{!loading &&
data !== undefined &&
data?.getRatingSystems?.map((item: any) => (
/* istanbul ignore next */
<option value={item.name}>
{' '}
<div>{item.name} </div>
</option>
))}
{/* <option value="custom"> {t('Custom')} </option> */}
</select>
<Button
variant="primary"
size="lg"
onClick={removeModel}
data-testid="removeModel"
>
{' '}
{t('Grading')} +
</Button>
</div>
</div>
{value === '' && (
<div className="px-3 md:px-8">
<h2 className="text-gray-800 dark:text-white font-semibold text-xl">
{t('Available gradings')}
</h2>
<div className="px-3 m d:px-8 w-screen overflow-x-auto">
<DataTable
columns={GradingsColumn}
data={gradingData ? (gradingData as [any]) : [{}]}
title={t('Gradings List')}
/>
</div>
</div>
)}
{value !== 'custom' && value !== '' ? (
<div className="px-3 md:px-8">
<div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[80%] lg:ml-60 mb-10">
<div className=" flex items-center justify-between pb-6">
<div className="flex items-center justify-between w-full">
<h2 className="text-gray-800 dark:text-white font-semibold text-xl">
{title}
</h2>
<Button
data-testid="removeModel"
variant="primary"
size="sm"
onClick={() => {
removeDeleteModel();
}}
>
{t('Delete')}
</Button>
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
<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary sm:text-center text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
{t('Approximate Range')}
</th>
<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary sm:text-center text-left text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell tracking-wider">
{t('Grade Description')}
</th>
</tr>
</thead>
<tbody>
{!loading &&
fileteredData.map((item: any, index: any) => {
let rowTheme =
index % 2 !== 0
? 'bg-light-bg dark:bg-dark-tertiary'
: 'bg-white dark:bg-dark-bg';
return (
<tr
className={`${rowTheme} `}
key={index}
>
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
<p className="text-gray-900 items-center dark:text-white whitespace-no-wrap">
{item.percentage}
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
) : (
<div />
)}
</div>
</div>
</div>
</div>
</div>
</>
);
};
export default GradingSystem;
