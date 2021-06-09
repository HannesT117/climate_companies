import { Box } from '@chakra-ui/layout';
import React from 'react';

export const Page: React.FC = ({ children }) => (
  <Box px={[2, 10]} py={5} maxW={1256} mx="auto">
    {children}
  </Box>
);
