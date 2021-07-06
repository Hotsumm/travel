import React, { useState } from 'react';
import styled from 'styled-components';

const ChangePasswordContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const ChangePasswordWrap = styled.div`
  width: 450px;
  background: white;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

const ChangePasswordHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px 0;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid #ababab80;
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  :first-child {
    margin-bottom: 30px;
  }

  & input {
    width: 250px;
    padding: 15px 20px;
    border-style: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    ::placeholder {
      font-size: 14px;
    }
    :focus {
      outline: none;
      border: 1px solid #16a085;
    }
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & button {
    width: 120px;
    height: 50px;
    border-radius: 10px;
    background: white;
    border: 1px solid #16a085;
    color: #16a085;
    :last-child {
      border: 1px solid red;
      color: red;
      margin-left: 15px;
    }
  }
`;

const ChangePassword = ({ toggleChangePassword }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'oldPassword') {
      setOldPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'newPasswordConfirm') {
      setNewPasswordConfirm(value);
    }
  };

  return (
    <>
      <ChangePasswordContainer>
        <ChangePasswordWrap>
          <ChangePasswordHeader>비밀번호 변경</ChangePasswordHeader>
          <InputContainer>
            <InputWrap>
              <input
                type="oldPassword"
                onChange={onChange}
                name="oldPassword"
                placeholder="현재 비밀번호"
              ></input>
            </InputWrap>
            <InputWrap>
              <input
                type="password"
                onChange={onChange}
                name="newPassword"
                placeholder="새 비밀번호"
              ></input>
            </InputWrap>
            <InputWrap>
              <input
                type="password"
                onChange={onChange}
                name="newPasswordConfirm"
                placeholder="새 비밀번호 확인"
              ></input>
            </InputWrap>
          </InputContainer>
          <ButtonWrap>
            <button>변경</button>
            <button onClick={() => toggleChangePassword()}>취소</button>
          </ButtonWrap>
        </ChangePasswordWrap>
      </ChangePasswordContainer>
    </>
  );
};

export default ChangePassword;
