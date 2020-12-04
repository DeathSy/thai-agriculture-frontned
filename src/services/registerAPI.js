import axios from 'axios'

export default function RegisterAPI(values) {
  console.log(values)
    axios ( {
      url: 'http://localhost:3333/register',
      method: 'post',
      data: {
        "username": values.username,
        "email": values.email,
        "phone_number": values.phone_number,
        "password": values.password
      },
      responseType: 'json', 
    }) .then(response => {
      console.log(response) 

    })
}