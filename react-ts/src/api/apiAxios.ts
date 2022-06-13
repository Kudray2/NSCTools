import axios from "axios"

export const GET_TOKEN_URL = "https://td-2-auth.nsc.iudanet.com/auth/login"

export const getAccesTokenFetch = async () => {
  try {
    const accToken = await fetch(GET_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "admin@nsc.media",
        password: "dfmk4mky45y4",
      }),
    })
    console.log("TOKEN++>", accToken)

    return accToken
  } catch (error) {
    alert("ошибочка" + error)
  }
}

export const getAccesTokenAxios = async () => {
  try {
    const response = await axios.post(GET_TOKEN_URL, {
      email: "admin@nsc.media",
      password: "dfmk4mky45y4",
    })
    console.log("TOKEN++>", response.data)
    const accToken = response.data
    return accToken
  } catch (error) {
    alert("ошибочка" + error)
  }
}
