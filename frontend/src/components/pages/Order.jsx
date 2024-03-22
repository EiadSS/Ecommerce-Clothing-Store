import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    Stack,
    Select,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

const Order = ({cart}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [address, setAddress] = useState('');
    const [payment, setPayment] = useState('');

    const handleAddressChange = (event) => {
        const newAddress = event.target.value;
        setAddress(newAddress);
    }

    const handlePaymentChange = (event) => {
        const newPayment = event.target.value;
        setPayment(newPayment);
    }

    const handleTransaction = () => {

    }

    return (
        <>
            <Button colorScheme='teal' onClick={onOpen}>Finish Transaction</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Complete Order</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={4}>
                            <FormControl>
                                <Input onChange={handleAddressChange} placeholder='Shipping Address' />
                            </FormControl>
                            <FormControl>
                                <Select width='45%' onChange={handlePaymentChange}>
                                    <option value='Visa'>Visa</option>
                                    <option value='Mastercard'>Mastercard</option>
                                    <option value='American Express'>American Express</option>
                                </Select>
                            </FormControl>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='teal.200' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={handleTransaction} colorScheme='teal'>Complete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Order
