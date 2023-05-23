import React, { useState, useEffect } from 'react'
import { usePut } from 'hooks/useFetch';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { converDate } from 'utils/date';
import { SmallGrayText } from 'styles/text.style';
import { StyledAnswers, StyledDetailContainer, StyledTitle } from './detailscreen.style';
import ShareScreen from 'pages/ShareScreen';
import { StyledIconButton } from 'components/searchbox/searchbox.style';
import ShareIcon from '@mui/icons-material/Share';
import Notification from 'components/notification/Notification';

interface IDetailProps {
    [key: string]: any;
}

interface IListItems {
    id: number,
    question: string,
    image_url: string,
    published_at: string,
    choices: [],
}

const DetailScreen = ({ data }: IDetailProps) => {
    const { putRequest, data: putData } = usePut();
    const { id, question, image_url, published_at, choices}:IListItems  = data
    const [open, setOpen] = useState<boolean>(false)
    const [openNotification, setOpenNotification] = useState<boolean>(false)

    const voteHandler = () => {
        if(putRequest) {
            putRequest(`/questions/${id}`, {})
        }
    }

    useEffect(() => {
      if(putData) {
        setOpenNotification(true)
      }
    }, [putData])
    

  return (
    <StyledDetailContainer>
        <img src={image_url} alt="Detail Img" />
            <StyledTitle variant="subtitle1">{question}</StyledTitle>
            <SmallGrayText variant="caption">{converDate(published_at)}</SmallGrayText>
            <div>
                <StyledIconButton onClick={voteHandler}>
                    <ThumbUpIcon />
                </StyledIconButton>
                <StyledIconButton onClick={() => setOpen(true)}>
                    <ShareIcon />
                </StyledIconButton>
            </div>
            <StyledTitle variant="subtitle1">Most Voted Answers</StyledTitle>
            { choices?.map(({choice, votes}) => (
                <StyledAnswers>
                    {choice}
                    <SmallGrayText variant="caption">Votes: {votes}</SmallGrayText>
                </StyledAnswers>
            ))}
        <ShareScreen open={open} setOpen={setOpen} content_url={window.location.href} />
        <Notification open={openNotification} onClose={setOpenNotification}>
                Your vote was submited!
        </Notification>
    </StyledDetailContainer>
  )
}

export default DetailScreen