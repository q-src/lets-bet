import { Bet } from '../bet-api/bet';
import { User } from '../auth-api/user';

export interface Participation {

  id: string;
  bet: Bet;
  statement: string;
  isWon: boolean;
  participant: User;

}
