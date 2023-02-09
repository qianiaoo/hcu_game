import {EventType, GameEvent, SS, Status} from "./GameEvents";

export const LoveEvents: GameEvent[] = [
    {
        conditions: [{
            status: Status.Love,
            value: 50
        }],
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
                specialStatus: {
                    ss: SS.GirlFriend,
                    text: "あなたは彼女がいます。幸せですね。"
                }            },
        ]
    },
]
