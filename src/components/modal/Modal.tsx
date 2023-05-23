import React, { ReactNode } from 'react'
import { StyledModal, StyledModalContainer } from './modal.style'

interface IModal {
    open: boolean,
    handleClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined,
    children: ReactNode
}

const Modal = ({ open, handleClose, children }: IModal) => {
  return (
    <StyledModalContainer
        open={open}
        onClose={handleClose}
        >
            <StyledModal>{ children }</StyledModal>
    </StyledModalContainer>
  )
}

export default Modal