import {EventType, GameEvent, SS, Status} from "./GameEvents";

export const SchoolEvents: GameEvent[] = [
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
        context: '試験に不安で、そこで友達は一緒にカンニングをしましょうと誘われた、どうしましょうか。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: 1
                    },

                ],
                specialStatus: {
                  ss: SS.Cheater,
                  text: 'あなたは試験に不正行為をしました。'
                },
                button: 'やる'
            },
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: -0.2
                    },

                ],

                button: 'やらない'
            },
        ]
    },
    {
        conditions:[
            {
                status: SS.Cheater
            }
        ],
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
        conditions:[
            {
                status: SS.Korona
            }
        ],
        header: EventType.School,
        context: 'コロナで倦怠感と疲労で成績が落ちた',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: -0.1
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
                        value: 10
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
        conditions: [{
            status: SS.Internation,
        }],
        header: EventType.School,
        context: '大学からは地域活動のボランティアを募集しています。参加しますか。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: 0.2
                    },
                    {
                        status: Status.Happy,
                        value: 2
                    }
                ],
                button: '了解'
            },
        ]
    },
    {
        conditions: [{
            status: SS.CS,
        }],
        header: EventType.School,
        context: 'クイズ：ソフトウェア開発のプロセスにおいて，フェーズ間を形式化された文書で受け渡しながら，逐次的に開発を進めるモデルを何と呼ぶか？',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: 0
                    },
                ],
                button: '階層モデル'
            },
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: 0.2
                    },
                ],
                button: 'ウォーターフォールモデル'
            },
        ]
    },
    {
        conditions: [{
            status: SS.CS,
        }],
        header: EventType.School,
        context: 'クイズ：以下のR言語コードを出力はなんですか。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: 0
                    },
                ],
                button: '4'
            },
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: 0.2
                    },
                ],
                button: 'データ'
            },
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: 0.2
                    },
                ],
                button: '10'
            },
            {
                effects: [
                    {
                        status: Status.Gpa,
                        value: 0
                    },
                ],
                button: 'w'
            },
        ]
    },
]
