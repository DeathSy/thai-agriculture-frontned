// create user
export async function registerData (value) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
  }
  return fetch('http://localhost:3333/api/v1/auth/register', requestOptions)
    .then(response => response.json())
}

// login
export async function login (value) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
  }
  return fetch('http://localhost:3333/api/v1/auth/login', requestOptions)
    .then(response => response.json())
}
// logout
export async function logout (tokenUser) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`
    },
    body: JSON.stringify(
      {
        type: 'Bearer',
        token: tokenUser,
        refreshToken: null
      }
    )
  }
  return fetch('http://localhost:3333/api/v1/auth/logout', requestOptions)
    .then(response => response.json())
}
