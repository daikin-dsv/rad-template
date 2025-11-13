import type { TextBundle } from './types';

const ja: TextBundle = {
    appRoutes: {
        home: 'ホーム',
        componentGallery: 'コンポーネントギャラリー'
    },
    footer: {
        copyright: '2025 Daikin Open Innovation Lab Silicon Valley'
    },
    user: {
        email: 'メール',
        english: 'English',
        japanese: '日本語',
        language: '言語',
        manageAccount: 'アカウント管理',
        name: '名前',
        profile: 'プロフィール',
        settings: '設定',
        signedIn: 'ユーザー名',
        signOut: 'サインアウト'
    },
    componentGallery: {
        intro: {
            eyebrow: 'デザインシステム',
            title: 'ダイキン コンポーネントギャラリー',
            descriptionPrefix: '以下のサンプルはすべて React ラッパー',
            descriptionSuffix: 'を利用しているため、すぐに画面へコピーできます。',
            codePath: 'app/components/dds-wrappers.tsx'
        },
        sections: {
            layoutNavigation: {
                title: 'レイアウトとナビゲーション',
                description:
                    'アコーディオン、パンくず、タブ、ツリー、カルーセル、メニューでフロー全体を構成します。'
            },
            contentDisplay: {
                title: 'コンテンツと表示',
                description:
                    'カード、リスト、データテーブル、ブランド要素、ツールチップで情報を一貫して提示します。'
            },
            inputsControls: {
                title: '入力とコントロール',
                description:
                    'ボタンやフォーム、セレクト、マスク付き入力、スケジューラーまで同じトークンでそろえます。'
            },
            feedbackStatus: {
                title: 'フィードバックとステータス',
                description:
                    '進捗、アラート、非同期処理、オーバーレイを的確に伝えます。'
            }
        },
        cards: {
            accordion: {
                name: 'アコーディオン',
                description: 'トピック別にトラブル情報をまとめます。',
                energyTitle: 'エネルギー使用量',
                energyBody: '先月との kWh 削減を追跡します。',
                alertsTitle: '稼働中のアラート',
                alertsBody: '技術者のフォローが必要な項目を確認します。'
            },
            breadcrumbs: {
                name: 'パンくずリスト',
                description:
                    '多層フロー内で現在位置をユーザーに知らせます。',
                crumbs: [
                    { label: 'ホーム', href: '/' },
                    { label: '拠点一覧', href: '/sites' },
                    { label: 'HQ West', variant: 'current' }
                ]
            },
            tabsPanels: {
                name: 'タブとパネル',
                description:
                    'daikin-tabs と daikin-tab-panels で主要ビューを切り替えます。',
                tabs: [
                    {
                        value: 'overview',
                        label: '概要',
                        panel: '全拠点のリアルタイム KPI を表示します。'
                    },
                    {
                        value: 'alerts',
                        label: 'アラート',
                        panel: '影響度順に未解決の問題を並べます。'
                    },
                    {
                        value: 'reports',
                        label: 'レポート',
                        panel: 'コンプライアンス要約や作業履歴をエクスポートします。'
                    }
                ]
            },
            pagination: {
                name: 'ページネーション',
                description: '長い結果をページ単位で表示します。'
            },
            carousel: {
                name: 'カルーセル',
                description: 'プロモーションや学習カードを順番に紹介します。',
                slides: [
                    {
                        title: '静音モード',
                        description: '共有ワークスペースに最適',
                        body: 'ワンタップで執務時間の騒音を抑えます。'
                    },
                    {
                        title: 'エコスケジュール',
                        description: '快適さとコストのバランス',
                        body: 'すべての建物で夜間の温度後退を自動化します。'
                    }
                ]
            },
            contextualMenu: {
                name: 'コンテキストメニュー',
                description: '任意のボタンにクイックアクションを添付します。',
                buttonLabel: 'サイトアクション',
                options: [
                    { label: '訪問を予約', icon: 'i-daikin-calendar' },
                    { label: '新しいアラート', icon: 'i-daikin-warning' },
                    {
                        label: '担当者を再割り当て',
                        icon: 'i-daikin-information',
                        disabled: true
                    }
                ]
            },
            tree: {
                name: 'ツリーナビゲーション',
                description: '階層構造の拠点や設備を表示します。',
                groups: [
                    {
                        label: '北米',
                        value: 'north-america',
                        open: true,
                        items: [
                            { label: 'シカゴ本社', value: 'chicago', selected: true },
                            { label: 'オースティン研修センター', value: 'austin' }
                        ]
                    },
                    {
                        label: 'EMEA',
                        value: 'emea',
                        items: [{ label: 'ベルリンラボ', value: 'berlin' }]
                    }
                ]
            },
            cardLayout: {
                name: 'カードレイアウト',
                description: 'daikin-card とヘッダー／フッター補助を組み合わせます。',
                headerTitle: '季節点検',
                headerDescription: '次回訪問 · 4月24日',
                body: [
                    'エコノマイザーのダンパーを確認し、フィルターを交換します。',
                    '訪問をコンフォートプロパートナーに割り当てます。'
                ],
                dismiss: '非表示',
                viewDetails: '詳細を見る'
            },
            navigationList: {
                name: 'ナビゲーションリスト',
                description: 'daikin-list 内でテキスト・リンク・アイコンを組み合わせます。',
                items: [
                    {
                        icon: 'i-daikin-check',
                        text: '前回の保守 · 32日前'
                    },
                    {
                        icon: 'i-daikin-information',
                        text: 'ドキュメントを見る',
                        href: 'https://www.daikin.com'
                    },
                    {
                        icon: 'i-daikin-warning',
                        text: '承認待ち',
                        disabled: true
                    }
                ]
            },
            dataTable: {
                name: 'データテーブル',
                description:
                    'daikin-table に JSON を渡し、セルやヘッダーを差し替えます。',
                headers: {
                    zone: 'ゾーン',
                    status: '状態',
                    temp: '温度 (°F)'
                },
                rows: [
                    { id: 'lobby', zone: 'ロビー', status: '冷房', temp: '68°F' },
                    { id: 'lab', zone: 'R&D ラボ', status: '待機', temp: '72°F' },
                    { id: 'west', zone: '本社西棟', status: '暖房', temp: '70°F' }
                ],
                highlightedRowId: 'lobby',
                highlightedStatus: '冷房'
            },
            brandIdentity: {
                name: 'ブランドとアイデンティティ',
                description: 'アバター・ロゴ・リンク・アイコンを統一スタイルで表示します。',
                avatarAlt: 'Alex Rivera',
                linkText: 'アカウント設定',
                linkHref: 'https://www.daikin.com',
                logoAriaLabel: 'ダイキンのロゴ'
            },
            tooltip: {
                name: 'ツールチップ',
                description: 'daikin-tooltip で補足情報を表示します。',
                body: '低稼働時間帯はエコモードに切り替えましょう。'
            },
            buttons: {
                name: 'ボタン',
                description: 'アイコン付きボタンやアイコン専用ボタンを紹介します。',
                primary: '訪問を予約',
                secondary: 'サイトを表示'
            },
            selectionControls: {
                name: '選択コントロール',
                description: 'チェックボックスやラジオ、トグル、チップでフィルタリングします。',
                soloCheckbox: '障害時に技術者へメール送信',
                groupedCheckboxes: ['冷房', '暖房', '換気'],
                radioOptions: ['自動', '手動', 'スタンバイ'],
                toggleLabel: 'エコスケジュールを有効化',
                chips: [
                    { label: '重要のみ', aria: '重要アラートでフィルタリング' },
                    { label: '訪問予定', aria: '訪問予定のみ表示' }
                ]
            },
            adjustments: {
                name: '微調整',
                description: 'スライダーで数値入力を細かく調整します。',
                sliderAriaLabel: '希望温度'
            },
            comboboxDropdown: {
                name: 'コンボボックスとドロップダウン',
                description:
                    '検索可能な入力と厳選されたリストをそれぞれ表示します。',
                comboboxPlaceholder: 'モード',
                comboboxItems: [
                    '冷房',
                    '暖房',
                    { label: '換気', disabled: true },
                    '熱回収'
                ],
                dropdownPlaceholder: '地域',
                dropdownOptions: [
                    { label: '北キャンパス', value: 'north' },
                    { label: '東キャンパス', value: 'east' },
                    { label: '南キャンパス', value: 'south' }
                ],
                selectedValues: ['north', 'east']
            },
            select: {
                name: 'セレクト',
                description: 'ネイティブ select 要素をラップします。',
                defaultValue: 'standard',
                options: [
                    { value: 'standard', label: '標準インストール' },
                    { value: 'premium', label: 'プレミアム試運転' },
                    { value: 'economy', label: 'エコ訪問' }
                ]
            },
            textInputs: {
                name: 'テキスト入力',
                description: '単一行の入力とマスク付きフィールド。',
                projectPlaceholder: 'プロジェクト名',
                passwordPlaceholder: 'ポータルパスワード',
                serialPlaceholder: '製造番号'
            },
            dateTime: {
                name: '日付と時刻',
                description:
                    '日付ピッカー・時刻ピッカー・カレンダーを組み合わせて使います。',
                datePlaceholder: '開始日'
            },
            inlineNotification: {
                name: 'インライン通知',
                description: 'ページ単位の恒常的な通知に使用します。',
                title: 'フィルター交換',
                body: 'HQ West のフィルター寿命が 10% を下回りました。'
            },
            toastNotification: {
                name: 'トースト通知',
                description: '一定時間で閉じる短い通知です。',
                title: 'スケジュールを保存しました',
                body: '新しいプログラムがすべての屋上ユニットに適用されました。'
            },
            toastManager: {
                name: 'トーストマネージャー',
                description: '複数のトーストを右下に積み上げて表示します。',
                showLabel: 'サンプルトーストを表示',
                hideLabel: 'サンプルトーストを非表示',
                hint: 'ボタンを押して積み上げた通知を確認します。',
                toasts: [
                    {
                        title: '技術者を割り当てました',
                        body: 'テイラーが HQ West に向かっています。',
                        status: 'positive'
                    },
                    {
                        title: '在庫不足',
                        body: 'トラック12には予備フィルターが4枚しかありません。',
                        status: 'warning'
                    }
                ]
            },
            progress: {
                name: '進捗',
                description: '進捗バーとステップ表示を連携させます。',
                helper: '5件中3件のオンボーディングを完了',
                label: 'オンボーディング進捗',
                steps: [
                    {
                        title: 'サイト調査',
                        description: '写真をアップロード済み',
                        status: 'finished'
                    },
                    {
                        title: '試運転',
                        description: '4ユニット中2件が完了',
                        status: 'inprogress'
                    },
                    {
                        title: '引き渡し',
                        status: 'unfinished'
                    }
                ]
            },
            loading: {
                name: 'ローディング',
                description: 'ブランドに合わせたローディング表示です。'
            },
            modal: {
                name: 'モーダル',
                description: '体験全体の上にダイアログを表示します。',
                openButton: 'モーダルを開く',
                title: 'スケジュールを公開',
                headerDescription: '通知前にタイミングを確認してください。',
                body: '各オフィスゾーンで21:30からエコ抑制を開始します。シカゴとオースティンのチームに通知しますか？',
                cancel: 'キャンセル',
                confirm: '公開'
            }
        }
    }
};

export default ja;
