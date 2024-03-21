import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure, RadioGroup, Stack, Radio, Button } from '@chakra-ui/react'

const ProductView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')

  const btnRef = React.useRef(null)
  return (
    <>
      <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        <Stack direction='row'>
          <Radio value='inside'>inside</Radio>
          <Radio value='outside'>outside</Radio>
        </Stack>
      </RadioGroup>

      <Button mt={3} ref={btnRef} onClick={onOpen} colorScheme="black">
        Trigger modal
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {"hello"}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}

export default ProductView