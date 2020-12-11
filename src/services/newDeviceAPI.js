//create device 
export async function createDevice(tokenUser,value) {
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
  return fetch(`http://0.0.0.0:3333/api/v1/_null_/${id_user}`, requestOptions)
    .then(response => response.json())
}