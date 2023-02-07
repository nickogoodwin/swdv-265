enum language {
  'perl',
  'linux',
  'ps',
  'regex',
  'xml',
}

export interface IPost {
  id: number;
  user_id: number;
  is_answered: boolean;
  title: string;
  tags: string[];
}
