import * as React from 'react';
import {
    Box,
    Heading,
    Flex,
    Image,
    useColorModeValue
} from '@chakra-ui/react';
import About1 from '../../assets/images/about-1.png';
import About2 from '../../assets/images/about-2.png';

export default function About() {
    return (
        <Box as="section" bg={useColorModeValue('white', 'gray.900')} px={{ base: '6', md: '8' }} w={'full'} py={12}>
            <Heading
                textAlign={'center'}
                size="xl"
                mb={8}
                px={{ base: 6, md: 32, lg: 64 }}
                fontWeight={'medium'}
                fontSize={'4xl'}
                letterSpacing={'wide'}
                lineHeight="45px">
                We love working with entrepreneurs who intend to create epic products with great potential!
            </Heading>
            <Flex
                mb="12"
                justifyContent={'center'}
                direction={{ base: 'column', md: 'row' }}
                textAlign={{ base: 'center', md: 'inherit' }}
            >
                <Box>
                    <Image
                        src={About1}
                    />
                </Box>
                <Box>
                    <Image
                        src={About2}
                    />
                </Box>
            </Flex>
        </Box>
    )
}
