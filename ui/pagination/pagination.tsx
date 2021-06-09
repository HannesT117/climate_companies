import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Container, ContainerProps, HStack } from '@chakra-ui/layout';
import React from 'react';
import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from 'react-icons/md';

export type PaginationProps = ContainerProps & {
  currentPage: number;
  totalPages: number;
  onPageClick: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageClick,
  ...props
}) => {
  const hasPrevious = currentPage > 0;
  const hasNext = currentPage < totalPages;

  return (
    <Container {...props} width="100%" centerContent>
      <HStack spacing={3}>
        <Button onClick={() => onPageClick(1)}>
          <Icon as={MdFirstPage} />
        </Button>
        <Button
          onClick={() => onPageClick(currentPage - 1)}
          disabled={!hasPrevious}>
          <Icon as={MdChevronLeft} />
        </Button>
        <Button
          onClick={() => onPageClick(currentPage + 1)}
          disabled={!hasNext}>
          <Icon as={MdChevronRight} />
        </Button>
        <Button onClick={() => onPageClick(totalPages)}>
          <Icon as={MdLastPage} />
        </Button>
      </HStack>
    </Container>
  );
};
