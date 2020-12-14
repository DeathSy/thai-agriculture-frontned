// fetch get DeviceData by id user
export async function fetchDeviceById (tokenUser, idUser) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`
    },
    body: JSON.stringify({ idUser: idUser })
  }
  return fetch('http://localhost:3333/api/v1/check_user_device', requestOptions)
    .then(response => response.json())
}
