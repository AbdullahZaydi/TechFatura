import * as React from 'react';
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = Array.apply(null, Array(9)).map(function (x, i) {
    return {
        id: i,
        title: 'What’s gonna be your question?',
        text: 'Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.',
    };
});

export default function GridWithFAQs() {
    return (
        <Box py={12}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>Frequently Asked Question</Heading>
                <Text color={'gray.600'} fontSize={'md'}>
                    Create custom landing pages with Omega that converts
                </Text>
            </Stack>

            <Container maxW={'full'} px={36} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'}>
                            <VStack align={'start'}>
                                <Text fontWeight={'medium'} fontSize={'xl'}>{feature.title}</Text>
                                <Text color={'gray.600'} lineHeight={'1.5'}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}