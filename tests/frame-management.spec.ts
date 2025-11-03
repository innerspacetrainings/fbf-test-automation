import { test } from '@playwright/test';
import { LoginPage, ProjectPage, ProcessPage } from '../pages';

test.describe.configure({ mode: 'serial' });

let page: any; // will hold the logged-in page

test('Login and select project and process',async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();

  const email = process.env.USER_EMAIL!;
  const password = process.env.USER_PASSWORD!;
  const login = new LoginPage(page);
  await login.open();
  await login.signIn(email, password);

  const projectPage = new ProjectPage(page);
  await projectPage.goToProjectsTab();
  //await projectPage.filterByProject(projectName);

  const processPage = new ProcessPage(page);
  await processPage.goToProcessesTab();
  await processPage.selectRandomProcessInProject();
});

/*test('Select Project', async () => {
  const projectPage = new ProjectPage(page);
  await projectPage.filterByProject(projectName);
});

test('Select Process', async () => {
  const processPage = new ProcessPage(page);
  await processPage.selectProcessInProject(processName);
});

await page.getByRole('tab', { name: 'Projects' }).click();
await page.locator('div').filter({ hasText: /^Fresh Aluminum Shirt$/ }).first().click();
await page.getByTestId('stSelectboxVirtualDropdown').getByText('Generic Gold Chicken').click();
await page.getByRole('tab', { name: 'Processes' }).click();
await page.locator('div').filter({ hasText: /^Choose an option$/ }).first().click();
await page.getByTestId('stSelectboxVirtualDropdown').getByText('daughter-').click();
await page.getByRole('link', { name: 'Frame Assignment' }).click();
await page.getByTestId('stFileUploaderDropzone').getByTestId('stBaseButton-secondary').click();
await page.getByTestId('stFileUploaderDropzone').getByTestId('stBaseButton-secondary').setInputFiles('filling-needle-uncovering-v1.mp4');
await page.getByTestId('stVideo').click();


await page.getByText('Select words to build a').click();
await page.getByText('operator a').click();
await page.locator('div').filter({ hasText: /^operator aDelete$/ }).click();
await page.getByText('close').click();
await page.getByText('operator aDeletecloseDelete').click();
await page.getByText('SKIP_DIRECT_ATTRIBUTE').click();
await page.getByText('operator aDeletecloseDeleteSKIP_DIRECT_ATTRIBUTEDelete').click();
await page.getByRole('img', { name: 'open' }).nth(1).click();
await page.getByRole('combobox', { name: 'Selected operator a, close,' }).fill('iso');
await page.getByText('isolator door').click();
await page.locator('.dvn-scroller').first().click();
await page.locator('.dvn-scroller').first().click();
await page.locator('.dvn-scroller').first().click();
await page.locator('.dvn-scroller').first().click();
await page.locator('.dvn-scroller').first().click();*/

