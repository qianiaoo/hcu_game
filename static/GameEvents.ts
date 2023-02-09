export enum Status {
    Gpa,
    Happy,
    Money,
    Love,
    News,
    None,
    Days
}

export enum SS {
    GirlFriend = '💑',
    ClubSuiSo = '🎷',
    Internation = '🌏',
    CS = '🖥️',
    Art = '🎨',
    Korona = '🦠',
    Beer = '🍺'
}

export type SpecialStatus = {
    ss: SS,
    text: string
}

export type Effect = {
    status: Status,
    value: number,
}

export type Reaction = {
    effects: Effect[],
    text?: string,
    button: string,
    specialStatus?: SpecialStatus
}


export enum EventType {
    Friend = '友達イベント',
    School = '大学イベント',
    Daily = '日常イベント',
    Work = 'バイトイベント',
    Love = '恋イベント',
    Special = '特別イベント',
    OVER = 'GAVE OVER',
    Rule = 'ルール説明'
}

export type Condition = {
    status: Status | SS,
    value?: number
}

export type GameEvent = {
    conditions?: Condition[]
    header: EventType
    context: string,
    reactions: Reaction[]
}

export const GAME_RULE_1: GameEvent = {
    header: EventType.Rule,
    context: "このゲームは広島市立大学の平凡な日常をシミュレーションゲーム。あなたは平凡な男子大学生として、市立大学を学び、友達を作り、理想を見つけ、実現をするのだ！" +
        "注意していただきたのは、画面上には3つのステタスがあります。それぞれは、GPA、あなたの学力を表すものです。" +
        "気持ち、あなたが楽しいかどうかを表すものです。お金、あなたが持っているお金を表すものです。" +
        "この3つのステタスはGameのエンディングと繋がっているので、ご注意ください。では、楽しんでください。",
    reactions: [
        {
            effects: [
                {
                    status: Status.None,
                    value: 0
                },
            ],
            button: 'ゲームスタット！',
        },
    ]

}

export const GAME_OVER_GPA_LOW: GameEvent = {
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

export const GAME_OVER_GPA_HIGH: GameEvent = {
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


export const GAME_OVER_MONEY_HIGH: GameEvent = {
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

export const GAME_OVER_MONEY_LOW: GameEvent = {
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


export const GAME_OVER_HAPPY_LOW: GameEvent = {
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

export const GAME_OVER_HAPPY_HIGH: GameEvent = {
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

export const SP_GAME_EVENTS: GameEvent[] = [
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
                specialStatus: {
                    ss:  SS.Internation,
                    text: "あなたは国際学部で、人との交流に関するイベントが出ます。"
                }
            },
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: '情報科学部',
                specialStatus: {
                    ss: SS.CS,
                    text: "あなたは情報科学部で、情報系のクイズが出ます。"
                }

            },
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: '芸術学部',
                specialStatus: {
                    ss: SS.Art,
                    text: "あなたは芸術学部で、芸術系のイベントが出ます。"
                }            },
        ]
    },
    {
        header: EventType.Special,
        context: '国際学部へようこそ！あなたはどんな人でも楽しく話せます！たくさんお友達を作りましょう！',
        reactions: [
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: '了解',
            },
        ]
    },
    {
        header: EventType.Special,
        context: '情報科学部へようこそ！あなたはとても頭がいい人で、どんな積分微分はあなたにとってたいやすもの。いっぱい知識を勉強しましょう！',
        reactions: [
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: '了解',
            },
        ]
    },
    {
        header: EventType.Special,
        context: '芸術学部へようこそ！あなたはセンスを持っていて、素晴らしい作品を作れるように頑張りましょう！',
        reactions: [
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: '了解',
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
                specialStatus: {
                    ss: SS.Korona,
                    text: "あなたはコロナにかかりました。生活は色々が変わります。"
                }            },

        ]
    },

]

export const SP_EVENT_DAYS_BEER: GameEvent = {
    header: EventType.Special,
    context: '成人になりました！お酒を飲めるようになりました。あなたはお酒が好きですか。',
    reactions: [
        {
            effects: [
                {
                    status: Status.None,
                    value: 0
                },
            ],
            button: '好き',
            specialStatus: {
                ss: SS.Beer,
                text: "あなたはお酒が大好きで、お酒に関するイベントが出ます。"
            }        },
        {
            effects: [
                {
                    status: Status.None,
                    value: 0
                },
            ],
            button: '好きじゃない',
        },

    ]
}
