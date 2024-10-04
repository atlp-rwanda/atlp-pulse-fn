export const ticketsColumns = [
  {
    Header: 'Subject',
    accessor: 'subject',
  },
  {
    Header: 'Message',
    accessor: 'message',
    Cell: ({ value }: any) => {
      const trimmedMessage =
        value.length > 100 ? `${value.substring(0, 100)}...` : value;
      return trimmedMessage;
    },
  },
  {
    Header: 'Created At',
    accessor: 'createdAt',
    Cell: ({ value }: any) => new Date(parseInt(value, 10)).toLocaleString(),
  },
  {
    Header: 'Assigner Email',
    accessor: 'user',
    Cell: ({ value }: any) => value?.email || 'N/A',
  },
  {
    Header: 'Assignee Email',
    accessor: 'assignee',
    Cell: ({ value }: any) => value?.email || 'N/A',
  },
  {
    Header: 'Team',
    accessor: 'assigneeTeam',
    Cell: ({ value }: any) => value?.team.name || 'N/A',
  },
];
