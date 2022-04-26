import {
  Box,
  BoxProps,
  Button,
  Center,
  HStack,
  Stack,
  StackDivider,
  StackProps,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import { useLocation } from 'react-router'
import { ColorModeSwitcher } from '../Buttons/ColorModeSwitcherButton'
import { NavLink } from './NavLink'
import { NavList } from './NavList'
import { NavListItem } from './NavListItem';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact-us' },
  // { label: 'Technologies', href: '/technologies' },
  { label: 'Blog', href: '/blogs' },
]

const MobileNavContent = (props: BoxProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const textColor = useColorModeValue('dark', 'white');
  return (
    <Box {...props}>
      <Center
        as="button"
        p="2"
        fontSize="2xl"
        onClick={onToggle}
      >
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </Center>
      <NavList
        pos="absolute"
        insetX="0"
        bg={useColorModeValue('gray.100', 'gray.900')}
        top="64px"
        zIndex={10}
        animate={isOpen ? 'enter' : 'exit'}
      >
        <Stack spacing="0" divider={<StackDivider borderColor="whiteAlpha.200" />}>
          {links.map((link, index) => (
            <NavListItem key={index}>
              <NavLink.Mobile to={!link.href ? '/' : link.href} color={location.pathname === link.href ? '#F04037' : textColor}>{link.label}</NavLink.Mobile>
            </NavListItem>
          ))}
        </Stack>
      </NavList>
    </Box>
  )
}

const DesktopNavContent = (props: StackProps) => {
  const location = useLocation();
  return (
    <HStack spacing="8" {...props}>
      {links.map((link, index) => (
        <NavLink.Desktop key={index} color={location.pathname === link.href ? '#F04037' : 'inherit'} to={!link.href ? '/' : link.href}>
          {link.label}
        </NavLink.Desktop>
      ))}
    </HStack>
  )
}

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
}
