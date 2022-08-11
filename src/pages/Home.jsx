import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { config } from '../configs/config'
import { errorInterceptor } from '../interceptors/error'
import { updateHeaderInterceptor } from '../interceptors/updateHeader'

export const Home = () => {

  const httpClient = axios.create({
    baseURL: config.externalUrls.pokeapi
  })

  updateHeaderInterceptor(httpClient)
  errorInterceptor(httpClient)

  useEffect(() => {
    httpClient.get()
      .then(response => console.log(response));
  }, [])
  

  return (
    <div>Home</div>
  )
}
