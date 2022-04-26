import React from 'react';
import {
    Stack,
} from '@chakra-ui/react';
import Projects from '../../components/Portfolio/Projects';
import Stats from '../../components/Statistics/Stats';
import Expertise from '../../components/Portfolio/Expertise';
import About from '../../components/Portfolio/About';
import PageHeader from '../../components/Headers/PageHeader';
import Teams from '../../components/Teams/Teams';

export default function AboutUs() {
    return (
        <Stack>
            <PageHeader 
                title='About Us' 
                description='Create custom landing pages with Omega that converts more visitors than any website.' />
            <About />
            <Teams />
            <Expertise />
            <Stats />
        </Stack>
    );
}