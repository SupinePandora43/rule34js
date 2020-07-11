import { parse } from "fast-xml-parser"
import * as bent from "bent"

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
    /** Tags for find */
    tags: String[]
    /** tags_parsed depends on it */
    parse_tags: boolean
    /** Removes empty tags ('') 
     *  parse_tags is required
     */
    remove_empty: boolean
    /** Page number */
    pid: number
    /** Limit of posts
     * 100 is max */
    limit: number
}
/** some options */
type Rule34OptionsOptional = Partial<Rule34Options>
/** Definitions for available post's returning values */
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
type Rule34jsOutput = {
    /** Count of all posts founded by required tags */
    count: number,
    /** Offset from start
     * offset = pid * limit
     */
    offset: number
    /** Received posts */
    posts: Post[]
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
    options.remove_empty = options.remove_empty || true
    options.pid = options.pid || 0
    options.limit = options.limit || 100
    if (options.limit > 100) console.warn("rule34js: 100 is limit, using everything larger makes no sense")
    const url = `https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${options.tags.join("+")}&pid=${options.pid}&limit=${options.limit}`
    const obj = await fetchString(url)
    const json = parse(obj, parseroptions, true)
    if (json.posts && json.posts.post && options.parse_tags) {
        if (options.remove_empty) {
            for (let postI = 0; postI < json.posts.post.length; postI++) {
                let cpost: Post = json.posts.post[postI]
                cpost.tags_parsed = cpost.tags.split(" ").filter((val) => { return val != "" })
            }
        } else {
            for (let postI = 0; postI < json.posts.post.length; postI++) {
                let cpost: Post = json.posts.post[postI]
                cpost.tags_parsed = cpost.tags.split(" ")
            }
        }
    }
    return { count: (json.posts ? json.posts.count : 0), offset: (json.posts ? json.posts.offset : 0), posts: (json.posts ? json.posts.post : []) } as Rule34jsOutput
}
