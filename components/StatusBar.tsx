import React from 'react';
import {HStack, Icon, Tag} from "@chakra-ui/react";
import {SlEmotsmile} from "react-icons/sl";

type StatusBarProps = {
    ssList: string[]
}
const StatusBar = ({ssList}: StatusBarProps) => {
    return (
        <HStack m={'10px'}>
            {ssList.map((s,i) => <Tag key={i}>{s}</Tag>)}
        </HStack>
    );
};

export default StatusBar;
