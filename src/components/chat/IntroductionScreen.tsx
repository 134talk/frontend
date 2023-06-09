import { NavBar, UserList } from 'components';
import { useParams } from 'react-router-dom';
import useUserData from 'shared/hooks/useUserData';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import { Button } from 'ui';
import * as t from './introductionScreen.style';

export default function IntroductionScreen() {
  const { uid } = useUserData();
  const { roomId } = useParams();
  const dispatch = useAppDispatch();
  // 소켓 fetching 데이터
  const subUserList = useAppSelector(
    state => state.chat?.subUser?.chatroomUserInfos
  );
  // 자기소개 마무리 소켓 메세지 발행
  const handleCheckIn = () => {
    dispatch({
      type: 'sendData',
      payload: {
        destination: '/pub/enter',
        data: {
          roomId: Number(roomId),
          userId: Number(uid),
          selected: true,
          socketFlag: 2,
        },
      },
    });
  };
  return (
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <div className="intro_wrapper">
        <h2>나의 새로운 이름을 소개해주세요.</h2>
        <p>나와 닮은 부족이 여기에도 있나요?</p>
      </div>
      <UserList scale="medium" $isRow={false} userInfo={subUserList} />
      <div className="button_wrapper">
        <Button
          category="confirm"
          text="자기소개 마무리하기"
          onClick={handleCheckIn}
        />
      </div>
    </t.Container>
  );
}
