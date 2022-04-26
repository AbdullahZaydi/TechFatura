import { Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
interface PageHeaderProps {
    title: string,
    description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <Stack
            w={'full'}
            h={{base: '60vh', md: '70vh', lg: '80vh'}}
            bgGradient={'linear(to-r, #8D8DEC2B, transparent)'}
            py={32}
            px={{base: 12, md: 24, lg: 32, xl: 72}}
        >
            <Stack
                pos={'relative'}
                top={'50%'}
                transform={"translateY(-50%)"}
            >
                <Heading
                    fontSize={'6xl'}
                    fontWeight={'bold'}
                >
                    {title}
                </Heading>
                <Text
                    fontSize={'xl'}
                    w={{base: '100%', md: '70%'}}
                    fontWeight={'normal'}
                    opacity={'0.9'}
                >
                    {description}
                </Text>
            </Stack>
        </Stack>
    );
}