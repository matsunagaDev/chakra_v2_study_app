import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { App } from '../App';
import * as recordLib from '../lib/record';
import { ChakraProvider } from '@chakra-ui/react';
import { Record } from '../domain/record';

/**
 * Appコンポーネントをレンダリングするヘルパー関数
 * ChakraProviderでラップしてスタイルを適用
 */
const renderApp = () => {
  return render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
};

/**
 * アプリケーションタイトル表示テスト
 * 学習記録アプリのタイトルが正しく表示されることを確認
 */
describe('title', () => {
  let getAllRecordsSpy: jest.SpyInstance;

  beforeEach(() => {
    // spyOnを使用してGetAllRecordsをモック - 空の配列を返す
    getAllRecordsSpy = jest
      .spyOn(recordLib, 'GetAllRecords')
      .mockResolvedValue([]);
  });

  afterEach(() => {
    // テスト後にスパイをリストア
    getAllRecordsSpy.mockRestore();
  });

  it('アプリケーションのタイトルが正しく表示される', async () => {
    renderApp();

    // Loading状態が終わるまで待機
    await waitFor(() => {
      expect(screen.queryByText('Loading.....')).not.toBeInTheDocument();
    });

    // タイトルの表示を確認
    const titleElement = screen.getByText('学習記録アプリ');
    expect(titleElement).toBeInTheDocument();
  });
});

/**
 * ローディング画面表示テスト
 * データ取得中にローディング表示が正しく行われることを確認
 */
describe('loading', () => {
  let getAllRecordsSpy: jest.SpyInstance;

  beforeEach(() => {
    // 遅延するPromiseを返すスパイを作成 - ローディング表示を確認するため
    getAllRecordsSpy = jest
      .spyOn(recordLib, 'GetAllRecords')
      .mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve([]), 100))
      );
  });

  afterEach(() => {
    getAllRecordsSpy.mockRestore();
  });

  it('データ取得中にローディング画面が表示される', async () => {
    renderApp();
    // ローディング表示を確認
    expect(screen.getByText('Loading.....')).toBeInTheDocument();
  });
});

/**
 * 学習記録一覧表示テスト
 * 取得したデータが一覧に正しく表示されることを確認
 */
