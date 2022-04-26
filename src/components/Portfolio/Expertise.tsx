import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Flex,
  Container,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function ExpertiseCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '120px' });
  const colorModeVal = useColorModeValue('#413E65', '#a29aff');
  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Healthcare',
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis in quia amet, magnam pariatur repudiandae qui quo itaque, voluptatem quidem reiciendis blanditiis! Officia vel pariatur exercitationem mollitia quod quis nostrum vitae officiis adipisci, neque placeat quasi doloremque saepe natus consequuntur, sunt necessitatibus, eaque eveniet obcaecati labore! Sed, voluptate iusto?",
    },
    {
      title: 'Automobile',
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis in quia amet, magnam pariatur repudiandae qui quo itaque, voluptatem quidem reiciendis blanditiis! Officia vel pariatur exercitationem mollitia quod quis nostrum vitae officiis adipisci, neque placeat quasi doloremque saepe natus consequuntur, sunt necessitatibus, eaque eveniet obcaecati labore! Sed, voluptate iusto?",
    },
    {
      title: 'E-Commerce',
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis in quia amet, magnam pariatur repudiandae qui quo itaque, voluptatem quidem reiciendis blanditiis! Officia vel pariatur exercitationem mollitia quod quis nostrum vitae officiis adipisci, neque placeat quasi doloremque saepe natus consequuntur, sunt necessitatibus, eaque eveniet obcaecati labore! Sed, voluptate iusto?",
    },
    {
      title: 'Social Networking',
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis in quia amet, magnam pariatur repudiandae qui quo itaque, voluptatem quidem reiciendis blanditiis! Officia vel pariatur exercitationem mollitia quod quis nostrum vitae officiis adipisci, neque placeat quasi doloremque saepe natus consequuntur, sunt necessitatibus, eaque eveniet obcaecati labore! Sed, voluptate iusto?",
    }
  ];

  return (
    <Box
      position={'relative'}
      width={'full'}
      py={{ base: 6, md: 12 }}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        position="absolute"
        rounded={'full'}
        left={side}
        display={{ base: 'none', md: 'inline-flex' }}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider ? slider.slickPrev() : null}>
        <IoIosArrowRoundBack size="25px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        position="absolute"
        right={side}
        top={top}
        rounded={'full'}
        bg={'#5454D4'}
        display={{ base: 'none', md: 'inline-flex' }}
        _hover={{ bg: '#3a3a9c' }}
        _active={{ bg: '#24246b' }}
        color={'white'}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider ? slider.slickNext() : null}>
        <IoIosArrowRoundForward size="25px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Stack w={'full'} h={'full'} py={12} px={{ base: 6, md: 32 }}>
            <Stack
              spacing={6}
              mx={6}
              rounded={'lg'}
              p={{ base: 4, md: 12 }}
              boxShadow={'1px 2px 10px 6px rgb(0 0 0 / 15%)'}
            >
              <Flex
                px={2}
                direction={{ base: 'column', md: 'column', lg: 'column', xl: 'row' }}
                gap={{ base: 12, md: 12, lg: 12, xl: 32 }}
                align={'center'}
              >
                <Stack
                  w={'full'}
                  align={'center'}
                >
                  <Box
                    p={12}
                    bg={'rgba(65,62,101, 0.12)'}
                    color={colorModeVal}
                    maxW={'500px'}
                    w={'215px'}
                    textAlign={'center'}
                    fontWeight={"extrabold"}
                    fontSize={"6xl"}
                  >
                    {index + 1}
                  </Box>
                </Stack>
                <Stack spacing={2}>
                  <Text fontWeight={'light'} color={'#5454D4'}>01 / 12</Text>
                  <Heading
                    fontWeight={'bold'}
                    fontSize={'xl'}
                    as={'span'}
                    position={'relative'}
                    _after={{
                      content: "''",
                      width: '70px',
                      height: '15%',
                      position: 'absolute',
                      bottom: -1,
                      left: 0,
                      bg: '#5454D4',
                      zIndex: -1,
                    }}
                  >
                    {card.title}
                  </Heading>
                  <Text mt={4} fontWeight={'light'} lineHeight={'2.0'}>
                    {card.text}
                  </Text>
                </Stack>
              </Flex>
              {/* <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                {card.title}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                {card.text}
              </Text> */}
            </Stack>
          </Stack>
        ))}
      </Slider>
    </Box>
  );
}

export default function Expertise() {
  return (
    <Stack w={'full'} py={16} px={{ base: 6, md: 12, lg: 32 }}>
      <Stack textAlign={'center'}>
        <Heading fontWeight={'bold'} fontSize={'4xl'}>Our Expertise</Heading>
        <Text
          fontWeight={'normal'}
          fontSize={'lg'}
          color={useColorModeValue('gray.800', 'whiteAlpha.600')}
        >
          We analyze your product concept and business specifics, and bind these conclusions with industry standards, market trends, and appropriate tech stacks. Our software development firm builds top products for a particular industry
        </Text>
      </Stack>
      <ExpertiseCarousel />
    </Stack>
  );
}