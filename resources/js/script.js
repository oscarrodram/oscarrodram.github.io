$(document).ready(function () {
    
    /*
    Basic syntax is: $(selector).action()

    A $ sign to define / access jQuery
    A(selector) to "query (or find)"
    HTML elements
    A jQuery action() to be performed on the element(s)
    */

    $('.js--section-features').waypoint(function (direction) {

        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
     }, {
        offset: '60px;'
    
    });
    

    /*
    var waypoint = new Waypoint({
        element: document.getElementById('basic-waypoint'),
        handler: function () {
            notify('Basic waypoint triggered')
        }
    })
    */

});
