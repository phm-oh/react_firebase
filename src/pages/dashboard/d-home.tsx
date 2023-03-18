import React from 'react'
import { selectAuthState } from '../../redux-toolkit/auth/auth-slice'
import { useAppSelector } from '../../redux-toolkit/hook'

const DHome = () => {

  const { account } = useAppSelector(selectAuthState);

  return (
    <div> ยินดีต้อนรับ { account?.fulltName}</div>
  )
}

export default DHome