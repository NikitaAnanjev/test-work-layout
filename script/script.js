jQuery(document).ready(function ($) {


    $('#mobile-menu').click(function () {
        $("#nav-list").toggleClass("mobile-nav");
        $(this).toggleClass("is-active");
        $('body').toggleClass("opened");
    });
    $("#nav-list a").click(function () {
        $('#mobile-menu').removeClass("is-active");
        $('body').removeClass("opened");
        $("#nav-list").removeClass("mobile-nav");
    });


    // Styled DropDown Select-Option
// Iterate over each select element
    $('#system-type').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');


        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            e.stopPropagation();
            if ($(this).hasClass('active')){
                $(this).removeClass('active').next('ul.options').hide();
            } else {

                $(this).toggleClass('active').next('ul.options').toggle();
            }
            // $('div.styledSelect.active').each(function (e) {
            //     $(this).removeClass('active').next('ul.options').hide();
            // });
            // $(this).toggleClass('active').next('ul.options').toggle();
        });



        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    // SCROLL EXPLANE - HELP ANIMATION
    $( 'ul.orders__steps' ).scroll(function() {
        $("div.menu-indicator").fadeOut( "slow" );
    });

    $('.indicator-cursor,.box-outer').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function (e) {
        $(this).fadeOut().remove();
    });

});