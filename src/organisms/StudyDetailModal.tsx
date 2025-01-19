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
import { Record } from '../domain/record';
import { UpdateRecord } from '../lib/record';
import { useForm } from 'react-hook-form';

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
        <ModalContent backgroundColor="orange" pb={6}>
          <ModalHeader>学習記録編集</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={12}>
            <Stack borderSpacing={4}>
              <FormControl>
                <FormLabel>学習内容</FormLabel>
                <Input
                  {...register('learn_title', {
                    required: '学習内容を入力してください',
                  })}
                />
                <p style={{ color: 'red' }}>{errors.learn_title?.message}</p>
              </FormControl>
              <FormControl>
                <FormLabel>学習時間</FormLabel>
                <Input
                  type="number"
                  {...register('learn_time', {
                    required: '学習時間を入力してください',
                    min: {
                      value: 1,
                      message: '学習時間は0以上である必要があります',
                    },
                  })}
                />
                <p style={{ color: 'red' }}>{errors.learn_time?.message}</p>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">更新</Button>
            <Button type="button" onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
});
