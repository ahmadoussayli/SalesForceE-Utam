
'use strict';

var core = require('@utam/core');

async function _utam_get_submitBtn(driver, root) {
    let _element = root;
    const _locator = core.By.css(".submit-button");
    return _element.findElement(_locator);
}

/**
 * Page Object: Represents a form container
 * Root element: .form-container
 * generated from JSON force-app/test/utam/__utam__/test.utam.json
 * @version 2024-11-20T10:19:08.285Z
 * @author UTAM generator
 */
class Test extends core.UtamBaseRootPageObject {
    constructor(driver, element, locator = core.By.css("form")) {
        super(driver, element, locator);
    }

    async __getRoot() {
        const driver = this.driver;
        const root = await this.getRootElement();
        const BaseUtamElement = core.createUtamMixinCtor();
        return new BaseUtamElement(driver, root);
    }
    
    async getSubmitBtn() {
        const driver = this.driver;
        const root = await this.getRootElement();
        const ClickableUtamElement = core.createUtamMixinCtor(core.ClickableUtamElement);
        let element = await _utam_get_submitBtn(driver, root);
        element = new ClickableUtamElement(driver, element);
        return element;
    }
    
    async submitForm() {
        const _statement0 = await this.getSubmitBtn();
        await _statement0.click();
    }
    
}

module.exports = Test;
