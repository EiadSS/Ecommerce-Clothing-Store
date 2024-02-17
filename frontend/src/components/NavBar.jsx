import React from 'react'
import './stylesheet.css'
import { Button, Link } from '@chakra-ui/react'
import { IconButton, Icon} from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon, EmailIcon, MoonIcon, SearchIcon} from '@chakra-ui/icons'
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div className='bg-image'>
            <div className='NavBar'>
                <ChakraLink as={ReactRouterLink} to="/" className='title' colorScheme='white' variant='ghost' fontSize={'40px'}>
                    Polo Shop
                </ChakraLink>
                <div className='navMiddle'>
                    <ChakraLink as={ReactRouterLink} to="/shirts" colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Shirts
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to="/pants" colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Pants
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to="/shoes"colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Shoes
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to="/" colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Home
                    </ChakraLink>
                    <Link colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Gifts
                    </Link>
                    <Link colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Sale
                    </Link>
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
                    <h1>POLO 2024</h1>
                    <h1 >By RALPH LAUREN</h1>
                </div>
                <IconButton right='30px' colorScheme='gray' aria-label='Search database' icon={<ArrowForwardIcon width={'25px'} height={'25px'} />} />
            </div>
        </div>
    )
}

export default NavBar