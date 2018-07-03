import {expect} from 'chai';
import m from 'mocha';

import RPSMarkdown from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Markdown', () => {

  m.it('should convert to html', async function () {
    let md = new RPSMarkdown;

    let output = await md.markdownToHtml(new RpsContext,{},"Hello *World*!");


    expect(output).to.be.equals('<p>Hello <em>World</em>!</p>');

  }).timeout(0);

})
