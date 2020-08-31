let ModalCreator = {
    createTag: function(options) {
        options = options || {};
        options.cls = options.cls || [];
        options.attrs = options.attrs || [];

        if (   (typeof options.tag != 'string')
            || (options.tag == '')
          ) {
            return null;
        }

        let obj = document.createElement(options.tag);

        options.cls.forEach(function(element, index, array) {
            obj.classList.add(element);
        });
    
        options.attrs.forEach(function(element, index, array) {
            obj.setAttribute(element.key, element.value);
        });
    
        if (   (typeof options.text == 'string')
            && (options.text.length > 0)
          )
        {
            obj.innerHTML = options.text;
        }
    
        return obj;
    },
    
    createChildItems: function(Parent, Items) {
        Parent = Parent || {};
        Items = Items || [];
    
        for (let i = 0; i < Items.length; i++) {
            let t = this.createTag(Items[i]);
    
            Parent.append(t);
    
            this.createChildItems(t, Items[i].items);
        }
    
        return true;
    }
};