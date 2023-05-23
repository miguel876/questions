import React from 'react'
import DetailScreen from 'components/detail/DetailScreen'
import Loading from 'components/loading/Loading'
import { useGet } from 'hooks/useFetch'
import { useNavigate, useParams } from 'react-router-dom'
import { StyledBackBtn } from 'styles/others.style'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Props = {}

const Question = (props: Props) => {
    const { id } = useParams()
    const { data } = useGet(`/questions/${id}`) 
    const navigate = useNavigate();

    return (
        <>
            {
            data?
                <div>
                    <StyledBackBtn onClick={() => navigate(-1)}>
                        <ArrowBackIcon />
                    </StyledBackBtn>
                    <DetailScreen data={data} />
                </div>
                :
                <Loading />
            }
        </>
    )
}

export default Question