import { chakra, Link, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Link as ReactLink, LinkProps } from 'react-router-dom'

const DesktopNavLink = (props: LinkProps) => {
  return (
    <Link
      fontWeight="450"
      display="flex"
      as={ReactLink}
      alignItems="center"
      justifyContent="center"
      borderBottom="2px"
      fontSize={'15px'}
      borderColor="transparent"
      transition="all 0.2s"
      _hover={{
        borderColor: 'currentcolor',
        color: '#F04037',
      }}
      {...props}
    />
  )
}

const MobileNavLink = (props: LinkProps) => {
  return (
    <Link
      display="block"
      textAlign="center"
      fontWeight="bold"
      as={ReactLink}
      py="5"
      fontSize="lg"
      color="white"
      w="full"
      _hover={{
        bg: 'blackAlpha.200',
      }}
      {...props}
    />
  )
}

export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
}
