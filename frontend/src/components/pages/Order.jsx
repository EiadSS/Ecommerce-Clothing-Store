import React, { useState } from "react";
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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

const Order = ({ cart, user, setCart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState(""); 
  const [orderCompleted, setOrderCompleted] = useState(false); 

  // date as YYYY-MM-DD for SQL
  const getTodaySqlDate = () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const method = {
    Visa: 1,
    Mastercard: 2,
    "American Express": 3,
  };

  const handleAddressChange = (event) => setAddress(event.target.value);

  const handlePaymentChange = (event) => {
    const cardName = event.target.value;
    setPayment(method[cardName] || ""); 
  };

  
  const handleOpen = () => {
    if (cart.length === 0) {
      toast({
        title: "Your cart is empty.",
        description: "Add at least one item before placing an order.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
     setOrderCompleted(false); // 
    onOpen();
  };

  const handleTransaction = async () => {
    // safety double-checks
    if (cart.length === 0) {
      toast({
        title: "Cannot place order.",
        description: "Your cart is empty.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (!payment) {
      toast({
        title: "Select a card type.",
        description: "Please choose Visa, Mastercard, or American Express.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (!address.trim()) {
      toast({
        title: "Enter a shipping address.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    const orderId = Math.floor(Math.random() * 10000) + 1;

    try {
      // create order
      const orderRes = await fetch(
        "https://tasteful-soda-production.up.railway.app/api/orders",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: orderId,
            userId: user.id,
            date: getTodaySqlDate(),
            methodOfPayment: payment, // 1/2/3
            shippingAddress: address,
            billingAddress: "temp",
          }),
        }
      );

      if (!orderRes.ok) throw new Error("Failed to create order");

      // record each product bought
      await Promise.all(
        cart.map((product) =>
          fetch(
            "https://tasteful-soda-production.up.railway.app/api/boughts",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: orderId,
                productId: product.id,
              }),
            }
          ).then((res) => {
            if (!res.ok) throw new Error("Failed to record purchase");
          })
        )
      );

      toast({
        title: "Transaction complete.",
        description: "Thank you for your purchase!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      setCart([]);
      setAddress("");
      setPayment("");
      setOrderCompleted(true); 
      onClose();
    } catch (error) {
      console.error("Error creating order:", error);
      toast({
        title: "Order failed.",
        description: "Something went wrong while processing your order.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <>
    <Button
        colorScheme="teal"
        onClick={handleOpen}
        isDisabled={orderCompleted || cart.length === 0}
        variant={orderCompleted ? "outline" : "solid"}
    >
        {orderCompleted ? "Order Completed" : "Finish Transaction"}
    </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Complete Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl>
                <Input
                  value={address}
                  onChange={handleAddressChange}
                  placeholder="Shipping Address"
                />
              </FormControl>
              <FormControl>
                <Select
                  placeholder="Select card type"
                  width="45%"
                  onChange={handlePaymentChange}
                >
                  <option value="Visa">Visa</option>
                  <option value="Mastercard">Mastercard</option>
                  <option value="American Express">American Express</option>
                </Select>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleTransaction} colorScheme="teal">
              Complete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Order;
