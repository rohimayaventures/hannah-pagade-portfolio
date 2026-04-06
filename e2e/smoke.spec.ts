import { expect, test } from "@playwright/test";

test.describe("smoke", () => {
  test("home loads with hero", async ({ page }) => {
    await page.goto("/");
    const hero = page.locator("h1");
    await expect(hero).toContainText("Hannah Kraulik Pagade");
    await expect(hero).toContainText("AI product leader");
    await expect(
      page.getByText("Product management & UX design", { exact: false })
    ).toBeVisible();
  });

  test("case study with embed loads", async ({ page }) => {
    await page.goto("/work/orixlink-ai");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "OrixLink AI"
    );
    // OrixLink uses ProcessSideNav (no h2 "Process"); other studies use ProcessSection.
    await expect(
      page.getByRole("navigation", { name: "Process steps" }),
    ).toBeVisible();
  });

  test("about page and in-page anchor target exist", async ({ page }) => {
    await page.goto("/about");
    await expect(
      page.getByRole("heading", { name: "Hannah Kraulik Pagade" })
    ).toBeVisible();
    await expect(page.locator("#how-i-work")).toBeVisible();
  });
});
