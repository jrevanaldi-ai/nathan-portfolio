import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Nathan/);
});

test('find a resume and download', async ({ page }) => {
  test.setTimeout(0);

  await page.goto('/');

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download Nathan\'s Resume' }).click();
  const download = await downloadPromise;

  const fileName = download.suggestedFilename();
  expect(fileName).toMatch(/\.pdf$/);

});
