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
import { FC, memo, useEffect } from 'react';
import { EditIcon } from '@chakra-ui/icons';
import { Record } from '../domain/record';
import { UpdateRecord } from '../lib/record';
import { useForm } from 'react-hook-form';
import { convertFullWidthToHalfWidth } from '../utils/format';

type Props = {
  study: Record | undefined;
  open: boolean;
  onClose: () => void;
  onUpdate: () => void;
};

type FormValues = {
  learn_title: string;
  learn_time: number;
};

export const StudyDetailModal: FC<Props> = memo((props) => {
  const { study, open, onClose, onUpdate } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      learn_title: '',
      learn_time: 0,
    },
  });

  // studyまたはopenの値が変更されたときにフォームをリセット
  useEffect(() => {
    if (study && open) {
      reset({
        learn_title: study.learn_title,
        learn_time: study.learn_time,
      });
    }
  }, [study, open, reset]);

  const onClickUpdate = async (data: FormValues) => {
    if (!study) return;

    try {
      await UpdateRecord(study.id, data.learn_title, data.learn_time);
      onUpdate();
      onClose();
    } catch (error) {
      console.error('更新に失敗しました', error);
    }
  };

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <form onSubmit={handleSubmit(onClickUpdate)}>
        <ModalOverlay />
        <ModalContent bg="white" pb={6}>
          <ModalHeader
            borderBottom="1px"
            borderColor="gray.200"
            bg="teal.500"
            color="white" // ヘッダーテキストを白に
          >
            編集
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={12} mt={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>学習内容</FormLabel>
                <Input
                  {...register('learn_title', {
                    required: '学習内容を入力してください',
                    validate: {
                      notOnlyWhitespace: (value) =>
                        value.trim().length > 0 || '空白のみの入力はできません',
                    },
                  })}
                />
                <p style={{ color: 'red' }}>{errors.learn_title?.message}</p>
              </FormControl>
              <FormControl>
                <FormLabel>学習時間</FormLabel>
                <Input
                  type="text"
                  {...register('learn_time', {
                    required: '学習時間を入力してください',
                    validate: {
                      isNumber: (value) =>
                        !isNaN(Number(value)) || '数値を入力してください',
                      minValue: (value) =>
                        Number(value) > 0 || '0以上で入力してください',
                    },
                    onChange: (e) => {
                      const converted = convertFullWidthToHalfWidth(
                        e.target.value
                      );
                      e.target.value = converted;
                    },
                  })}
                />
                <p style={{ color: 'red' }}>{errors.learn_time?.message}</p>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter gap={3}>
            <Button
              type="submit"
              colorScheme="teal"
              leftIcon={<EditIcon />}
              _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
            >
              更新
            </Button>
            <Button
              type="button"
              onClick={onClose}
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
