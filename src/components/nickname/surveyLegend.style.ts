import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 6.5rem;
  margin-top: 3rem;
  p {
    font-size: ${({ theme }) => theme.fs32};
    font-weight: ${({ theme }) => theme.fw700};
    color: ${({ theme }) => theme.primary_deep_blue};
    span {
      font-size: ${({ theme }) => theme.fs24};
      color: ${({ theme }) => theme.gray900};
    }
  }
`;
