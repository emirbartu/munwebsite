import { SimpleGrid } from '@chakra-ui/react';
import { CommitteeCard } from './CommitteeCard';

const committees = [
  {
    name: 'DISEC',
    fullName: 'Disarmament and International Security Committee',
    description: 'Deals with disarmament, global challenges and threats to peace that affect the international community.',
  },
  {
    name: 'UNSC',
    fullName: 'United Nations Security Council',
    description: 'Maintains international peace and security in accordance with the principles of the United Nations.',
  },
  {
    name: 'ECOSOC',
    fullName: 'Economic and Social Council',
    description: 'Coordinates the economic and social work of the United Nations and its specialized agencies.',
  },
  {
    name: 'UNHRC',
    fullName: 'United Nations Human Rights Council',
    description: 'Promotes and protects human rights around the world.',
  },
];

export const CommitteeGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {committees.map((committee) => (
        <CommitteeCard key={committee.name} {...committee} />
      ))}
    </SimpleGrid>
  );
};