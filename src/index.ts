/**
 * @module Markdown
 */

import md from 'markdown';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("markdown")
export default class RPSMarkdown {

  @rpsAction({verbName:'markdownToHtml'})
  async markdownToHtml (ctx:RpsContext,opts:Object, data:any) : Promise<string>{
    return md.markdown.toHTML(data);
  }

}
