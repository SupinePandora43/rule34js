# Rule34js

simple javascript api for `rule34.xxx`

# features

* uses only official api
* has typings (`.d.ts`)
* async

# Example

* async/await
```typescript
import { posts } from "rule34js" // const posts = require("rule34js").posts
const response = await posts({ tags: [ "furry" ] })
console.log(response)
```
* promise callback
```typescript
import { posts } from "rule34js" // const posts = require("rule34js").posts
const response = rule34js({ tags: [ "furry" ] }).then( (value) => { console.log( value ) } )
```
