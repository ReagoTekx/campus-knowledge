import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatars_${index + 1}.jpg`,
  name: faker.name.fullName(),
  question_asked: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['Corect score', 'Validating answer']),
  difficulty_level: sample([
    'Moderate',clearInterval
    ,
    'Easy',
    'Easy',
    'Too easy',
    'Hard',
    'Easy',
    'Hard',
    'Too easy',
    'Easy',
  ]),
}));

export default users;
