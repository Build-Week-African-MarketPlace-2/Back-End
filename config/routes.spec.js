const request = require('supertest')

const server = require('../api/server.js')

const db = require('../database/dbConfig.js')

describe("items router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    });
  
    describe("GET /items", function() {
      it("should return 200 OK", function() {
        return request(server)
          .get("/items")
          .then(res => {
            expect(res.status).toBe(200);
          });
      });
  
      it("should return items as the router value", function() {
        return request(server)
          .get("/items")
          .then(res => {
            expect(Array.isArray(res.body)).toBe(true);
          });
      });
  
      it("should return JSON formatted body", function() {
        return request(server)
          .get("/items")
          .then(res => {
            expect(res.type).toMatch(/json/);
          });
      });
    })




    describe('Register test', () => {
        it('Should return 201 status', () => {
            return request(server).post('/auth/register')
            .send(user)
            .then(res => {
                expect(res.status).toBe(201)
            })
        })

       

    describe('Login Test', () => {
        it('Should Return 200', () => {
            return request(server).post('/auth/login')
            .send(user)
            .then(res => {
                expect(res.status).toBe(200)
            })

            
        })
    })
})
})