import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'The secrets of Understanding quantum mechanics',
  'Mathematical physiscs made easy',
  'Understanding geometry',
  'Principles of thermodynamics',
  'The founder of mathematics',
  'Quantum mechanics 1 summary',
  'Nuclear particles collisions',
  'Nuclear reactor ',
  'Wave fundemental equation',
  'Momentum of a particle',
  'Analytical chemistry',
  'The chemistry of life by Professor Juan',
  'Calculus tips and tricks',
  'Computer archictere designs',
  'Biochemistry',
  'English pronunciation',
  'Linear algebra',
  'Computational analysis',
  'Inside an electron ',
  'Energy particle momentum',
  'Gradients and equation of lines',
  'Schrodinger equations ',
  'Maths formulas',
  'How to think like a negro',
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/assets/images/products/physics_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
