//create user 
export async function register(value) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value)
      //"username": values.username,
      //"email": values.email,
      //"phone_number": values.phone_number,
      //"password": values.password
  }
  return fetch(`http://0.0.0.0:3333/api/v1/_null_/`, requestOptions)
    .then(response => response.json())
}

//login
export async function login(value) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value)
      //"username": values.username,
      //"password": values.password
  }
  return fetch(`http://0.0.0.0:3333/api/v1/_null_/`, requestOptions)
    .then(response => response.json())
}
//logout
