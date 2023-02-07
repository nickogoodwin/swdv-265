enum language {
  'perl',
  'linux',
  'ps',
  'regex',
  'xml',
}

export interface IPost {
  id: number;
  language: language;
  userid: number;
  title: string;
}
