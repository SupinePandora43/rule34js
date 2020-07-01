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
    parseAttributeValue: true,
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
    parse_tags: boolean
    //timeout: number
}
type Rule34OptionsOptional = Partial<Rule34Options>
type Post = {
    /** File, { png, jpeg, webm} */
    file_url: string
    /** file_url height */
    height: number
    /** file_url width */
    width: number

    /** Sampled file url (same as file_url if video) */
    sample_url: string
    /** Sampled file width */
    sample_width: number
    /** Sampled file height */
    sample_height: number

    /** Preview file url */
    preview_url: string
    /** Preview file width */
    preview_width: number
    /** Preview file height */
    preview_height: number

    /** Score of post */
    score: number
    /** Parent id */
    parent_id: number
    /** Rating */
    rating: string
    /** Raw tags string */
    tags: string
    /** Tags, but its massive */
    tags_parsed: string[]
    /** ID of post */
    id: number
    /** Change of post */
    change: number
    /** MD5 */
    md5: string
    /** Creator ID */
    creator_id: number
    /** Has children ? */
    has_children: boolean
    /** Create date */
    created_at: string
    /** Status */
    status: string
    /** Source */
    source: string
    /** Has Notes */
    has_notes: boolean
    /** Has Comments */
    has_comments: boolean
}
/**
 * Returns massive of posts
 * @param {Rule34OptionsOptional} options
 * @returns {Post[]}
 */
export async function posts(options: Rule34OptionsOptional) {
    if (options == {} || options == null) {
        throw "nope"
    }
    options.tags = options.tags || ["all"]
    options.parse_tags = options.parse_tags || true
    const url = `https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${options.tags.join("+")}`
    const obj = await fetchString(url)
    const json = parse(obj, parseroptions, true)
    if (options.parse_tags)
        for (let postI = 0; postI < json.posts.post.length; postI++) {
            let cpost: Post = json.posts.post[postI]
            cpost.tags_parsed = cpost.tags.split(" ")
        }
    return json.posts.post as Post[]
}

/**
 * TODO: fix it
 * Synced version of posts() function
 * don't use it
 * or only with deasync module
 * @module deasync
 * @link posts
 * @see posts
 * @param {Rule34OptionsOptional} options
 * @returns {Post[]}
 
export function postsSync(options: Rule34OptionsOptional) {
    options.timeout = options.timeout || 100000
    let asyncPromiseEnded = false
    let returnValue:Post[]
    const postsAsync = posts(options).catch(reason => {
        throw reason
    }).finally(() => {asyncPromiseEnded = true}).then((value)=>{returnValue = value})
    const startedTime = new Date().getTime()
    while (!asyncPromiseEnded && startedTime + options.timeout > new Date().getTime());
    return postsAsync
} */
