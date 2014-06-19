$(function () {
    //temporary for building slider
    $(".slider").slider({
        min: 1,
        max: 100,
        values: [35, 45],
        orientation: "horizontal",
        range: true,
        slide: function (event, ui) {
            $("#slider-text1").text(ui.values[0]);
            $("#slider-text2").text(ui.values[1]);
        }
    })
    $(".slider1").slider({
        min: 1,
        max: 100,
        value: 35,
        orientation: "horizontal",
        range: "min"
    })
    $('.hastip').tooltipsy({
        offset: [0, 10],
        css: {
            'background-color': '#1f1f1f',
            'line-height': '1.286',
            'padding': '5px 10px',
            'text-align': 'center',
            'width': 'auto',
            'border-radius': '6px',
            'margin-bottom': '5px',
            'font-size': '14px'
        }
    });
    $(".tags").tagcloud({
        size: {
            start: 10,
            end: 25,
            unit: 'px'
        },
        color: {
            start: "#CDE",
            end: "#FS2"
        }
    });
    //$($(".select2")[0]).select2('open');
    //$(".transparentbtn").focus();
});