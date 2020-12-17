({
    handleInit: function (component, event, helper) {
        let pubsub = component.find('pubsub');

        let colorChanged = $A.getCallback(function (message) {
            let size = component.get('v.size');
            let color = message.detail;

            component.set('v.color', color);
            component.set('v.style', 'height:' + size + 'px; width:' + size + 'px; background-color:' + color);
        });

        let sizeChanged = $A.getCallback(function (message) {
            let color = component.get('v.color');
            let size = message.detail;

            component.set('v.size', size);
            component.set('v.style', 'height:' + size + 'px; width:' + size + 'px; background-color:' + color);
        });

        pubsub.registerListener('colorChanged', colorChanged);
        pubsub.registerListener('sizeChanged', sizeChanged);

        let color = component.get('v.color');
        let size = component.get('v.size');
        component.set('v.style', 'height:' + size + 'px; width:' + size + 'px; background-color:' + color);
    },

    reset: function (component, event, helper) {
        let pubsub = component.find('pubsub');
        pubsub.fireEvent('reset', { detail: 'I reset it!' });
    }
})
