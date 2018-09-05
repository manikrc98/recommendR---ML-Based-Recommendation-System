import * as mdc from 'material-components-web';
import {MDCTopAppBar} from '@material/top-app-bar/index';

new mdc.ripple.MDCRipple(document.querySelector('.mdc-button'));  
import {MDCRipple} from '@material/ripple';
mdc.ripple.MDCRipple.attachTo(document.querySelector('.getStarted'));
import {MDCTextField} from '@material/textfield';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));