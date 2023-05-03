import React from 'react';
import Modal from '../../molecules/Modal';
import { StyledButton } from './styles';
import Button from '../../atoms/Button';
import SignUpForm from '../../organisms/SignUpForm';

const SignupButton = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <p>Don't have an account?</p>
      <StyledButton onClick={handleClick}>Sign Up</StyledButton>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
};

export default SignupButton;
