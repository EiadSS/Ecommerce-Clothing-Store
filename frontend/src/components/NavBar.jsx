import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import Title from './Title'
import './stylesheet.css'
import { Button, ButtonGroup } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <Title className='navCenter' />
            <Tabs position="relative" variant="unstyled" className='NavCenter'>
                <TabList>
                    <Tab>Shirts</Tab>
                    <Tab>Pants</Tab>
                    <Tab>Shoes</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="blue.500"
                    borderRadius="1px"
                />
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <div className='navRight'>
                <Button colorScheme='blue'>Button</Button>
                <Button colorScheme='blue'>Button</Button>
            </div>
        </div>
    )
}

export default NavBar