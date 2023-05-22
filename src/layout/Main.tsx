import Loading from 'components/loading/Loading'
import { useGet } from 'hooks/useFetch'
import Questions from 'pages/Questions'
import React from 'react'

type Props = {}

const Main = (props: Props) => {
  const { data, loading } = useGet('/health')
 
  return (
    true ? 
    <Loading />
    : 
    <Questions />
  )
}

export default Main