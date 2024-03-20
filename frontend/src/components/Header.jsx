import React from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'
const Header = ({user}) => {
    return (
        <div className='header'>
            <h1>Free Shipping and Returns WIth an Polo Account</h1>
            
            {!user &&
                <div>
                <ChakraLink as={ReactRouterLink} to="/login" colorScheme='white' variant='ghost' fontSize={'10px'}>
                    Login
                </ChakraLink>
                {" / "}
                <ChakraLink as={ReactRouterLink} to="/signup" colorScheme='white' variant='ghost' fontSize={'10px'}>
                    Create now!
                </ChakraLink>
            </div>}
        </div>

    )
}

export default Header