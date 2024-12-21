const data = [
  {
    name: '1',
    slug: 'abc',
  },
  {
    name: '2',
    slug: 'revel',
  },
  {
    name: '3',
    slug: 'clover',
  },
  {
    name: '4',
    slug: 'clover-flex',
  },
  {
    name: '5',
    slug: 'rpower',
  },
];

const paths = data.flatMap(item =>
  ['es', 'en'].map(locale => ({
    params: {
      pos: item.slug,
    },
    locale,
  })),
);

console.log(paths);
