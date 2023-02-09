import {EventType, GameEvent, SS, Status} from "./GameEvents";

export const WorkEvents: GameEvent[] = [
    {
        header: EventType.Work,
        context: 'コンビニでバイトした、5千円もらった。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: 5000
                    },
                ],
                button: '了解'
            },
        ]
    },
    {
        header: EventType.Work,
        context: 'スシローでバイトした、5千円もらった。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: 5000
                    },
                ],
                button: '了解'
            },
        ]
    },
    {
        header: EventType.Work,
        context: 'ヤマトで夜勤のバイトした、7千円もらった。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: 7000
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
        context: '吉野家で夜バイトした、七千円もらった。',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Money,
                        value: 7000
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
        context: 'エンジニアとしてインターンから一万円報酬をもらった',
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
        conditions: [
            {
                status: SS.CS
            }
        ],
        header: EventType.Work,
        context: 'エンジニアとしてインターンから一万円報酬をもらった',
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
]