describe('list', () => {
  let getAllRecordsSpy: jest.SpyInstance;

  beforeEach(() => {
    // モックデータを返すようにスパイを設定
    getAllRecordsSpy = jest
      .spyOn(recordLib, 'GetAllRecords')
      .mockResolvedValue([
        {
          id: '5f19ee01-c973-4dc3-b362-20e3be5cd455',
          learn_title: 'おはようございます',
          learn_time: 6,
          created_at: '2024-12-14 22:36:56',
          updated_at: '2024-12-14 22:36:56',
        },
      ]);
  });

  afterEach(() => {
    getAllRecordsSpy.mockRestore();
  });

  it('学習記録の一覧が正しく表示される', async () => {
    renderApp();

    // レコードが表示されるのを待つ
    const titleElement = await screen.findByText('おはようございます');
    const timeElement = await screen.findByText('6');

    // すべての要素が表示されていることを確認
    expect(titleElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
  });
});

/**
 * 新規登録ボタンテスト
 * 新規登録ボタンが表示されることを確認
 */
describe('registry_btn', () => {
  let getAllRecordsSpy: jest.SpyInstance;

  beforeEach(() => {
    getAllRecordsSpy = jest
      .spyOn(recordLib, 'GetAllRecords')
      .mockResolvedValue([]);
  });

  afterEach(() => {
    getAllRecordsSpy.mockRestore();
  });

  it('新規登録ボタンが画面に表示されている', async () => {
    renderApp();
    // 新規登録ボタンの存在確認
    const button = await screen.findByText('新規登録');
    expect(button).toBeInTheDocument();
  });
});

/**
 * 学習記録登録機能テスト
 * 学習記録の新規登録が正しく行われることを確認
 */
describe('registry', () => {
  let getAllRecordsSpy: jest.SpyInstance;
  let insertRecordSpy: jest.SpyInstance;

  beforeEach(() => {
    // 複数回呼び出されることを考慮したモック
    getAllRecordsSpy = jest
      .spyOn(recordLib, 'GetAllRecords')
      .mockResolvedValueOnce([]) // 初期表示
      .mockResolvedValueOnce([
        // 登録後の表示
        {
          id: '1',
          learn_title: 'テストの学習内容',
          learn_time: 500,
          created_at: '2024-01-01',
          updated_at: '2024-01-01 12:00:00', // updated_atを追加
        },
      ]);

    // InsertRecordのモックを設定
    insertRecordSpy = jest
      .spyOn(recordLib, 'InsertRecord')
      .mockImplementation((title, time) => {
        return Promise.resolve([
          {
            id: '1',
            learn_title: title,
            learn_time: Number(time),
            created_at: '2024-01-01',
            updated_at: '2024-01-01 12:00:00', // updated_atを追加
          },
        ]);
      });
  });

  afterEach(() => {
    getAllRecordsSpy.mockRestore();
    insertRecordSpy.mockRestore();
  });

  it('学習記録を新規登録して保存できる', async () => {
    const user = userEvent.setup();
    renderApp();

    // Loading終了を待機
    await waitFor(() => {
      expect(screen.queryByText('Loading.....')).not.toBeInTheDocument();
    });

    // 新規登録ボタンをクリック
    const newButton = await screen.findByRole('button', { name: '新規登録' });
    await user.click(newButton);

    // モーダルの表示を確認
    const studyInput = await screen.findByPlaceholderText(
      '学習内容を入力してください'
    );
    const timeInput = await screen.findByPlaceholderText('0');

    // フォームに入力
    await user.type(studyInput, 'テストの学習内容');
    await user.type(timeInput, '500');

    // 登録を実行
    const registerButton = await screen.findByRole('button', { name: '登録' });
    await user.click(registerButton);

    // 登録結果の確認
    const titleElement = await screen.findByText('テストの学習内容');
    const timeElement = await screen.findByText('500');
    expect(titleElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();

    // スパイが正しく呼び出されたことを確認
    expect(insertRecordSpy).toHaveBeenCalledTimes(1);
    expect(insertRecordSpy).toHaveBeenCalledWith('テストの学習内容', '500');
  });
});

/**
 * 登録モーダルのタイトル確認テスト
 * 登録モーダルが正しいタイトルで表示されることを確認
 */
describe('modal title check', () => {
  let getAllRecordsSpy: jest.SpyInstance;

  beforeEach(() => {
    getAllRecordsSpy = jest
      .spyOn(recordLib, 'GetAllRecords')
      .mockResolvedValue([]);
  });

  afterEach(() => {
    getAllRecordsSpy.mockRestore();
  });

  it('新規登録モーダルが正しいボタンを含んでいる', async () => {
    const user = userEvent.setup();
    renderApp();

    // 新規登録ボタンをクリック
    const newRegistryButton = await screen.findByRole('button', {
      name: '新規登録',
    });
    await user.click(newRegistryButton);

    // 登録ボタンの存在確認
    const registerButton = await screen.findByRole('button', { name: '登録' });
    expect(registerButton).toBeInTheDocument();
  });
});

/**
 * 学習内容バリデーションテスト
 * 学習内容が未入力の際に適切なエラーメッセージが表示されることを確認
 */
describe('studyContext input check', () => {
  let getAllRecordsSpy: jest.SpyInstance;

  beforeEach(() => {
    getAllRecordsSpy = jest
      .spyOn(recordLib, 'GetAllRecords')
      .mockResolvedValue([]);
  });

  afterEach(() => {
    getAllRecordsSpy.mockRestore();
  });

  it('学習内容が未入力の場合にエラーメッセージが表示される', async () => {
    const user = userEvent.setup();
    renderApp();

    // 新規登録モーダルを開く
    const newRegistryButton = await screen.findByRole('button', {
      name: '新規登録',
    });
    await user.click(newRegistryButton);

    // 学習時間のみ入力
    const studyInputTime = await screen.findByPlaceholderText('0');
    await user.type(studyInputTime, '9');

    // 登録ボタンをクリック
    const registryButton = await screen.findByRole('button', { name: '登録' });
    await user.click(registryButton);

    // 学習内容のエラーメッセージ確認
    const errorMessage = await screen.findByText('内容の入力は必須です');
    expect(errorMessage).toBeInTheDocument();

    // モーダルを閉じる
    const closeButton = await screen.findByText('閉じる');
    await user.click(closeButton);
  });
});

/**
 * 学習時間バリデーションテスト
 * 学習時間の入力値に関するバリデーションが正しく機能することを確認
 */
describe('studyTime check', () => {
  let getAllRecordsSpy: jest.SpyInstance;

  beforeEach(() => {
    getAllRecordsSpy = jest
      .spyOn(recordLib, 'GetAllRecords')
      .mockResolvedValue([]);
  });

  afterEach(() => {
    getAllRecordsSpy.mockRestore();
  });

  it('学習時間が未入力の場合にエラーメッセージが表示される', async () => {
    const user = userEvent.setup();
    renderApp();

    // 新規登録モーダルを開く
    const newRegistryButton = await screen.findByRole('button', {
      name: '新規登録',
    });
    await user.click(newRegistryButton);

    // 学習内容のみ入力
    const studyInputContext = await screen.findByPlaceholderText(
      '学習内容を入力してください'
    );
    await user.type(studyInputContext, '学習記録テスト');

    // 登録ボタンをクリック
    const registryButton = await screen.findByRole('button', { name: '登録' });
    await user.click(registryButton);

    // 学習時間のエラーメッセージ確認
    const errorMessage = await screen.findByText('学習時間を入力してください');
    expect(errorMessage).toBeInTheDocument();
  });

  it('学習時間に0を入力した場合にエラーメッセージが表示される', async () => {
    const user = userEvent.setup();
    renderApp();

    // 新規登録モーダルを開く
    const newRegistryButton = await screen.findByRole('button', {
      name: '新規登録',
    });
    await user.click(newRegistryButton);

    // 学習時間に0を入力
    const studyInputTime = await screen.findByPlaceholderText('0');
    await user.clear(studyInputTime);
    await user.type(studyInputTime, '0');

    // 登録ボタンをクリック
    const registryButton = await screen.findByRole('button', { name: '登録' });
    await user.click(registryButton);

    // 0に関するエラーメッセージ確認
    const errorMessage = await screen.findByText('0以上で入力してください');
    expect(errorMessage).toBeInTheDocument();
  });
});

/**
 * 削除機能テスト
 * 学習記録の削除が正しく行われることを確認
 */
describe('Delete check', () => {
  let getAllRecordsSpy: jest.SpyInstance;
  let deleteRecordSpy: jest.SpyInstance;

  beforeEach(() => {
    getAllRecordsSpy = jest
      .spyOn(recordLib, 'GetAllRecords')
      .mockResolvedValueOnce([
        {
          id: '1',
          learn_title: 'テスト学習内容1',
          learn_time: 2,
          created_at: '2024-12-28',
          updated_at: '2024-12-28 12:00:00', // updated_atを追加
        },
      ])
      .mockResolvedValueOnce([]); // 削除後は空の配列を返す

    deleteRecordSpy = jest
      .spyOn(recordLib, 'DeleteRecord')
      .mockResolvedValue(undefined);
  });

  afterEach(() => {
    getAllRecordsSpy.mockRestore();
    deleteRecordSpy.mockRestore();
  });

  it('学習記録を削除できる', async () => {
    const user = userEvent.setup();
    renderApp();

    // レコードが表示されるのを待つ
    const titleElement = await screen.findByText('テスト学習内容1');
    expect(titleElement).toBeInTheDocument();

    // 削除ボタンをクリック
    const deleteButton = await screen.findByRole('button', { name: '削除' });
    await user.click(deleteButton);

    // 削除後の確認
    await waitFor(() => {
      // 削除APIが正しく呼ばれたことを確認
      expect(deleteRecordSpy).toHaveBeenCalledWith('1');
      // 削除されたレコードが画面から消えたことを確認
      expect(screen.queryByText('テスト学習内容1')).not.toBeInTheDocument();
    });
  });
});

/**
 * 編集モーダル表示テスト
 * 編集ボタン押下で編集モーダルが表示されることを確認
 */
describe('update check', () => {
  let getAllRecordsSpy: jest.SpyInstance;

  beforeEach(() => {
    getAllRecordsSpy = jest
      .spyOn(recordLib, 'GetAllRecords')
      .mockResolvedValue([
        {
          id: '1',
          learn_title: 'テスト学習内容1',
          learn_time: 2,
          created_at: '2024-12-28',
          updated_at: '2024-12-28 12:00:00', // updated_atを追加
        },
      ]);
  });

  afterEach(() => {
    getAllRecordsSpy.mockRestore();
  });

  it('編集ボタンクリックで編集モーダルが表示される', async () => {
    const user = userEvent.setup();
    renderApp();

    // レコードが表示されるのを待つ
    const recordText = await screen.findByText('テスト学習内容1');
    expect(recordText).toBeInTheDocument();

    // 編集ボタンをクリック
    const editButton = await screen.findByRole('button', { name: '編集' });
    await user.click(editButton);

    // 編集モーダルが表示されるのを待つ
    const editText = await screen.findByText('学習記録編集');
    expect(editText).toBeInTheDocument();
  });
});

/**
 * 更新機能テスト
 * 学習記録の更新が正しく行われることを確認
 */
describe('update and registry check', () => {
  const MOCK_DATA = {
    INITIAL: {
      id: '1',
      learn_title: 'テスト学習内容1',
      learn_time: 2,
      created_at: '2024-12-28',
      updated_at: '2024-12-28 12:00:00',
    },
    UPDATED: {
      id: '1',
      learn_title: 'テスト学習内容2',
      learn_time: 5,
      created_at: '2024-12-28',
      updated_at: '2024-12-29 23:00:00',
    },
  };

  let getAllRecordsSpy: jest.SpyInstance;
  let updateRecordSpy: jest.SpyInstance;

  beforeEach(() => {
    // 初期データと更新後データを順番に返すモック
    getAllRecordsSpy = jest
      .spyOn(recordLib, 'GetAllRecords')
      .mockResolvedValueOnce([MOCK_DATA.INITIAL])
      .mockResolvedValueOnce([MOCK_DATA.UPDATED]);

    // 更新APIのモック
    updateRecordSpy = jest
      .spyOn(recordLib, 'UpdateRecord')
      .mockImplementation((id, title, time) => {
        return Promise.resolve([
          {
            ...MOCK_DATA.UPDATED,
            learn_title: title,
            learn_time: Number(time),
            updated_at: '2024-12-29 23:00:00',
          },
        ]);
      });
  });

  afterEach(() => {
    getAllRecordsSpy.mockRestore();
    updateRecordSpy.mockRestore();
  });

  it('学習記録を編集して更新できる', async () => {
    const user = userEvent.setup();
    renderApp();

    // 初期データが表示されるまで待機
    const initialTitle = await screen.findByText(MOCK_DATA.INITIAL.learn_title);
    expect(initialTitle).toBeInTheDocument();

    // 編集ボタンをクリック
    const editButton = await screen.findByRole('button', { name: '編集' });
    await user.click(editButton);

    // 入力フォームを更新
    const titleInput = await screen.findByDisplayValue(
      MOCK_DATA.INITIAL.learn_title
    );
    const timeInput = await screen.findByDisplayValue(
      String(MOCK_DATA.INITIAL.learn_time)
    );

    // 新しい値を入力
    await user.clear(titleInput);
    await user.clear(timeInput);
    await user.type(titleInput, MOCK_DATA.UPDATED.learn_title);
    await user.type(timeInput, String(MOCK_DATA.UPDATED.learn_time));

    // 更新ボタンをクリック
    const updateButton = await screen.findByRole('button', { name: '更新' });
    await user.click(updateButton);

    // 更新結果を検証
    // 1. APIの呼び出しを確認
    await waitFor(() => {
      expect(updateRecordSpy).toHaveBeenCalledWith(
        MOCK_DATA.UPDATED.id,
        MOCK_DATA.UPDATED.learn_title,
        String(MOCK_DATA.UPDATED.learn_time)
      );
    });

    // 2. 画面表示を確認
    const updatedTitle = await screen.findByText(MOCK_DATA.UPDATED.learn_title);
    const updatedTime = await screen.findByText(
      String(MOCK_DATA.UPDATED.learn_time)
    );
    expect(updatedTitle).toBeInTheDocument();
    expect(updatedTime).toBeInTheDocument();
  });
});
