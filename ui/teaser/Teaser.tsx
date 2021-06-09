import {
  LinkBox,
  LinkOverlay,
  LinkOverlayProps,
  Text,
  VStack,
} from '@chakra-ui/layout';
import React from 'react';

export type TeaserProps = {
  link: React.ReactNode;
};

export const TeaserText: React.FC = ({ children }) => (
  <Text noOfLines={3}>{children}</Text>
);

export const TeaserLink: React.FC = React.forwardRef<
  HTMLAnchorElement,
  LinkOverlayProps
>(function TeaserLink({ children, ...props }, ref) {
  return (
    <LinkOverlay {...props} fontWeight="bold" ref={ref}>
      {children}
    </LinkOverlay>
  );
});

export const Teaser: React.FC<TeaserProps> = ({ children, link, ...props }) => (
  <LinkBox {...props} p={3} borderWidth="1px" borderRadius="lg">
    <VStack spacing={3} alignItems="left" height="100%">
      {children}
      {link}
    </VStack>
  </LinkBox>
);
