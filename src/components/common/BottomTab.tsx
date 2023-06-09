import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  NEW_BADGE_ICON,
  TAB_CHAT,
  TAB_CHAT_ACTIVE,
  TAB_MEMBERS,
  TAB_MEMBERS_ACTIVE,
  TAB_REPORT,
  TAB_REPORT_ACTIVE,
  TAB_USER,
  TAB_USER_ACTIVE,
} from 'shared/constants/icons';
import useUserData from 'shared/hooks/useUserData';
import { subscribeNewChat } from 'shared/store/chatAction';
import { setSubNewChat } from 'shared/store/chatSlice';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import isMobile from 'shared/utils/deviceDetector';
import * as t from './bottomTab.style';

export default function BottomTab() {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  const [isNewChat, setIsNewChat] = useState(false);

  const { uid } = useUserData();

  const dispatch = useAppDispatch();
  const { type } = useAppSelector(state => state.chat.subNewChat);

  useEffect(() => {
    if (type === 'NEW_CHATROOM') setIsNewChat(true);
  }, [type]);

  useEffect(() => {
    dispatch({ type: 'connect' });
    dispatch(subscribeNewChat(`/sub/private/channel/${uid}`));
  }, [dispatch, uid]);

  const onChatPage = () => {
    setIsNewChat(false);
    dispatch(setSubNewChat({ type: '' }));
    navigate('/chats');
  };

  return (
    <t.Container>
      <button onClick={() => navigate('/channel')}>
        <img
          src={pathname === '/channel' ? TAB_MEMBERS_ACTIVE : TAB_MEMBERS}
          alt="참가자"
        />
        <p>참가자</p>
      </button>
      <button onClick={onChatPage} className="chatButton">
        <t.BadgeWrapper>
          {isNewChat && (
            <t.Badge
              $isMobile={isMobile}
              src={NEW_BADGE_ICON}
              alt="새 대화"
              className="badge"
            />
          )}
          <img
            src={pathname === '/chats' ? TAB_CHAT_ACTIVE : TAB_CHAT}
            alt="대화"
          />
        </t.BadgeWrapper>
        <p>대화</p>
      </button>
      <button onClick={() => navigate('/report')}>
        <img
          src={
            pathname === '/report' || pathname === '/report-detail'
              ? TAB_REPORT_ACTIVE
              : TAB_REPORT
          }
          alt="리포트"
        />
        <p>리포트</p>
      </button>
      <button onClick={() => navigate('/user?tab=info')}>
        <img
          src={pathname === '/user' ? TAB_USER_ACTIVE : TAB_USER}
          alt="마이"
        />
        <p>마이</p>
      </button>
    </t.Container>
  );
}
