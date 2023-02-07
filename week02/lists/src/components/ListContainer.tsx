import React, {useState, useMemo, useEffect} from 'react';
import List from './List';
import ListControls from './ListControls';
import {debounce} from 'lodash';
import {filterAndSort} from '../utils';
import MyModal from './MyModal';

export default function ListContainer() {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!data.length) {
      getUsers();
    }
  }, [data]);

  useEffect(() => {
    filterData(filter, asc);
  }, [filter, asc]);

  const filterData = (filter: string, asc: boolean) => {
    setFilteredData(filterAndSort(data, filter, asc));
  };

  const getUsers = () => {
    setLoading(true);
    setTimeout(() => {}, 1000);
    try {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          setData(data);
          setFilteredData(data);
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
    <>
      <MyModal message="Fetching Data" loading={loading}></MyModal>
      <List
        Controls={ListControls}
        data={filteredData}
        asc={asc}
        onFilter={debouncedFilter}
        onSort={onSort}
        loading={loading}
      />
    </>
  );
}
