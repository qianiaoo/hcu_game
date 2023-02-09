import Header from "../components/Header";
import {Box, Button} from "@chakra-ui/react";
import StatusBar from "../components/StatusBar";
import EventCard from "../components/EventCard";
import {
    Condition,
    Effect,
    EventType,
    GAME_OVER_GPA_HIGH,
    GAME_OVER_GPA_LOW,
    GAME_OVER_HAPPY_HIGH,
    GAME_OVER_HAPPY_LOW,
    GAME_OVER_MONEY_HIGH,
    GAME_OVER_MONEY_LOW,
    GAME_RULE_1,
    GameEvent,
    Reaction,
    SP_GAME_EVENTS, SpecialStatus,
    SS,
    Status
} from "../static/GameEvents";
import {useState} from "react";
import {getEvent} from "../utils/EventUtils";
import {assertUnaryExpression} from "@babel/types";

const Home = () => {

    const [love, setLove] = useState(0);
    const [happy, setHappy] = useState(50);
    const [gpa, setGpa] = useState(2);
    const [money, setMoney] = useState(10000);
    const [ssList, setSsList] = useState<SpecialStatus[]>([]);
    let days = 0;

    const isGameOver = () => {
        if (gpa < 0) {
            setEvent(GAME_OVER_GPA_LOW);
        } else if (gpa >= 4) {
            setEvent(GAME_OVER_GPA_HIGH);
        }
        if (happy < 0) {
            setEvent(GAME_OVER_HAPPY_LOW);
        } else if (happy >= 100) {
            setEvent(GAME_OVER_HAPPY_HIGH);
        }
        if (money < 0) {
            setEvent(GAME_OVER_MONEY_LOW);
        } else if (money >= 1000000) {
            setEvent(GAME_OVER_MONEY_HIGH);
        }
    }

    const isIncludesSS = (ss:SS) => {
        ssList.forEach(s => {
            if (s.ss === ss) {
                return true
            }
        })
        return false
    }

    const handleEventUseful = (e: GameEvent) => {
        let isUseful = true;
        e.reactions.forEach((el: Reaction)=> {
            if (el.specialStatus && ssList.includes(el.specialStatus)) {
                isUseful = false;
                return false
            }
        })
        e.conditions?.forEach((ec: Condition) => {
            const status = ec.status
            switch (status) {
                case Status.Gpa:
                    if (gpa < ec.value!) {
                        return false
                    }
                    break
                case Status.Days:
                    if (days < ec.value!) {
                        return false
                    }
                    break
                case SS.GirlFriend:
                    if (!isIncludesSS(SS.GirlFriend)) {
                        return false
                    }
                    break;
                case SS.ClubSuiSo:
                    if (!isIncludesSS(SS.ClubSuiSo)) {
                        return false
                    }
                    break;
                case SS.Internation:
                    if (!isIncludesSS(SS.Internation)) {
                        return false
                    }
                    break;
                case SS.CS:
                    if (!isIncludesSS(SS.CS)) {
                        return false
                    }
                    break;
                case SS.Art:
                    if (!isIncludesSS(SS.Art)) {
                        return false
                    }
                    break;
                case SS.Korona:
                    if (!isIncludesSS(SS.Korona)) {
                        return false
                    }
                    break;
                case SS.Beer:
                    if (!isIncludesSS(SS.Beer)) {
                        return false
                    }
                    break;
                case Status.Happy:
                    if (happy < ec.value!) {
                        return false;
                    }
                    break
                case Status.Money:
                    if (money < ec.value!) {
                        return false
                    }
                    break;
                case Status.News:
                    break;
                case Status.None:
                    break;
                case Status.Love:
                    if (love < ec.value!) {
                        return false
                    }


            }
        })
        return isUseful
    }


    const handleReact = (r: Reaction) => {
        console.log(r)
        if (r.button == "ゲームスタット！") {
            setEvent(SP_GAME_EVENTS[0])
            return
        }
        const es = r.effects;
        if (r.specialStatus) {
            setSsList(ssList.concat(r.specialStatus))
        }
        es.forEach(e => {
            switch (e.status) {
                case Status.Gpa:
                    setGpa(gpa + e.value);
                    break;
                case Status.Happy:
                    setHappy(happy + e.value);
                    break;
                case Status.Money:
                    setMoney(money + e.value);
                    break;
                case Status.Love:
                    setLove(love + e.value);
                    break;
                case Status.News:
                    break;
                case Status.None:
                    break;
            }
        });
        let randomEvent;
        do {
            const randomIndex = Math.floor(Math.random() * events.length);
            randomEvent = events[randomIndex];

        } while (!handleEventUseful(randomEvent))
        setEvent(randomEvent);
        isGameOver()
        days += 1;
    }
    const [event, setEvent] = useState(GAME_RULE_1);

    const events = getEvent();


    return (
        <Box>
            <Header gpa={gpa} money={money} happy={happy}/>
            <StatusBar ssList={ssList}/>
            <EventCard header={event.header} context={event.context} reactions={event.reactions}
                       handleReact={handleReact}/>

        </Box>
    )
}

export default Home
