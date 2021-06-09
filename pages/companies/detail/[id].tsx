import Icon from '@chakra-ui/icon';
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/layout';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Company } from '../../../lib/types';
import { Address } from '../../../ui/address/Address';
import { Page } from '../../../ui/page/Page';
import { Profile } from '../../../ui/profile/Profile';
import { MdEmail, MdEuroSymbol, MdGroup, MdPhone } from 'react-icons/md';
import { Image } from '@chakra-ui/image';
import { ListGrid } from '../../../ui/list-grid/ListGrid';
import { climateApi, fetcher } from '../../../lib/api/api-client';
import { Feature } from '../../../ui/feature/Feature';
import { IconText } from '../../../ui/icon-text/IconText';

type CompanyDetailPageProps = {
  company: Company;
};

const CompanyDetail: NextPage<CompanyDetailPageProps> = ({ company }) => (
  <Page>
    <VStack spacing={3} alignItems="left">
      <Flex flexDir={['column-reverse', null, 'row']} flexWrap="wrap">
        <Flex
          maxW={['100%', null, '60%']}
          h="inherit"
          flexDir="column"
          justifyContent="space-between">
          <Heading>{company.name}</Heading>
          <Address
            street={company.street}
            place={company.city}
            zipCode={company.zip_code}
          />
          <Feature
            heading={
              <Heading as="h3" size="md">
                Key Facts
              </Heading>
            }>
            <IconText icon={MdGroup} text={company.employee_count} />
            <IconText icon={MdEuroSymbol} text={company.revenue} />
            <IconText
              href={`tel:${company.phone}`}
              icon={MdPhone}
              text={company.phone}
            />
            <IconText
              href={`mailto:${company.email}`}
              icon={MdEmail}
              text={company.email}
            />
          </Feature>
        </Flex>
        <Spacer />
        <AspectRatio
          maxW={['100%', null, '560px']}
          ratio={4 / 3}
          w={['100%', null, '35%']}>
          <Image src={company.logo} rounded={'sm'} boxShadow="md"></Image>
        </AspectRatio>
      </Flex>
      <Text>{company.description}</Text>
      <Heading as="h2">Contact Persons</Heading>
      <ListGrid>
        {company.contact_persons.map((person) => (
          <Profile
            key={person.email}
            avatar={person.image}
            name={person.name}
            description={
              <Box>
                <Text>
                  <Icon as={MdEmail} /> {person.email}
                </Text>
                <Text>
                  <Icon as={MdPhone} /> {person.phone}
                </Text>
              </Box>
            }
          />
        ))}
      </ListGrid>
    </VStack>
  </Page>
);

export const getStaticProps: GetStaticProps<
  CompanyDetailPageProps,
  { id: string }
> = async ({ params }) => {
  const companies = await fetcher<Company[]>('/companies', {
    baseURL: climateApi,
  });
  const company =
    params?.id && companies.find((company) => company.id === params.id);

  if (!company) {
    throw Error(`Company not found for id ${params?.id}`);
  }

  return {
    props: { company },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const companies = await fetcher<Company[]>('/companies', {
    baseURL: climateApi,
  });

  return {
    paths: companies.slice(0, 20).map(({ id }) => ({
      params: { id },
    })),
    fallback: 'blocking',
  };
};

export default CompanyDetail;
