import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../../styles';
import {useAppSelector} from '../hooks/reduxHooks';
import {useGetCoinQuery} from '../services';
import Colors from '../theme/Colors';
import LoadingModal from '../components/LoadingModal';
import type {IPriceIndex} from '../types';
import RateCard from '../components/RateCard';

function Rates(): JSX.Element {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  const [modalVisible, setModalVisible] = useState(false);

  const {data, error, isLoading} = useGetCoinQuery('');

  if (isLoading) {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDarkMode
              ? Colors.dark.ground
              : Colors.light.ground,
          },
        ]}>
        <LoadingModal message="Fetching Coin Data" loading={isLoading} />
      </View>
    );
  } else {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDarkMode
              ? Colors.dark.ground
              : Colors.light.ground,
          },
        ]}>
        {/* <FlatList
          data={Object.values(data!.bpi)}
          renderItem={({item}: {item: IPriceIndex}) => {
            return <RateCard data={item} />;
          }}></FlatList> */}
        <RateCard data={data?.bpi.USD} />
        <RateCard data={data?.bpi.GBP} />
        <RateCard data={data?.bpi.EUR} />
        <Text
          style={{
            color: isDarkMode ? Colors.dark.text : Colors.light.text,
            fontSize: 10,
            marginVertical: 10,
            textAlign: 'center',
          }}>
          {data?.disclaimer}
        </Text>
      </View>
    );
  }
}

export default Rates;
