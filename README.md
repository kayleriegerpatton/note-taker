# Note Taker

## Description

Note-taking application using an Express.js back end to save and retrieve note data from a JSON file. Notes can be added, viewed, and deleted utilizing GET, POST, and DELETE requests, while the JSON data can be viewed via the api's GET path.

## Links

[Deployed app]() on Heroku

## Table of Contents

- [User Stories](#user-stories)
- [Technologies & Tools](#technologies-and-tools)
- [Endpoints](#endpoints)
  - [/api](#/api)
- [Contributing](#contributing)
- [Screenshots](#screenshots)

## User Story

GIVEN a note-taking application  
WHEN a user opens the application  
THEN they are presented with a landing page linking to their notes page

WHEN they click "Get Started"  
THEN they are presented with any existing notes listed on the left and fields to enter a new note

WHEN the user enters their note text and title
THEN a save icon appears and they can save their note

WHEN they save their note  
THEN the note appears in the left sidebar

WHEN the user clicks a note in the sidebar  
THEN it is presented in the page's main column

WHEN a user clicks the plus sign icon  
THEN they can enter another new note

WHEN the user clicks the delete icon next to an existing note  
THEN the note is deleted

## Technologies and Tools

- Node.js
- Express.js
- uuid package

## Endpoints

### /api

- GET /notes  
  Returns an array of all existing notes objects.
  - Example response:

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
  - POST body:

```json
{
  "title": "Haircut",
  "text": "Sunday at 9:00AM."
}
```

- DELETE /notes/:id  
  Deletes a note by id.

## Contributing

To contribute to this project, please [email](mailto:kayle.patton22@gmail.com) me.

## Screenshots
