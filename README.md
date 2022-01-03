## Installing

1. Clone the repository using :

```bash
git clone https://github.com/sk0693/pomelo-fashion.git
```

2. Change the repository directory :

```bash
cd pomelo-fashion
```
3. Install the needed node packges/modules :

```bash
npm install
```

4. Start the development server :

```bash
npm start
```
5. Run the test cases

```bash
npm test
```

## The changes I have made to fulfill the requirements as described below. 

### Part 1. Created a new API endpoint which takes input (Appendix1) and re-organized nodes (Appendix 2) and return it as response. 

```http
POST http://localhost:8080/api/nodes/formatNodes
```

```javascript
curl --location --request POST 'http://localhost:8080/api/nodes/formatNodes' \
--header 'Content-Type: application/json' \
--data-raw '{
    "0": [
        {
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
        }
    ],
    "1": [
        {
            "id": 12,
            "title": "Red Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
        },
        {
            "id": 18,
            "title": "Blue Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
        },
        {
            "id": 13,
            "title": "Wall",
            "level": 1,
            "children": [],
            "parent_id": 10
        }
    ],
    "2": [
        {
            "id": 17,
            "title": "Blue Window",
            "level": 2,
            "children": [],
            "parent_id": 12
        },
        {
            "id": 16,
            "title": "Door",
            "level": 2,
            "children": [],
            "parent_id": 13
        },
        {
            "id": 15,
            "title": "Red Window",
            "level": 2,
            "children": [],
            "parent_id": 12
        }
    ]
}'
```

### Part 2. Github Search api called internally from our application and render to the view.

This endpoint returns Github open repositories with desired query `nodejs`. And returns the html page

```http
GET /?page=1
```

```javascript
curl --location --request GET 'http://localhost:8080/?page=3' \
--header 'Content-Type: application/json' \
```

- Made frontend application for rendering data in the View along with Pagination widget. 
- That should be rendered onto the screen with fully functionality.
- Rendered the Github public repositories on to the view with 10 (per page) by 10 (pages) max on to the screen. 
- The pagination widgets works according the `page` query params and shows the same as page number.
&nbsp;

![View Screenschot](readmeContent/template.png?raw=true "Template View")
&nbsp;

## Swagger

Implemented the Swagger tools for the API documentation. Which can be easily accessed via below URL link.

```javascript
http://localhost:8080/documentation
```
&nbsp;
![Swagger Screenshot](readmeContent/swagger.png?raw=true "Swagger Integeration")
&nbsp;

## TEST CASES

Tried to implement some unit test cases to make the application bullet proof. Below test cases are performed on the application.

#### POST route for formatting child nodes
- responds with 200
- responds having properties [meta, data, error]
- Match output for given input

#### Mock Github Api (Dependancy Injection for HttpClient and mocking, to prevent third party api calling in unit testing)
- Check returned data to be an object
- Check page number is equal to requested page number

#### GET template
- responds with 200