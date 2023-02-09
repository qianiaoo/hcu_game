import {EventType, GameEvent, SS, Status} from "./GameEvents";

export const DailyEvents: GameEvent[] = [
    {
        header: EventType.Daily,
        context: '沖縄の首里城に火事で燃えてしまった。コンビニで寄付金を募集している。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: -1000,
                    },
                    {
                        status: Status.Happy,
                        value: 1,
                    },

                ],
                button: '一千円寄付'
            },
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0,
                    },
                ],
                button: '無視'
            },
        ]
    },
    {
        header: EventType.Daily,
        context: '学校に行く道で可愛い女の子が微笑んでくれた',
        reactions: [
            {
                effects: [

                    {
                        status: Status.Happy,
                        value: 2,
                    },

                ],
                button: '😀'
            },

        ]
    },
    {
        header: EventType.Daily,
        context: '道で一千円拾った',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: 1000
                    }
                ],
                button: '自分のものにする'
            },
            {
                effects: [

                    {
                        status: Status.Happy,
                        value: 1,
                    },

                ],
                button: '警察に渡す'
            },
        ]
    },
    {
        conditions:[ {
          status: Status.Days,
          value: 30
        }, {
            status: SS.Art,
        }],
        header: EventType.Daily,
        context: 'エントリした漫画はマンガ賞・新人賞を取った。10万円もらった。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: 100000
                    }
                ],
                button: 'やった！'
            },
        ]
    },
    {
        header: EventType.Love,
        context: '試験勉強期間に好きな女子に京都旅行に誘われた。旅行代は3万かかる。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: -30000
                    },
                    {
                        status: Status.Happy,
                        value: 40
                    },
                    {
                        status: Status.Love,
                        value: 40
                    },
                    {
                        status: Status.Gpa,
                        value: -1
                    }
                ],
                button: '行く'
            },
            {
                effects: [
                    {
                        status: Status.Love,
                        value: -1,
                    },

                ],
                button: '行かない'
            },
        ]
    },
    {
        header: EventType.Daily,
        context: '吹奏楽部に勧誘された',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Happy,
                        value: 10
                    }
                ],
                button: '部活始まる',
                specialStatus: {
                    ss: SS.ClubSuiSo,
                    text: "あなたは吹奏楽部でバリサクを吹いています。"
                }            },

            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },

                ],
                button: '行かない'
            },
        ]
    },
    {
        header: EventType.Daily,
        context: '好きなアイドルは広島にライブする、チケット1万円',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: -10000
                    },
                    {
                        status: Status.Happy,
                        value: 10
                    }
                ],
                button: '行く'
            },
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: 0.5
                    },

                ],
                button: '勉強したいから行かない'
            },
            {
                effects: [
                    {
                        status: Status.Money,
                        value: 3000
                    },

                ],
                button: 'バイトがあるから行かない'
            },
        ]
    },
]
