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
    GirlFriend = 'ð',
    ClubSuiSo = 'ð·',
    Internation = 'ð',
    CS = 'ð¥ï¸',
    Art = 'ð¨',
    Korona = 'ð¦ ',
    Beer = 'ðº',
    Cheater = 'ð¤¥'
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
    Friend = 'åéã¤ãã³ã',
    School = 'å¤§å­¦ã¤ãã³ã',
    Daily = 'æ¥å¸¸ã¤ãã³ã',
    Work = 'ãã¤ãã¤ãã³ã',
    Love = 'æã¤ãã³ã',
    Special = 'ç¹å¥ã¤ãã³ã',
    OVER = 'GAVE OVER',
    Rule = 'ã«ã¼ã«èª¬æ'
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
    context: "ãã®ã²ã¼ã ã¯åºå³¶å¸ç«å¤§å­¦ã®å¹³å¡ãªæ¥å¸¸ãã·ãã¥ã¬ã¼ã·ã§ã³ã²ã¼ã ãããªãã¯å¹³å¡ãªç·å­å¤§å­¦çã¨ãã¦ãå¸ç«å¤§å­¦ãå­¦ã³ãåéãä½ããçæ³ãè¦ã¤ããå®ç¾ãããã®ã ï¼" +
        "æ³¨æãã¦ããã ããã®ã¯ãç»é¢ä¸ã«ã¯3ã¤ã®ã¹ãã¿ã¹ãããã¾ããããããã¯ãGPAãããªãã®å­¦åãè¡¨ããã®ã§ãã" +
        "æ°æã¡ãããªããæ¥½ãããã©ãããè¡¨ããã®ã§ãããéãããªããæã£ã¦ãããéãè¡¨ããã®ã§ãã" +
        "ãã®3ã¤ã®ã¹ãã¿ã¹ã¯Gameã®ã¨ã³ãã£ã³ã°ã¨ç¹ãã£ã¦ããã®ã§ããæ³¨æãã ãããã§ã¯ãæ¥½ããã§ãã ããã",
    reactions: [
        {
            effects: [
                {
                    status: Status.None,
                    value: 0
                },
            ],
            button: 'ã²ã¼ã ã¹ã¿ããï¼',
        },
    ]

}

export const GAME_OVER_GPA_LOW: GameEvent = {
    header: EventType.OVER,
    context: 'ããªãã®GPAãä½ããã¦ãéå­¦ããã',
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
    context: 'ããã§ã¨ãï¼ããªãã®åªç§ã®æç¸¾ã§æµ·å¤å¤§å­¦ã®å¤§å­¦é¢ã«æ¨è¦ãããã¨ã«ãªã£ãï¼ããããé å¼µã£ã¦è¡ãã¾ãããï¼',
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
    context: 'ããã§ã¨ãï¼ãéæã¡ã®ããªãã«ã¯å¤§å­¦ã§åå¼·ããæå³ããªã',
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
    context: 'ããªãããéããªãã¦ãé¤æ­»ãã',
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
    context: 'ããªããé¬±çã«ãªããèªæ®ºããã',
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
    context: 'ããªãã¯ããªããã®ãã®ã§ããã¤ãæ¥½ããããªãã¯äººçã«åã£ã',
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

export const GAME_OVER_DAYS_HIGH: GameEvent = {
    header: EventType.OVER,
    context: 'åæ¥­ããã¦ã¨ããããã¾ãï¼',
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
        context: 'å¥å­¦ããã§ã¨ããããã¾ãï¼åºå³¶å¸ç«å¤§å­¦ã¸ããããï¼å¸ç«å¤§ã§ã¯å½éå­¦é¨ãè¸è¡å­¦é¨ãæå ±ç§å­¦é¨3ã¤ã®å­¦é¨ããããå¹åºãå­¦åãå­¦ã¹ã¾ããããªãã®å­¦é¨ãæãã¦ãã ããï¼',
        reactions: [
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: 'å½éå­¦é¨',
                specialStatus: {
                    ss:  SS.Internation,
                    text: "ããªãã¯å½éå­¦é¨ã§ãäººã¨ã®äº¤æµã«é¢ããã¤ãã³ããåºã¾ãã"
                }
            },
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: 'æå ±ç§å­¦é¨',
                specialStatus: {
                    ss: SS.CS,
                    text: "ããªãã¯æå ±ç§å­¦é¨ã§ãæå ±ç³»ã®ã¯ã¤ãºãåºã¾ãã"
                }

            },
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: 'è¸è¡å­¦é¨',
                specialStatus: {
                    ss: SS.Art,
                    text: "ããªãã¯è¸è¡å­¦é¨ã§ãè¸è¡ç³»ã®ã¤ãã³ããåºã¾ãã"
                }            },
        ]
    },
    {
        header: EventType.Special,
        context: 'å½éå­¦é¨ã¸ããããï¼ããªãã¯ã©ããªäººã§ãæ¥½ããè©±ãã¾ãï¼ãããããåéãä½ãã¾ãããï¼',
        reactions: [
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: 'äºè§£',
            },
        ]
    },
    {
        header: EventType.Special,
        context: 'æå ±ç§å­¦é¨ã¸ããããï¼ããªãã¯ã¨ã¦ãé ­ãããäººã§ãã©ããªç©åå¾®åã¯ããªãã«ã¨ã£ã¦ãããããã®ããã£ã±ãç¥è­ãåå¼·ãã¾ãããï¼',
        reactions: [
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: 'äºè§£',
            },
        ]
    },
    {
        header: EventType.Special,
        context: 'è¸è¡å­¦é¨ã¸ããããï¼ããªãã¯ã»ã³ã¹ãæã£ã¦ãã¦ãç´ æ´ãããä½åãä½ããããã«é å¼µãã¾ãããï¼',
        reactions: [
            {
                effects: [
                    {
                        status: Status.None,
                        value: 0
                    },
                ],
                button: 'äºè§£',
            },

        ]
    },


]

export const SP_EVENT_DAYS_BEER: GameEvent = {
    header: EventType.Special,
    context: 'æäººã«ãªãã¾ããï¼ãéãé£²ããããã«ãªãã¾ãããããªãã¯ãéãå¥½ãã§ããã',
    reactions: [
        {
            effects: [
                {
                    status: Status.None,
                    value: 0
                },
            ],
            button: 'å¥½ã',
            specialStatus: {
                ss: SS.Beer,
                text: "ããªãã¯ãéãå¤§å¥½ãã§ããéã«é¢ããã¤ãã³ããåºã¾ãã"
            }        },
        {
            effects: [
                {
                    status: Status.None,
                    value: 0
                },
            ],
            button: 'å¥½ããããªã',
        },

    ]
}
