import { useCallback, useState } from 'react';
import { GetAllRecords } from '../lib/record';
import { Record } from '../domain/record';

export const useAllStudy = () => {
  const [loading, setLoading] = useState(false);
  const [studies, setStudy] = useState<Array<Record>>([]);

  // データを直接設定する関数を追加
  const setStudyDirectly = useCallback((newStudies: Array<Record>) => {
    setStudy(newStudies);
  }, []);

  const getStudy = useCallback(() => {
    setLoading(true);
    // const getAllRecords = async () => {
    //   const RecordsData = await GetAllRecords();
    //   console.log(`登録後のレコード一覧：${RecordsData}`);
    //   setStudy(RecordsData);
    //   setLoading(false);
    // };
    const getAllRecords = async () => {
      try {
        const RecordsData = await GetAllRecords();
        setStudy(RecordsData);
      } catch (error) {
        console.error('Failed to fetch records:', error);
      } finally {
        setLoading(false);
      }
    };
    getAllRecords();
  }, []);

  return {
    getStudy,
    loading,
    studies,
    setStudyDirectly,
  };
};
