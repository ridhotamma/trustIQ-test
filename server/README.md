## aplikasi backend untuk minitest TrustIQ

link untuk frontend : https://github.com/ridhotamma/trustIQ-test/tree/frontend

## cara menjalankan

- npm install
- npm start

## endpoints

| url                                      | method | deskripsi                 |
| ---------------------------------------- | ------ | ------------------------- |
| http://{%URL%}:/api/users                | GET    | merequest semua user      |
| http://{%URL%}:/api/users?page=1?limit=5 | GET    | merequest dengan paginasi |
| http://{%URL%}:/api/user/:id             | GET    | merequest satu user       |
| http://{%URL%}:/api/user/add             | POST   | create user               |
| http://{%URL%}:/api/user                 | PUT    | Update User               |
| http://{%URL%}:/api/user                 | DELETE | delete User               |
