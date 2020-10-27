# How To Run The Project

- Clone the Repository
- Do `npm i`
- Do `npm start`

# Api That Should Be Exposed

- GET `/cards/get_all_cards?start=''&end=''` (Response will be same as mocked and start and end is for pagination if we want to show limited card)
- POST `/cards/add_card`
  - Payload
  ```
     {
         desc: '',
         board_id: '',
         image_attachment: '',
     }
  ```
- DELETE `/cards/delete_card/:id`
- PUT `/cards/update_card/:id`

* Payload
  ```
     {
         desc: '',
         board_id: '',
         image_attachment: '',
     }
  ```

# FrontEnd Component Breakout

App> Board> Card

- Used Context Api Pass State through all components
