# Rule34js

simple javascript api for `rule34.xxx`

# Features

* uses only official api
* has typings (`.d.ts`)
* async

# Example

* async/await
```javascript
import { posts } from "rule34js" // const posts = require("rule34js").posts
const response = await posts({tags:["furry"]})
console.log(response)
```
* promise callback
```javascript
import { posts } from "rule34js" // const posts = require("rule34js").posts
posts({tags:["sfw"]}).then((value)=>{console.log(value)})
```
will return
```javascript
{
  offset: 0,
  count: 33256, // count of all posts
  posts: [
  {
    height: 1707,
    score: 1,
    file_url: 'https://himg.rule34.xxx/images/3457/ddb7abf29ea807c55c1109ba78ceb935.png',
    parent_id: '',
    sample_url: 'https://rule34.xxx/samples/3457/sample_ddb7abf29ea807c55c1109ba78ceb935.jpg',
    sample_width: 850,
    sample_height: 1134,
    preview_url: 'https://rule34.xxx/thumbnails/3457/thumbnail_ddb7abf29ea807c55c1109ba78ceb935.jpg',
    rating: 's',
    tags: ' cute no_color sfw slime_girl suraimu suraimu(hyper_cawk) ',
    id: 3897419,
    width: 1280,
    change: 1593467420,
    md5: 'ddb7abf29ea807c55c1109ba78ceb935',
    creator_id: 709956,
    has_children: false,
    created_at: 'Mon Jun 29 21:48:39 +0000 2020',
    status: 'active',
    source: '',
    has_notes: false,
    has_comments: false,
    preview_width: 112,
    preview_height: 150,
    tags_parsed: [
      'cute',
      'no_color',
      'sfw',
      'slime_girl',
      'suraimu',
      'suraimu(hyper_cawk)',
    ]
  }
  // 99 posts here
  ]
}
```
# Options `Rule34OptionsOptional`

* `tags`: string[] - tags to find, ex. ["sfw", "cute"]
* ?`parse_tags`: boolean = true - **creates `tags_parsed`** variable
* ?`remove_empty`: boolean = true - removes **empty (`''`)** tags
* ?`pid`: number = 0 - page number
* ?`limit`: number = 100 - limit of post count
