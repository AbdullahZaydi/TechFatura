import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import { Member } from './Member'
import { members } from './_data'

export default function Teams() {
  return (
    <Box as="section">
      <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }} py={{ base: '6', md: '12' }}>
        <Heading
          size="xl"
          letterSpacing="tight"
          mb={{ base: '12', md: '20' }}
          fontWeight="medium"
          fontSize={'5xl'}
          textAlign={'center'}
        >
          Meet the team
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="10">
          {members.map((member, id) => (
            <Member key={id} data={member}>
              {member.description}
            </Member>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
