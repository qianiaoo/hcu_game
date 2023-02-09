import React from 'react';
import {
    Button,
    Card,
    Text,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Stack,
    VStack,
    Center,
    SimpleGrid
} from "@chakra-ui/react";
import {GameEvent, Reaction} from "../static/GameEvents";



const colorList = ['blue', 'green', 'yellow']


type EventProps = GameEvent & {
    handleReact: (e: Reaction) => void
}

const EventCard = ({header, context, reactions, handleReact} : EventProps) => {


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
                <VStack w={'100%'} >
                    {reactions.map((e, i) => <Button minW={'30vh'} key={i} onClick={() => handleReact(e)} colorScheme={colorList[i]}>
                        {e.button}
                    </Button>)}

                </VStack>
            </CardFooter>
        </Card>
    );
};

export default EventCard;
