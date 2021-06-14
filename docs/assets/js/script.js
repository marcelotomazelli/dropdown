$(document).ready(function () {
    // Dropdown instance
    let dropdownView = new Dropdown('dropdown-view');

    // CONTROL

    let timeoutCdChange;
    let intervalCodeUpdate, countCodeUpdate;

    function codeUpdate() {
        let menu = $('#dropdown-view-menu');
        let codeMenuClass = $('#code-dropdown-view-menu-class');

        codeMenuClass.css('opacity', 1)
        codeMenuClass.text(menu.attr('class'));

        countCodeUpdate = 1;
        intervalCodeUpdate = setInterval(() => {
            if (countCodeUpdate == 5) {
                clearInterval(intervalCodeUpdate);
                codeMenuClass.css('opacity', 1);
                return;
            }

            if (codeMenuClass.css('opacity') == 1) {
                codeMenuClass.css('opacity', 0.3);
            } else {
                codeMenuClass.css('opacity', 1);
            }

            countCodeUpdate += 1;
        }, 150);
    };

    // EVENT

    $('[data-cd-change]').click(function (e) {
        let menu = $('#dropdown-view-menu');

        let positionFrom = menu.attr('class').replace('mt-dropdown-menu mt-dropdown-p', '');
        let positionTo = $(this).data('cdChange');
        let directionFrom = positionFrom.charAt(0);
        let directionTo = positionTo.charAt(0);
        let alignmentFrom = (positionFrom.length > 1 ? positionFrom.charAt(1) : undefined);
        let alignmentTo = (positionTo.length > 1 ? positionTo.charAt(1) : undefined);

        let newClass = !menu.hasClass(`mt-dropdown-p${positionTo}`);
        let repeatAlignment = (alignmentFrom && alignmentTo ? alignmentFrom == alignmentTo : false);

        if (newClass || repeatAlignment) {
            clearTimeout(timeoutCdChange);
            menu.animate({ opacity: 0 }, 200);

            timeoutCdChange = setTimeout(() => {
                menu.attr('class', 'mt-dropdown-menu mt-dropdown-p' + (!repeatAlignment ? positionTo : directionTo));
                menu.animate({ opacity: 1 }, 200);

                if (newClass && directionFrom != directionTo) {
                    $('.cd-direction [data-cd-change]').removeClass('active');
                    $(`.cd-direction [data-cd-change="${directionTo}"]`).addClass('active');

                    $('.cd-alignment .cd-list').removeClass('active');
                    $(`.cd-alignment .cd-list-a${directionTo}`).addClass('active');
                }

                $('.cd-alignment [data-cd-change]').removeClass('active');

                if (newClass && alignmentTo) {
                    $(`[data-cd-change="${positionTo}"]`).addClass('active');
                }

                codeUpdate();
            }, 200);
        }
    });
});