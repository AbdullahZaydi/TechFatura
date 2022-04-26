import { Box, Flex, useColorModeValue, VisuallyHidden, HStack, useColorModePreference, useColorMode } from '@chakra-ui/react'
import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ColorModeSwitcher } from '../Buttons/ColorModeSwitcherButton'
import { LogoLight, LogoDark } from './Logo'
import { NavContent } from './NavContent'

export default function Header() {
    const [scrollPos, setScrollPos] = useState(0);
    window.onscroll = () => setScrollPos(window.scrollY);
    const { colorMode } = useColorMode();

    const preferredColor = useColorModeValue('dark', 'white');
    const textColor = function() {
        if (colorMode === "light" && scrollPos > 50) return (
            'white'
        )
        return preferredColor;
    }();

    const Logo = () => {
        const LogoPreference = useColorModeValue(
            LogoDark,
            LogoLight
        );
        if (colorMode === "light" && scrollPos > 50) return (
            <LogoLight h={10} />
        )

        return <LogoPreference h={10} />
    }

    return (
        <Box
            position={'fixed'}
            w={'100%'}
            zIndex={10}
        >
            <Box
                as="header"
                height="16"
                bg={scrollPos > 50 ? 'rgba(0,0,0,0.9)' : 'transparent'}
                position="relative"
                transition={'0.4s linear'}
                fontFamily={'Open Sans, Sans Serif'}
                color={textColor}
            >
                <Box
                    height="100%"
                    maxW="7xl"
                    mx="auto"
                    px={{ base: 6, md: 4, lg: 32 }}
                >
                    <Flex
                        as="nav"
                        aria-label="Site navigation"
                        align="center"
                        justify="space-between"
                        height="100%"
                    >
                        <Box as={Link} to={'/'} rel="home">
                            {/* Replace this ⬇️ with your company name */}
                            <VisuallyHidden>Tech Futura</VisuallyHidden>
                            <Logo />
                        </Box>
                        <HStack 
                            display={'flex'} 
                            spacing={8}
                        >
                            <NavContent.Desktop _active={{ border: 'none', outline: 'none', boxShadow: 'none' }} display={{ base: 'none', md: 'flex' }} />
                            <NavContent.Mobile display={{ base: 'flex', md: 'none' }} />
                            <HStack>
                                <ColorModeSwitcher />
                            </HStack>
                        </HStack>

                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}