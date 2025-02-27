import { Record, formatDate } from '../domain/record';

// 日付のテスト
describe('formatDate', () => {
  beforeAll(() => {
    // テスト実行時のタイムゾーンを明示的に設定
    process.env.TZ = 'Asia/Tokyo';
  });

  it('should format date correctly', () => {
    const testDate = '2024-12-14 22:36:56';
    const formattedDate = formatDate(testDate);

    // 日本時間での期待値に修正
    expect(formattedDate).toBe('2024/12/14 22:36:56');
  });

  it('should handle invalid date string', () => {
    const dateStr = 'invalid-date';
    const formattedDate = Record.newRecord(
      '1',
      'テスト',
      1,
      dateStr,
      dateStr
    ).created_at;

    expect(formattedDate).toBe('Invalid Date');
  });
});
