const request = require("supertest")
const app = require("./index.js")
const Post = require("./models/Post.js") 

describe("testing /create", () => {
    const post = {
        title: "prube23",
        body: "body prueba"
    }

    test("create posts", async () => {
        let postCount = await Post.countDocuments({});
        expect(postCount).toBe(0);

        resPost = await request(app).post("/create").send(post).expect(201);

        postCount = await Post.countDocuments({});
        expect(postCount).toBe(1);
        expect(resPost.body._id).toBeDefined();
        expect(resPost.body.title).toBeDefined();
        expect(resPost.body.body).toBeDefined();
    });
});

afterAll(() => {
    return Post.deleteMany();
})