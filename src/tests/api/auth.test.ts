import { describe, expect, test } from "vitest";
import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../../api/auth.js";

const header: IncomingHttpHeaders = {
  authorization: "ApiKey 10"

};


describe("person", () => {
  test("header is null", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("key to be 10", () => {
    expect(getAPIKey(header)).toBe("10");
  });
});



