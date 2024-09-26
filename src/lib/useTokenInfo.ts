import { useEffect, useState } from 'react'
import { TokenInfo } from './definitions'

const useTokenInfo = () => {
  const [data, setData] = useState<TokenInfo>()
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language')
    return storedLanguage || 'en'
  })

  // fetch data at initial rendering or language change
  useEffect(() => {
    const getData = async () => {
      localStorage.setItem('language', language)
      const jsonData = await fetch(`./assets/data/data.${language}.json`)
      const data: TokenInfo = await jsonData.json()
      setData(data)
    }
    getData()
  }, [language])

  return [data, setLanguage] as const
}

export default useTokenInfo