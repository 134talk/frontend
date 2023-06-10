import {
  ChatNotifyScreen,
  ChatScreen,
  IntroductionScreen,
  KeywordScreen,
  SelectionScreen,
  WaitingScreen,
} from 'components';
import { useState } from 'react';
import FeedbackPage from './FeedbackPage';

export default function ChatPage() {
  const [pageType, setPageType] = useState<number>(5);
  console.log('setPageType: ', setPageType);
  return (
    <>
      {pageType === 0 && <WaitingScreen />}
      {pageType === 1 && <IntroductionScreen />}
      {pageType === 2 && <KeywordScreen />}
      {pageType === 3 && <SelectionScreen />}
      {pageType === 4 && <ChatNotifyScreen />}
      {pageType === 5 && <ChatScreen />}
      {pageType === 6 && <FeedbackPage />}
    </>
  );
}
