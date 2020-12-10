//setting default data device
export async function createDeviceSetting(tokenUser,value) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`
    },
    body: JSON.stringify(value)
    // id_user : value.id_user,
    // id_device : value.id_device,
    //All max,min
    // "temperature": values.temperature,
    // "humidity": values.humidity,
    // "pm1": values.pm1,
    // "pm25": values.pm25,
    // "pm10": values.pm10,
    // "wind_direction": values.wind_direction,
    // "wind_velocity": values.wind_velocity,
    // "colosion": values.colosion,
    // "pressure": values.pressure
  }
  return fetch(`http://0.0.0.0:3333/api/v1/_null_/${id_user}`, requestOptions)
    .then(response => response.json())
}