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
import { ChangeEvent, FC, memo, useEffect, useState } from 'react';
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
  const [learn_title, setLearnTitle] = useState('');
  const [learn_time, setLearnTime] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onChangeLearnTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setLearnTitle(e.target.value);
  };

  const onChangeLearnTime = (e: ChangeEvent<HTMLInputElement>) => {
    setLearnTime(parseInt(e.target.value));
  };

  const onClickUpdate = async (data: FormValues) => {
    if (!study) return;

    try {
      await UpdateRecord(study.id, data.learn_title, data.learn_time);
      console.log(`更新${UpdateRecord}`);

      onUpdate();
      // reset({ learn_title: '', learn_time: 0 });
      onClose();
    } catch (error) {
      console.error('更新に失敗しました', error);
    }
  };

  // 更新時は、第二引数に設定する
  useEffect(() => {
    if (study) {
      setLearnTitle(study?.learn_title ?? '');
      setLearnTime(study?.learn_time ?? 0);
    }
  }, [study]);

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
                  value={learn_title}
                  onChange={onChangeLearnTitle}
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
                  value={learn_time}
                  onChange={onChangeLearnTime}
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
