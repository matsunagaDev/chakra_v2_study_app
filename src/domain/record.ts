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
function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = (date.getHours() + 9).toLocaleString().padStart(2, '0');
  const minute = date.getMinutes().toLocaleString().padStart(2, '0');
  const second = date.getSeconds().toLocaleString().padStart(2, '0');
  return `${year}/${month}/${day} ${hour}:${minute}:${second} `;
}
