import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { converDate } from 'utils/date';
import { StyledListItem } from './list.style';
import { SmallGrayText } from 'styles/text.style';
import { Typography } from "@mui/material";
import { CircularProgress } from '@mui/material'
import { InfiniteLoadingContainer } from 'styles/others.style';

interface IListProps {
    [key: string]: any;
}
   
interface IListItems {
    id: number,
    question: string,
    image_url: string,
    thumb_url: string,
    published_at: string,
    choices: [],
    onClickHandler: (id: number) => void
}

const List = ({ data, fetchData, hasMore, onClickHandler } : IListProps) => {
  return (
    <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={hasMore}
        loader={
        <InfiniteLoadingContainer>
            <CircularProgress size={20} />
        </InfiniteLoadingContainer>
        }
    >
        {data?.map(( values: any ) => <ListItem {...values} onClickHandler={onClickHandler} />)}
    </InfiniteScroll>
  )
}

const ListItem = ({thumb_url, question, id, published_at, onClickHandler} : IListItems) => {
    return (
        <StyledListItem onClick={() => onClickHandler(id)}>
            <div>
                <img src={thumb_url} alt="Thumbnail" />
                <Typography>{ question }</Typography>
            </div>
            <SmallGrayText variant="caption">{converDate(published_at)}</SmallGrayText>
        </StyledListItem>
      )
}

export default List