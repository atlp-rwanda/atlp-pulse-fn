/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CoordinatorDocs from './CoordinatorDocs';
import DataTable from '../DataTable';
import Modal from './DocModel';
import Button from '../Buttons';
import useDocumentTitle from '../../hook/useDocumentTitle';

function AdminDocs() {

  useDocumentTitle('How to Rate Trainees')
  const { t } = useTranslation();
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  

  const [page, setPage] = useState<string | null>("");

  const columns = [{ Header: t('Contents'), accessor: 'Contents' }];

  const handleRowClick = (content: string) => {
    setSelectedContent(content);
  };

  const closeModal = () => {
    setSelectedContent(null);
  };

  const coordinatorDocs = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Coordinator Documentation')}
    >
      {t('Coordinator Documentation')}
    </Button>
  );

  const permission = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('How to grant permissions')}
    >
      {t('How to grant permissions')}
    </Button>
  );

  const togglePage = (pageNumber: string) => {
    if (page === pageNumber) {
      setPage(null); 
    } else {
      setPage(pageNumber); 
    }
  };


  const contents = [
    permission

  ];

  const tableData = contents.map((content) => ({ Contents: content }));

  const page1 = (
    <>
     <div className="flex items-start ml-20 md:ml-72">
     <Button
     variant="primary"
     size="sm"
     style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
     onClick={() => togglePage('p1')}
   >
     {t('Coordinator Documentation')}
   </Button>
     </div>

   

   </>
 );

 const page2 = (
  <>
 <div className="flex items-start ml-20 md:ml-72" >  
 <Button
     variant="primary"
     size="sm"
     style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
     onClick={() => togglePage('p2')}
   >
     {t('How to grant permissions')}
   </Button>
 </div>

{page==="p2" && <div  >
       
       <div className="w-2/3 px-10 mb-10 ml-0 lg:ml-48">
              
               <div className="mt-5 ml-10">
               The "Granting Permissions" page  is a vital tool for administrators to manage user roles and access levels.
                As an admin, this page allows you to assign specific permissions to users, enabling them to perform their designated tasks effectively. <br /> 
               By following the straightforward steps outlined below,
                you can grant permissions to users and ensure that they have the appropriate access and privileges within the program. 
               This documentation provides a detailed guide on how to navigate the "Granting Permissions" page, 
               assign roles to users, and empower them with the necessary permissions to fulfill their responsibilities in the  program.
               </div>
             </div>
 
             <div className="mt-5 text-xl md:text-3xl bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[100%] lg:mx-auto mb-10">
               <DataTable data={tableData} columns={columns} title={t('')} />
               
 
 
             
             </div>
       </div>
 }
   

   </>
 );

 return (
  <div className="flex flex-col pl-10 grow bg-light-bg dark:bg-dark-frame-bg pt-28 text-light-text dark:text-dark-text-fill">
    <div className='h-4 '>
    {page1}
     
   {page==="p1" &&  <div >
   
   <CoordinatorDocs />

       </div>
 }


     {page2}
    </div>
  
   
{selectedContent && (
<Modal onClose={closeModal}>
  {selectedContent === 'How to grant permissions' && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
        <button className="absolute text-gray-500 top-2 right-2 hover:text-gray-800" onClick={closeModal}>
         close
        </button>

        <h2 className="mb-4 text-2xl font-bold">Details of how to grant permissions.</h2>
      <p>
        To grant permissions as an admin, you can follow a simple process. <br />
         Firstly, click on the "Roles & Access" link in the sidebar. 
         This will direct you to a dedicated page where you can manage user roles and permissions.
          On this page, you will find a table displaying a list of user emails, their assigned roles, and an "ACTION" column. <br /> <br />

      To grant permissions to a specific user, locate their email in the table and navigate to the corresponding row.
      In the "ACTION" column of that row, you will find an "Assign" button.
        Clicking on the "Assign" button will open a model or pop-up window, presenting you with  available roles that you can assign to the user. <br /> <br />

      From the  available roles, select the desired role that you want to assign to the user.
      Once you have selected the role, you can proceed by clicking the "Assign" button to grant the permissions associated with that role to the user.
        If, for any reason, you decide not to proceed with assigning the role, 
        you can simply click the "Cancel" button to close the model and return to the permissions management page.
        </p>     
             
      </div>
    </div>
  )}
  
</Modal>
)}

   
  </div>
);
}

export default AdminDocs;
