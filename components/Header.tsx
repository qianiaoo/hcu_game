import React, {useEffect, useState} from 'react';
import {Box, Flex, HStack, Spacer, Text} from "@chakra-ui/react";

type HeaderProps = {
    money: number,
    happy: number,
    gpa: number
}
const Header = ({money, happy, gpa}: HeaderProps) => {

    const [happyStatus, setHappyStatus] = useState('đĢ¤');

    useEffect(() => {
        if (happy < 5) {
             setHappyStatus("éŦą");
        } else if (happy >= 5 && happy < 10) {
             setHappyStatus("đ­");
        } else if (happy >= 10 && happy < 20) {
             setHappyStatus('đĸ');
        } else if (happy >= 20 && happy < 30) {
             setHappyStatus('đ');
        } else if (happy >= 30 && happy < 40) {
             setHappyStatus('âšī¸');
        }else if (happy >= 40 && happy < 50) {
             setHappyStatus('đ');
        }else if (happy == 50) {
             setHappyStatus('đĢ¤');
        }else if (happy >= 51 && happy < 60) {
             setHappyStatus('đ');
        } else if (happy >= 60 && happy < 70) {
             setHappyStatus('đ');
        }else if (happy >= 70 && happy < 80) {
             setHappyStatus('đ');
        }else if (happy >= 80 && happy < 90) {
             setHappyStatus('đ');
        }else if (happy >= 90 && happy < 95) {
             setHappyStatus('đ¤Ŗ');
        }else if (happy >= 95 && happy < 100) {
            setHappyStatus('đĨ°');
        } else {
            setHappyStatus('åŦ')
        }

    }, [happy]);


    const getEmojiFromHappy = () => {
        if (happy < 5) {
            return setHappyStatus("éŦą");
        } else if (happy >= 5 && happy < 10) {
            return setHappyStatus("đ­");
        } else if (happy >= 10 && happy < 20) {
            return setHappyStatus('đĸ');
        } else if (happy >= 20 && happy < 30) {
            return setHappyStatus('đ');
        } else if (happy >= 30 && happy < 40) {
            return setHappyStatus('âšī¸');
        }else if (happy >= 40 && happy < 50) {
            return setHappyStatus('đ');
        }else if (happy == 50) {
            return setHappyStatus('đĢ¤');
        }else if (happy >= 51 && happy < 60) {
            return setHappyStatus('đ');
        } else if (happy >= 60 && happy < 70) {
            return setHappyStatus('đ');
        }else if (happy >= 70 && happy < 80) {
            return setHappyStatus('đ');
        }else if (happy >= 80 && happy < 90) {
            return setHappyStatus('đ');
        }else if (happy >= 90 && happy < 95) {
            return setHappyStatus('đ¤Ŗ');
        }else if (happy >= 95 && happy < 100) {
            return setHappyStatus('đĨ°');
        }
    }

    return (
        <HStack maxW={'450px'}ãpx={'15px'} justify={"space-between"}>
            <Text fontSize={'18px'} fontWeight={700}>GPA: {gpa.toFixed(1)}</Text>
            <Text fontSize={'18px'} fontWeight={700}>{happyStatus}</Text>
            <Text fontSize={'18px'} fontWeight={700}>é: ÂĨ{money}</Text>
        </HStack>
    );
};

export default Header;
