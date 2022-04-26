import React from 'react';
import {
    Stack,
    useColorModeValue,
    Box,
    Heading,
    Text,
    Flex,
    Button,
    Spacer,
    Icon
} from '@chakra-ui/react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import Projects from '../../components/Portfolio/Projects';
import Stats from '../../components/Statistics/Stats';
import Expertise from '../../components/Portfolio/Expertise';
import About from '../../components/Portfolio/About';
import PageHeader from '../../components/Headers/PageHeader';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    return (
        <Stack>
            <PageHeader
                title='Portfolio'
                description='Create custom landing pages with Omega that converts more visitors than any website.' />
            <Projects />
            <Expertise />
            <Box as="section">
                <Stack
                    px={{ base: 12, md: 32 }}
                    pb={12}
                    spacing={8}
                >
                    <Heading
                        fontSize={{ base: '4xl', md: '6xl' }}
                        fontWeight={'bold'}
                    >
                        let's try something <br /> completely new together
                    </Heading>
                    <Flex gap={{ base: 4, md: 0 }} align={{ base: 'start', md: 'center' }} direction={{ base: 'column', md: 'row' }}>
                        <Stack fontWeight={'400'} fontSize='xl'>
                            <Text>
                                Drop us a line, and we'll get in touch.
                            </Text>
                            <Text>
                                We'll see if we're a match and how we can help each other.
                            </Text>
                        </Stack>
                        <Spacer />
                        <Link to={'/contact-us'}>
                            <Button
                                w={'276px'}
                                h={'66px'}
                                rounded={'full'}
                                bg={useColorModeValue('gray.900', 'whiteAlpha.900')}
                                _hover={{
                                    bg: useColorModeValue('gray.800', 'whiteAlpha.800'),
                                    color: useColorModeValue('white', 'gray.800')
                                }}
                                _active={{
                                    bg: useColorModeValue('gray.700', 'whiteAlpha.700'),
                                    color: useColorModeValue('white', 'gray.700')
                                }}
                                color={useColorModeValue('white', 'gray.900')}
                                variant={'solid'}
                            >
                                <Flex align={'center'} px={8} w={'full'}>
                                    <Text fontWeight={'bold'} fontSize={'lg'}>
                                        Contact Us
                                    </Text>
                                    <Spacer />
                                    <Icon
                                        as={IoMdArrowRoundForward}
                                        w={6}
                                        h={6}
                                    />
                                </Flex>
                            </Button>
                        </Link>
                    </Flex>
                    <hr style={{ width: '100%', background: useColorModeValue('black', '#2D3748') }} />
                    <Flex gap={{ base: 8, md: 32 }} align={{ base: 'center' }} direction={{ base: 'column', md: 'row' }}>
                        <Stack textAlign={{ base: 'center', md: 'start' }}>
                            <Heading fontSize={'lg'} fontWeight={'medium'}>
                                E-MAIL
                            </Heading>
                            <Text fontSize={'lg'} fontWeight={'normal'}>
                                hello@youremail.com
                            </Text>
                        </Stack>
                        <Stack textAlign={{ base: 'center', md: 'start' }}>
                            <Heading fontSize={'lg'} fontWeight={'medium'}>
                                PHONE NUMBER
                            </Heading>
                            <Text fontSize={'lg'} fontWeight={'normal'}>
                                +921 948 243 101
                            </Text>
                        </Stack>
                    </Flex>
                </Stack>
            </Box>
        </Stack>
    );
}