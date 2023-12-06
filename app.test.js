import request from "supertest";
import app from "./app";

describe("POST /auth", () => {
    it("should return status 200", async () => {
        const response = await request(app).post("/auth");
        expect(response.status).toBe(200);
    });
});

describe("POST /auth with expired", () => {
    it("should return status 200", async () => {
        const response = await request(app).post("/auth?expired=true");
        expect(response.status).toBe(200);
    });
});

describe("GET /auth", () => {
    it("should return status 405", async () => {
        const response = await request(app).get("/auth");
        expect(response.status).toBe(405);
    });
});

describe("PUT /auth", () => {
    it("should return status 405", async () => {
        const response = await request(app).put("/auth");
        expect(response.status).toBe(405);
    });
});

describe("DELETE /auth", () => {
    it("should return status 405", async () => {
        const response = await request(app).delete("/auth");
        expect(response.status).toBe(405);
    });
});

describe("GET /.well-known/jwks.json", () => {
    it("should return status 200", async () => {
        const response = await request(app).get("/.well-known/jwks.json");
        expect(response.status).toBe(200);
    });
});

describe("POST /.well-known/jwks.json", () => {
    it("should return status 405", async () => {
        const response = await request(app).post("/.well-known/jwks.json");
        expect(response.status).toBe(405);
    });
});

describe("PUT /.well-known/jwks.json", () => {
    it("should return status 405", async () => {
        const response = await request(app).put("/.well-known/jwks.json");
        expect(response.status).toBe(405);
    });
});

describe("DELETE /.well-known/jwks.json", () => {
    it("should return status 405", async () => {
        const response = await request(app).delete("/.well-known/jwks.json");
        expect(response.status).toBe(405);
    });
});

describe("POST /register", () => {
    it("should return status 201", async () => {
        const response = await request(app).post("/register");
        expect(response.status).toBe(201);
    });
});

describe("GET /register", () => {
    it("should return status 405", async () => {
        const response = await request(app).get("/register");
        expect(response.status).toBe(405);
    });
});

describe("PUT /register", () => {
    it("should return status 405", async () => {
        const response = await request(app).put("/register");
        expect(response.status).toBe(405);
    });
});

describe("DELETE /register", () => {
    it("should return status 405", async () => {
        const response = await request(app).delete("/register");
        expect(response.status).toBe(405);
    });
});
