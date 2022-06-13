/**
 * задача получать токен и осуществлять запросы
 */

// import axios from "axios"
const axios = require("axios")
const p = console.log
const GET_TOKEN_URL = "https://td-2-auth.nsc.iudanet.com/auth/login"

// получаем токен

async function accToken() {
  try {
    let res = await axios.post(GET_TOKEN_URL, {
      email: "admin@nsc.media",
      password: "dfmk4mky45y4",
    })
    return await res.data
  } catch (error) {
    console.error("ОШИБОЧКА", error)
  }
}
async function print() {
  await accToken().then((c) => p(c))
}
print()
