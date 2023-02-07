import React, {useState, useMemo, useEffect} from 'react';
import List from './List';
import ListControls from './ListControls';
import {debounce} from 'lodash';
import {filterAndSort} from '../utils';

export default function ListContainer() {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers(filter, asc);
  }, [filter, asc]);

  const getUsers = (filter: string, asc: boolean) => {
    setLoading(true);
    setTimeout(() => {}, 1000);
    console.log(filter);
    try {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => filterAndSort(json, filter, asc))
        .then(data => {
          setData(data);
          setLoading(false);
        });
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const onFilter = (text: string) => {
    setFilter(text);
  };

  const debouncedFilter = useMemo(() => debounce(onFilter, 300), []);

  const onSort = () => setAsc(!asc);

  return (
    <List
      Controls={ListControls}
      data={data}
      asc={asc}
      onFilter={debouncedFilter}
      onSort={onSort}
      loading={loading}
    />
  );
}
