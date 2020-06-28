# Rule34js

simple javascript api for `rule34.xxx`

# features

* uses only official api

# Example

```javascript
const rule34js = require("rule34js")
const response = rule34js({tags:["furry"]})
response.then(()=>{console.log(response)})
```
