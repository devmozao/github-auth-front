import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Logado = () => {
  // const [code, setCode] = useState()

  // console.log(code)

  useEffect(() => {
    getAccessToken()
  }, [])

  async function getAccessToken () {
    try {
      const code = new URLSearchParams(window.location.search).get('code')
      const response = await axios
        .post('http://localhost:3333/auth', {
          data: code
        })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      Logado
    </>
  )
}

export default Logado
