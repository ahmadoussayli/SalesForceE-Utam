import { logInSalesforce } from './utam-helper';
describe('main', () => {
  beforeAll(async () => {
    try {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000; 
      console.log('Starting Salesforce login process');
      await logInSalesforce();
      console.log('Salesforce login successful');
    } catch (error) {
      console.error('Error during Salesforce login:', error);
      throw error; // This will cause the beforeAll hook to fail
    }
  });

  it('creates an account', async function () {
    try {
      const currentUrl = await browser.getUrl();

      const url = new URL(currentUrl);
      const domain = url.hostname;
      console.log('domain >>>>>>>>', domain)
      await browser.maximizeWindow();

      await browser.url(domain, 'lightning/o/Supplier__c/list?filterName=__Recent');
      const supplierHanna = await browser.$('//a[contains(text(), "supplier ulit")]').click();
      
      console.log('supplierHanna >>>> : ',supplierHanna);
        const document = await browser.$('//a[contains(text(), "Répertoire Contacts")]').click();
        await browser.pause(2000);
        const active = await browser.$('//span[contains(text(), "Actif") and contains(@class, "active-btn")]').click();
        const title= await browser.$('//p[contains(text(), "Jix jix")]').click();
        const titleUrl = await browser.$('//a[contains(text(), "Jix jix")]').click();
        const windowHandles = await browser.getWindowHandles();
        console.log(`Window Handles: ${windowHandles}`);

        // Step 7: Switch to the new window/tab
        const originalWindow = await browser.getWindowHandle();
        let newWindowHandle;

        for (const handle of windowHandles) {
            if (handle !== originalWindow) {
                newWindowHandle = handle;
                break;
            }
        }

        if (!newWindowHandle) {
            throw new Error('New window/tab was not opened.');
        }

        await browser.switchToWindow(newWindowHandle);
        await browser.pause(5000);
        const userDropMenu = await browser.$('//button[contains(@class, "slds-button_last") and contains(@class, "fix-slds-button_icon-border-filled") and contains(@class, "slds-button_icon-border-filled")]').click();
        const login = await browser.$('//span[contains(text(), "Se connecter à une expérience en tant qu\'utilisateur")]').click();

        // console.log('active >>>>>>>>')

      await browser.debug();
    } catch (error) {
      console.error("Error in 'creates an account' test:", error);
      throw error;
    }
  });
});
