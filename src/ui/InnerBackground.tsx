import { styled } from 'styled-components';

export default function InnerBackground() {
  return <Container />;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.gray100};
  z-index: -999;
`;
