import React from 'react'
import { Card, CardBody, Stack, Image, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react';
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer'
const Home = ({ user }) => {
    return (
        <div>
            <Header user={user} />
            <NavBar user={user} />
            <div className='Body'>
                <Card maxW='sm' className='card1'>
                    <CardBody>
                        <Image className='image1'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            src='https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211935180001_alternate10?$plpDeskRFAlt$'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Race Jacket</Heading>
                            <Text>
                                The colourful polo race jacket bursts with vibrant hues, reminiscent of a rainbow streaking across the sky.
                                Its dynamic design, adroned with bold patterns and energtic tones, embodies the spirit of speed and style on the race track
                            </Text>
                        </Stack>
                    </CardBody>

                </Card>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            src='https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211935314001_alternate10?$plpDeskRFAlt$'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>White Polo</Heading>
                            <Text>
                                The white button-up polo shirt epitomizes timeless elegance with its crisp, clean lines, offering a classic yet versatile look for any occasion.
                            </Text>
                        </Stack>
                    </CardBody>

                </Card>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            src='https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1470051_alternate10?$plpDeskRF$'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Black Jacket</Heading>
                            <Text>
                                The black polo jacket exudes sleek sophistication, boasting a refined silhouette and understated charm, making it a timeless choice for effortless style.
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </div>
            <Footer />
        </div>
    )
}

export default Home