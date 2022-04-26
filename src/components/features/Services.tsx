import React from 'react';
import { ReactNode, ReactElement } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
    SimpleGrid,
    Icon
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { BookmarkLogo, ChatMessageLogo, LayoutLogo, LoopLogo, SidebarLogo, SpaceshipLogo } from '../misc/Logos';


interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
    bg?: string;
}

const Feature = ({ title, text, icon, bg }: FeatureProps) => {
    const iconColor = useColorModeValue('dark', 'light');
    return (
        <Stack
            textAlign={'center'}
            align='center'
        >
            <Flex
                w={'80%'}
                align={'center'}
                justify={'center'}
            >
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={bg ? iconColor : bg}
                    mb={1}>
                    {icon}
                </Flex>
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text w={'80%'} color={'gray.600'} wordBreak={'break-word'}>{text}</Text>
        </Stack>
    );
};

export default function Services() {
    return (
        <Box
            fontFamily={'Open Sans, Sans Serif'}
        >
            <Container maxW={'7xl'} textAlign={'center'} as={Stack} spacing={12}>
                <Stack spacing={4} align={'center'}>
                    <Heading
                        w={{ base: '80%', md: '50%' }}
                        fontWeight={'500'}
                        fontStyle={'normal'}
                    >
                        How our software development company can help you
                    </Heading>
                    <Text
                        w={{ base: '80%', md: '50%' }}
                        lineHeight={'39px'}
                        opacity={0.7}
                    >
                        Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.
                    </Text>
                </Stack>
                <Stack
                    spacing={{ base: 10, md: 4, lg: 10 }}
                    w={'full'}
                >
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={'24'}>
                        <Feature
                            icon={<Icon as={SidebarLogo} w={8} h={8} />}
                            title={'Web Development'}
                            text={
                                'With lots of unique blocks, you can easily build a page without coding.'
                            }
                            bg={'rgba(84, 84, 212, 0.1)'}
                        />
                        <Feature
                            icon={<Icon as={LayoutLogo} w={8} h={8} />}
                            title={'App Development'}
                            text={
                                'With lots of unique blocks, you can easily build a page without coding.'
                            }
                            bg={'rgba(240, 64, 55, 0.1)'}
                        />
                        <Feature
                            icon={<Icon as={SpaceshipLogo} w={8} h={8} />}
                            title={'Faster Loading'}
                            text={
                                'With lots of unique blocks, you can easily build a page without coding.'
                            }
                            bg={'rgba(254, 220, 90, 0.1)'}
                        />
                        <Feature
                            icon={<Icon as={ChatMessageLogo} w={8} h={8} />}
                            title={'Super Support'}
                            text={
                                'With lots of unique blocks, you can easily build a page without coding.'
                            }
                            bg={'rgba(240, 64, 55, 0.1)'}
                        />
                        <Feature
                            icon={<Icon as={BookmarkLogo} w={8} h={8} />}
                            title={'Rich Documentation'}
                            text={
                                'With lots of unique blocks, you can easily build a page without coding.'
                            }
                            bg={'rgba(254, 220, 90, 0.1)'}
                        />
                        <Feature
                            icon={<Icon as={LoopLogo} w={8} h={8} />}
                            title={'Lifetime Updates'}
                            text={
                                'With lots of unique blocks, you can easily build a page without coding.'
                            }
                            bg={'rgba(84, 84, 212, 0.1)'}
                        />
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}
