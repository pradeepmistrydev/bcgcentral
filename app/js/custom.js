$(document).ready(function() {
    $('#header-toggle').click(function() {
        $('#sidenav').toggleClass('sidenav-active');
        $('.main').toggleClass('main__active');
    })
});