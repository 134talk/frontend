import { SignButtonColumn, SignInputColumn, Title } from 'components';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NAME_REGEX } from 'shared/constants/constants';
import { ADMIN_ICON, USER_ICON } from 'shared/constants/icons';
import useUserData from 'shared/hooks/useUserData';
import useSign from 'shared/query/useSign';
import * as t from './signPage.style';

const validateName = (name: string): boolean => NAME_REGEX.test(name);

export default function SignPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');

  const { uId } = useUserData();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let spacesRemovedName = e.target.value.replace(/\s/g, '');
    setName(spacesRemovedName);
  };
  const handleTeam = (e: React.ChangeEvent<HTMLInputElement>) => {
    let spacesRemovedTeam = e.target.value.replace(/\s/g, '');
    setTeam(spacesRemovedTeam);
  };

  const code = localStorage.getItem('invite-code');
  useEffect(() => {
    if (type === 'user') setTeam(code !== 'null' ? code : '');
  }, [type, code]);

  const { onSignUser, onSignAdmin } = useSign(name);

  const onRegister = () =>
    type === 'user'
      ? onSignUser({ uId: uId, name: name, teamCode: team })
      : onSignAdmin({ uId: uId, name: name, teamName: team });

  const onCancel = () => navigate('/sign');

  return (
    <t.Container>
      <section>
        <p>회원 등록하고, 인사 나눠요 😆</p>
      </section>
      <Title
        text={type === 'user' ? '일반 회원 등록' : '관리자 회원 등록'}
        icon={type === 'user' ? USER_ICON : ADMIN_ICON}
      />
      <SignInputColumn
        isAdmin={type === 'admin'}
        isName={!!name?.length}
        team={team}
        isError={!!name?.length && !validateName(name)}
        handleName={handleName}
        handleTeam={handleTeam}
      />
      <SignButtonColumn
        disabled={!name?.length || !team?.length || !validateName(name)}
        onRegister={onRegister}
        onCancel={onCancel}
      />
    </t.Container>
  );
}
