import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import Link from 'next/link';
import { Heading } from '@chakra-ui/layout';
import { Teaser, TeaserLink, TeaserText } from '../../ui/teaser/Teaser';
import { Profile } from '../../ui/profile/Profile';
import { Address } from '../../ui/address/Address';
import { Page } from '../../ui/page/Page';
import { ListGrid } from '../../ui/list-grid/ListGrid';
import { Company } from '../../lib/types';
import { climateApi, fetcher } from '../../lib/api/api-client';
import { Pagination } from '../../ui/pagination/pagination';
import { useRouter } from 'next/dist/client/router';

type CompaniesPageProps = {
  companies: Company[];
  currentPage: number;
  totalPages: number;
};

const itemsPerPage = 20;

const Companies: NextPage<CompaniesPageProps> = ({
  companies,
  currentPage,
  totalPages,
}) => {
  const router = useRouter();

  const onPageClick = async (page: number) => {
    await router.push(`/companies/${page}`);
  };

  return (
    <Page>
      <Heading as="h1" size="2xl" mb={4}>
        Companies
      </Heading>
      <ListGrid>
        {companies?.map((company) => (
          <Teaser
            key={company.id}
            link={
              <Link href={`/companies/detail/${company.id}`} passHref>
                <TeaserLink>More</TeaserLink>
              </Link>
            }>
            <Profile
              avatar={company.logo}
              name={company.name}
              description={
                <Address
                  street={company.street}
                  place={company.city}
                  zipCode={company.zip_code}
                />
              }
            />
            <TeaserText>{company.description}</TeaserText>
          </Teaser>
        ))}
      </ListGrid>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageClick={onPageClick}
        mt={3}
      />
    </Page>
  );
};

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ page: string }>): Promise<
  GetStaticPropsResult<CompaniesPageProps>
> {
  if (!params?.page) {
    throw Error('Page not defined');
  }
  const currentPage = parseInt(params.page);

  const allCompanies = await fetcher<Company[]>('/companies', {
    baseURL: climateApi,
  });
  const totalPages = Math.ceil(allCompanies.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = currentPage * itemsPerPage;
  const companies = allCompanies.slice(start, end);

  return {
    props: { companies, currentPage, totalPages },
    revalidate: 36000,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const companies = await fetcher<Company[]>('/companies', {
    baseURL: climateApi,
  });
  const totalPages = Math.ceil(companies.length / itemsPerPage);
  const paths = new Array(totalPages - 1)
    .fill('')
    .slice(0, 5)
    .map((_, index) => ({
      params: { page: `${index + 1}` },
    }));

  return { paths, fallback: 'blocking' };
}

export default Companies;
