
import { Driver as _Driver, Element as _Element, Locator as _Locator, BaseUtamElement as _BaseUtamElement, UtamBaseRootPageObject as _UtamBaseRootPageObject, ClickableUtamElement as _ClickableUtamElement } from '@utam/core';

/**
 * Page Object: Represents a form container
 * Root element: .form-container
 * generated from JSON force-app/test/utam/__utam__/test.utam.json
 * @version 2024-11-20T10:19:08.285Z
 * @author UTAM generator
 */
declare class Test extends _UtamBaseRootPageObject {
    constructor(driver: _Driver, element?: _Element, locator?: _Locator);
    submitForm(): Promise<void>;
    getSubmitBtn(): Promise<(_BaseUtamElement & _ClickableUtamElement)>;
}
export = Test;
