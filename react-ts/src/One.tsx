import { FC, useEffect, useState } from "react"
import { getAccesTokenAxios, getAccesTokenFetch } from "./api/apiAxios"

export const One: FC = () => {
  const [tok, setTok] = useState("")
  useEffect(() => {
    const acToken = getAccesTokenAxios()
    setTok(acToken.accessToken)
  }, [])
  console.log(tok)

  return (
    <>
      <h1>ONE</h1>
      <p>lll</p>
      <p>{tok}</p>
    </>
  )
}
