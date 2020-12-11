// fetch get data by Id device
export async function fetchDataById (tokenUser, idDevice) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`
    }
  }
  return fetch(`http://0.0.0.0:3333/api/v1/_null_/${idDevice}`, requestOptions)
    .then(response => response.json())
}
// fetch get device by id user
export async function fetchDeviceById (tokenUser, idUser) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`
    }
  }
  return fetch(`http://0.0.0.0:3333/api/v1/_null_/${idUser}`, requestOptions)
    .then(response => response.json())
}
