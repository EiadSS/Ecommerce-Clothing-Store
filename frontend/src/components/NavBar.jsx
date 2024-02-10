import React from 'react'
import './stylesheet.css'
import { Button } from '@chakra-ui/react'
import { IconButton, Icon } from '@chakra-ui/react'
import { EmailIcon, MoonIcon, SearchIcon } from '@chakra-ui/icons'
import { FiShoppingCart, FiUser } from "react-icons/fi";

const NavBar = () => {
    return (
        <div className='NavBar'>
            <Button className='title' colorScheme='teal' variant='ghost' fontSize={'40px'}>
                Polo Shop
            </Button>
            <div className='navMiddle'>
                <Button colorScheme='teal' variant='ghost' fontSize={'15px'}>
                    Shirts
                </Button>
                <Button colorScheme='teal' variant='ghost' fontSize={'15px'}>
                    Pants
                </Button>
                <Button colorScheme='teal' variant='ghost' fontSize={'15px'}>
                    Shoes
                </Button>
                <Button colorScheme='teal' variant='ghost' fontSize={'15px'}>
                    Home
                </Button>
                <Button colorScheme='teal' variant='ghost' fontSize={'15px'}>
                    Gifts
                </Button>
                <Button colorScheme='teal' variant='ghost' fontSize={'15px'}>
                    Sale
                </Button>
            </div>
            <div className='navRight'>
                <IconButton aria-label='Search database' icon={<SearchIcon />} />
                <IconButton aria-label='Search database' icon={<EmailIcon />} />
                <IconButton aria-label='Search database' icon={<MoonIcon />} />
                <div width='80px' height='80px' className='cart-person'>
                    <Icon as={FiShoppingCart} width={'20px'} height={'20px'} />
                    <Icon as={FiUser} width={'20px'} height={'20px'} />
                </div>
            </div>
        </div>
    )
}

export default NavBar