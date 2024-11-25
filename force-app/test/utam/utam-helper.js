const SESSION_TIMEOUT = 2 * 60 * 60 * 1000; // 2 hours by default

/**
 * Checks environment variables, session timeout and logs into Salesforce
 * @returns {DocumentUtamElement} the UTAM DOM handle
 */
export async function logInSalesforce() {
  try{
    const { SALESFORCE_LOGIN_URL, SALESFORCE_LOGIN_TIME } = process.env;
    if (new Date().getTime() - parseInt(SALESFORCE_LOGIN_TIME, 10) > SESSION_TIMEOUT) {
      throw new Error(`Salesforce session timed out. Re-authenticate before running tests.`);
    }
    console.log('step >>>>>>> 1')
    await browser.navigateTo(SALESFORCE_LOGIN_URL);
    console.log('step >>>>>>> 2')
  }catch(error){
    console.log('Error >>>>>>> ', error);
  }

}
