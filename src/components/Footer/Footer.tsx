import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Flex,
    StackDivider,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { LogoLight, LogoDark } from '../Navbar/Logo'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'700'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function LargeWithNewsletter() {
    const Logo = () => {
        const LogoPreference = useColorModeValue(
            LogoDark,
            LogoLight
        );

        return <LogoPreference h={10} />
    }
    return (
        <Stack
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                pt={10}
                pb={4}
                spacing={8}
                align={{ base: 'center', md: 'center' }}
            >
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }}
                    spacing={{base: 12, md: 24, lg: 32}}>
                    <Stack spacing={6} maxW={'md'}>
                        <Box>
                            <Logo />
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>About</ListHeader>
                        <Link as={ReactLink} to={'/about-us'}>Why Us</Link>
                        <Link as={ReactLink} to={'/about-us'}>Our Story</Link>
                        <Link as={ReactLink} to={'/about-us'}>Team Members</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Portfolio</ListHeader>
                        <Link as={ReactLink} to={'/portfolio'}>Projects</Link>
                        <Link as={ReactLink} to={'/portfolio'}>Our Expertise</Link>
                        <Link as={ReactLink} to={'/contact-us'}>Contact Us</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stories</ListHeader>
                        <Link as={ReactLink} to={'/blogs'}>Blog</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Learn</ListHeader>
                        <Link as={ReactLink} to={'/'}>Frequently Asked Questions</Link>
                    </Stack>
                </SimpleGrid>
                <hr style={{width: '100%'}} />
            </Container>
            <Box
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}
                pb={6}
            >
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2022 Chakra Templates. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Stack>
    );
}