import { Record } from '../domain/record';
import { supabase } from '../utils/supabase';

// 全件表示
export async function GetAllRecords(): Promise<Record[]> {
  const RecordsData = await supabase.from('study-record').select('*');
  if (RecordsData.error) {
    throw new Error(RecordsData.error.message);
  }

  const Data = RecordsData.data.map((record) => {
    return Record.newRecord(
      record.id,
      record.learn_title,
      record.learn_time,
      record.created_at,
      record.updated_at
    );
  });

  return Data;
}

// 登録
export async function InsertRecord(
  title: string,
  time: number
): Promise<Record[]> {
  const { data, error } = await supabase
    .from('study-record')
    .insert([{ learn_title: title, learn_time: time }])
    .select();

  if (error) {
    console.error('supabaseのinsert失敗', error);
    throw error;
  }

  return data;
}

// 削除
export async function DeleteRecord(id: string) {
  const res = await supabase.from('study-record').delete().eq('id', id);
  console.log(res);
}

// 更新
export async function UpdateRecord(
  id: string,
  title: string,
  time: number
): Promise<Record[]> {
  const { data, error } = await supabase
    .from('study-record')
    .update({ learn_title: title, learn_time: time })
    .eq('id', id)
    .select();

  if (error) {
    console.error('supbaseのupdate失敗', error);
    throw error;
  }

  console.log(`更新：${data}`);

  return data;
}
