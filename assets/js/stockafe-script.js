$(function () {

    // Bootstrap - Tooltips
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }

    // Bootstrap - Popovers
    if ($("[rel=popover]").length) {
        $("[rel=popover]").popover({ html: true, trigger: 'hover' });
    }

    // Default style for Select2 dropdowns
    $(".select2").select2({});

    // Default style for Select2 dropdown with images
    $(".select2-image").select2({
        formatResult: format,
        formatSelection: format,
        escapeMarkup: function (m) { return m; }
    });

    // Default style for Select2  Keyword "bucket"
    $(".select2-keywordtool").select2({
        tags: [],
        tokenSeparators: [",", ";"]
    });

    // Default datedate picker
    $('.datepicker').datepicker();

    // Add delegate for lightbox
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    // FlatUI - Switch
    $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();

    // "Loading" animation for certain elements clicked
    $(".loading-panel").click(function () {
        beginStockafeLoadingAnimation();
    });

    $('.butnsBar > .btn').click(function () {
        $(this).toggleClass('active');
    });
    //add custom-scrollbar class where mCustomScrolbar effect needed
    $(".custom-scrollbar").mCustomScrollbar({
    });

    // Adding 'focus' class to change color of feedback icon color
    $('.form-group').on('focus', '.form-control', function () {
        $(this).closest('.input-group, .form-group').addClass('focus');
    }).on('blur', '.form-control', function () {
        $(this).closest('.input-group, .form-group').removeClass('focus');
    });

    //Accordion
    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).parent().find('.panel-heading').removeClass("panel-heading-show");
    })
    $('.collapse').on('show.bs.collapse', function () {
        $(this).parent().find('.panel-heading').addClass("panel-heading-show");
    })

});

function beginStockafeLoadingAnimation() {
    jQuery("#main-load").fadeIn();
}

function endStockafeLoadingAnimation() {
    jQuery("#main-load").fadeOut();
}

// Formatting for the Select2 images
function format(input) {
    var originalOption = input.element;
    if (!jQuery(originalOption).data('img-src')) {
        return input.text;
    }
    return "<img class='select-image' src='" + jQuery(originalOption).data('img-src') + "'/>&nbsp;" + input.text;
}

// Sends messages to the client from a server side class
function clientMessageSend(title, message, classToUse) {

    jQuery('#client-message').removeClass("alert-success");
    jQuery('#client-message').removeClass("alert-info");
    jQuery('#client-message').removeClass("alert-danger");

    jQuery('#client-message').addClass(classToUse);


    jQuery('#client-message-title').html(title);
    jQuery('#client-message-message').html(message);

    switch (classToUse) {
        case "alert alert-error":
            jQuery("#button_close_clientMessage").text("I'm on it!");
            jQuery("#button_close_clientMessage").addClass("btn-danger");
            jQuery("#button_close_clientMessage").removeClass("btn-success");
            jQuery("#button_close_clientMessage").removeClass("btn-info");
            break;
        case "alert alert-success":
            jQuery("#button_close_clientMessage").text("Sweet!");
            jQuery("#button_close_clientMessage").removeClass("btn-danger");
            jQuery("#button_close_clientMessage").addClass("btn-success");
            jQuery("#button_close_clientMessage").removeClass("btn-info");
            break;
        case "alert alert-info":
            jQuery("#button_close_clientMessage").text("Ok!");
            jQuery("#button_close_clientMessage").addClass("btn-info");
            jQuery("#button_close_clientMessage").removeClass("btn-success");
            jQuery("#button_close_clientMessage").removeClass("btn-danger");
            break;
    }

    jQuery('#client-message').show();

    // Auto hide after X seconds
    switch (classToUse) {
        case "alert alert-success":
            window.setTimeout(function () { jQuery("#client-message").slideUp(); }, 5000);
            break;

        case "alert alert-error":
            jQuery("#client-message-wrapper").addClass("blackout");
            break;
    }
}

function clientMessageClose() {
    jQuery("#client-message-wrapper").removeClass("blackout");
    jQuery('#client-message').hide();
    return false;
}

