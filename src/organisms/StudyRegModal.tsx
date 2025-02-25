import { FormControl, FormLabel } from '@chakra-ui/form-control';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Button, Input, Stack } from '@chakra-ui/react';
import { InsertRecord } from '../lib/record';
import { AddIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import { FC, memo, useState } from 'react';
import { Record } from '../domain/record';
import { convertFullWidthToHalfWidth } from '../utils/format';

type Props = {
  open: boolean;
  onClose: () => void;
  onInsert: () => void;
};

type FormValues = {
  studyContext: string;
  studyTime: number;
};

export const StudyRegModal: FC<Props> = memo((props) => {
  const { open, onClose, onInsert } = props;
  const [error, setError] = useState<string>('');
  const [records, setRecords] = useState<Record[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm<FormValues>();

  // 登録
  const onClickRecordAdd = async (data: FormValues) => {
    try {
      // insert用関数
      const AddRecord = await InsertRecord(data.studyContext, data.studyTime);
      console.log(`AddRecord = ${AddRecord}`);
      if (AddRecord) {
        setRecords((prev) => [...prev, AddRecord[0]]);
        console.log(records);
      }
      onInsert();
      // モーダルのテキストボックスをクリア
      reset({ studyContext: '', studyTime: 0 });
      // 追加が成功した場合、モーダルを閉じる
      onClose();
    } catch (e) {
      console.error('データの登録に失敗', error);
      setError('データの登録に失敗しました');
    }
  };

  // 閉じる
  const onClickClose = () => {
    resetField('studyContext');
    resetField('studyTime');
    return true;
  };

  // 画面表示
  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <form onSubmit={handleSubmit(onClickRecordAdd)}>
        <ModalOverlay />
        <ModalContent bg="white" pb={6}>
          <ModalHeader
            borderBottom="1px"
            borderColor="gray.200"
            bg="blue.600"
            color="white" // ヘッダーテキストを白に
          >
            学習記録登録
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={12} mt={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>学習内容</FormLabel>
                <Input
                  placeholder="学習内容を入力してください"
                  {...register('studyContext', {
                    required: '内容の入力は必須です',
                    validate: {
                      notOnlyWhitespace: (value) =>
                        value.trim().length > 0 || '空白のみの入力はできません',
                    },
                  })}
                />
                <p>{errors.studyContext?.message}</p>
              </FormControl>
              <FormControl>
                <FormLabel>学習時間</FormLabel>
                <Input
                  type="text"
                  placeholder="0"
                  {...register('studyTime', {
                    required: '学習時間を入力してください',
                    validate: {
                      isValidNumber: (value) => {
                        const converted = convertFullWidthToHalfWidth(
                          value.toString()
                        );
                        const num = Number(converted);
                        if (isNaN(num)) return '数値を入力してください';
                        if (num <= 0) return '0以上で入力してください';
                        return true;
                      },
                    },
                    onChange: (e) => {
                      const converted = convertFullWidthToHalfWidth(
                        e.target.value
                      );
                      e.target.value = converted;
                    },
                  })}
                />
                <p>{errors.studyTime?.message}</p>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter gap={3}>
            <Button
              type="submit"
              colorScheme="blue"
              leftIcon={<AddIcon />}
              _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
            >
              登録
            </Button>
            <Button
              type="button"
              onClick={() => onClickClose() && onClose()}
              variant="ghost"
              colorScheme="gray"
            >
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
});
