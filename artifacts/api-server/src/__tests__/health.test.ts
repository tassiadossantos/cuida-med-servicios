import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../app";

describe("Health Check API", () => {
  it("should return 200 OK with health status", async () => {
    const response = await request(app).get("/api/healthz");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status", "ok");
  });
});
