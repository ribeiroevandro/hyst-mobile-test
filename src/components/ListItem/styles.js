import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 20px;
`;

export const Message = styled.Text`
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
  font-size: ${({ size }) => size ? `${size}px` : '13px'};
`;

export const Inline = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
