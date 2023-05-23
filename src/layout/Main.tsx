import React from 'react'
import Loading from 'components/loading/Loading'
import { useGet } from 'hooks/useFetch'
import properties from '../properties.json'
import Homepage from 'pages/Homepage'

type Props = {}

const Main = (props: Props) => {
  const { data, loading } = useGet('/health')
 
  return (
    loading && data?.status !== properties.statusOk? 
    <Loading size={100}/>
    : 
    <Homepage />
  )
}

export default Main