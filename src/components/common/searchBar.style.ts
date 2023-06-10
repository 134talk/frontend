import { styled } from 'styled-components';

type StyleProps = {
  iskeyword: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 2.75rem;
  margin-top: 0.75rem;
  position: relative;
  border: ${({ theme }) => `solid 1px ${theme.gray300}`};
  border-radius: 8px;
  input {
    width: 70%;
    height: 2.75rem;
    padding: 0.75rem;
    margin-left: -10px;
    background: none;
    border: none;
    '' &::placeholder {
      color: ${({ theme }) => theme.gray500};
    }
    &:focus {
      outline: none;
    }
  }
  .iconWrapper {
    width: 100%;
    height: 2.75rem;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const CancelButton = styled.button<StyleProps>`
  visibility: ${({ iskeyword }) => (iskeyword ? 'visible' : 'hidden')};
  background: none;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;
