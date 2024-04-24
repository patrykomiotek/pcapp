import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://pcapp.vercel.app/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/super app/i);
});

test("get started link", async ({ page }) => {
  await page.goto("https://pcapp.vercel.app/");

  // Click the get started link.
  await page.getByRole("link", { name: "Contact" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
});
