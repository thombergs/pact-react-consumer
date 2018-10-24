const axios = require("axios");

describe("Some amazing Pact Test", () => {
  afterEach(() => {
    return provider.verify();
  });

  describe("/auth API", () => {
    beforeAll(() => {
      const interaction = {
        uponReceiving: "Get ",
        withRequest: {
          method: "GET",
          path: "/api/auth",
          headers: { Accept: "application/json" }
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      };
      return provider.addInteraction(interaction);
    });

    it("should create an action to login", () => {
      // TODO: proper assertion :)
      return axios.get(`http://localhost:${port}/api/auth`, {
        headers: { Accept: "application/json" }
      });
    });
  });
});
