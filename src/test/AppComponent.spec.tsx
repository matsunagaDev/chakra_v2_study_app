import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { App } from '../App';
import * as recordLib from '../lib/record';
import { ChakraProvider } from '@chakra-ui/react';

// Mockの設定
jest.mock('../lib/record');

const renderApp = () => {
  return render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
};

describe('title', () => {
  beforeEach(() => {
    // 初期データのモックを設定
    (recordLib.GetAllRecords as jest.Mock).mockResolvedValue([]);
  });

  it('should render title', async () => {
    renderApp();

    // Loading状態が終わるまで待機
    await waitFor(() => {
      expect(screen.queryByText('Loading.....')).not.toBeInTheDocument();
    });

    // タイトルの表示を確認
    await waitFor(
      () => {
        expect(screen.getByText('学習記録アプリ')).toBeInTheDocument();
      },
      {
        timeout: 3000, // タイムアウトを3秒に設定
      }
    );
  });
});

describe('loading', () => {
  beforeEach(() => {
    // GetAllRecordsのモックを一時的に遅延させる
    (recordLib.GetAllRecords as jest.Mock).mockImplementation(
      () => new Promise((resolve) => setTimeout(resolve, 100))
    );
  });

  it('Loading画面を確認する', async () => {
    renderApp();
    expect(screen.getByText('Loading.....')).toBeInTheDocument();
  });
});

describe('list', () => {
  beforeEach(() => {
    (recordLib.GetAllRecords as jest.Mock).mockResolvedValue([
      {
        id: '5f19ee01-c973-4dc3-b362-20e3be5cd455',
        learn_title: 'おはようございます',
        learn_time: 6,
        created_at: '2024-12-14 22:36:56',
        updated_at: null,
      },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('一覧を確認することができる', async () => {
    renderApp();
    // レコードが表示されるのを待つ
    await waitFor(() => {
      const element_str = screen.queryByText('おはようございます');
      const element_time = screen.queryByText('6');
      const element_ts = screen.queryByText('2024-12-14 22:36:56');
      expect(element_str).toBeInTheDocument();
      expect(element_time).toBeInTheDocument();
      expect(element_ts).toBeInTheDocument();
    });
  });
});

// 新規登録ボタンがある
describe('registry_btn', () => {
  it('新規登録ボタンがある', async () => {
    renderApp();
    const button = await screen.findByText('新規登録', {}, { timeout: 5000 });
    expect(button).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.queryByText('登録')).toBeInTheDocument();
    // });
  });
});

// 登録できること
describe('registry', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // モックの設定
    (recordLib.InsertRecord as jest.Mock).mockImplementation((title, time) => {
      return Promise.resolve([
        {
          id: '1',
          learn_title: title,
          learn_time: Number(time),
          created_at: '2024-01-01',
          updated_at: null,
        },
      ]);
    });

    (recordLib.GetAllRecords as jest.Mock)
      .mockResolvedValueOnce([]) // 初期表示用
      .mockResolvedValueOnce([
        {
          // 登録後の表示用
          id: '1',
          learn_title: 'テストの学習内容',
          learn_time: 500,
          created_at: '2024-01-01',
          updated_at: null,
        },
      ]);
  });

  it('登録できることを確認する', async () => {
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

    // 登録結果の確認（複数の観点で検証）
    await waitFor(async () => {
      // 1. 画面表示の確認
      const titleElement = await screen.findByText('テストの学習内容');
      const timeElement = await screen.findByText('500');
      expect(titleElement).toBeInTheDocument();
      expect(timeElement).toBeInTheDocument();

      // 2. APIコールの確認
      expect(recordLib.InsertRecord).toHaveBeenCalledTimes(1);
      const [title, time] = (recordLib.InsertRecord as jest.Mock).mock.calls[0];
      expect(title).toBe('テストの学習内容');
      expect(Number(time)).toBe(500);
    });
  });
});

// モーダルのタイトル確認
describe('modal title check', () => {
  it('モーダルのタイトルが新規登録になっていること', async () => {
    renderApp();

    const newRegistryButton = await screen.findByRole(
      'button',
      { name: '新規登録' },
      { timeout: 5000 }
    );
    userEvent.click(newRegistryButton);
    await waitFor(() => {
      expect(screen.queryByText('登録')).toBeInTheDocument();
    });
  });
});

describe('studyContext input check', () => {
  it('学習内容が未入力で登録時にエラーメッセージが表示される', async () => {
    renderApp();

    const newRegistryButton = await screen.findByRole(
      'button',
      { name: '新規登録' },
      { timeout: 5000 }
    );
    userEvent.click(newRegistryButton);

    // 学習時間に値を入力
    const studyInputTime = await screen.queryByPlaceholderText('0');
    // studyInputTimeはqueryで取得しているため、null判定を実施
    studyInputTime && userEvent.type(studyInputTime, '9');

    const registryButton = await screen.findByRole('button', { name: '登録' });
    userEvent.click(registryButton);

    // 学習内容が未入力の場合のエラーメッセージが表示される
    expect(await screen.findByText('内容の入力は必須です')).toBeInTheDocument();

    // 閉じるボタン押下
    const closeButton = await screen.findByText('閉じる');
    userEvent.click(closeButton);
  });
});

