import { User } from "../models/User";
import request from "supertest";
import { app } from "../server";

let users;
let fundraising;
beforeEach(() => {
  users = [
    {
      email: "Jacksonzinho245@gmail.com",
      profile_image:
        "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/opensource.jpg",
    },
    {
      email: "Jacksonzinho234@gmail.com",
      profile_image:
        "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/opensource.jpg",
    },
  ];
  fundraising = [
    {
      fundraising_name: "Vaquinha pra comprar vacina do covid 2.0",
      description: "Vaquinha com intuito de vacinar a população",
      image: "Not found",
      video: "Not found",
      value_donated: 0,
      goal_meta: 20000,
      validity: "10-27-2021",
      user_id: "2c49bfe1-b42f-48a9-bb15-72f7b76098ab",
    },
  ];
});
describe("Test My app server", () => {
  it("should get main route", async (done) => {
    const res = await request(app).get("/users");
    expect(res.body).toHaveProperty("mensagem");
    done();
  });

  test("Ver como está a model", () => {
    const user = new User();
    user.username = "Paulo";
    expect(user.username).toEqual("Paulo");
  });
});

describe("Users functional tests", () => {
  it("insert users", async () => {
    const response = await request(app).post("/users").send(users[0]);
    expect(response.body).toMatchObject({
      ...users[0],
    });
  });
});
describe("Fundraising functional tests", () => {
  it("should return a users  with values", async () => {
    const response = await request(app)
      .post("/fundraising")
      .send(fundraising[0]);
    expect(response.body).toMatchObject({
      ...fundraising[0],
    });
  });
});
