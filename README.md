#   BACK-END

Auth Routes
|Methods|Endpoint|Token|Description|
|:--|:--|:--|:--|
|POST|/auth/register|NO|Register user|
|POST|/auth/login|NO|Signs in user with token|


User Routes
|Method|Endpoint|Token|Description|
|:--|:--|:--|:--|
|GET|/users|YES|Returns all users|
|GET|/users/:id|YES|Returns users by id|
|GET|/users/:id/items|YES|Returns user item|
|DELETE|/users/:id|YES|Deletes user by id|


Items Routes
|Method|Enpoint|Token|Description|
|:--|:--|:--|:--|
|GET|/items|YES|Returns all items|
|GET|/items/:id|YES|Returns item by id|
|POST|/items/additem|YES|Adds an item to the database|
|PUT|/items/:id|YES|Edits item|
|DELETE|/items/:id|YES|Deletes item by id|
|GET|/items/category|YES|Gets all items by category|



PVC: https://docs.google.com/document/d/1fUOB4TUeokYFQ7Zawy9YAxfhwpQPRdfGcSVPg0IZfhU/edit#
