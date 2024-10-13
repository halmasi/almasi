import crypto from "node:crypto";

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  return crypto.scryptSync(password, salt, 64).toString("hex") + ":" + salt;
}

export function verifyPassword(
  storedPassword: string,
  suppliedPassword: string
): boolean {
  const [hashPassword, salt] = storedPassword.split(":");
  const hashedPasswordBuffer = Buffer.from(hashPassword, "hex");
  const suppliedPasswordBuffer = crypto.scryptSync(suppliedPassword, salt, 64);
  return crypto.timingSafeEqual(hashedPasswordBuffer, suppliedPasswordBuffer);
}
