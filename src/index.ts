import { parse } from "fast-xml-parser"
import bent = require("bent")

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
type Rule34Options = {
    tags: String[]
}
type Rule34OptionsOptional = Partial<Rule34Options>
async function posts(options: Rule34OptionsOptional) {
    if (options == {} || options == null) {
        throw "nope"
    }
    options.tags = options.tags || ["all"]
    const url = `https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${options.tags.join("+")}`
    const obj = await fetchString(url)
    const json = parse(obj, parseroptions, true)
    return json.posts.post as Object[]
}

export = posts
