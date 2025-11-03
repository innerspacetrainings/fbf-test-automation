import { expect, Page } from '@playwright/test';

export class ProjectPage {
  constructor(private readonly page: Page) {}

  async goToProjectsTab() {
    await this.page.getByRole('tab', { name: 'Projects' }).click();
  }

  async createProject(projectName: string, customerName: string) {
    await this.page.getByRole('button', { name: 'add_circle_outline Create' }).click();
    await this.page.getByRole('textbox', { name: 'Project Name' }).fill(projectName);
    await this.page.getByRole('textbox', { name: 'Project Name' }).press('Tab');
    await this.page.getByRole('combobox', { name: /Selected .* Customer/ }).fill(customerName);
    await this.page.getByTestId('stSelectboxVirtualDropdown').getByText(customerName).click();
    await this.page.getByTestId('stBaseButton-primary').click();
  }

  async filterByProject(projectName: string) {
    await this.page.getByLabel('Projects').getByTestId('stSelectbox').first().click();
    await this.page.getByRole('combobox').fill(projectName);
    await this.page.getByTestId('stSelectboxVirtualDropdown').getByText(projectName).click();
  }
  
  
  
  
  

}