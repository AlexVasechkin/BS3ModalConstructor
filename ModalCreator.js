function createModalOuter(id = '') {
    let ModalOuter = document.createElement('div');

    ModalOuter.classList.add('modal');
    ModalOuter.classList.add('fade');

    ModalOuter.setAttribute('tabindex', '-1');
    ModalOuter.setAttribute('role', 'dialog');

    if (   (typeof(id) == 'string')
        && (id.length > 1)
       )
    {
        ModalOuter.setAttribute('id', id);
    }

    return ModalOuter;
}

function createModalDialog() {
    let ModalDialog = document.createElement('div');
    ModalDialog.classList.add('modal-dialog');
    ModalDialog.setAttribute('role', 'document');

    return ModalDialog;
}

function createForm(options) {
    options = options || {};
    options.classes = options.classes || [];
    options.id = options.id || '';
    options.method = options.method || 'post';
    options.action = options.action || '';

    let FM = document.createElement('form');
    
    options.classes.forEach(function(element, index, array) {
        FM.classList.add(element);
    });

    if (   (typeof options.id == 'string')
        && (options.id.length > 0)
       ) 
    {
        FM.setAttribute('id', options.id);
    }

    FM.setAttribute('method', options.method);
    FM.setAttribute('action', options.action);

    return FM;

}

function createModalContent() {
    let ModalContent = document.createElement('div');
    ModalContent.classList.add('modal-content');
    return ModalContent;
}



function createModalTitle() {
    let ModalTitle = document.createElement('div');
    ModalTitle.classList.add('modal-title');

    ModalTitle.innerHTML = 'Узнать о поступлении';

    return ModalTitle;
}



function createModalHeader() {
    let MH = document.createElement('div');
    MH.classList.add('modal-header');

    return MH;
}



function createSpanTimes() {
    let span = document.createElement('span');
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML = '&times;';

    return span;
}



function createModalCloseButton() {
    let CloseButton = document.createElement('button');
    CloseButton.setAttribute('type', 'button');
    CloseButton.classList.add('close');
    CloseButton.setAttribute('data-dismiss', 'modal');
    CloseButton.setAttribute('aria-label', 'Close');
    let ButtonContent = createSpanTimes();
    CloseButton.append(ButtonContent);

    return CloseButton;
}



function createModalBody() {
    let MB = document.createElement('div');
    MB.classList.add('modal-body');

    return MB;
}



function createRow() {
    let container = document.createElement('div');
    container.classList.add('row');

    return container;
}

function createCol(size) {
    size = size || [];
    let col = document.createElement('div');
    size.forEach( function(element, index, array) {
        col.classList.add(element);
    });

    return col;
}

function createFormGroup() {
    let FG = document.createElement('div');
    FG.classList.add('form-group');

    return FG;
}


function createLabelFor(text, id) {
    text = text || '';
    id = id || '';
    let LB = document.createElement('label');
    LB.innerHTML = text;
    LB.setAttribute('for', '');

    return LB;
}


function createInput(name, options) {
    options = options || {};
    options.IsRequired = options.IsRequired || false;
    options.Placeholder = options.Placeholder || '';
    options.Value = options.Value || '';
    options.id = options.id || '';
    options.addClasses = options.addClasses || [];
    options.Type = options.Type || 'text';

    let TI = document.createElement('input');
    TI.classList.add('form-control');
    TI.setAttribute('type', options.Type);
    TI.setAttribute('name', name);

    if (options.IsRequired == true) {
        TI.setAttribute('required', '');
    }

    if (   (typeof options.Placeholder == 'string')
        && (options.Placeholder.length > 2)
       )
    {
        TI.setAttribute('placeholder', options.Placeholder);
    }

    if (typeof options.Value == 'string') {
        TI.setAttribute('value', options.Value);
    }



    if (   (typeof options.id == 'string')
        && (options.id.length > 2)
       )
    {
        TI.setAttribute('id', options.id);
    }

    options.addClasses.forEach(function(element, index, array ) {
        TI.classList.add(element);
    });

    return TI;
}



function createInputGroup(options) {
    options = options || {};

    options.labelText = options.labelText || '';
    options.labelFor = options.labelFor || '';
    options.inputName = options.inputName || '';
    options.inputPlaceholder = options.inputPlaceholder || '';
    options.inputValue = options.inputValue || '';
    options.inputIsRequired = options.inputIsRequired || false;
    options.inputId = options.inputId || '';
    options.inputClasses = options.inputClasses || [];
    options.inputType = options.inputType || 'text';

    let FG = createFormGroup();
    let row = createRow();
    FG.append(row);
    
    let LabelCol = createCol(['col-xs-12', 'col-sm-3']);
    if (options.labelText.length > 0) {
        let LB = createLabelFor(options.labelText, options.labelFor);
        LabelCol.append(LB);
        row.append(LabelCol);
    }


    let InputCol = createCol(['col-xs-12', 'col-sm-6']);
    let Input = createInput(options.inputName, {Placeholder: options.inputPlaceholder,
                                                Value: options.inputValue,
                                                Type: options.inputType,
                                                IsRequired: options.inputIsRequired,
                                                id: options.inputId,
                                                addClasses: options.inputClasses
                                               }
                           );
    
    InputCol.append(Input);
    row.append(InputCol);

    return FG;
}


function createModalFooter() {
    let MF = document.createElement('div');
    MF.classList.add('modal-footer');

    return MF;
}


function createCloseFooterBtn() {
    let Button = document.createElement('button');
    Button.classList.add('btn');
    Button.classList.add('btn-default');
    Button.setAttribute('data-dismiss', 'modal');

    Button.innerHTML = 'Отмена';

    return Button;
}

function createSubmitFooterBtn() {
    let Button = document.createElement('input');
    Button.classList.add('btn');
    Button.classList.add('btn-success');
    Button.setAttribute('type', 'submit');
    Button.setAttribute('value', 'Подтвердить');

    return Button;
}

function createModal(options) {
    options = options || {};
    options.ModalFormConfig = options.ModalFormConfig || {};
    options.FormFields = options.FormFields || {};

    let ModalOuter = createModalOuter(ModalID);
    let ModalDialog = createModalDialog();
    ModalOuter.append(ModalDialog);

    let ModalContent = createForm(options.ModalFormConfig);
    ModalDialog.append(ModalContent);

    let ModalHeader = createModalHeader();
    let ModalTopCloseBtn = createModalCloseButton();
    ModalHeader.append(createModalCloseButton());
    ModalHeader.append(createModalTitle());
    ModalContent.append(ModalHeader);

    let ModalBody = createModalBody();
    ModalContent.append(ModalBody);

    options.FormFields.inputs.forEach(function(element, index, array){
        ModalBody.append(createInputGroup(element));
    });

    let ModalFooter = createModalFooter();
    ModalContent.append(ModalFooter);
    ModalFooter.append(createCloseFooterBtn());
    ModalFooter.append(createSubmitFooterBtn());

    return ModalOuter;
}