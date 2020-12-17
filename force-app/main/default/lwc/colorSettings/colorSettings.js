import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent, registerListener } from 'c/pubsub';

export default class ColorSettings extends LightningElement {
    selectedSize = 100;
    selectedColor = '#FFFFFF';

    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        registerListener('reset', this.onReset, this);
    }

    onReset(event) {
        this.selectedSize = 100;
        this.selectedColor = '#FFFFFF';

        fireEvent(this.pageRef, 'sizeChanged', { detail: this.selectedSize });
        fireEvent(this.pageRef, 'colorChanged', { detail: this.selectedColor });

        window.console.log(event.detail);
    }

    onSizeChanged(event) {
        this.selectedSize = event.target.value;
        fireEvent(this.pageRef, 'sizeChanged', { detail: this.selectedSize });
    }

    onColorPickerChanged(event) {
        this.selectedColor = event.detail;
        fireEvent(this.pageRef, 'colorChanged', { detail: this.selectedColor });
    }
}