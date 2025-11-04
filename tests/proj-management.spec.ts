import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage, CustomerPage, ProjectPage, ProcessPage } from '../pages';

test.describe.configure({ mode: 'serial' });

const customerName = faker.company.name();
const projectName  = faker.commerce.productName();
const processName  = `${faker.word.noun()}-${faker.number.int(999)}`;

let page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();

  const email = process.env.USER_EMAIL!;
  const password = process.env.USER_PASSWORD!;
  const login = new LoginPage(page);

  await login.open();
  await login.signIn(email, password);
});

test('Create Customer', async () => {
  const customerPage = new CustomerPage(page);
  await customerPage.createCustomer(customerName, 'Sample Desc');
});

test('Create Project', async () => {
  const projectPage = new ProjectPage(page);
  await projectPage.goToProjectsTab();
  await projectPage.createProject(projectName, customerName);
});

test('Select Project', async () => {
  const projectPage = new ProjectPage(page);
  await projectPage.filterByProject(projectName);
});

test('Create Process', async () => {
  const processPage = new ProcessPage(page);
  await processPage.goToProcessesTab();
  await processPage.createProcess(processName);
});

test('Select Process', async () => {
  const processPage = new ProcessPage(page);
  await processPage.selectProcessInProject(processName);
});

test('Verify Created Process and Project', async () => {
  const processPage = new ProcessPage(page);
  await processPage.expectSidebarHas(projectName, processName);
  await processPage.openFrameAssignmentAndExpect();
});
