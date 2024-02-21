# API Endpoint Documentation
Last updated 1/24/24

Our APIs are currently split into three groups: [user](#user), [event](#event), and [subscription](#subscription).

Each group consists of routes found in the /routes folder and each route's associated method can be found in the /controllers folder.

The base API url is http://localhost:5000/api/v1 - as seen in backend/index.js

# user

The base API url for user routes is http://localhost:5000/api/v1/users

Jump to: [userCreate](#usercreate), [getUserInfo](#getuserinfo), [userCheck](#usercheck), [userUpdate](#userupdate), [userDelete](#userdelete), [userEventsUpdate](#usereventsupdate), [redeemSmall](#redeemsmall), [redeemMedium](#redeemmedium), [redeemLarge](#redeemlarge), [getTopMembers](#gettopmembers), [usersCount](#userscount)

## userCreate

| **url** | **Method** | **Description**                 | **Associated Method** |
|---------|------------|---------------------------------|-----------------------|
| /create | POST       | This method creates a new user. | ```userCreate```      |

### Body:
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

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| email                 | string     | required          | The user's email                     |

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

### Body:
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
| email                 | string     | required          | The user's email                     |

### Body:
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

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| email                 | string     | required          | The user's email                     |

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

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| email                 | string     | required          | The user's email                     |
| code                 | string     | required          | The code for the event                     |

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

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| email                 | string     | required          | The user's email                     |

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

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| email                 | string     | required          | The user's email                     |

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

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| email                 | string     | required          | The user's email                     |

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

The base API url for event routes is just the base url: http://localhost:5000/api/v1

Jump to: [eventList](#eventlist), [eventDetail](#eventdetail), [eventCreate](#eventcreate), [eventUpdate](#eventupdate), [eventDelete](#eventdelete)

## eventList

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /events | GET        | This method retrieves a list of all events in the database, sorted by start time | ```eventList```     |

### Body:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| type                 | string     | optional          | "past" or "upcoming"                     |
| month                  | integer     | optional          | Specific month to pull events from  |
| expectedGraduationYear | integer    | optional          | Specific year to pull events from |

### Example Body:
```json
{
    "type": "past",
    "month": 10,
    "year": 2023
}
```

Note: year and month can be used with or without each other - for example, you could have month only, year only, or month and year

### Responses:
```200``` - Successful retrieval
```json
[
    {
        "_id": "651204846df7ac7df979137e",
        "title": "Event 1",
        "start_time": "2023-10-05T00:30:00.000Z",
        "end_time": "2023-10-05T02:00:00.000Z",
        "location": "PC Forum (4th Floor PC)",
        "major_event": true,
        "description": "",
        "calendar_link": "https://calendar.google.com/calendar/event1",
        "instagram_link": "https://www.instagram.com/p/Cxo_4ihLyCg/?igshid=MzRlODBiNWFlZA==",
        "code": "996913"
    },
    {
        "_id": "652d6863bfb5eac8e9798642",
        "title": "CSES Innovate x WIC Startup Founder Panel",
        "start_time": "2023-10-17T00:00:00.000Z",
        "end_time": "2023-10-17T02:00:00.000Z",
        "location": "CSE 1202",
        "major_event": true,
        "calendar_link": "https://calendar.google.com/calendar/event2",
        "instagram_link": "",
        "code": "083961"
    }
]
```

## eventDetail

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /event/:id | GET        | This method retrieves the details of a specified event. | ```eventDetail```     |

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| id                 | string     | required          | Event id (must be valid MongoId)                     |

### Responses:
```200``` - Successful retrieval
```json
{
    "_id": "65b2fff8ec351932f7ff9d3a",
    "title": "test",
    "start_time": "2024-01-25T08:00:00.000Z",
    "end_time": "2024-01-26T08:00:00.000Z",
    "location": "test",
    "major_event": false,
    "description": "test",
    "calendar_link": "https://calendar.com/test",
    "instagram_link": "https://instagram.com/test",
    "__v": 0,
    "code": "925318"
}
```
```404``` - Error (event not found)
```json
{
    "message": "Event not found"
}
```

## eventCreate

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /event/create | POST        | This method adds an event to the database | ```eventCreate```     |

### Body:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| title                 | string     | required          | Name of event                    |
| start_time                  | date     | required          | Time that event will start  |
| end_time | integer    | date          | required          | Time that event will end |
| location | integer    | string          | required          | Location of event |
| major_event | integer    | boolean          | required          | true if major, false if minor |
| description | integer    | string          | optional          | Description of event |
| calendar_link | integer    | string          | required          | Event calendar link |
| instagram_link | integer    | string          | optional          | Event instagram link |

### Example Body:
```json
{   
    "title": "test",
    "start_time": "2024-01-25T08:00:00.000Z",
    "end_time": "2024-01-26T08:00:00.000Z",
    "location": "123 test st",
    "major_event": false,
    "description": "test event",
    "calendar_link": "https://calendar.com/test",
    "instagram_link": "https://instagram.com/test",
}
```

### Responses:
```200``` - Successful creation
```json
{
    "message": "Successful",
    "id": "65b3022aec351932f7ff9d3f",
    "code": "857819"
}
```
```400``` - Errors exist in request body
```json
{
    "message": "Failed",
    "errors": [
        {
            "type": "field",
            "value": "2024-",
            "msg": "Start time must be a valid date.",
            "path": "start_time",
            "location": "body"
        },
        {
            "type": "field",
            "value": "https://calend",
            "msg": "Calendar link must be a valid URL.",
            "path": "calendar_link",
            "location": "body"
        }
    ]
}
```

## eventUpdate

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /event/:id/update | PUT        | This method updates an event in the database | ```eventUpdate```     |

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| id                 | string     | required          | Event id (must be valid MongoId)                     |

### Body:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| title                 | string     | optional          | Name of event                    |
| start_time                  | date     | optional          | Time that event will start  |
| end_time | integer    | date          | optional          | Time that event will end |
| location | integer    | string          | optional          | Location of event |
| major_event | integer    | boolean          | optional          | true if major, false if minor |
| description | integer    | string          | optional          | Description of event |
| calendar_link | integer    | string          | optional          | Event calendar link |
| instagram_link | integer    | string          | optional          | Event instagram link |

### Example Body:
```json
{   
    "title": "make event longer and more important",
    "end_time": "2024-01-26T10:00:00.000Z",
    "major_event": true,
    "calendar_link": "https://calendar.com/test_updated"
}
```

### Responses:
```200``` - Successful update
```json
{
    "message": "Successful"
}
```
```400``` - Errors exist in request body
```json
{
    "message": "Failed",
    "errors": [
        {
            "type": "field",
            "value": "2024-",
            "msg": "Start time must be a valid date.",
            "path": "start_time",
            "location": "body"
        },
        {
            "type": "field",
            "value": "https://calend",
            "msg": "Calendar link must be a valid URL.",
            "path": "calendar_link",
            "location": "body"
        }
    ]
}
```
```404``` - Error (Event not found)
```json
{
    "message": "Event not found"
}
```

## eventDelete

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /event/:id/delete | DELETE        | This method deletes an event in the database | ```eventDelete```     |

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| id                 | string     | required          | Event id (must be valid MongoId)                     |

### Responses:
```200``` - Successful update
```json
{
    "message": "Successful"
}
```
```400``` - Errors exist in request body
```json
{
    "message": "Failed",
    "errors": [
        {
            "type": "field",
            "value": "65b3022aec351937ff9d3a",
            "msg": "ID must be a valid ID.",
            "path": "id",
            "location": "params"
        }
    ]
}
```
```404``` - Error (Event not found)
```json
{
    "message": "Event not found"
}
```

# subscription

Jump to: [getEmails](#getemails), [createEmail](#createemail), [deleteEmail](#deleteemail)

The base API url for event routes is just the base url: http://localhost:5000/api/v1

## getEmails
| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| / | GET        | This method retrieves the user's email to be subscribed.  | ```getEmails```     |

### Responses:
```200``` - Successful request  
```json
{
    "email" : "johndoe@ucsd.edu"
}
```
```404``` - Error 


## createEmail
| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /create | POST        | This method creates the user's email to be subscribed.  | ```createEmail```     |

### Responses:
```201``` - Successful request  
```json
{
    "email" : "johndoe@ucsd.edu"
}
```
```409``` - Error 
```json
{
    "message": "email can not be added"
}
```

## deleteEmail

| **url** | **Method** | **Description**                                        | **Associated Method** |
|---------|------------|--------------------------------------------------------|-----------------------|
| /:email/delete | DELETE        | This method deletes the user's email in the subscription database.  | ```deleteEmail```     |

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| email                 | string     | required          | email to be deleted               |

### Responses:
```200``` - Successful request  
```json
{
    "message" : "Subscriber deleted successfully"
}
```
```404``` - Error 
```json
{
    "message": "Subscriber not found"
}
```
```500``` - Error 
```json
{
    "message": "An error occurred while deleting the subscriber"
}
```