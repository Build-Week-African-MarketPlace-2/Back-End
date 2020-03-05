const db = require("../data/dbConfig.js");

const Users = require("./users-model.js");

describe("users model", () => {
    afterEach(async () => {
        // this function executes and clears out the table before each test
        await db('user').truncate();
    });
    describe("getUserById(id)", () => {
        it("should get all users in the database", async () => {
            await Users.addNewUser({ username: "Andrea", password: "Test" })
            const user = await Users.getUserById(1);

            expect(user.username).toBe("Andrea")
        })
    })
    describe("deleteUser()", () => {
        it("should delete user", async () => {
            await Users.addNewUser({ username: "Andrea", password: "Test" })
            await Users.addNewUser({ username: "Micahhhhh", password: "Test" })
            await Users.deleteUser(1)
            const user = await Users.getUserById(1);

            expect(user).toBe(undefined)
        })
    })
})