import {User} from './User';

export type ListProps = {
  data: User[];
  onFilter: (text: string) => void;
  onSort: () => void;
  asc: boolean;
  loading: boolean;
};
