import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('color contrast test', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.locator(`[data-test-id="open-modal-button"]`).click();
  await expect(page.locator('h3')).toHaveText('Example modal');
  const { violations } = await new AxeBuilder({ page }).analyze();
  // console.log('violations', violations);
  expect(violations).toHaveLength(2);
});
