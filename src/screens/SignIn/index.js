import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import Button from '~/components/Button';

import { api } from '~/services';

import * as S from './styles';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit() {
    try {
      const response = await api.post('/auth/login', { email, password })
      const { token } = response.data.data

      api.defaults.headers.authorization = `Bearer ${token}`;

      await AsyncStorage.setItem('@MBD:token', token);

      navigation.navigate('Home');

    } catch (error) {
      console.log(error)
    }
  }

  async function clearStorage() {
    return await AsyncStorage.clear()
  }

  return (
    <S.Container>
      <S.FieldContainer>
        <S.Field
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </S.FieldContainer>
      <S.FieldContainer>
        <S.Field
          placeholder="Senha"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </S.FieldContainer>
      <Button onPressFn={onSubmit}>
        Entrar
      </Button>
      <Button onPressFn={() => navigation.navigate('Home')}>
        Listagem
      </Button>
    </S.Container>
  );
}

SignIn.navigationOptions = {
  headerShown: false
}
