import { Box, HStack, Img, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SocialLink } from './SocialLink'
import { Member as MemberType } from './_data'

interface MemberProps {
  data: MemberType
  children: React.ReactNode
}

export const Member = (props: MemberProps) => {
  const { data, children } = props
  const { image, role, name, twitter, github } = data

  return (
    <Box>
      <Stack direction="column" align={'center'} spacing={6}>
        <Img w="40" h="40" bg={'blue.100'} objectFit="cover" rounded="full" src={image} alt={name} />
        <Box textAlign={'center'}>
          <Text fontWeight="bold" fontSize="xl" mb="2">
            {name}
          </Text>
          <Text color={useColorModeValue('gray.500', 'whiteAlpha.700')} fontWeight="medium">
            {role}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}
