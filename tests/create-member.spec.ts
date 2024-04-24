import { test, expect } from "@playwright/test";

test("create member", async ({ page }) => {
  const name = "Xavier-2";
  const role = "boss";

  await page.goto("https://pcapp.vercel.app/");
  await page.getByRole("link", { name: "Members" }).click();
  await page.getByRole("link", { name: "Create" }).click();
  await page.getByRole("button", { name: "Send" }).click();
  // await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
  await expect(page.getByText("Name is required")).toBeVisible();
  await page.getByLabel("Name").click();
  await page.getByLabel("Name").fill(name);
  await page.getByLabel("Name").press("Tab");
  await page.getByLabel("Role").fill(role);
  await page.getByRole("button", { name: "Send" }).click();
  // await expect(page.getByText("Redirecting...")).toBeVisible();
  await expect(page.getByText("Member created")).toBeVisible();
  await page.getByRole("link", { name: name }).click();
  await expect(page.getByText(`${name} ${role}`)).toBeVisible();
});
