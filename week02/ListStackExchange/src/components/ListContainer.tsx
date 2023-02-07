import React, {useState, useMemo, useEffect} from 'react';
import List from './List';
import ListControls from './ListControls';
import {debounce} from 'lodash';
import {filterAndSort} from '../utils';
import {IPost} from '../types';

export default function ListContainer() {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts(filter, asc);
  }, [filter, asc]);

  const getPosts = (filter: string, asc: boolean) => {
    setLoading(true);
    try {
      return fetch(
        'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow',
      )
        .then(response => response.json())
        .then(json => json.items)
        .then(items =>
          items.map((item: any) => ({
            id: item.question_id,
            user_id: item.owner.user_id,
            title: item.title,
            is_answered: item.is_answered,
            tags: item.tags,
          })),
        )
        .then(data => filterAndSort(data, filter, asc))
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
