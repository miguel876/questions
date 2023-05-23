import React, { useState } from 'react'
import List from 'components/list/List'
import SearchBox from 'components/searchbox/SearchBox'
import { useGet } from 'hooks/useFetch'
import { useNavigate, useSearchParams } from 'react-router-dom'

type Props = {}

const Questions = (props: Props) => {
  // Get the filter parameters from URL
  const [searchParams] = useSearchParams()
  const filterParams: string | null = searchParams.get('filter')

  const [{filter, offset, limit}, setFilter] = useState<{limit: number, offset: number, filter: string | null}>({ limit: 10, offset: 0, filter: filterParams})
  const navigate = useNavigate();

  const { data } = useGet('/questions', { limit, offset, filter }, filter) 

  const fetchMoreData = () => setFilter((val) => ({...val, limit: limit + 10, offset: offset + 10 }))
  
  const hasMoreDataHandler = () => data?.length < offset // If the 

  const onClickHandler = (id: number) => navigate(`/question/${id}`)

  const onInputChange = (filter: string) => setFilter((val) => ({...val, filter}))

  const shareText = `${window.location.origin}${window.location.pathname}?filter=${filter}`
  
  return (
    <div>
      <SearchBox onChange={onInputChange} shareText={shareText} />
      {
        data?.length > 0 && 
          <List 
            data={data} 
            fetchData={fetchMoreData} 
            hasMore={hasMoreDataHandler} 
            onClickHandler={onClickHandler}
          />
      }
    </div>
  )
}

export default Questions