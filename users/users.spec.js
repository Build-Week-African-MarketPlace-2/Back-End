const db = require("../data/dbConfig.js");
const server = require("../api/server")
const request = require("supertest");
require("dotenv").config();

describe("server", function() {
  describe("environment", function() {
    it("should use the testing environment", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
});

describe("user router", function() {
    it("run simple test", function() {
      expect(true).toBe(true);
    })
})

it("GET/ users should respond with a status of 200 OK", async () => {
    request(server).get("/users").expect(200)
    request(server).get("/users/1").expect(200)
})

// const user = {"username": "Andrea", "password": "test", "department": "buyer"}
// describe('Login Test', () => {
//     it('Should Return 200', () => {
//         return request(server).post('/auth/login')
//         .send(user)
//         .then(res => {
//             expect(res.status).toBe(200)
//         })
//     })
// })

// describe('Register test', () => {
//     it('Should return 201 status', () => {
//         return request(server).post('/auth/register')
//         .send(user)
//         .then(res => {
//             expect(res.status).toBe(201)
//         })
//     })
// })




