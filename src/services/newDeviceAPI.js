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
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/v1/_null_`, requestOptions)
    .then(response => response.json())
}
