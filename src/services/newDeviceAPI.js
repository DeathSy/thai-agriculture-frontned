// create device
export async function createDevice (tokenUser, value) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`
    },
    body: JSON.stringify(value)
    // id_user : value.id_user,
    // id_device : value.id_device,
    // name : value.name
  }
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/v1/_null_`, requestOptions)
    .then(response => response.json())
}
