import {filterAndSort} from '../utils';

export const getUsers = async (filter: string, asc: boolean) => {
  try {
    return await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => filterAndSort(data, filter, asc));
  } catch (e) {
    console.error(e);
  }
};
