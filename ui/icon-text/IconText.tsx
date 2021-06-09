import Icon from '@chakra-ui/icon';
import { Text } from '@chakra-ui/layout';
import { As } from '@chakra-ui/system';
import React from 'react';

export type IconTextProps = {
  icon: As;
  text: string | number;
  href?: string;
};

export const IconText: React.FC<IconTextProps> = ({ href, icon, text }) => (
  <Text>
    <Text>
      <a href={href}>
        <Icon as={icon} /> {text}
      </a>
    </Text>
  </Text>
);
