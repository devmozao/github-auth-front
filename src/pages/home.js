import React, { useState, useEffect } from 'react'

import * as Api from '../services/api'
import axios from 'axios'

const Home = () => {
  const url = 'https://github.com/login/oauth/authorize?client_id=7e263d0b1d2fb885292c&redirect_uri=http://localhost:3000/logado'
  // useEffect(() => {
  //   authenticate()
  // }, [])

  // async function authenticate () {
  //   try {
  //     const response = await axios.get('http://localhost:3333/auth')
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  console.log(url)

  return (
    <>
      <h1>Home Page</h1>
      <a href={url}>Login com Github</a>
    </>
  )
}

export default Home
