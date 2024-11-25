
import { By as _By, createUtamMixinCtor as _createUtamMixinCtor, UtamBaseRootPageObject as _UtamBaseRootPageObject, ClickableUtamElement as _ClickableUtamElement } from '@utam/core';

async function _utam_get_submitBtn(driver, root) {
    let _element = root;
    const _locator = _By.css(".submit-button");
    return _element.findElement(_locator);
}

/**
 * Page Object: Represents a form container
 * Root element: .form-container
 * generated from JSON force-app/test/utam/__utam__/test.utam.json
 * @version 2024-11-20T10:19:08.285Z
 * @author UTAM generator
 */
export default class Test extends _UtamBaseRootPageObject {
    constructor(driver, element, locator = _By.css("form")) {
        super(driver, element, locator);
    }

    async __getRoot() {
        const driver = this.driver;
        const root = await this.getRootElement();
        const BaseUtamElement = _createUtamMixinCtor();
        return new BaseUtamElement(driver, root);
    }
    
    async getSubmitBtn() {
        const driver = this.driver;
        const root = await this.getRootElement();
        const ClickableUtamElement = _createUtamMixinCtor(_ClickableUtamElement);
        let element = await _utam_get_submitBtn(driver, root);
        element = new ClickableUtamElement(driver, element);
        return element;
    }
    
    async submitForm() {
        const _statement0 = await this.getSubmitBtn();
        await _statement0.click();
    }
    
}