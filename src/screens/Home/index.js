import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ListItem from '~/components/ListItem';

import { api } from '~/services';

import * as S from './styles';

export default function Home({ navigation }) {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    const token = await AsyncStorage.getItem('@MBD:token');

    if(!token) {
      navigation.navigate('SignIn');
    }

    const response = await api.get('/auth/users', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    setUsers(response.data.data)
  }

  useEffect(() => {
    setLoading(true)
    getUsers().then(() => setLoading(false))
  }, [])

  return (
    loading
      ? <S.LoadingContainer>
          <ActivityIndicator size="large" color="#333" />
        </S.LoadingContainer>
      : <S.Container>
          <FlatList
            data={users}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <ListItem data={item} />}
          />
        </S.Container>
  );
}

Home.navigationOptions = {
  headerShown: false
}
