import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/table';
import {
  DeleteRecord,
  GetAllRecords,
  InsertRecord,
  UpdateRecord,
} from '../lib/record';
import { Button, useDisclosure } from '@chakra-ui/react';
import { StudyDetailModal } from '../organisms/StudyDetailModal';
import { StudyRegModal } from '../organisms/StudyRegModal';
import { useCallback, useEffect, useState } from 'react';
import { Record } from '../domain/record';
import { useAllStudy } from '../hooks/useAllStudy';
import { useSelectStudy } from '../hooks/useSelectStudy';
import { useForm } from 'react-hook-form';

// 入力の型設定
type FormValues = {
  studyContext: string;
  studyTime: number;
};

export const Home = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [study, setStudy] = useState<Record | undefined>(undefined);
  const {
    open: RegModalOpen,
    onOpen: onRegModalOpen,
    onClose: onRegModalClose,
  } = useDisclosure();
  const {
    open: DetailModalOpen,
    onOpen: onDetailModalOpen,
    onClose: onDetailModalClose,
  } = useDisclosure();
  const { getStudy, studies, loading } = useAllStudy();
  const { onSelectStudy, selectedStudy } = useSelectStudy();
  const {
    formState: { errors },
  } = useForm<FormValues>();

  const onClickStudy = useCallback(
    (id: string) => {
      onSelectStudy({ id, studies, onDetailModalOpen });
    },
    [studies, onSelectStudy, onDetailModalOpen]
  );

  // 削除
  const onClickDelete = async (id: string) => {
    await DeleteRecord(id);
    // 削除後のレコードを取得
    const updateAllRecord = await GetAllRecords();
    setRecords(updateAllRecord);
  };

  // 更新
  const handleUpdate = async () => {
    await getStudy();
  };

  // 登録
  const handleInsert = async () => {
    await getStudy();
  };

  // 一覧表示
  useEffect(() => {
    getStudy();
  }, []);

  /**
   * 画面表示
   */
  if (loading) {
    return <p>Loading.....</p>;
  }

  return (
    <>
      <h1>学習記録アプリ</h1>
      <Button backgroundColor="pink" onClick={onRegModalOpen}>
        新規登録
      </Button>

      <StudyRegModal
        open={RegModalOpen}
        onClose={onRegModalClose}
        onInsert={handleInsert}
      />

      <TableContainer>
        <Table size="md" variant="striped" colorScheme="teal">
          <TableCaption>学習記録アプリ</TableCaption>
          <Thead>
            <Tr>
              <Th padding={10}>学習内容</Th>
              <Th padding={10}>学習時間</Th>
              <Th padding={10}>投稿時間</Th>
              <Th padding={10}>更新時間</Th>
              <Th padding={10}>編集</Th>
              <Th padding={10}>削除</Th>
            </Tr>
          </Thead>
          <Tbody>
            {studies.map((study) => (
              <Tr key={study.id}>
                <Td padding={10}>{study.learn_title}</Td>
                <Td padding={10} textAlign="end">
                  {study.learn_time}
                </Td>
                <Td padding={10} textAlign="end">
                  {study.created_at}
                </Td>
                <Td padding={10} textAlign="end">
                  {study.updated_at}
                </Td>
                <Td padding={10} textAlign="center">
                  <Button onClick={() => onClickStudy(study.id)}>編集</Button>
                </Td>
                <Td padding={10} textAlign="center">
                  <Button onClick={() => onClickDelete(study.id)}>削除</Button>
                </Td>
              </Tr>
            ))}

            <StudyDetailModal
              study={selectedStudy}
              open={DetailModalOpen}
              onClose={onDetailModalClose}
              onUpdate={handleUpdate}
            />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
