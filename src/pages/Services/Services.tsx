import * as React from 'react';
import {
    Box,
    Heading,
    Stack,
    StackDivider,
    Text,
    useColorModeValue,
    BoxProps,
    Flex,
    List,
    ListItem,
    ListIcon,
    Button,
    Image,
    SimpleGrid,
    Spacer,
    Icon
} from '@chakra-ui/react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import ServiceRoundText from '../../assets/images/services-text.png';
import ServiceRoundTextDark from '../../assets/images/services-text-dark.png';
import ServiceBanner from '../../assets/images/service-banner.png';
import ServiceOval from '../../assets/images/service-oval.png';
import ServicesSlider from '../../components/features/ServicesCarousel';
import PageHeader from '../../components/Headers/PageHeader';
import { Link } from 'react-router-dom';

interface StatProps extends BoxProps {
    title: string
    value: string
}
export const Stat = (props: StatProps) => {
    const { title, value, ...rest } = props
    return (
        <Stack direction="column-reverse" py={{ base: 6, md: 0 }} maxW="13.5rem" mx="auto" as="dl" textAlign="center" {...rest}>
            <Box as="dt" textAlign={'center'} color={useColorModeValue('gray.600', 'whiteAlpha.700')} fontWeight="medium">
                {title}
            </Box>
            <Box
                as="dd"
                fontSize="4xl"
                fontWeight="bold"
                color={'#5454D4'}
            >
                {value}
            </Box>
        </Stack>
    )
}

export default function Services() {
    return (
        <>
            <PageHeader
                title='Digital products used by thousands'
                description='We bring the experience wherever you connect with your customers. We create websites that earn, brands that are seen and strategies that work. For small firms and big players, experienced entrepreneurs and ferocious startups.' />
            <Box h={'100vh'} bgImage={ServiceBanner}>
            </Box>
            <Box as={'section'}>
                <Flex
                    w={'full'}
                    align={'center'}
                    px={12}
                    py={12}
                >
                    <SimpleGrid textAlign={'start'} alignItems={'center'} spacing={'20'} columns={{ base: 1, md: 2 }}>
                        <Flex
                            w={'70%'}
                        >
                            {/* <RoundedBlob
                                w={'252px'}
                                h={'252px'}
                                position={'absolute'}
                                left={'-37%'}
                                bottom={'17%'}
                                opacity={0.7}
                                color={'#5454D4'}
                            /> */}
                            <Image
                                rounded={'md'}
                                alt={'feature image'}
                                src={ServiceOval}
                                objectFit={'cover'}
                            />
                        </Flex>
                        <Stack spacing={8}>
                            <Heading>A global strategy, a 360 process</Heading>
                            <Text color={'gray.500'} w={{ base: '100%', md: '80%' }} fontSize={'lg'}>
                                Our team is composed of Art Directors, Strategists, Designers, Social Media Experts, UX, 3D Artists and Developers who have the same passion: creation.
                            </Text>
                            <Text color={'gray.500'} w={{ base: '100%', md: '80%' }} fontSize={'lg'}>
                                An interdisciplinary approach that allows us to think and produce the creative ideas of the future.
                            </Text>
                            <Text color={'gray.500'} w={{ base: '100%', md: '80%' }} fontSize={'lg'}>
                                The versatility and unity of our team allow us to be the unique pilot of the solutions we design.
                            </Text>
                            <Text color={'gray.500'} w={{ base: '100%', md: '80%' }} fontSize={'lg'}>
                                We master all its stages: from the definition of an impactful strategy through the development of solid and coherent visual interfaces, to the production and deployment of assets.
                            </Text>
                            <Text color={'gray.500'} w={{ base: '100%', md: '80%' }} fontSize={'lg'}>
                                This allows us to offer solutions that can be adapted to any touchpoint and support our customers in a long-term development.
                            </Text>
                        </Stack>
                    </SimpleGrid>
                </Flex>
            </Box>
            <Box as="section" bg={useColorModeValue('gray.100', 'gray.700')}>
                <ServicesSlider />
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
        </>
    )
}
