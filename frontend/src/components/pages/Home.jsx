import React from 'react'
import { Card, CardBody, Stack, Image, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react';
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer'
const Home = ({ user }) => {
    const image1 = 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211935180001_alternate10?$plpDeskRFAlt$';
    const image2 = 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211935180001_lifestyle?$plpDeskRF$';

    const image3 = 'url("src/utils/images/s7-1474895_alternate10.webp")';
    const image4 = 'url("src/utils/images/s7-1474895_lifestyle.jpg")';

    const image5 = 'url("/src/utils/images/s7-1485221_alternate5.webp")';
    const image6 = 'url("/src/utils/images/s7-1485221_lifestyle.webp")';

    const [image, setImage] = useState(image1);

    const [image2V, setImage2] = useState(image2);

    const [image3V, setImage3] = useState(image3);
    return (
        <div>
            <Header user={user}/>
            <NavBar user={user}/>
            <div className='Body'>
                <Card maxW='sm' className='card1'>
                    <CardBody>
                        <Image className='image1'
                            style={{ content: image }}
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
                            style={{ content: image2V }}
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
                            style={{ content: image3V }}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            src='https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI211946167001_alternate10?$plpDeskRFAlt$'
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