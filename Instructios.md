

Run docker-compose up -d


# Trucks Endpoint Instructions

The `/trucks` endpoint is now set up and working. To create a new truck, send a POST request to `localhost:3000/trucks` with the following JSON structure:

```json
{
    "user": "user@email.com",    // Can be either an email or a valid ObjectId of an existing user
    "year": "2021",
    "color": "red",
    "plate": "ABC1234"          // Will be stored as 'plates' in the database
}
```