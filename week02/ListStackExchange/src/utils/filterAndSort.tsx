import {IPost} from '../types';

export function filterAndSort(data: any, text: string, asc: boolean) {
  return data
    .filter(
      (i: IPost) =>
        text.length === 0 ||
        i.tags.toString().toLowerCase().includes(text.toLowerCase()),
    )
    .sort(
      asc
        ? (a: IPost, b: IPost) => (b.id > a.id ? -1 : a.id === b.id ? 0 : 1)
        : (a: IPost, b: IPost) => (a.id > b.id ? -1 : a.id === b.id ? 0 : 1),
    );
}
