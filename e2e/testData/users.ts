import { requireEnv } from "../utils/env";

export type Credentials = {
  email: string;
  password: string;
};

/**
 * Single place that knows where login credentials come from.
 * It is a function (not a top-level const) so a missing variable
 * only fails the tests that actually need the user.
 */
export function getValidUser(): Credentials {
  return {
    email: requireEnv("user"),
    password: requireEnv("password"),
  };
}
