import React from 'react'
import './stylesheet.css'
import { Button } from '@chakra-ui/react'
import { IconButton, Icon } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon, EmailIcon, MoonIcon, SearchIcon } from '@chakra-ui/icons'
import { FiShoppingCart, FiUser } from "react-icons/fi";

const NavBar = () => {
    return (
        <div className='bg-image'>
            <div className='NavBar'>
                <Button className='title' colorScheme='white' variant='ghost' fontSize={'40px'}>
                    Polo Shop
                </Button>
                <div className='navMiddle'>
                    <Button colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Shirts
                    </Button>
                    <Button colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Pants
                    </Button>
                    <Button colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Shoes
                    </Button>
                    <Button colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Home
                    </Button>
                    <Button colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Gifts
                    </Button>
                    <Button colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Sale
                    </Button>
                </div>
                <div className='navRight'>
                    <IconButton colorScheme='white' aria-label='Search database' icon={<SearchIcon />} />
                    <IconButton colorScheme='white' aria-label='Search database' icon={<EmailIcon />} />
                    <IconButton colorScheme='white' aria-label='Search database' icon={<MoonIcon />} />
                    <div width='80px' height='80px' className='cart-person'>
                        <Icon as={FiShoppingCart} width={'20px'} height={'20px'} />
                        <Icon as={FiUser} width={'20px'} height={'20px'} />
                    </div>
                </div>
            </div>
            <div className='arrows'>
                <IconButton left='30px' colorScheme='gray' aria-label='Search database' icon={<ArrowBackIcon width={'25px'} height={'25px'} />} />
                <div className={'midddleBody'}>
                    <h1>Polo 2023</h1>
                    <h1 >By Eiad</h1>
                </div>
                <IconButton right='30px' colorScheme='gray' aria-label='Search database' icon={<ArrowForwardIcon width={'25px'} height={'25px'} />} />
            </div>
        </div>
    )
}

export default NavBar