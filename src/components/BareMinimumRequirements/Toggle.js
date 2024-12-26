import { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    transition: all 0.8s ease-out;
    &.toggle--checked {
      background-color: #442cdc;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: all 0.5s ease-out;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &.toggle--checked{
      left: 27px;
    }
  }
`;

const Desc = styled.div`
  // TODO : 설명 부분의 CSS를 구현합니다.
  text-align: center;
  font-size: 13px;
  /* border: 1px solid #000; */
  padding: 10px;
  font-weight: 600;
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    // TODO : isOn의 상태를 변경하는 메소드를 구현합니다.
    setisOn(!isOn);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`}/>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`}/>
      </ToggleContainer>
      <Desc>Toggle Switch {isOn? "On" : "Off"}</Desc>
    </>
  );
};