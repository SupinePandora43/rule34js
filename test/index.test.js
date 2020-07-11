const test = require("zora").test
const posts = require("../lib/index").posts

test("lol", async (t) => {
    let lol = await posts({ tags: ["furry"], pid: 1, limit: 2 })
    console.log(lol)
})
