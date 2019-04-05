//CHANGE THE SELECTED BUTTON TO SELECTED-FILTER
//CHANGE THE NON-SELECTED ONES TO HIDDEN-FILTER
$(document).on("click", ".filter-button", function (e) {
    $(this).removeClass("filter-button").addClass("selected-filter");
    $(".filter-button").removeClass("filter-button").addClass("hidden-filter");
});
//CHANGE THE SELECTED HIDDEN-FILTER BUTTON TO SELECTED-FILTER
//CHANGE THE NON-SELECTED SELECTED BUTTON TO HIDDEN-FILTER
$(document).on("click", ".hidden-filter", function (e1) {
    $(".selected-filter").removeClass("selected-filter").addClass("hidden-filter");
    $(this).removeClass("hidden-filter").addClass("selected-filter");
});
//CHANGE ALL BUTTONS TO THE INITIAL STATE
$(document).on("click", ".selected-filter", function (e2) {
    $(".hidden-filter").removeClass("hidden-filter").addClass("filter-button");
    $(this).removeClass("selected-filter").addClass("filter-button");
});
function filter(a, b, c, d, e, f, g, h, i){
    $( a ).hide();
    $( b ).hide();
    $( c ).hide();
    $( d).hide();
    $( e ).hide();
    $( f ).hide();
    $( g ).hide();
    $( h ).hide();
    $( i ).show();
}

//FILTER HIDING AND SHOW ACCORDING TO THE CLASS
$(document).on("click", ".filter-list li a", function (e3) {
    if($(this).hasClass('selected-filter'))  {
        console.log(this.className);
        if($(this).hasClass('illustration-filter')) {
            filter(
            ".UX-design",
            ".mobile",
            ".game-design",
            ".animation",
            ".dev",
            ".graphic-design",
            ".branding",
            ".web",
            ".illustration");
        } 
        if($(this).hasClass('ux-filter')) {
            filter(
            ".mobile",
            ".game-design",
            ".animation",
            ".dev",
            ".graphic-design",
            ".branding",
            ".web",
            ".illustration",
            ".UX-design");
        } 
        if($(this).hasClass('game-filter')) {
            filter(
            ".mobile",
            ".UX-design",
            ".animation",
            ".dev",
            ".graphic-design",
            ".branding",
            ".web",
            ".illustration",
            ".game-design");
        } 
        if($(this).hasClass('mobile-filter')) {
            filter(
            ".UX-design",
            ".game-design",
            ".animation",
            ".dev",
            ".graphic-design",
            ".branding",
            ".web",
            ".illustration",
            ".mobile");
        } 
        if($(this).hasClass('dev-filter')) {
            filter(
                ".UX-design",
                ".game-design",
                ".animation",
                ".mobile",
                ".graphic-design",
                ".branding",
                ".web",
                ".illustration",
                ".dev");
        } 
        if($(this).hasClass('graphic-filter')) {
            filter(
                ".UX-design",
                ".game-design",
                ".animation",
                ".dev",
                ".mobile",
                ".branding",
                ".web",
                ".illustration",
                ".graphic-design");
        }
        if($(this).hasClass('animation-filter')) {
            filter(
                ".UX-design",
                ".game-design",
                ".graphic-design",
                ".dev",
                ".mobile",
                ".branding",
                ".web",
                ".illustration",
                ".animation");
        }  
        if($(this).hasClass('branding-filter')) {
            filter(
                ".UX-design",
                ".game-design",
                ".graphic-design",
                ".dev",
                ".mobile",
                ".animation",
                ".web",
                ".illustration",
                ".branding");
        } 
        if($(this).hasClass('web-filter')) {
            filter(
                ".UX-design",
                ".game-design",
                ".graphic-design",
                ".dev",
                ".mobile",
                ".branding",
                ".animation",
                ".illustration",
                ".web");
        } 
    } 
    if($(this).hasClass('filter-button'))  {
        $( ".UX-design" ).show();
        $( ".mobile" ).show();
        $( ".game-design" ).show();
        $( ".animation" ).show();
        $( ".dev" ).show();
        $( ".graphic-design" ).show();
        $( ".illustration" ).show();
        $( ".branding" ).show();
        $( ".web" ).show();
    }
});