import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const FieldContainer = styled.View`
  background-color: #999;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Field = styled.TextInput.attrs({
  placeholderTextColor: '#fff'
})`
  padding: 10px 20px;
`;

export const Message = styled.Text``;
