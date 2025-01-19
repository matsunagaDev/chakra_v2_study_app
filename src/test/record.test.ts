import { Record } from '../domain/record';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const dateStr = '2024-12-14T13:36:56Z';
    const formattedDate = Record.newRecord(
      '1',
      'テスト',
      1,
      dateStr,
      dateStr
    ).created_at;

    expect(formattedDate).toBe('2024/12/15 07:36:56');
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
