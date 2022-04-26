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
    Button
} from '@chakra-ui/react';
import { IoMdCheckmarkCircle } from 'react-icons/io';
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

export default function ContactConsultation() {
    return (
        <Box as="section" px={{ base: '6', md: '8' }} py={12}>
            <Flex
                mb="12"
                justifyContent={'center'}
                px={{ base: 20, md: 36, lg: 48 }}
                gap={{ base: 4, md: 6, lg: 8 }}
                direction={{ base: 'column', md: 'row' }}
                textAlign={{ base: 'center', md: 'inherit' }}
                align={'start'}
            >
                <Heading
                    size="xl"
                    maxW={'8xl'}
                    fontWeight={'medium'}
                    fontSize={'4xl'}
                    letterSpacing={'wide'}
                    lineHeight="65px">
                    Like What you see? Then Let’s Talk!
                </Heading>
                <Stack
                    spacing={6}
                    maxW={'xl'}
                    mt={4}
                >
                    <Text
                        fontSize="2xl"
                        fontWeight={'medium'}
                        lineHeight={'30px'}
                    >
                        A consultation with a Client
                        Relationship Manager without any
                        commitment from your side will give you:
                    </Text>
                    <List
                        spacing={3}
                        color={useColorModeValue('gray.600', 'whiteAlpha.700')}
                    >
                        <ListItem>
                            Structured and clear vision of your future application
                        </ListItem>
                        <ListItem>
                            Information about how our software development company guarantees 100% on-time and on-budget delivery
                        </ListItem>
                        <ListItem>
                            Recommendations for choosing the tech stack
                        </ListItem>
                        <ListItem>
                            Advice on further steps
                        </ListItem>
                        <ListItem>
                            Business-side recommendations
                        </ListItem>
                        <ListItem>
                            Rough project estimation for software development
                        </ListItem>
                    </List>
                    <Link to={'/contact-us'}>
                        <Button
                            w={'full'}
                            bg={'#F04037'}
                            color={'white'}
                            _hover={{ bg: '#C31A12' }}
                            _active={{ bg: '#8a1611' }}
                        >
                            Get A Free Consultation
                        </Button>
                    </Link>
                </Stack>
            </Flex>
        </Box>
    )
}
