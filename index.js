/**
 * @file   mofron-comp-msgdlg/index.js
 * @author simpart
 */
let mf = require('mofron');
let Text = require('mofron-comp-text');
let Dialog = require('mofron-comp-dialog');
let efCenter = require('mofron-effect-center');

/**
 * @class mofron.comp.Msgdlg
 * @brief message dialog component for mofron
 */
mf.comp.MsgDlg = class extends Dialog {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('MsgDlg');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : 
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            this.height(180);
            
            let msg_ara = new mf.Component({
                size : new mf.Param(
                    '100%',
                    this.height() - (this.getHeader().height() + 40)
                )
            });
            this.addChild(msg_ara);
            this.target(msg_ara.target());
            
            this.text(prm);
            
            /* add ok button */
            this.addButton('OK');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm) {
        try {
            let txt = this.getFrame().child()[2];
            if (undefined === prm) {
                /* getter */
                let ret_txt = txt.child(); 
                if (0 === ret_txt.length) {
                    return null;
                } else if (1 === ret_txt.length) {
                    return ret_txt[0];
                } else {
                    return ret_txt;
                }
            }
            /* setter */
            let set_msg = null;
            if ('string' === typeof prm) {
                set_msg = new Text(prm);
            } else if (true === mf.func.isInclude(prm, 'Text')) {
                set_msg = prm;
            } else {
                throw new Error('invalid parameter');
            }
            set_msg.width('100%');
            set_msg.addEffect(new efCenter());
            this.addChild(set_msg);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.MsgDlg;
/* end of file */
