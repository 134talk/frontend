import { css, keyframes, styled } from 'styled-components';

export const Container = styled.div`
  perspective: 50rem;
  width: 16rem;
`;
export const CardWrapper = styled.div<{ $isFront: boolean; size: string }>`
  align-items: center;
  display: flex;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  width: ${props => (props.size ? props.size : '6.25rem')};
  transform: ${({ $isFront }) =>
    !$isFront ? 'rotateY(0deg)' : 'rotateY(180deg)'};
  animation: ${({ $isFront }) =>
    !$isFront
      ? css`
          ${CardFlipAnimationReverse} 2s ease
        `
      : css`
          ${CardFlipAnimation} 2s ease
        `};
`;
export const CardFlipAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;
export const CardFlipAnimationReverse = keyframes`
  from {
    transform: rotateY(-180deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;
export const CardSideWrapper = styled.div`
  &.card {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    backface-visibility: hidden;
  }
  &.card_front {
    z-index: 1;
    transform: rotateY(0deg);
  }
  &.card_back {
    transform: rotateY(180deg);
  }
`;
export const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    position: fixed;
    bottom: 3.25rem;
    > button {
      font-size: ${({ theme }) => theme.fs10};
      color: ${({ theme }) => theme.white};
      padding: 0;
      margin: 0;
      background-color: transparent;
    }
  }
  > p {
    color: ${({ theme }) => theme.white};
    text-align: center;
  }
  .keyword_text {
    font-size: ${({ theme }) => theme.fs26};
    font-weight: ${({ theme }) => theme.fw600};
    margin-bottom: 0.75rem;
  }
  .depth_text {
    font-size: ${({ theme }) => theme.fs18};
    font-weight: ${({ theme }) => theme.fw400};
  }
  .question_text {
    font-size: ${({ theme }) => theme.fs18};
  }
`;
