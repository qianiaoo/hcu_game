import React, {useEffect, useState} from 'react';
import {Box, Flex, HStack, Spacer, Text} from "@chakra-ui/react";

type HeaderProps = {
    money: number,
    happy: number,
    gpa: number
}
const Header = ({money, happy, gpa}: HeaderProps) => {

    const [happyStatus, setHappyStatus] = useState('🫤');

    useEffect(() => {
        if (happy < 5) {
             setHappyStatus("鬱");
        } else if (happy >= 5 && happy < 10) {
             setHappyStatus("😭");
        } else if (happy >= 10 && happy < 20) {
             setHappyStatus('😢');
        } else if (happy >= 20 && happy < 30) {
             setHappyStatus('😞');
        } else if (happy >= 30 && happy < 40) {
             setHappyStatus('☹️');
        }else if (happy >= 40 && happy < 50) {
             setHappyStatus('🙁');
        }else if (happy == 50) {
             setHappyStatus('🫤');
        }else if (happy >= 51 && happy < 60) {
             setHappyStatus('🙂');
        } else if (happy >= 60 && happy < 70) {
             setHappyStatus('😏');
        }else if (happy >= 70 && happy < 80) {
             setHappyStatus('😀');
        }else if (happy >= 80 && happy < 90) {
             setHappyStatus('😆');
        }else if (happy >= 90 && happy < 95) {
             setHappyStatus('🤣');
        }else if (happy >= 95 && happy < 100) {
            setHappyStatus('🥰');
        } else {
            setHappyStatus('嬉')
        }

    }, [happy]);


    const getEmojiFromHappy = () => {
        if (happy < 5) {
            return setHappyStatus("鬱");
        } else if (happy >= 5 && happy < 10) {
            return setHappyStatus("😭");
        } else if (happy >= 10 && happy < 20) {
            return setHappyStatus('😢');
        } else if (happy >= 20 && happy < 30) {
            return setHappyStatus('😞');
        } else if (happy >= 30 && happy < 40) {
            return setHappyStatus('☹️');
        }else if (happy >= 40 && happy < 50) {
            return setHappyStatus('🙁');
        }else if (happy == 50) {
            return setHappyStatus('🫤');
        }else if (happy >= 51 && happy < 60) {
            return setHappyStatus('🙂');
        } else if (happy >= 60 && happy < 70) {
            return setHappyStatus('😏');
        }else if (happy >= 70 && happy < 80) {
            return setHappyStatus('😀');
        }else if (happy >= 80 && happy < 90) {
            return setHappyStatus('😆');
        }else if (happy >= 90 && happy < 95) {
            return setHappyStatus('🤣');
        }else if (happy >= 95 && happy < 100) {
            return setHappyStatus('🥰');
        }
    }

    return (
        <HStack　px={'15px'} justify={"space-between"}>
            <Text fontSize={'18px'} fontWeight={700}>GPA: {gpa.toFixed(1)}</Text>
            <Text fontSize={'18px'} fontWeight={700}>{happyStatus}</Text>
            <Text fontSize={'18px'} fontWeight={700}>金: ¥{money}</Text>
        </HStack>
    );
};

export default Header;
