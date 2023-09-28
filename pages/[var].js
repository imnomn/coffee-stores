import React from 'react'
import { useRouter } from 'next/router'


const Dynamic = () => {
   const router = useRouter();

  return (
     <div>{ router.query.var} is the dynamic value</div>
  )
}

export default Dynamic