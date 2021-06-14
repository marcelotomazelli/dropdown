function Dropdown(id, config = {}) {
    // CONTRUCTOR

    if (typeof id != 'string') {
        id = '';
    }

    if (typeof config != 'object') {
        config = {};
    }

    // CONFIGURATION

    let buttonDataName = (config.buttonDataName != undefined ? config.buttonDataName : 'mt-dropdown');
    let showClass = (config.showClass != undefined ? config.showClass : 'show');

    let dropdown = $(`#${id}`);
    let button = $(`[data-${buttonDataName}="${id}"]`);
    let menu = $(`#${id}-menu`);

    let inside = false;

    let onshow = undefined;
    let onhide = undefined;

    // CONTROL FUNCTIONS

    function showing() {
        return dropdown.hasClass(showClass);
    }

    function hidden() {
        return !dropdown.hasClass(showClass);
    }

    function focused() {
        return button.is(':focus');
    }

    function show() {
        if (hidden()) {
            dropdown.addClass(showClass);

            if (onshow != undefined) {
                onshow();
            }
        }
    }

    function hide() {
        if (showing()) {
            dropdown.removeClass(showClass);

            if (onhide != undefined) {
                onhide();
            }
        }
    }

    // PUBLIC METHODS

    this.setOnshow = (f) => {
        if (onshow == undefined) {
            onshow = f;
        }
    };

    this.setOnhide = (f) => {
        if (onhide == undefined) {
            onhide = f;
        }
    };

    // EVENTS

    button.click(function () {
        if (hidden()) {
            show();
        } else if (focused()) {
            button.blur();
        }
    });

    button.blur(function () {
        if (!inside) {
            hide();
        }
    });

    menu.mouseover(function () {
        inside = true;
    });

    menu.mouseleave(function () {
        inside = false;

        if (showing() && !focused()) {
            button.focus();
        }
    });

    $(window).resize(() => { hide() });
}