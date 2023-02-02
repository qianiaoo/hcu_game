export enum Status {
    Gpa,
    Happy,
    Money,
    Love,
    News,
    None
}

export enum SS {
    GirlFriend = '💑',
    ClubSuiSo = '🎷',
    Internation = '🌏',
    CS = '🖥️',
    Art = '🎨',
    Korona = '🦠',
    Beer ='🍺'

}

export type Effect = {
    status: Status,
    value: number,
}

export type Reaction = {
    effects: Effect[],
    text?: string,
    button: string,
    ss?: SS
}


export enum EventType {
    Friend = '友達イベント',
    School = '大学イベント',
    Daily = '日常イベント',
    Work = 'バイトイベント',
    Love = '恋イベント',
    Special = '特別イベント',
    OVER = 'GAVE OVER'
}

export type Event = {
    header: EventType
    context: string,
    reactions: Reaction[]
}


export const GAME_OVER_GPA_LOW: Event = {
    header: EventType.OVER,
    context: 'あなたのGPAが低すぎて、退学された',
    reactions: [
        {
            effects: [
                {
                    status: Status.None,
                    value: 0
                },
            ],
            button: 'GAME OVER',
        },
    ]
}

export const GAME_OVER_GPA_HIGH: Event = {
    header: EventType.OVER,
    context: 'おめでとう！あなたの優秀の成績で東大大学院に入ることになった！',
    reactions: [
        {
            effects: [
                {
                    status: Status.None,
                    value: 0
                },
            ],
            button: 'GAME OVER',
        },
    ]
}


export const GAME_OVER_MONEY_HIGH: Event = {
    header: EventType.OVER,
    context: 'おめでとう！お金持ちのあなたには大学で勉強する意味がない',
    reactions: [
        {
            effects: [
                {
                    status: Status.None,
                    value: 0
                },
            ],
            button: 'GAME OVER',
        },
    ]
}

export const GAME_OVER_MONEY_LOW: Event = {
    header: EventType.OVER,
    context: 'あなたがお金がなくて、餓死した',
    reactions: [
        {
            effects: [
                {
                    status: Status.None,
                    value: 0
                },
            ],
            button: 'GAME OVER',
        },
    ]
}


export const GAME_OVER_HAPPY_LOW: Event = {
    header: EventType.OVER,
    context: 'あなたが鬱病になり、自殺した。',
    reactions: [
        {
            effects: [
                {
                    status: Status.None,
                    value: 0
                },
            ],
            button: 'GAME OVER',
        },
    ]
}

export const GAME_OVER_HAPPY_HIGH: Event = {
    header: EventType.OVER,
    context: 'あなたはパリピそのもので、いつも楽しいあなたは人生に勝った',
    reactions: [
        {
            effects: [
                {
                    status: Status.None,
                    value: 0
                },
            ],
            button: 'GAME OVER',
        },
    ]
}

export const SP_GAME_EVENTS: Event[] = [
    {
        header: EventType.Special,
        context: '入学おめでとうございます！広島市立大学へようこそ！市立大では国際学部、芸術学部、情報科学部3つの学部があり、幅広い学問を学べます。あなたの学部を教えてください！',
        reactions: [
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: '国際学部',
                ss: SS.Internation
            },
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: '情報科学部',
                ss: SS.CS
            },
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: '芸術学部',
                ss: SS.Art
            },
        ]
    },
    {
        header: EventType.Special,
        context: 'あなたはコロナ陽性になった。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: '了解',
                ss: SS.Korona
            },

        ]
    },

]

export const GAME_EVENTS: Event[] = [

    {
        header: EventType.Love,
        context: '女の子に告白した、彼女ができた',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Happy,
                        value: 30
                    },
                ],
                button: 'やったー！',
                ss: SS.GirlFriend
            },
        ]
    },
    {
        header: EventType.Love,
        context: '友達とお酒飲み過ぎて病院に運ばれた',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Happy,
                        value: 10
                    },
                ],
                button: '乾杯！',
                ss: SS.Beer
            },
        ]
    },
    {
        header: EventType.Friend,
        context: '授業で知り合った女の子からご飯誘われました。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Love,
                        value: 10,
                    },
                    {
                        status: Status.Happy,
                        value: 10
                    },
                    {
                        status: Status.Money,
                        value: -3000
                    }
                ],
                button: '行きます！'
            },
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0,
                    }
                ],
                text: '変化なし',
                button: 'ごめん、また今度'
            },
            {
                effects: [
                    {
                        status: Status.Love,
                        value: -1,
                    }
                ],
                button: '無視'
            }
        ]
    },
    {
        header: EventType.Friend,
        context: '友達にカラオケに誘われた。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Love,
                        value: 1,
                    },
                    {
                        status: Status.Happy,
                        value: 3
                    },
                    {
                        status: Status.Money,
                        value: -2000
                    }
                ],
                text: '😀',
                button: '行きます！'
            },
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0,
                    }
                ],
                text: '変化なし',
                button: '行かない'
            },

        ]
    },
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
        header: EventType.Friend,
        context: '友達にパチンコに誘われた、行きますか。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: -10000,
                    },
                    {
                        status: Status.Happy,
                        value: -10,
                    },

                ],
                button: '行く'
            },
            {
                effects: [
                    {
                        status: Status.Money,
                        value: 10000,
                    },
                    {
                        status: Status.Happy,
                        value: 10,
                    },

                ],
                button: '行く'
            },
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0,
                    },

                ],
                button: '行かない'
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
                        value: 30
                    },
                    {
                        status: Status.Love,
                        value: 30
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
        header: EventType.Work,
        context: 'コンビニでバイトした、2千円もらった。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: 2000
                    },
                ],
                button: '了解'
            },
        ]
    },
    {
        header: EventType.Work,
        context: 'スシローでバイトした、3千円もらった。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: 3000
                    },
                ],
                button: '了解'
            },
        ]
    },
    {
        header: EventType.Work,
        context: 'ヤマトで夜勤のバイトした、1万円もらった。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: 10000
                    },
                    {
                        status: Status.Happy,
                        value: -5
                    },
                ],
                button: '了解'
            },
        ]
    },
    {
        header: EventType.Work,
        context: '吉野家で夜バイトした、1万円もらった。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: 10000
                    },
                ],
                button: '了解'
            },
        ]
    },
    {
        header: EventType.School,
        context: '真面目に勉強した、成績よくなった',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: 0.1
                    },
                ],
                button: '了解'
            },
        ]
    },
    {
        header: EventType.School,
        context: '試験での不正行為の摘発されて、全部の科目が不可になった',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: -2
                    },
                ],
                button: '了解'
            },
        ]
    },
    {
        header: EventType.School,
        context: '試験期間にハンターハンターが新しく発売された',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: -0.5
                    },
                    {
                        status: Status.Happy,
                        value: 5
                    }
                ],
                button: 'すぐ読む'
            },
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: 0.2
                    },

                ],
                button: '真面目に勉強する'
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
                ss: SS.ClubSuiSo
            },

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
]
