import { Bet } from '../bet-api/bet';

export interface Participation {

  id: string;
  bet: Bet;
  statement: string;

}
