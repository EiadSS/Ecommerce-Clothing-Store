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

const Order = ({ cart, user, setCart }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [address, setAddress] = useState('');
    const [payment, setPayment] = useState('');

    const parseDate = (dateString) => {
        // Array of month names to use for parsing
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        // Split the date string into its components
        const parts = dateString.split(" ");

        // Extract day, month, and year from the parts
        const day = parseInt(parts[2]);
        const monthIndex = months.findIndex((month) => month === parts[1]);
        const year = parseInt(parts[3]);

        // Construct a string in the format expected by SQL (YYYY-MM-DD)
        const sqlDateString = `${year}-${(monthIndex + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        return sqlDateString;
    };

    const method = {
        "Visa": 1,
        "Mastercard": 2,
        "American Express": 3
    }

    const handleAddressChange = (event) => {
        const newAddress = event.target.value;
        setAddress(newAddress);
    }

    const handlePaymentChange = (event) => {
        const newPayment = event.target.value;
        setPayment(method.newPayment);
    }

    const handleTransaction = () => {
        // Generate a random order ID
        const orderId = Math.floor(Math.random() * 10000) + 1;
        // Make a POST request to create the order
        fetch('http://localhost:8080/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: orderId,
                userId: user.id,
                date: parseDate(new Date().toDateString()), // Get the current date
                methodOfPayment: payment,
                shippingAddress: address,
                billingAddress: 'temp',
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to create order');
                }
                console.log('Order created successfully:', orderId);
                // Loop through each item in the cart and make a POST request to record the purchase
                cart.forEach(product => {
                    fetch('http://localhost:8080/api/boughts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            orderId: orderId,
                            productId: product.id,
                        }),
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Failed to record purchase');
                            }
                            console.log('Purchase recorded successfully for product:', product.id);
                        })
                        .catch(error => {
                            console.error('Error recording purchase for product:', product.id, error);
                        });
                });
            })
            .catch(error => {
                console.error('Error creating order:', error);
            });
        alert("The Transaction was complete thank you :)")
        setCart([])
        onClose()
    };


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
                        <Button onClick={handleTransaction} colorScheme='teal'>Complete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Order
