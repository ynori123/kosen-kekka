# API設計仕様書

## Endpoints
- POST /users/auth
  - req
    ```json
    {
      "email": "xxx@example.com",
      "password": "xxxxxx"
    }
    ```
  - res
    ```json
    {
      "code": 0,
      "token": "xxxx" //(:uuidv4)
    }
- GET /misses?token={:token}
  - req
    GET `/misses?token={:token}`
  -res
    ```json
    {
      "code": 0,
      "miss": [
        {
          "subject": "数学",
          "missTime": 10,
          "totalTime": 30
        }
      ]
    }
- POST /register?token={:token}
  - req
    `POST /register?token={:token}`
    ```json
    {
      "subject": "数学",
      "date": 2023-11-22,
      "memo":"寝坊"
    }
  - res
    {
      "code": 0 //success
    }
- GET /subject
  - req
    `GET /subject?token={:token}`
  - res
    ```json
    {
      "code" : 0,
      "subjects" : ["応用数学α", "英語Ⅲ", "情報工学実験"]
    }
    ```
