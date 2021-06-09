import { Container, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';

export type FeatureProps = {
  heading: React.ReactNode;
};

export const Feature: React.FC<FeatureProps> = ({ heading, children }) => (
  <Container p={0} maxW="100%" centerContent mt="auto">
    <Container
      maxW="container.sm"
      p={4}
      bg="gray.200"
      rounded="lg"
      centerContent>
      {heading}
      <SimpleGrid columns={[1, 2]}>{children}</SimpleGrid>
    </Container>
  </Container>
);
