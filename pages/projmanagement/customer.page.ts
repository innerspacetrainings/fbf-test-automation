import { expect, Page } from '@playwright/test';

export class CustomerPage {
  constructor(private readonly page: Page) {}

  /*async goToCustomersTab() {
    await this.page.getByTestId('stBaseButton-secondary').click();
  }*/

  async createCustomer(customerName: string, description: string) {
    await this.page.getByRole('button', { name: 'add_circle_outline Create' }).click();
    await this.page.getByRole('textbox', { name: 'Customer Name' }).click();
    await this.page.getByRole('textbox', { name: 'Customer Name' }).fill(customerName);
    await this.page.getByRole('textbox', { name: 'Description' }).click();
    await this.page.getByRole('textbox', { name: 'Description' }).fill(description);
    await this.page.getByTestId('stDialog').getByTestId('stBaseButton-primary').click();
  }

}