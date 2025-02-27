export class Record {
  constructor(
    public id: string,
    public learn_title: string,
    public learn_time: number,
    public created_at: string,
    public updated_at: string
  ) {}

  public static newRecord(
    id: string,
    learn_title: string,
    learn_time: number,
    created_at: string,
    updated_at: string
  ): Record {
    return new Record(
      id,
      learn_title,
      learn_time,
      formatDate(created_at),
      formatDate(updated_at)
    );
  }
}

// 日時変換
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  // 無効な時間の場合エラーメッセージを表示
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  // 日本時間に変換
  date.setHours(date.getHours() + 9);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');
  return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
}
