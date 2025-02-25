import { useCallback, useState } from 'react';
import { GetAllRecords } from '../lib/record';
import { Record } from '../domain/record';

export const useAllStudy = () => {
  const [loading, setLoading] = useState(false);
  const [studies, setStudy] = useState<Array<Record>>([]);

  const getStudy = useCallback(() => {
    setLoading(true);
    const getAllRecords = async () => {
      const RecordsData = await GetAllRecords();
      console.log(RecordsData);
      setStudy(RecordsData);
      setLoading(false);
    };
    getAllRecords();
  }, []);

  return {
    getStudy,
    loading,
    studies,
  };
};
