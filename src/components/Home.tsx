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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 1ページあたりの表示件数

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
  const { getStudy, studies, loading } = useAllStudy();
  const { onSelectStudy, selectedStudy } = useSelectStudy();

  const onClickStudy = useCallback(
    (id: string) => {
      onSelectStudy({ id, studies, onDetailModalOpen });
    },
    [studies, onSelectStudy, onDetailModalOpen]
  );

  const onClickDelete = async (id: string) => {
    console.log(`削除するid: ${id}です`);
    await DeleteRecord(id);
    await getStudy();
  };

  const handleUpdate = async () => {
    await getStudy();
  };

  const handleInsert = async () => {
    await getStudy();
  };

  useEffect(() => {
    getStudy();
  }, []);

  // ページネーション用のデータ加工を修正
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // スライスの終了インデックスを修正
  const currentItems = studies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(studies.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageInputChange = (
    valueAsString: string,
    valueAsNumber: number
  ) => {
    if (
      !isNaN(valueAsNumber) &&
      valueAsNumber >= 1 &&
      valueAsNumber <= totalPages
    ) {
      setCurrentPage(valueAsNumber);
    }
  };

  if (loading) {
    return <p>Loading.....</p>;
  }

  return (
    <Container maxW="container.xl" py={8}>
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
                  <Th textAlign="center" px={8} py={6}>
                    編集
                  </Th>
                  <Th textAlign="center" px={8} py={6}>
                    削除
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
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

      {/* ページネーションボタンは表示する必要がある場合のみ表示 */}
      {totalPages > 1 && (
        <Flex mt={6} justify="center" align="center" gap={2}>
          <IconButton
            aria-label="前のページ"
            icon={<ChevronLeftIcon />}
            onClick={handlePrevPage}
            isDisabled={currentPage === 1}
            size="sm"
            variant="ghost"
            colorScheme="teal"
          />

          {Array.from({ length: totalPages }, (_, i) => {
            const pageNum = i + 1;
            const isCurrentPage = pageNum === currentPage;

            // 現在のページの前後2ページまでと最初・最後のページを表示
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
              // ページ番号が飛ぶ場所に省略記号を表示
              return (
                <Text key={pageNum} mx={1}>
                  ...
                </Text>
              );
            }
            return null;
          })}

          <NumberInput
            min={1}
            max={totalPages}
            value={currentPage}
            onChange={handlePageInputChange}
            size="sm"
            w="70px"
            ml={2}
          >
            <NumberInputField
              textAlign="center"
              borderColor="teal.200"
              _hover={{ borderColor: 'teal.300' }}
            />
          </NumberInput>
          <Text fontSize="sm" color="gray.600" ml={1}>
            / {totalPages}
          </Text>

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
