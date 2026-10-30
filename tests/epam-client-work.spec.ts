import { test, expect } from '@playwright/test';

test('navigate to EPAM Client Work from Services', async ({ page }) => {
  // Step 1: Navigate to the EPAM homepage.
  await page.goto('https://www.epam.com/');

  // Step 2: Open the header navigation and select Services.
  await page.getByRole('button').first().click();
  await page.getByRole('link', { name: 'Services', exact: true }).click();

  // Step 3: Click the Explore Our Client Work link.
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Step 4: Verify that Client Work is visible on the destination page.
  await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
});
