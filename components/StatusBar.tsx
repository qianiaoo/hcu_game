import React, {useState} from 'react';
import {
    Button,
    HStack,
    Icon,
    Modal,
    ModalBody, ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Tag, Text, useDisclosure
} from "@chakra-ui/react";
import {SpecialStatus} from "../static/GameEvents";

type StatusBarProps = {
    ssList: SpecialStatus[]
}
const StatusBar = ({ssList}: StatusBarProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [clickedTag, setClickedTag] = useState<SpecialStatus>();

    return (
        <>        <HStack m={'10px'}>
            {ssList.map((s,i) => <Tag as={'button'} onClick={() => {setClickedTag(s); onOpen()}} key={s.text}>{s.ss}</Tag>)}
        </HStack>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{clickedTag && clickedTag.ss}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{clickedTag && clickedTag.text}</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            了解
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>


    );
};

export default StatusBar;
