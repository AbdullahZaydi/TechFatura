import React from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import Services from '../../components/features/Services';
import CtaWithImage from '../../components/heros/CtaWithImage';
import { HalfRoundBlob, RoundedBlob } from '../../components/misc/Blobs';
import Projects from '../../components/Portfolio/Projects';
import Stats from '../../components/Statistics/Stats';
import Expertise from '../../components/Portfolio/Expertise';
import About from '../../components/Portfolio/About';
import GridWithFAQs from '../../components/FAQs/GridWithFAQs';
import ContactConsultation from '../../components/Contact/ContactConsultation';

export default function LandingPage() {
    return (
        <Stack>
            <CtaWithImage />
            <RoundedBlob
                w={'341px'}
                h={'341px'}
                position={'absolute'}
                top={'70vh'}
                left={'-53vw'}
                zIndex={-1}
                color={'#FEDC5A'}
            />
            <Services />
            <Projects />
            <Stats />
            <Expertise />
            <About />
            <GridWithFAQs />
            <ContactConsultation />
        </Stack>
    );
}