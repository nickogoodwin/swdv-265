import {User} from '../types';

export function filterAndSort(data: any, text: string, asc: boolean) {
  return data
    .filter(
      (i: User) =>
        text.length === 0 ||
        i.name.toString().toLowerCase().includes(text.toLowerCase()) ||
        i.email.toString().toLowerCase().includes(text.toLowerCase()) ||
        i.website.toString().toLowerCase().includes(text.toLowerCase()) ||
        i.phone.toString().toLowerCase().includes(text.toLowerCase()) ||
        i.company.catchPhrase
          .toString()
          .toLowerCase()
          .includes(text.toLowerCase()),
    )
    .sort(
      asc
        ? (a: User, b: User) =>
            b.name > a.name ? -1 : a.name === b.name ? 0 : 1
        : (a: User, b: User) =>
            a.name > b.name ? -1 : a.name === b.name ? 0 : 1,
    );
}
