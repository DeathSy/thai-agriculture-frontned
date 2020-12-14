// create device
export async function createDevice (tokenUser, userId, idDevice, name) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`
    },
    body: JSON.stringify({
      id_user: userId,
      id_device: idDevice,
      name: name
    })
  }
  return fetch('http://localhost:3333/api/v1/device', requestOptions)
    .then(response => response.json())
}
