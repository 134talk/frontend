import { BottomModal, NavBar } from 'components';
import useTimer from 'shared/query/useTimer';
import { Button } from 'ui';
import * as t from './settingModal.style';

type Props = {
  chatTime: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOpenCheckModal: () => void;
  onClose: () => void;
};

export default function SettingModal({
  chatTime,
  onChange,
  onOpenCheckModal,
  onClose,
}: Props) {
  const handleConfirm = () => {
    onClose();
    onOpenCheckModal();
  };

  const { time } = useTimer();

  return (
    <BottomModal isOpen={true}>
      <NavBar
        isMargin
        isBottom
        title="대화 설정"
        button="닫기"
        handleClose={onClose}
      />
      <t.Container>
        <p>대화 권장 진행 시간</p>
        <p className="small_text">
          대화 참여 시간을 설정해주세요.
          <br />
          대화 권장 시간이 가까워지면 참가자에게 대화 종료 시점을 안내해주는
          알림이 뜹니다.
        </p>
        <p className="setting_text">
          대화 시간은
          <input
            type="text"
            placeholder="30"
            defaultValue={(time && time) || ''}
            onChange={onChange}
          />
          분으로 설정하겠습니다.
        </p>
        <div className="button_wrapper">
          <Button category="cancel" text="취소" onClick={onClose} />
          <Button category="confirm" text="확인" onClick={handleConfirm} />
        </div>
      </t.Container>
    </BottomModal>
  );
}
