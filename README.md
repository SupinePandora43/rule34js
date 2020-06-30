# Rule34js

simple javascript api for `rule34.xxx`

# features

* uses only official api

# Example

```typescript
import { posts } from "rule34js" // const posts = require("rule34js").posts
const response = await posts({tags:["furry"]})
console.log(response)
```
