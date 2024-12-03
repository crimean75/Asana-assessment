const { test, expect } = require("@playwright/test");

test("Test Case 1", async ({ page }) => {
  await page.goto("https://app.asana.com/-/login");
  await page.getByLabel("Email address").click();
  await page.getByLabel("Email address").fill("ben+pose@workwithloop.com");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("Password123");
  await page.getByRole("button", { name: "Log in" }).click();

  await page
    .getByLabel("Cross-functional project plan, Project, Project")
    .click();

  // Wait for the page to load and ensure the "To do" column is visible
  const toDoColumn = page.locator('.CommentOnlyBoardColumn:has-text("To do")');
  await expect(toDoColumn).toBeVisible();

  // Locate the "Draft project brief" task within the "To do" column
  const task = toDoColumn.locator(
    '.BoardCardLayout:has-text("Draft project brief")'
  );
  await expect(task).toBeVisible();

  // Verify the "Non-Priority" tag is present
  const nonPriorityTag = task.locator(
    '.PillThemeablePresentation:has-text("Non-Priority")'
  );
  await expect(nonPriorityTag).toBeVisible();

  // Verify the "On track" tag is present
  const onTrackTag = task.locator(
    '.PillThemeablePresentation:has-text("On track")'
  );
  await expect(onTrackTag).toBeVisible();
});

test("Test Case 2", async ({ page }) => {
  await page.goto("https://app.asana.com/-/login");
  await page.getByLabel("Email address").click();
  await page.getByLabel("Email address").fill("ben+pose@workwithloop.com");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("Password123");
  await page.getByRole("button", { name: "Log in" }).click();

  await page
    .getByLabel("Cross-functional project plan, Project, Project")
    .click();

  // Wait for the page to load and ensure the "To do" column is visible
  const toDoColumn = page.locator('.CommentOnlyBoardColumn:has-text("To do")');
  await expect(toDoColumn).toBeVisible();

  // Locate the "Draft project brief" task within the "To do" column
  const task = toDoColumn.locator(
    '.BoardCardLayout:has-text("Schedule kickoff meeting")'
  );
  await expect(task).toBeVisible();

  // Verify the "Non-Priority" tag is present
  const PriorityTag = task.locator(
    '.PillThemeablePresentation:has-text("Medium")'
  );
  await expect(PriorityTag).toBeVisible();

  // Verify the "On track" tag is present
  const onTrackTag = task.locator(
    '.PillThemeablePresentation:has-text("At risk")'
  );
  await expect(onTrackTag).toBeVisible();
});

test("Test Case 3", async ({ page }) => {
  await page.goto("https://app.asana.com/-/login");
  await page.getByLabel("Email address").click();
  await page.getByLabel("Email address").fill("ben+pose@workwithloop.com");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("Password123");
  await page.getByRole("button", { name: "Log in" }).click();

  await page
    .getByLabel("Cross-functional project plan, Project, Project")
    .click();

  // Wait for the page to load and ensure the "To do" column is visible
  const toDoColumn = page.locator('.CommentOnlyBoardColumn:has-text("To do")');
  await expect(toDoColumn).toBeVisible();

  // Locate the "Draft project brief" task within the "To do" column
  const task = toDoColumn.locator(
    '.BoardCardLayout:has-text("Share timeline with teammates")'
  );
  await expect(task).toBeVisible();

  // Verify the "Non-Priority" tag is present
  const PriorityTag = task.locator(
    '.PillThemeablePresentation:has-text("High")'
  );
  await expect(PriorityTag).toBeVisible();

  // Verify the "On track" tag is present
  const TrackTag = task.locator(
    '.PillThemeablePresentation:has-text("Off track")'
  );
  await expect(TrackTag).toBeVisible();
});

