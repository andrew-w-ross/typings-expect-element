/// <reference path="typings/main" />
/// <reference path="expect-element" />

import * as expect from "expect";
import * as expectElement from "expect-element";
expect.extend(expectElement);

expect.extend({
	sayHello : () => true
});
let elem : HTMLDivElement = null;
expect(elem).toHaveAttribute("class");