# Back-End

Hosted at: https://family-recipe-backend.herokuapp.com/
## Recipe Format
```
 {
    "id": 1,
    "title": "Tomato Soup",
    "source": "Grandma",
    "category": "dinner",
    "user_id": 1,
    "ingredients": [
      {
        "ingredient": "4 tomatoes"
      },
      {
        "ingredient": "2 cup milk"
      },
      {
        "ingredient": "3 cups water"
      }
    ],
    "instructions": [
      {
        "instruction": "Boil water."
      },
      {
        "instruction": "Puree tomato"
      },
      {
        "instruction": "Combine tomato puree, milk, and salt with water"
      }
   


```

## Login/Register

| Route    | Method | Endpoint         | Returns                         | Parameters                                                                            |
| -------- | ------ | ---------------- | ------------------------------- | ------------------------------------------------------------------------------------- |
| Register | POST   | `/auth/register` | `201` with the registered user  | All fields required.                                                                  |
| Login    | POST   | `/auth/login`    | `200` if succesful              | Name and password required. Returns authorization token.                              |


Note:
The first four users are test users, with the format {id: 1, username: name1, password: password} and so on.  |

## Users

- Volunteer routes can get a list of volunteers, a list of their tasks, and update/delete their information.

| Method | Endpoint                          | Returns                                           | Parameters                                                                        |
| ------ | --------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------- |
| GET    | `/users`                          | `200` returns all users                           | Auth token in header                                                              |
| GET    | `/users:id`                       | `200` returns a specific volunteer                | none, no token required                                                           |
| GET    | `/dashboard/volunteers/:id/tasks` | `200` returns list of all tasks for the volunteer | none                                                                              |
| PUT    | `/dashboard/volunteers/:id`       | `200` updates the volunteers information          | volunteer email, firstname, lastname, password, availability, state. All required |
| DELETE | `/dashboard/volunteers/:id`       | `204` deletes volunteer. with no return content   | Auth token in the header                                                          |

## Recipes


| Method | Endpoint        | Returns                           | Parameters                                               |
| ------ | ---------------| ---------------------------------- | -------------------------------------------------------- |
| GET    | `/recipes`     | `200` returns all recipes          | Auth token in header                                     |
| GET    | `/recipes/:id` | `200` returns a specific recipe    | Auth token in header                                     |
| PUT    | `/recipes/:id` | `200` edits and return recipe      | Recipe object, auth token in header                      |
| POST   | `/recipes`     | `200` adds and returns recipe      | Recipe object, without id parameter, auth token in header|
| DELETE | `/recipes/:id` | `204` deletes recipe and returns 1 | Auth token in header                                     |
