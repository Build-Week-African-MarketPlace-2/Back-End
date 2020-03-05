const request = require('supertest')

const server = require('../api/server.js')


describe("items router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    });
  
      it("should return JSON formatted body", function() {
        return request(server)
          .get("/items")
          .then(res => {
            expect(res.type).toMatch(/json/);
          });
      });
    })

    