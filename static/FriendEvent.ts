import {EventType, GameEvent, SS, Status} from "./GameEvents";

export const FriendEvents: GameEvent[] = [
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
        conditions: [{
            status: SS.Beer
        }],
        header: EventType.Friend,
        context: '友達とお酒飲み過ぎて病院に運ばれた。医療費1万円',
        reactions: [
            {
                effects: [
                    {
                        status: Status.Happy,
                        value: 10
                    },
                ],
                button: '乾杯！',
            },
        ]
    },

]
