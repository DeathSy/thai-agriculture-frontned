// fetch get data by Id device
export async function fetchDataById (tokenUser, idDevice) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`
    }
  }
  return fetch(`https://worawanbydiistudent.store/api/v1/${idDevice}/t/latest`, requestOptions)
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
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/v1/_null_/${idUser}`, requestOptions)
    .then(response => response.json())
}
