import axios from 'axios'

export default function RegisterAPI(values) {
  console.log(values)
    axios ( {
      url: 'http://localhost:3333/newDeviceAPI',
      method: 'post',
      data: {
        "id_device_setting": values.id_device_setting,
        "name": values.name
      },
      responseType: 'json', 
    }) .then(response => {
      console.log(response)

    })
}