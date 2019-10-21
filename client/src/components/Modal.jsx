import React from 'react';
import styled from  'styled-components';

const BBigImg = styled.img`
  margin: auto;
  position: fixed;
  top: 150px;
  left: 0;
  right: 0;
  width: 70%;
  max-width: 700px;
  min-width: 600px;
  height: auto;
`;

const BSection = styled.section`
  position: fixed;
  width: 100%
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  cursor: pointer;
  backface-visibility: hidden;
  background: black;

`;

const BH4 = styled.h4`
  text-align: center;
  color: #ccc;
  font-family: sans-serif;
`;

const Modal = ({show, handleClose, children, img}) => {
  let appearHide = show ? 'modal display-block' : 'modal display-none';

  if (!show) {
    return null;
  }

  return (
    <div className={appearHide}>
      <BSection>
        <BBigImg onClick={handleClose} src={img} />
        <BH4>{children}</BH4>
      </BSection>
    </div>
  );
};

export default Modal;
