import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Buttons';
import DataTable from '../../components/DataTable';
import useDocumentTitle from '../../hook/useDocumentTitle';

const initialCoordinators = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];

export default function CoordinatorsPage() {
  const [coordinators, setCoordinators] = useState(initialCoordinators);
  const { t } = useTranslation();

  const handleAddCoordinator = () => {
    // Handle adding a new coordinator
    const newCoordinator = { id: coordinators.length + 1, name: '', email: '' };
    setCoordinators([...coordinators, newCoordinator]);
  };

  const columns = [
    { Header: t('name'), accessor: 'name' },
    { Header: t('email'), accessor: 'email' },
  ];

  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden">
      <div className="flex items-left px-7 lg:px-60 pt-24 pb-8">
        <div className="space-x-8 lg:ml-10">
          <Button variant="primary" size="lg" onClick={handleAddCoordinator}>
            {t('Add Coordinator')}
          </Button>
        </div>
      </div>
      <div className="px-3 m d:px-8 w-screen overflow-x-auto">
        <DataTable
          columns={columns}
          data={[coordinators]} 
          title={t('Coordinators List')}
        />
      </div>
    </div>
  );
}
