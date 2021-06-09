import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

export type AddressProps = {
  street: string;
  zipCode: number | string;
  place: string;
};

export const Address: React.FC<AddressProps> = ({ street, zipCode, place }) => (
  <Box>
    <Text>{street}</Text>
    <Text>
      <Text as="span">{zipCode}</Text> <Text as="span">{place}</Text>
    </Text>
  </Box>
);
