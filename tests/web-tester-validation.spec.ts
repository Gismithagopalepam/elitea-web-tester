import { test, expect } from '@playwright/test';

test.describe('Playwright homepage validation', () => {
  test('loads successfully, has the expected title, and shows main navigation', async ({ page }) => {
    const response = await page.goto('https://playwright.dev/', {
      waitUntil: 'domcontentloaded',
    });

    expect(response, 'Expected a response from the homepage').not.toBeNull();
    expect(response?.ok()).toBeTruthy();
    expect(page.url()).toBe('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.getByRole('navigation', { name: 'Main' })).toBeVisible();
  });

  test('captures a homepage screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Playwright/);
    await page.screenshot({ path: 'artifacts/playwright-homepage.png', fullPage: true });
  });
});
