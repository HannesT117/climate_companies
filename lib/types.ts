export type Person = {
  name: string;
  image: string;
  phone: string;
  email: string;
};

export type Company = {
  id: string;
  slug: string;
  name: string;
  logo: string;
  street: string;
  zip_code: string;
  city: string;
  country: string;
  employee_count: number;
  revenue: number;
  description: string;
  phone: string;
  email: string;
  website: string;
  contact_persons: Person[];
};
