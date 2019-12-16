import { Participation } from '../participation-api/participation';
import { Result } from '../result-api/result';
import { User } from '../auth-api/user';

export interface Bet {
  id: string;
  title: string;
  description: string;
  rules: string;
  isStarted: boolean;
  commissioner: User;
  participations: Participation[];
  result: Result;
}
