module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/companies',
        permanent: false,
      },
      {
        source: '/companies',
        destination: '/companies/1',
        permanent: false,
      },
    ];
  },
};
