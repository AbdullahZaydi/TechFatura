import React from "react";
import {
    Box,
    Image,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';

interface BlogProps {
    image: any;
    title: string;
    description: string;
}
export default function BlogCard({ image, title, description }: BlogProps) {
    return (
        <Center mx={3} py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        src={
                            image
                        }
                        objectFit={'cover'}
                    />
                </Box>
                <Stack>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {title}
                    </Heading>
                    <Text color={'gray.500'}>
                        {description}
                    </Text>
                </Stack>
            </Box>
        </Center>
    );
}