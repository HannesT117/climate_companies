import { SimpleGrid } from '@chakra-ui/layout';
import React from 'react';

export const ListGrid: React.FC = ({ children }) => (
  <SimpleGrid minChildWidth="280px" spacing={5}>
    {children}
  </SimpleGrid>
);
