import * as React from 'react';
import {
    Box,
    Heading,
    Stack,
    StackDivider,
    Text,
    useColorModeValue,
    BoxProps,
    Flex
} from '@chakra-ui/react';

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

export default function Stats() {
    return (
        <Box as="section" px={{ base: '6', md: '8' }} py={12}>
            <Flex 
                mb="12" 
                justifyContent={'center'} 
                px={{ base: 12, md: 28 }} 
                gap={6}
                direction={{base: 'column', md: 'row'}}
                textAlign={{base: 'center', md: 'inherit'}}
            >
                <Heading
                    size="xl"
                    maxW={'8xl'}
                    fontWeight={'medium'}
                    fontSize={'4xl'}
                    letterSpacing={'wide'}
                    lineHeight="45px">
                    Why should you consider <br />
                    MLSDev as your <br />
                    software development company?
                </Heading>
                <Text
                    fontSize="lg"
                    maxW={'xl'}
                    lineHeight={'30px'}
                    color={useColorModeValue('gray.600', 'whiteAlpha.700')}
                >
                    According to our 11+ years of development experience, gained knowledge, and tech expertise, we can work along with you to create game-changing digital products. Our IT development company has fine-tuned their software development services and SDLC process in order to build solutions that are exactly in line with your needs, market conditions, and a great price-quality ratio.
                </Text>
            </Flex>
            <Stack spacing="8" direction={{ base: 'column', md: 'row' }} divider={<></>}>
                <Stat title="People are already reading this book and improving!" value="50K+" />
                <Stat title="Satisfaction rate comes from our awesome customers." value="96%" />
                <Stat title="Average customer ratings we have got from Amazon users." value="4.9/5.0" />
            </Stack>
        </Box>
    )
}
