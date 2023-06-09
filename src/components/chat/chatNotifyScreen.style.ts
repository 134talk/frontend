import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    font-size: ${({ theme }) => theme.fs20};
    font-weight: ${({ theme }) => theme.fw700};
    text-align: center;
    &:nth-child(2) {
      padding-top: 2.875rem;
    }
  }
  > img {
    width: 15.875rem;
    height: 18.75rem;
    margin: 2.25rem auto;
  }
`;
