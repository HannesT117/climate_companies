import { Avatar } from '@chakra-ui/avatar';
import { Box, Heading, HStack } from '@chakra-ui/layout';
import React from 'react';

export type ProfileProps = {
  avatar: string;
  name: string;
  description: React.ReactNode;
};

export const Profile: React.FC<ProfileProps> = ({
  avatar,
  name,
  description,
}) => (
  <HStack spacing={3} mb="auto">
    <Avatar src={avatar} size="xl" name={name} />
    <Box>
      <Heading as="h2" size="lg">
        {name}
      </Heading>
      {description}
    </Box>
  </HStack>
);
