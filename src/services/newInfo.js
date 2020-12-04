import axios from 'axios'

export default function RegisterAPI(values) {
  console.log(values)
    axios ( {
      url: 'http://localhost:3333/newInfo',
      method: 'post',
      data: {
        "temperature": values.temperature,
        "humidity": values.humidity,
        "pm1": values.pm1,
        "pm25": values.pm25,
        "pm10": values.pm10,
        "wind_direction": values.wind_direction,
        "wind_velocity": values.wind_velocity,
        "colosion": values.colosion,
        "pressure": values.pressure
      },
      responseType: 'json', 
    }) .then(response => {
      console.log(response)

    })
}