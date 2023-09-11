import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useMemo,
} from 'react';

interface Props {
  children: ReactNode;
}

export const TraineesContext = createContext<any>([]);

export function useTraineesContext() {
  return useContext(TraineesContext);
}

export function TraineesProvider({ children }: Props) {
  const [traineeData, setTraineeData] = useState<any>([]);

  const setAllTrainees = (traineeData: Array<any>) => {
    setTraineeData(traineeData);
  };
  const value = useMemo(
    () => ({
      traineeData,
      setAllTrainees,
    }),
    [traineeData],
  );

  return (
    <TraineesContext.Provider value={value}>
      {children}
    </TraineesContext.Provider>
  );
}
