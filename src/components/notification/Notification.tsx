import React, { ReactNode }  from 'react'
import { StyledSnackbar } from './notification.style'

interface IProps {
    open: boolean,
    onClose: React.Dispatch<React.SetStateAction<boolean>>,
    children: ReactNode
}

const Notification = ({ open, children, onClose }: IProps) => {
  return (
    <StyledSnackbar open={open} autoHideDuration={4000} onClose={() => onClose(false)} anchorOrigin={{vertical: "top", horizontal: "right"}}>
        <div>{ children }</div>
    </StyledSnackbar>
  )
}

export default Notification