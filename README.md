# Rule34js

simple javascript api for `rule34.xxx`

# features

* uses only official api
* has typings (`.d.ts`)
* async

# Example

* async/await
```javascript
import { posts } from "rule34js" // const posts = require("rule34js").posts
const response = await posts({ tags: [ "furry" ] })
console.log(response)
```
* promise callback
```javascript
import { posts } from "rule34js" // const posts = require("rule34js").posts
posts({ tags: [ "furry" ] }).then( (value) => { console.log( value ) })
```
