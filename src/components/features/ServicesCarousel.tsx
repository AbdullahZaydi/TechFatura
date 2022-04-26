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
import BlogCard from '../misc/BlogCard';

export function ServicesCarousel() {
    // Settings for the slider
    const settings = {
        arrows: false,
        fade: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: useBreakpointValue({base: 1, md: 3, lg: 3}),
        slidesToScroll: 1,
    };

    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Cloud Computing',
            description:
                "Being a client can be challenging – and we know this by experience. We approach every project as our own, so its success is a big deal for us. The bigger you get, the bigger we get.",
            image: 'https://media.istockphoto.com/photos/shot-of-corridor-in-working-data-center-full-of-rack-servers-and-picture-id943065362?k=20&m=943065362&s=612x612&w=0&h=AracCMEggT3w7_7jrfNZePh4uaOVVwmO7Nr4T6mIdPI='
        },
        {
            title: 'Blockchain Development',
            description:
                "We don't boil an ocean to make a cup of tea. We look for effective solutions and explain that a beautiful brand without content is no good, just as a modern website without traffic.",
            image: 'https://media.istockphoto.com/photos/block-chain-and-technology-concept-picture-id1131340856?k=20&m=1131340856&s=612x612&w=0&h=nRAFTDPS5xQYzQDVY2nreW1UZRN43BSOpTpXy4g3YjA='
        },
        {
            title: 'Aritificial Intelligence',
            description:
                "We don't boil an ocean to make a cup of tea. We look for effective solutions and explain that a beautiful brand without content is no good, just as a modern website without traffic.",
            image: 'https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE='
        },
        {
            title: 'Cyber Security',
            description:
                "We don't boil an ocean to make a cup of tea. We look for effective solutions and explain that a beautiful brand without content is no good, just as a modern website without traffic.",
            image: 'https://media.istockphoto.com/vectors/padlock-with-keyhole-icon-in-personal-data-security-illustrates-cyber-vector-id1172944401?k=20&m=1172944401&s=612x612&w=0&h=HnD2_O3jZloA6ChuydJOxIlNQn_HI9x9O_eiSxQv15E='
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
            <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <BlogCard image={card.image} title={card.title} description={card.description} />
                ))}
            </Slider>
        </Box>
    );
}

export default function ServicesSlider() {
    return (
        <Stack w={'full'} py={16} px={{ base: 6, md: 12, lg: 32 }}>
            <Stack textAlign={'center'}>
                <Heading fontWeight={'bold'} fontSize={'4xl'}>We offers services that clients really wants</Heading>
            </Stack>
            <ServicesCarousel />
        </Stack>
    );
}