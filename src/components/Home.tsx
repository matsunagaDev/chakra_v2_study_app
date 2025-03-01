import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/table';
import { DeleteRecord } from '../lib/record';
import {
  Button,
  useDisclosure,
  Box,
  Container,
  Flex,
  VStack,
  IconButton,
  Text,
  Heading,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { StudyDetailModal } from '../organisms/StudyDetailModal';
import { StudyRegModal } from '../organisms/StudyRegModal';
import { useCallback, useEffect, useState } from 'react';
import { useAllStudy } from '../hooks/useAllStudy';
import { useSelectStudy } from '../hooks/useSelectStudy';
import { AddIcon } from '@chakra-ui/icons';

export const Home = () => {
  // ページネーション関連の状態
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [pageInputValue, setPageInputValue] = useState(currentPage.toString());

  // モーダル関連のフック
  const {
    isOpen: RegModalOpen,
    onOpen: onRegModalOpen,
    onClose: onRegModalClose,
  } = useDisclosure();
  const {
    isOpen: DetailModalOpen,
    onOpen: onDetailModalOpen,
    onClose: onDetailModalClose,
  } = useDisclosure();

  // カスタムフック
  const { getStudy, studies, loading, setStudyDirectly } = useAllStudy();
  const { onSelectStudy, selectedStudy } = useSelectStudy();

  // 1ページ目に戻す関数
  const resetToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  // 詳細表示ハンドラ
  const onClickStudy = useCallback(
    (id: string) => {
      onSelectStudy({ id, studies, onDetailModalOpen });
    },
    [studies, onSelectStudy, onDetailModalOpen]
  );

  // レコード削除ハンドラ
  const onClickDelete = async (id: string) => {
    try {
      // 楽観的UI更新（削除前にUIを先に更新）
      const filteredStudies = studies.filter((study) => study.id !== id);

      // 現在ページの最後のアイテムを削除する場合、前のページに移動
      const currentItemsAfterDeletion = currentItems.filter(
        (item) => item.id !== id
      );
      if (currentItemsAfterDeletion.length === 0 && currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      }

      // UI状態の即時更新
      setStudyDirectly(filteredStudies);

      // バックグラウンドで削除処理
      await DeleteRecord(id);
    } catch (error) {
      console.error('削除に失敗しました', error);
      await getStudy(); // エラー時はデータを再取得
    }
  };

  // 更新ハンドラ
  const handleUpdate = async () => {
    await getStudy();
  };

  // 新規登録ハンドラ
  const handleInsert = async () => {
    await getStudy();
    resetToFirstPage(); // 新規登録後は1ページ目に戻す
  };

  // 初回レンダリング時にデータ取得
  useEffect(() => {
    getStudy();
  }, []);

  // ページネーション用のデータ計算
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = studies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(studies.length / itemsPerPage);

  // ページ変更ハンドラ
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 前ページへ移動
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // 次ページへ移動
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // ページ入力値の変更ハンドラ
  const handlePageInputChange = (
    valueAsString: string,
    valueAsNumber: number
  ) => {
    setPageInputValue(valueAsString);
  };

  // Enterキー押下時のページ移動ハンドラ
  const handlePageInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const pageNum = parseInt(pageInputValue, 10);
      if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
        setCurrentPage(pageNum);
      } else {
        setPageInputValue(currentPage.toString()); // 不正値はリセット
      }
    }
  };

  // ページ変更時に入力欄の値も更新
  useEffect(() => {
    setPageInputValue(currentPage.toString());
  }, [currentPage]);

  // ローディング中の表示
  if (loading) {
    return <p>Loading.....</p>;
  }

  return (
    <Container maxW="container.xl" py={8}>
      {/* ヘッダー部分 */}
      <VStack spacing={6} align="center" w="full">
        <Flex w="full" justify="space-between" align="center" mb={6}>
          <Heading>学習記録アプリ</Heading>
          <Button
            colorScheme="blue"
            color="white"
            leftIcon={<AddIcon />}
            onClick={onRegModalOpen}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            新規登録
          </Button>
        </Flex>

        {/* テーブル部分 */}
        <Box w="full" display="flex" justifyContent="center">
          <TableContainer
            width="100%"
            display="flex"
            justifyContent="center"
            maxW="1600px"
          >
            <Table
              size="lg"
              variant="simple"
              sx={{
                width: '100%',
                th: {
                  backgroundColor: 'orange.100',
                },
              }}
            >
              <Thead>
                <Tr>
                  <Th textAlign="center" px={8} py={6}>
                    学習内容
                  </Th>
                  <Th textAlign="center" px={8} py={6}>
                    学習時間
                  </Th>
                  <Th textAlign="center" px={8} py={6} whiteSpace="nowrap">
                    投稿時間
                  </Th>
                  <Th textAlign="center" px={8} py={6} whiteSpace="nowrap">
                    更新時間
                  </Th>
                  <Th textAlign="center" px={8} py={6}></Th>
                  <Th textAlign="center" px={8} py={6}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* レコード一覧 */}
                {currentItems.map((study) => (
                  <Tr key={study.id} _hover={{ bg: 'gray.50' }}>
                    <Td textAlign="center" px={8} py={4}>
                      {study.learn_title}
                    </Td>
                    <Td textAlign="center" px={8} py={4}>
                      {study.learn_time}
                    </Td>
                    <Td
                      textAlign="center"
                      px={8}
                      py={4}
                      whiteSpace="nowrap"
                      fontSize="sm"
                    >
                      {study.created_at}
                    </Td>
                    <Td
                      textAlign="center"
                      px={8}
                      py={4}
                      whiteSpace="nowrap"
                      fontSize="sm"
                    >
                      {study.updated_at}
                    </Td>
                    <Td textAlign="center" px={8} py={4}>
                      <Button
                        size="sm"
                        colorScheme="teal"
                        onClick={() => onClickStudy(study.id)}
                      >
                        編集
                      </Button>
                    </Td>
                    <Td textAlign="center" px={8} py={4}>
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={() => onClickDelete(study.id)}
                      >
                        削除
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </VStack>

      {/* ページネーション */}
      {totalPages > 1 && (
        <Flex mt={6} justify="center" align="center" gap={2}>
          {/* 前ページボタン */}
          <IconButton
            aria-label="前のページ"
            icon={<ChevronLeftIcon />}
            onClick={handlePrevPage}
            isDisabled={currentPage === 1}
            size="sm"
            variant="ghost"
            colorScheme="teal"
          />

          {/* ページ番号ボタン */}
          {Array.from({ length: totalPages }, (_, i) => {
            const pageNum = i + 1;
            const isCurrentPage = pageNum === currentPage;

            if (
              pageNum === 1 ||
              pageNum === totalPages ||
              Math.abs(currentPage - pageNum) <= 2
            ) {
              return (
                <Button
                  key={pageNum}
                  size="sm"
                  variant={isCurrentPage ? 'solid' : 'ghost'}
                  colorScheme="teal"
                  onClick={() => handlePageChange(pageNum)}
                  fontWeight={isCurrentPage ? 'bold' : 'normal'}
                  mx={1}
                >
                  {pageNum}
                </Button>
              );
            } else if (
              pageNum === currentPage - 3 ||
              pageNum === currentPage + 3
            ) {
              return (
                <Text key={pageNum} mx={1}>
                  ...
                </Text>
              );
            }
            return null;
          })}

          {/* ページ直接入力 */}
          <NumberInput
            min={1}
            max={totalPages}
            value={pageInputValue}
            onChange={handlePageInputChange}
            size="sm"
            w="70px"
            ml={2}
            keepWithinRange={true}
            clampValueOnBlur={true}
          >
            <NumberInputField
              textAlign="center"
              borderColor="teal.200"
              _hover={{ borderColor: 'teal.300' }}
              onKeyDown={handlePageInputKeyDown}
            />
          </NumberInput>
          <Text fontSize="sm" color="gray.600" ml={1}>
            / {totalPages}
          </Text>

          {/* 次ページボタン */}
          <IconButton
            aria-label="次のページ"
            icon={<ChevronRightIcon />}
            onClick={handleNextPage}
            isDisabled={currentPage === totalPages}
            size="sm"
            variant="ghost"
            colorScheme="teal"
          />
        </Flex>
      )}

      {/* モーダル */}
      <StudyRegModal
        open={RegModalOpen}
        onClose={onRegModalClose}
        onInsert={handleInsert}
      />

      <StudyDetailModal
        study={selectedStudy}
        open={DetailModalOpen}
        onClose={onDetailModalClose}
        onUpdate={handleUpdate}
      />
    </Container>
  );
};
