import { expect, test } from "@playwright/test";

test.describe("smoke", () => {
  test("home loads with hero", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Product");
  });

  test("case study with embed loads", async ({ page }) => {
    await page.goto("/work/orixlink-ai");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "OrixLink AI"
    );
    await expect(page.getByRole("heading", { name: "Process" })).toBeVisible();
  });

  test("about page and in-page anchor target exist", async ({ page }) => {
    await page.goto("/about");
    await expect(
      page.getByRole("heading", { name: "Hannah Kraulik Pagade" })
    ).toBeVisible();
    await expect(page.locator("#how-i-work")).toBeVisible();
  });
});
