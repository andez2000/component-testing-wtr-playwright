import { html, fixture, expect } from '@open-wc/testing';

import '../src/MyElement.js';

describe('MyElement Spec', () => {

    describe("A default element", async () => {
        const el = await fixture(html`
              <my-element></my-element>
            `);

        console.log("Just in the A default element...");

        it('has a default title "Hello, world!"', () => {
            console.log("it - 1");
            expect(el.innerText).to.equal('Hello, world!');
        });

        it('has a default title "Hello, world!" - just to make sure', () => {
            console.log("it - 2");
            expect(el.innerText).to.equal('Hello, world!');
        });

        it('Just pass!', () => {
            console.log("it - 3");
            expect("a").to.equal("a");
        });
    });
});