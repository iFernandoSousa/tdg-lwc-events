import { LightningElement, api } from 'lwc';

export default class ColorPicker extends LightningElement {
    @api selectedColor;

    onColorChanged(event) {
        this.selectedColor = event.target.value;
        const customEvent = new CustomEvent('colorpickerselected', {
            detail: this.selectedColor
        })
        this.dispatchEvent(customEvent);
    }
}