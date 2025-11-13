import { expect, test } from '../helper';

test.describe('RAD Template', () => {
    test('Navigation is visible', async ({ radPage }) => {
        await expect(radPage.locator('[active]')).toContainText('Home');

        const componentsGalleryLink = radPage.locator('a[href="/component-gallery"]');
        await expect(
            componentsGalleryLink,
            'Component Gallery link should be visible in the navigation'
        ).toBeVisible();

        await componentsGalleryLink.click();

        await expect(
            radPage,
            'Clicking the Component Gallery link should navigate to /component-gallery'
        ).toHaveURL(/\/component-gallery(?:[?#]|$)/);

        await expect(
            radPage.locator('[active]'),
            'Active navigation item should switch to Component Gallery'
        ).toContainText('Component Gallery');
    });
});
