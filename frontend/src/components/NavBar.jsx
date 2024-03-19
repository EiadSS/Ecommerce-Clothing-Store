import React from 'react'
import './stylesheet.css'
import { IconButton, Icon } from '@chakra-ui/react'
import { EmailIcon, MoonIcon, SearchIcon } from '@chakra-ui/icons'
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div className='bg-image'>
            <div className='NavBar'>
                <ChakraLink as={ReactRouterLink} to="/" className='title' colorScheme='white' variant='ghost' fontSize={'40px'}>
                    Polo Shop
                </ChakraLink>
                <div className='navMiddle'>
                    <ChakraLink as={ReactRouterLink} to="/shirts/men" colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Shirts Men
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to="/shirts/women" colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Shirts Women
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to="/pants/men" colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Pants Men
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to="/pants/women" colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Pants Women
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to="/shoes" colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Shoes
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to="/" colorScheme='white' variant='ghost' fontSize={'15px'}>
                        Home
                    </ChakraLink>
                </div>
                <div className='navRight'>
                    <IconButton colorScheme='white' aria-label='Search database' icon={<SearchIcon className='navRight' />} />
                    <IconButton colorScheme='white' aria-label='Search database' icon={<EmailIcon className='navRight' />} />
                    <IconButton colorScheme='white' aria-label='Search database' icon={<MoonIcon className='navRight' />} />
                    <div width='80px' height='80px' className='cart-person'>
                        <Icon as={FiShoppingCart} width={'20px'} height={'20px'} />
                        <Icon as={FiUser} width={'20px'} height={'20px'} />
                    </div>
                </div>
            </div>
            <div className='arrows'>
                <div className={'midddleBody'}>
                    <h1>POLO 2024</h1>
                    <h1 >By RALPH LAUREN</h1>
                </div>
            </div>
        </div>
    )
}

export default NavBar