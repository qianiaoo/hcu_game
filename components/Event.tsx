import React from 'react';
import {
    Button,
    ButtonGroup,
    Card,
    Text,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Stack,
    Center,
    SimpleGrid
} from "@chakra-ui/react";
import {Effect, Event, Reaction} from "../static/GameEvents";





const colorList = ['blue', 'red', 'yellow']


type EventProps = Event & {
    handleReact: (e: Reaction) => void
}

const Event = ({header, context, reactions, handleReact} : EventProps) => {


    return (
        <Card maxW='sm' m={'20px'}>
            <CardBody>

                <Stack mt='6' spacing='3'>
                    <Center><Heading size='md'>{header?header:''}</Heading></Center>
                    <Text>
                        {context}
                    </Text>


                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <SimpleGrid  spacing='2'>
                    {reactions.map((e, i) => <Button key={i} onClick={() => handleReact(e)} colorScheme={colorList[i]}>
                        {e.button}
                    </Button>)}

                </SimpleGrid>
            </CardFooter>
        </Card>
    );
};

export default Event;
