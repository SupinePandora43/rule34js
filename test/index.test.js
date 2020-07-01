const test = require("zora").test
const posts = require("../lib/index").posts

test("lol", async (t) => {
    let lol = await posts({ tags: ["sfw"] })
    lol[0].file_url = '' // rule34.xxx uses (min 3) mirrors for image saving
    t.equal(lol[0], {
        height: 1707,
        score: 1,
        file_url: '',
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
    })
})
