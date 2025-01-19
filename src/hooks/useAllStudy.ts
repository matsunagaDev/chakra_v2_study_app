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

      // データを降順に並び替え
      const sortedRecords = RecordsData.sort((a, b) => {
        const dateA = new Date(a.updated_at || a.created_at).getTime();
        const dateB = new Date(b.updated_at || b.created_at).getTime();
        return dateB - dateA;
      });

      setStudy(sortedRecords);
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
