import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import * as S from './styles';

export default function ListItem({ data }) {

  return (
    <S.Container>
      <S.Message bold size={20}>{data.username}</S.Message>
      <S.Inline>
        <S.Message size={15}>{data.email}</S.Message>
        <FontAwesome
          name={data.interests_completed ? 'check' : 'close'}
          size={15}
          color={data.interests_completed ? 'green' : 'red'}
        />
      </S.Inline>
    </S.Container>
  );
}