// 学習時間のエラーチェック
describe('studyTime check', () => {
  it('学習時間のエラーメッセージを表示する', async () => {
    renderApp();

    const newRegistryButton = await screen.findByRole(
      'button',
      { name: '新規登録' },
      { timeout: 5000 }
    );
    userEvent.click(newRegistryButton);

    const studyInputContext = await screen.queryByPlaceholderText(
      '学習内容を入力してください'
    );
    studyInputContext && userEvent.type(studyInputContext, '学習記録テスト');
    const registryButton = await screen.findByRole('button', { name: '登録' });
    userEvent.click(registryButton);

    await waitFor(() => {
      expect(
        screen.queryByText('学習時間を入力してください')
      ).toBeInTheDocument();
    });
  });

  it('学習時間に０を入力してエラーメッセージを表示する', async () => {
    renderApp();

    const newRegistryButton = await screen.findByRole(
      'button',
      { name: '新規登録' },
      { timeout: 5000 }
    );
    userEvent.click(newRegistryButton);

    const studyInputTime = await screen.findByPlaceholderText('0');
    if (!studyInputTime) {
      throw new Error('学習時間のプレースホルダーが異なります');
    }
    userEvent.clear(studyInputTime);
    userEvent.type(studyInputTime, '0');

    const registryButton = await screen.findByRole('button', { name: '登録' });
    userEvent.click(registryButton);

    await waitFor(() => {
      expect(screen.queryByText('0以上で入力してください')).toBeInTheDocument();
    });
  });
});

// 削除ができること（モックを使用）
describe('Delete check', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('削除できるかを確認する', async () => {
    const mockRecords = [
      {
        id: '1',
        learn_title: 'テスト学習内容1',
        learn_time: 2,
        created_at: '2024-12-28',
      },
    ];

    (recordLib.GetAllRecords as jest.Mock)
      .mockResolvedValueOnce(mockRecords)
      .mockResolvedValueOnce([]);

    (recordLib.DeleteRecord as jest.Mock).mockResolvedValue(undefined);

    renderApp();

    await waitFor(() => {
      expect(screen.getByText('テスト学習内容1')).toBeInTheDocument();
    });

    const deleteButton = screen.getByRole('button', { name: '削除' });
    await userEvent.click(deleteButton);

    await waitFor(() => {
      expect(recordLib.DeleteRecord).toHaveBeenCalledWith('1');
      expect(screen.queryByText('テスト学習内容1')).not.toBeInTheDocument();
    });
  });
});

// 編集のテスト
describe('update check', () => {
  it('編集のチェック', async () => {
    const mockRecords = [
      {
        id: '1',
        learn_title: 'テスト学習内容1',
        learn_time: 2,
        created_at: '2024-12-28',
      },
    ];

    // GetAllRecords モックの動作を定義
    (recordLib.GetAllRecords as jest.Mock).mockResolvedValueOnce(mockRecords);

    renderApp();

    // レコードを表示するのを待つ
    await waitFor(() => {
      expect(screen.queryByText('テスト学習内容1')).toBeInTheDocument();
    });

    // 編集ボタンをクリック
    const editButton = screen.queryAllByRole('button', { name: '編集' })[0];
    userEvent.click(editButton);

    // 編集モーダルが表示されるのを待つ
    await waitFor(() => {
      expect(screen.queryByText('学習記録編集')).toBeInTheDocument();
    });
  });
});

/**
 * 学習記録の編集テスト
 */
describe('update and registry check', () => {
  const MOCK_DATA = {
    INITIAL: {
      id: '1',
      learn_title: 'テスト学習内容1',
      learn_time: 2,
      created_at: '2024-12-28',
      updated_at: null,
    },
    UPDATED: {
      id: '1',
      learn_title: 'テスト学習内容2',
      learn_time: 5,
      created_at: '2024-12-28',
      updated_at: '2024-12-28 12:00:00',
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();

    // モックの設定
    (recordLib.GetAllRecords as jest.Mock)
      .mockResolvedValueOnce([MOCK_DATA.INITIAL])
      .mockResolvedValueOnce([MOCK_DATA.UPDATED]);

    (recordLib.UpdateRecord as jest.Mock).mockImplementation(
      (id, title, time) => {
        return Promise.resolve([
          {
            ...MOCK_DATA.UPDATED,
            learn_time: Number(time), // 明示的に数値型に変換
          },
        ]);
      }
    );
  });

  it('学習記録を編集して更新できる', async () => {
    const user = userEvent.setup();
    renderApp();

    // 初期データが表示されるまで待機
    const initialTitle = await screen.findByText(MOCK_DATA.INITIAL.learn_title);
    expect(initialTitle).toBeInTheDocument();

    // 編集を開始
    const editButton = await screen.findByRole('button', { name: '編集' });
    await user.click(editButton);

    // 入力フォームを更新
    const titleInput = await screen.findByDisplayValue(
      MOCK_DATA.INITIAL.learn_title
    );
    const timeInput = await screen.findByDisplayValue(
      String(MOCK_DATA.INITIAL.learn_time)
    );

    await user.clear(titleInput);
    await user.clear(timeInput);
    await user.type(titleInput, MOCK_DATA.UPDATED.learn_title);
    await user.type(timeInput, String(MOCK_DATA.UPDATED.learn_time));

    // 更新を実行
    const updateButton = await screen.findByRole('button', { name: '更新' });
    await user.click(updateButton);

    // 更新結果を検証
    await waitFor(() => {
      // 1. APIの呼び出しを確認
      expect(recordLib.UpdateRecord).toHaveBeenCalledWith(
        MOCK_DATA.UPDATED.id,
        MOCK_DATA.UPDATED.learn_title,
        String(MOCK_DATA.UPDATED.learn_time)
      );

      // 2. 画面表示を確認
      expect(
        screen.getByText(MOCK_DATA.UPDATED.learn_title)
      ).toBeInTheDocument();
      expect(
        screen.getByText(String(MOCK_DATA.UPDATED.learn_time))
      ).toBeInTheDocument();
    });
  });
});
