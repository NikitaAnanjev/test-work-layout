jQuery(document).ready( function($){


    $('#field').rangeslider({
        polyfill: false,
        onInit: function () {
            $('#input').val($('input[type="range"]').val());
        },
        onSlide: function (position, value) {
            //console.log('onSlide');
            // console.log('position: ' + position, 'value: ' + value);
            $('.content #input').val(value);
        },
        onSlideEnd: function (position, value) {
            //console.log('onSlideEnd');
            // console.log('position: ' + position, 'value: ' + value);
        }
    });
    // Change the value of input field when slider changes
    $('#field').on('input', function () {
        $('#input').val(this.value);
        console.log('%' + $('#input').val());
    });

    // Change the value of slider field when input changes
    $('#input').on('input', function () {
        if (this.value.length == 0) $('#field').val(0).change();

        $('#field').val(this.value).change();
    });

});