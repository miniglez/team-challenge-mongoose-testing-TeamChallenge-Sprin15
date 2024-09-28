const request = require("supertest")
const app = require("./index.js")
const Post = require("./models/Post.js") 

const post = {
    title: "prube23",
    body: "body prueba"
}

beforeEach(async () => {
    const deleteAll = await request(app).delete("/")
});

afterEach(async () => {
    const deleteAll = await request(app).delete("/")
});

describe("testing /create", () => {

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

    test("Testing getting all", async () => {
        let postCount = await Post.countDocuments({});
        expect(postCount).toBe(0);

        resPost = await request(app).post("/create").send(post).expect(201);

        resPost = await request(app).post("/create").send(post).expect(201);

        resPost = await request(app).post("/create").send(post).expect(201);

        postCount = await Post.countDocuments({});
        expect(postCount).toBe(3);
    })
});