import Header from "../components/Header";
import {Box, Button} from "@chakra-ui/react";
import StatusBar from "../components/StatusBar";
import Event from "../components/Event";
import {
    Effect,
    GAME_EVENTS,
    GAME_OVER_GPA_HIGH,
    GAME_OVER_GPA_LOW, GAME_OVER_HAPPY_HIGH, GAME_OVER_HAPPY_LOW, GAME_OVER_MONEY_HIGH, GAME_OVER_MONEY_LOW,
    Reaction,
    SP_GAME_EVENTS,
    Status
} from "../static/GameEvents";
import {useEffect, useState} from "react";

const Home = () => {

    const [love, setLove] = useState(0);
    const [happy, setHappy] = useState(50);
    const [gpa, setGpa] = useState(2);
    const [money, setMoney] = useState(10000);
    const [ssList, setSsList] = useState<string[]>([]);
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

    const handleReact = (r: Reaction) => {
        const es = r.effects;
        if (r.ss) {
            setSsList(ssList.concat(r.ss))
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
        const randomIndex = Math.ceil(Math.random() * events.length);
        const randomEvent = events[randomIndex];
        setEvent(randomEvent);
        isGameOver()
    }
    const [event, setEvent] = useState(SP_GAME_EVENTS[0]);

    const events = GAME_EVENTS;



    return (
        <Box>
            <Header gpa={gpa} money={money} happy={happy}/>
            <StatusBar ssList={ssList}/>
            {event ? <Event header={event.header} context={event.context} reactions={event.reactions}
                            handleReact={handleReact}/> :
                <Event header={SP_GAME_EVENTS[1].header} context={SP_GAME_EVENTS[1].context}
                       reactions={SP_GAME_EVENTS[1].reactions} handleReact={handleReact} />
                }

                </Box>
                )
            }

            export default Home
