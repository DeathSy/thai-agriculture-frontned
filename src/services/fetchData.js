//fetch get data by Id device
export async function fetchDataById(tokenUser,id_device) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`
    },
  }
  return fetch(`http://0.0.0.0:333 3/api/v1/_null_/${id_device}`, requestOptions)
    .then(response => response.json())
}
//fetch get device by id user
export async function fetchDeviceById(tokenUser,id_user) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`
    },
  }
  return fetch(`http://0.0.0.0:3333/api/v1/_null_/${id_user}`, requestOptions)
    .then(response => response.json())
}

