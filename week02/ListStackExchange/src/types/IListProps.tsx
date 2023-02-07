import {IPost} from './IPost';

export interface IListProps {
  data: IPost[];
  onFilter: (text: string) => void;
  onSort: () => void;
  asc: boolean;
  loading: boolean;
}
