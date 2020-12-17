import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener } from 'c/pubsub';

export default class ShowColorSquare extends LightningElement {
    size = 50;
    color = 'white';

    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        registerListener('sizeChanged', this.onSizeChanged, this);
        registerListener('colorChanged', this.onColorChanged, this);
    }

    get customStyle() {
        return 'height:' + this.size + 'px; width:' + this.size + 'px; background-color:' + this.color;
    }

    onSizeChanged(event) {
        this.size = event.detail;
    }

    onColorChanged(event) {
        this.color = event.detail;
    }
}