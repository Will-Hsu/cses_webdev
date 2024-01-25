# API Endpoint Documentation
Last updated 1/24/24

Our APIs are currently split into three groups: [user](#user), [event](#event), and [subscription](subscription).

Each group consists of routes found in the /routes folder and each route's associated method can be found in the /controllers folder.

The base API url is http://localhost:5000/api/v1 - as seen in backend/index.js

# user

The base API url for user routes is http://localhost:5000/api/v1/users

Jump to: [userCreate](#usercreate), [getUserInfo](#getuserinfo), [userCheck](#usercheck), [userUpdate](#userupdate), [userDelete](#userdelete), [userEventsUpdate](#usereventsupdate), [redeemSmall](#redeemsmall), [redeemMedium](#redeemmedium), [redeemLarge](#redeemlarge), [getTopMembers](#gettopmembers), [usersCount](#userscount)

## userCreate

| **url** | **Method** | **Description**                 | **Associated Method** |
|---------|------------|---------------------------------|-----------------------|
| /create | POST       | This method creates a new user. | ```userCreate```      |

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| name                 | string     | required          | The user's name                     |
| email                | string     | required          | The user's email                    |
| major                  | string     | required          | The user's major                    |
| expectedGraduationYear | integer    | required          | The user's expected graduation year |

### Example Body:
```json
{
    "name": "John Doe",
    "email": "johndoe@ucsd.edu",
    "major": "Computer Science",
    "expectedGraduateYear": 2025
}
```

### Responses:
```201``` - Successfully created new user 
```json
{
    "email": "johndoe@ucsd.edu",
    "name": "John Doe",
    "major": "Computer Science",
    "expectedGraduationYear": 2025,
    "points": 0,
    "eventsAttended": [],
    "_id": "65b1ee799fbf9377b9d6a06d",
    "__v": 0
}
```
```409``` - Error - user already exists in database
```json
{
    "message": "E11000 duplicate key error collection: test.users index: email_1 dup key: { email: \"johndoe@ucsd.edu\" }"
}
```

## getUserInfo

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /:email | GET        | This method retrieves stored information about a user. | ```getUserInfo```     |

### Responses:
```200``` - Successful request  
```json
{
    "_id": "65b1ee799fbf9377b9d6a06d",
    "email": "johndoe@ucsd.edu",
    "name": "John Doe",
    "major": "Computer Science",
    "expectedGraduationYear": 2025,
    "points": 0,
    "eventsAttended": [],
    "__v": 0
}
```
```404``` - Error - user not found
```json
{
    "message": "User not found"
}
```

## userCheck

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /check | POST        | This method checks if a user exists in the database. | ```userCheck```     |

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| email                | string     | required          | The user's email                    |

### Example Body:
```json
{
    "email": "johndoe@ucsd.edu"
}
```

### Responses:
```200``` - Successful request (user exists) 
```json
{
    "exists": true,
    "user": {
        "_id": "65b1ee799fbf9377b9d6a06d",
        "email": "johndoe@ucsd.edu",
        "name": "John Doe",
        "major": "Computer Science",
        "expectedGraduationYear": 2025,
        "points": 0,
        "eventsAttended": [],
        "__v": 0
    }
}
```
```200``` - Successful request (user does not exist)
```json
{
    "exists": false
}
```

## userUpdate

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /:email | PUT        | This method updates a user's information. | ```userUpdate```     |

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| name                 | string     | optional          | The user's updated name                     |
| major                  | string     | optional          | The user's updated major                    |
| expectedGraduationYear | integer    | optional          | The user's updated expected graduation year |
| points | integer | optional | The user's updated points |
| eventsAttended | array | optional | The user's attended events |
| profilePicture | string | optional | The user's profile picture, in url form |

### Example Body:
```json
{
    "expectedGraduationYear": 2026,
    "points": 200,
    "profilePicture": "https://www.google.com/example_image"
}
```

### Responses:
```200``` - Successful update
```json
{
    "message": "Successful"
}
```
```400``` - Errors within body
```json
{
    "message": "Failed",
    "errors": [
        {
            "type": "field",
            "value": "twelve",
            "msg": "Invalid value",
            "path": "points",
            "location": "body"
        },
        {
            "type": "field",
            "value": "dsfaljd",
            "msg": "Invalid URL.",
            "path": "profilePicture",
            "location": "body"
        }
    ]
}
```
```404``` - User not found
```json
{
    "message": "User not found"
}
```

## userDelete

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /:email | DELETE     | This method deletes a user. | ```userDelete```     |

### Responses:
```200``` - Successful deletion
```json
{
    "message": "Successful"
}
```
```404``` - User not found
```json
{
    "message": "User not found"
}
```

## userEventsUpdate

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /:email/event/:code | POST        | This method updates a user's information. | ```userEventsUpdate```     |

### Responses:
```200``` - Successful update
```json
{
    "message": "Event added to eventsAttended"
}
```
```400``` - Error (Invalid code)
```json
{
    "message": "Invalid code"
}
```
```400``` - Error (Event has not started)
```json
{
    "message": "Event has not started"
}
```
```400``` - Error (Expired code)
```json
{
    "message": "Expired code"
}
```
```400``` - Error (Event already attended)
```json
{
    "message": "Event already attended"
}
```
```404``` - User not found
```json
{
    "message": "User not found"
}
```

## redeemSmall

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /:email/redeemSmall | PUT        | This method allows a user to redeem a small prize. | ```redeemSmall```     |

### Responses:
```200``` - Successful redemption
```json
{
    "message": "Small prize redeemed successfully"
}
```
```400``` - Error (insufficient points)
```json
{
    "message": "Insufficient points for redemption"
}
```
```404``` - User not found
```json
{
    "message": "User not found"
}
```

## redeemMedium

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /:email/redeemMedium | PUT        | This method allows a user to redeem a medium prize. | ```redeemMedium```     |

### Responses:
```200``` - Successful redemption
```json
{
    "message": "Medium prize redeemed successfully"
}
```
```400``` - Error (insufficient points)
```json
{
    "message": "Insufficient points for redemption"
}
```
```404``` - User not found
```json
{
    "message": "User not found"
}
```

## redeemLarge

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /:email/redeemLarge | PUT        | This method allows a user to redeem a large prize. | ```redeemLarge```     |

### Responses:
```200``` - Successful redemption
```json
{
    "message": "Large prize redeemed successfully"
}
```
```400``` - Error (insufficient points)
```json
{
    "message": "Insufficient points for redemption"
}
```
```404``` - User not found
```json
{
    "message": "User not found"
}
```

## getTopMembers

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /topMembers | GET        | This method retrieves the top 3 members in the database (most points). | ```getTopMembers```     |

### Responses:
```200``` - Successful retrieval
```json
[
    {
        "_id": "651e0b501b14e4cff73f1a45",
        "email": "johndoe@ucsd.edu",
        "name": "John Doe",
        "points": 900,
        "profilePicture": "https://lh3.googleusercontent.com/a/johndoe"
    },
    {
        "_id": "651e09771b14e4cff73f16ed",
        "email": "janedoe@ucsd.edu",
        "name": "Jane Doe",
        "points": 900,
        "profilePicture": "https://lh3.googleusercontent.com/a/janedoe"
    },
    {
        "_id": "651d08cda2d1b9e892dbe5e3",
        "email": "burger@ucsd.edu",
        "name": "Bur Ger",
        "points": 900,
        "profilePicture": "https://lh3.googleusercontent.com/a/burger"
    }
]
```

## usersCount

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /usersCount | GET        | This method retrieves the total number of users in the database. | ```usersCount```     |

### Responses:
```200``` - Successful retrieval
```json
291
```

# event

# subscription