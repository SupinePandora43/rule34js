const bent = require("bent")
const parser = require("fast-xml-parser")

const parseroptions = {
    attributeNamePrefix: "",
    //attrNodeName: false, //default is 'false'
    textNodeName: "#text",
    ignoreAttributes: false,
    ignoreNameSpace: false,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: false,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    stopNodes: ["parse-me-as-string"]
}
const fetchString = bent('string')

async function posts(options) {
    if (options == {}||options==null) {
        throw "nope"
    }
    options.tags = options.tags || ["all"]
    const url = `https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${options.tags.join("+")}`
    const obj = await fetchString(url)
    const json = parser.parse(obj, parseroptions, true)
    return json.posts.post
}

module.exports = posts
