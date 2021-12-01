# Note Taker

## Description

Note-taking application using an Express.js back end to save and retrieve note data from a JSON file.

## Links

[Deployed app]() on Heroku

## Table of Contents

- [User Stories](#user-stories)
- [Technologies & Tools](#technologies-and-tools)
- [Endpoints](#endpoints)
  - [/api](#/api)
- [Contributing](#contributing)
- [Screenshots](#screenshots)

## User Stories

## Technologies and Tools

- Node.js
- Express.js
- uuid package

## Endpoints

### /api

- GET /notes
  Returns an array of all existing notes objects.

Example response:

```json
[
  {
    "id": "4d2ca0f3-597d-488a-80c7-a8aad04c9b91",
    "title": "Groceries",
    "text": "Bananas, oranges, milk."
  },
  {
    "id": "26d33b16-7277-45f1-b8ec-8acdd5b6fec7",
    "title": "Finish Homework",
    "text": "Due December 5"
  }
]
```

- POST /notes
  Creates a new note object.

POST body:

```json
{
  "title": "Haircut",
  "text": "Sunday at 9:00AM."
}
```

- DELETE /notes/:id
  Deletes a note by id.

## Contributing

To contribute to this project, please [email](mailto:) me.

## Screenshots
