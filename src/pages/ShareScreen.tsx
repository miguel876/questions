import React, { useState, useRef, useEffect } from 'react'
import Modal from 'components/modal/Modal'
import { Typography } from '@mui/material'
import Button from 'components/button/Button'
import { usePost } from 'hooks/useFetch'
import { StyledTextField } from 'styles/inputs.style'
import Notification from 'components/notification/Notification'

interface IProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    content_url: string
}

const ShareScreen = ({ open, setOpen, content_url }: IProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { postRequest, data } = usePost();
    const [openNotification, setOpenNotification] = useState<boolean>(false)

    const shareHandler = () => {
        if(postRequest) {
            postRequest(`/share?destination_email=${inputRef.current?.value}&content_url=${content_url}`, {})
        }
    }

    useEffect(() => {
        if(data) {
            setOpenNotification(true)
            setOpen(false)
        }
    }, [data])

  return (
    <>
    <Modal open={open} handleClose={() => setOpen(false)}>
        <Typography>Share your question with your friends!</Typography>
        <StyledTextField ref={inputRef} type="email" required placeholder="Email" />
        <Button variant="contained" color="primary" onClick={shareHandler}>
            Send
        </Button>
    </Modal>
    <Notification open={openNotification} onClose={setOpenNotification}>
        Your question was successfully shared!
    </Notification>
    </>
  )
}

export default ShareScreen