import { useCallback, useState } from 'react';
import { Record } from '../domain/record';

type Props = {
  id: string;
  studies: Array<Record>;
  onDetailModalOpen: () => void;
};

export const useSelectStudy = () => {
  const [selectedStudy, setSelectedStudy] = useState<Record>();
  const onSelectStudy = useCallback((props: Props) => {
    const { id, studies, onDetailModalOpen } = props;
    const targetStudy = studies.find((study) => study.id === id);
    if (targetStudy) {
      setSelectedStudy(targetStudy);
    } else {
      console.error('学習内容が見つかりません');
    }
    onDetailModalOpen();
  }, []);
  return { onSelectStudy, selectedStudy };
};
