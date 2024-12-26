// import { useState } from 'react';
// import styled from 'styled-components';

// export const ModalContainer = styled.div
//   // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
//   `width: 100%;
//   height: 100%;
//   position: relative;`
// ;

// export const ModalBackdrop = styled.div.attrs((props) => ({
//   role: 'presentation',
//   'aria-hidden': 'true'
// }))
//   `width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: #000;
//   opacity: 0.5;
//   z-index: 1;`
// ;
// export const ModalBtn = styled.button
//  ` background-color: var(--coz-purple-600);
//   text-decoration: none;
//   border: none;
//   padding: 20px;
//   color: white;
//   border-radius: 30px;
//   cursor: grab;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%,-50%);`
// ;

// export const CloseBtn = styled.button
// `background-color: transparent;
//   text-decoration: none;
//   border: none;
//   color: #000;
//   cursor: pointer;
//   position: absolute;
//   top: 5px;
//   right: 10px;`
// ;

// export const ModalView = styled.div.attrs((props) => ({
//   // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
//   role: 'dialog',
// }))
//   // TODO : Modal창 CSS를 구현합니다.
//  ` display: ${(props) => props.$isActive ? 'flex' : 'none'};
//   width: 80%;
//   height: 20%;
//   background-color: white;
//   border-radius: 20px;
//   border: 1px solid #000;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%,-50%);
//   z-index: 20;
//   /* display: flex; */
//   align-items: center;
//   justify-content: center;`
// ;

// export const Modal = () => {
//   const [isOpen, setIsOpen] = useState(false);


//   const openModalHandler = () => {
//     // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
//     setIsOpen(!isOpen)
//   };


//   // TODO : 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.

//   return (
//     <ModalContainer>
//         <ModalBtn onClick={openModalHandler}>{isOpen ? 'Open Modal' : 'Opened'}</ModalBtn>
        
//         {isOpen && (
//             <ModalBackdrop onClick={openModalHandler}>
//                 <ModalView $isActive={isOpen}>
//                     <CloseBtn onClick={openModalHandler}>X</CloseBtn>
//                     <p>Hello!!</p>
//                 </ModalView>
//             </ModalBackdrop>
//             )}
//     </ModalContainer>
//   );
// };


import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative; // 부모
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  position: absolute; // 자식
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
  position: absolute; // 자식
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background-color: transparent;
  font: 15px;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: "dialog",
}))`
position: relative;
  width: 50%;
  height: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: #442cdc;
  border-radius: 25px;
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn
          onClick={openModalHandler}
        >
          {isOpen ? "Opened!" : "Open Modal"}
        </ModalBtn>
        {isOpen ? (
          <>
            <ModalBackdrop onClick={openModalHandler}>
              <ModalView onClick={(event) => event.stopPropagation()}>
                <CloseBtn onClick={openModalHandler}>x</CloseBtn>
                HELLO CODESTATES!
              </ModalView>
            </ModalBackdrop>
          </>
        ) : null}
      </ModalContainer>
    </>
  );
};
