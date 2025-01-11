import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { App } from '../App';
import * as recordLib from '../lib/record';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

jest.mock('../lib/record');

// タイトルがあること
describe('title', () => {
  it('should render title', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('学習記録アプリ')).toBeInTheDocument();
    });
  });
});

// ローディング画面が見れること
describe('loading', () => {
  it('Loading画面を確認する', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Loading')).toBeInTheDocument();
    });
  });
});

// テーブルを見ることができる（リスト）
describe('list', () => {
  beforeEach(() => {
    // GetAllRecordsのモックを作成
    const mockFn = jest.spyOn(recordLib, 'GetAllRecords').mockResolvedValue([
      {
        id: '5f19ee01-c973-4dc3-b362-20e3be5cd455',
        learn_title: 'おはようございます',
        learn_time: 6,
        created_at: '2024-12-14 22:36:56',
        updated_at: 'NULL',
      },
    ]);
    console.log('Mock function setup:', mockFn);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('一覧を確認することができる', async () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    );
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
    render(
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    );
    const button = await screen.findByText('登録', {}, { timeout: 5000 });
    expect(button).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.queryByText('登録')).toBeInTheDocument();
    // });
  });
});

// 登録できること
describe('registry', () => {
  afterEach(async () => {
    const targetDelete = screen.queryByText('テスト学習内容');
    if (targetDelete) {
      const targetButton = targetDelete.closest('tr')?.querySelector('button');
      if (targetButton) {
        fireEvent.click(targetButton);
        // 対象レコードが削除されたかを確認する
        await waitFor(() => {
          expect(screen.queryByText('テスト学習内容')).not.toBeInTheDocument();
        });
      }
    }
  });

  it('登録できること', async () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    );
    // モーダルを開く
    const button = await screen.findByRole(
      'button',
      { name: '新規登録' },
      { timeout: 5000 }
    );
    fireEvent.click(button);

    // 値を入力する
    await waitFor(() => {
      const studyContext =
        screen.queryByPlaceholderText('学習内容を入力してください');
      const studyTimeInput = screen.queryByPlaceholderText('0');
      if (!studyContext || !studyTimeInput) {
        throw new Error('入力フィールドが見つかりません');
      }

      fireEvent.change(studyContext, { target: { value: 'テスト学習内容' } });
      fireEvent.change(studyTimeInput, { target: { value: '5' } });
      // モーダルの登録ボタンをクリック
      const registerButton = screen.queryByText('登録');
      if (!registerButton) {
        throw new Error('登録ボタンが見当たりません');
      }
      fireEvent.click(registerButton);
    });

    // 画面に登録した内容が表示されていることを確認する
    await waitFor(() => {
      expect(screen.queryByText('テスト学習内容')).toBeInTheDocument();
      // expect(screen.queryByText('5')).toBeInTheDocument();
    });
  });
});

// モーダルのタイトル確認
describe('modal title check', () => {
  it('モーダルのタイトルが新規登録になっていること', async () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    );

    const newRegistryButton = await screen.findByRole(
      'button',
      { name: '新規登録' },
      { timeout: 5000 }
    );
    userEvent.click(newRegistryButton);
    await waitFor(() => {
      expect(screen.queryByText('学習記録登録')).toBeInTheDocument();
    });
  });
});

describe('studyContext input check', () => {
  it('学習内容が未入力で登録時にエラーメッセージが表示される', async () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    );

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
    render(
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    );

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
    render(
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    );

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
describe.only('Delete check', () => {
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
      {
        id: '2',
        learn_title: 'テスト学習内容2',
        learn_time: 3,
        created_at: '2024-12-29',
      },
    ];

    // GetAllRecords モックの動作を定義
    (recordLib.GetAllRecords as jest.Mock).mockResolvedValueOnce(mockRecords);
    (recordLib.GetAllRecords as jest.Mock).mockResolvedValueOnce([
      mockRecords[1],
    ]);
    // DeleteRecords モックの動作を定義
    (recordLib.DeleteRecord as jest.Mock).mockResolvedValueOnce(undefined);

    render(
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    );

    // レコードが表示されるのを待機
    await waitFor(() => {
      expect(screen.queryByText('テスト学習内容1')).toBeInTheDocument();
      expect(screen.queryByText('テスト学習内容2')).toBeInTheDocument();
    });

    // 削除ボタンを取得
    const deleteButton = screen.getAllByRole('button', { name: '削除' })[0];
    userEvent.click(deleteButton);

    // 削除後のデータ取得を待機
    await waitFor(() => {
      expect(recordLib.DeleteRecord).toHaveBeenCalledWith('1');
      expect(screen.queryByText('テスト学習内容1')).not.toBeInTheDocument();
      expect(screen.queryByText('テスト学習内容2')).toBeInTheDocument();
    });
  });

  // 編集のテスト
  describe('update check', () => {
    it('編集のチェック', () => {
      render(
        <ChakraProvider value={defaultSystem}>
          <App />
        </ChakraProvider>
      );
    });
  });
});
