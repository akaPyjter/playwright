/**
 * Reads a required environment variable.
 * Fails with a clear message instead of letting `undefined` reach Playwright.
 */
export function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      `Missing required environment variable "${name}". ` +
        `Set it in your .env file (locally) or in CI secrets.`,
    );
  }

  return value;
}