test("Test Case 4", async ({ page }) => {
  await page.goto("https://app.asana.com/-/login");
  await page.getByLabel("Email address").click();
  await page.getByLabel("Email address").fill("ben+pose@workwithloop.com");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("Password123");
  await page.getByRole("button", { name: "Log in" }).click();

  await page.getByLabel("Work Requests").click();

  // Wait for the page to load and ensure the "To do" column is visible
  const toDoColumn = page.locator(
    '.CommentOnlyBoardColumn:has-text("New Requests")'
  );
  await expect(toDoColumn).toBeVisible();

  // Locate the "[Example] Laptop setup for new hire" task within the "To do" column
  const task = toDoColumn.locator(
    '.BoardCardLayout:has-text("[Example] Laptop setup for new hire")'
  );
  await expect(task).toBeVisible();

  // Verify the "Medium priority" tag is present
  const PriorityTag = task.locator(
    '.PillThemeablePresentation:has-text("Medium priority")'
  );
  await expect(PriorityTag).toBeVisible();

  // Verify the "Low effort" tag is present
  const EffortTag = task.locator(
    '.PillThemeablePresentation:has-text("Low effort")'
  );
  await expect(EffortTag).toBeVisible();

  // Verify the "New hardware" tag is present
  const HardwareTag = task.locator(
    '.PillThemeablePresentation:has-text("New hardware")'
  );
  await expect(HardwareTag).toBeVisible();

  // Verify the "Started" tag is present
  const TrackTag = task.locator(
    '.PillThemeablePresentation:has-text("Not Started")'
  );
  await expect(TrackTag).toBeVisible();
});

test("Test Case 5", async ({ page }) => {
  await page.goto("https://app.asana.com/-/login");
  await page.getByLabel("Email address").click();
  await page.getByLabel("Email address").fill("ben+pose@workwithloop.com");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("Password123");
  await page.getByRole("button", { name: "Log in" }).click();

  await page.getByLabel("Work Requests").click();

  // Wait for the page to load and ensure the "To do" column is visible
  const toDoColumn = page.locator(
    '.CommentOnlyBoardColumn:has-text("In Progress")'
  );
  await expect(toDoColumn).toBeVisible();

  // Locate the "[Example] Password not working" task within the "To do" column
  const task = toDoColumn.locator(
    '.BoardCardLayout:has-text("[Example] Password not working")'
  );
  await expect(task).toBeVisible();

  // Verify the "Medium priority" tag is present
  const PriorityTag = task.locator(
    '.PillThemeablePresentation:has-text("Low priority")'
  );
  await expect(PriorityTag).toBeVisible();

  // Verify the "Low effort" tag is present
  const EffortTag = task.locator(
    '.PillThemeablePresentation:has-text("Low effort")'
  );
  await expect(EffortTag).toBeVisible();

  // Verify the "New hardware" tag is present
  const HardwareTag = task.locator(
    '.PillThemeablePresentation:has-text("Password reset")'
  );
  await expect(HardwareTag).toBeVisible();

  // Verify the "Started" tag is present
  const TrackTag = task.locator(
    '.PillThemeablePresentation:has-text("Waiting")'
  );
  await expect(TrackTag).toBeVisible();
});

test("Test Case 6", async ({ page }) => {
  await page.goto("https://app.asana.com/-/login");
  await page.getByLabel("Email address").click();
  await page.getByLabel("Email address").fill("ben+pose@workwithloop.com");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("Password123");
  await page.getByRole("button", { name: "Log in" }).click();

  await page.getByLabel("Work Requests").click();

  // Wait for the page to load and ensure the "To do" column is visible
  const toDoColumn = page.locator(
    '.CommentOnlyBoardColumn:has-text("Completed")'
  );
  await expect(toDoColumn).toBeVisible();

  // Locate the "[Example] Password not working" task within the "To do" column
  const task = toDoColumn.locator(
    '.BoardCardLayout:has-text("[Example] New keycard for Daniela V")'
  );
  await expect(task).toBeVisible();

  // Verify the "Medium priority" tag is present
  const PriorityTag = task.locator(
    '.PillThemeablePresentation:has-text("Low effort")'
  );
  await expect(PriorityTag).toBeVisible();

  // Verify the "Low effort" tag is present
  const EffortTag = task.locator(
    '.PillThemeablePresentation:has-text("New hardware")'
  );
  await expect(EffortTag).toBeVisible();

  // Verify the "New hardware" tag is present
  const HardwareTag = task.locator(
    '.PillThemeablePresentation:has-text("High priority")'
  );
  await expect(HardwareTag).toBeVisible();

  // Verify the "Started" tag is present
  const TrackTag = task.locator('.PillThemeablePresentation:has-text("Done")');
  await expect(TrackTag).toBeVisible();
});
