import { Participation } from '../participation-api/participation';

export interface Result {
  reasoning: string;
  winners: Participation[];
}
