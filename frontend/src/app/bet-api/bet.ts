export interface Bet {
  id: string;
  title: string;
  description: string;
  rules: string;
  status: 'CREATED' | 'STARTED' | 'COMPLETED';
}
