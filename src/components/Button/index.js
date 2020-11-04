import React from 'react';

import * as S from './styles';

export default function Button({ children, onPressFn }) {

  return (
    <S.Container onPress={onPressFn}>
      <S.Message>{children}</S.Message>
    </S.Container>
  );
}
