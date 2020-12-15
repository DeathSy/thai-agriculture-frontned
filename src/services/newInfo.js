// setting default data device
export async function createDeviceSetting (tokenUser, value) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`
    },
    body: JSON.stringify(value)
  }
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/v1/_null_`, requestOptions)
    .then(response => response.json())
}
// update setting default data device
export async function updateDeviceSetting (tokenUser, value) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`
    },
    body: JSON.stringify(value)
  }
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/v1/_null_`, requestOptions)
    .then(response => response.json())
}
