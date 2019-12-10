import { Participation } from '../participation-api/participation';
import { Result } from '../result-api/result';

export interface Bet {
  id: string;
  title: string;
  description: string;
  rules: string;
  isStarted: boolean;
  pariticipations: Participation[];
  result: Result;
}
