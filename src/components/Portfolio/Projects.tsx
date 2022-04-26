import * as React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Container,
    useColorModeValue,
    SimpleGrid,
    Icon,
    Button,
    Image
} from '@chakra-ui/react';
import MobileImage1 from '../../assets/images/mobile-image-1.svg';
import MobileImage2 from '../../assets/images/mobile-image-2.svg';
import MobileImage3 from '../../assets/images/mobile-image-3.svg';

export default function Projects() {
    return (
        <Box
            fontFamily={'Open Sans, Sans Serif'}
            pt={32}
        >
            <Container maxW={'7xl'} textAlign={'center'} as={Stack} spacing={12}>
                <Stack spacing={4} align={'center'}>
                    <Heading
                        w={{ base: '80%', md: '50%' }}
                        fontWeight={'500'}
                        fontStyle={'normal'}
                    >
                        Latest Projects
                    </Heading>
                    <Text
                        w={{ base: '80%', md: '60%' }}
                        lineHeight={'39px'}
                        opacity={0.7}
                    >
                        Our software development company is really proud of the great clients that we’ve had a chance to cooperate with. We enjoy long-term partnerships and each step during the creation of the best products within different niches, which are as follows:
                    </Text>
                </Stack>
                <Flex
                    w={'full'}
                    align={'center'}
                    px={12}
                >
                    <SimpleGrid textAlign={'start'} alignItems={'center'} spacing={'20'} columns={{ base: 1, md: 2 }}>
                        <Flex>
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
                                src={MobileImage1}
                                objectFit={'cover'}
                            />
                        </Flex>
                        <Stack spacing={8}>
                            <Text
                                textTransform={'uppercase'}
                                color={'white'}
                                fontWeight={600}
                                fontSize={'sm'}
                                bg={'#5454D4'}
                                p={2}
                                alignSelf={'flex-start'}
                                rounded={'md'}>
                                App Development
                            </Text>
                            <Heading>Project Title</Heading>
                            <Text color={'gray.500'} w={{ base: '100%', md: '80%' }} fontSize={'lg'}>
                                Cut from geometric cotton lace mimicking decorative fretwork, this blouse reveals hints of skin offsetting its long-sleeve silhouette
                            </Text>
                            <Button
                                rounded={'5'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                w={{ base: '100%', md: '201px' }}
                                h={'60px'}
                                bg={'#F0544C'}
                                color={'#fff'}
                                _hover={{ bg: '#d34942' }}
                                _active={{ bg: '#a33934' }}
                            >
                                Learn More
                            </Button>
                        </Stack>
                    </SimpleGrid>
                </Flex>
                <Flex
                    w={'full'}
                    align={'center'}
                    px={12}
                >
                    <SimpleGrid textAlign={'start'} alignItems={'center'} spacing={'20'} columns={{ base: 1, md: 2 }}>
                        <Flex
                            display={{ base: 'flex', md: 'none'}}
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
                                src={MobileImage2}
                                objectFit={'cover'}
                            />
                        </Flex>
                        <Stack spacing={8}>
                            <Text
                                textTransform={'uppercase'}
                                color={'white'}
                                fontWeight={600}
                                fontSize={'sm'}
                                bg={'#5454D4'}
                                p={2}
                                alignSelf={'flex-start'}
                                rounded={'md'}>
                                App Development
                            </Text>
                            <Heading>Project Title</Heading>
                            <Text color={'gray.500'} w={{ base: '100%', md: '80%' }} fontSize={'lg'}>
                                Cut from geometric cotton lace mimicking decorative fretwork, this blouse reveals hints of skin offsetting its long-sleeve silhouette
                            </Text>
                            <Button
                                rounded={'5'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                w={{ base: '100%', md: '201px' }}
                                h={'60px'}
                                bg={'#F0544C'}
                                color={'#fff'}
                                _hover={{ bg: '#d34942' }}
                                _active={{ bg: '#a33934' }}
                            >
                                Learn More
                            </Button>
                        </Stack>
                        <Flex
                            display={{ base: 'none', md: 'flex'}}
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
                                src={MobileImage2}
                                objectFit={'cover'}
                            />
                        </Flex>
                    </SimpleGrid>
                </Flex>
                <Flex
                    w={'full'}
                    align={'center'}
                    px={12}
                >
                    <SimpleGrid textAlign={'start'} alignItems={'center'} spacing={'20'} columns={{ base: 1, md: 2 }}>
                        <Flex>
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
                                src={MobileImage3}
                                objectFit={'cover'}
                            />
                        </Flex>
                        <Stack spacing={8}>
                            <Text
                                textTransform={'uppercase'}
                                color={'white'}
                                fontWeight={600}
                                fontSize={'sm'}
                                bg={'#5454D4'}
                                p={2}
                                alignSelf={'flex-start'}
                                rounded={'md'}>
                                App Development
                            </Text>
                            <Heading>Project Title</Heading>
                            <Text color={'gray.500'} w={{ base: '100%', md: '80%' }} fontSize={'lg'}>
                                Cut from geometric cotton lace mimicking decorative fretwork, this blouse reveals hints of skin offsetting its long-sleeve silhouette
                            </Text>
                            <Button
                                rounded={'5'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                w={{ base: '100%', md: '201px' }}
                                h={'60px'}
                                bg={'#F0544C'}
                                color={'#fff'}
                                _hover={{ bg: '#d34942' }}
                                _active={{ bg: '#a33934' }}
                            >
                                Learn More
                            </Button>
                        </Stack>
                    </SimpleGrid>
                </Flex>
            </Container>
        </Box>
    );
}
