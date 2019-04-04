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
//FILTER HIDING AND SHOW ACCORDING TO THE CLASS
$(document).on("click", ".filter-list li a", function (e3) {
    if($(this).hasClass('selected-filter'))  {
        console.log(this.className);
        if($(this).hasClass('illustration-filter')) {
            $( ".UX-design" ).hide();
            $( ".mobile" ).hide();
            $( ".game-design" ).hide();
            $( ".animation" ).hide();
            $( ".dev" ).hide();
            $( ".graphic-design" ).hide();
            $( ".illustration" ).show();
        } 
        if($(this).hasClass('ux-filter')) {
            $( ".mobile" ).hide();
            $( ".game-design" ).hide();
            $( ".animation" ).hide();
            $( ".dev" ).hide();
            $( ".graphic-design" ).hide();
            $( ".illustration" ).hide();
            $( ".UX-design" ).show();
        } 
        if($(this).hasClass('game-filter')) {
            $( ".mobile" ).hide();
            $( ".UX-design" ).hide();
            $( ".animation" ).hide();
            $( ".dev" ).hide();
            $( ".graphic-design" ).hide();
            $( ".illustration" ).hide();
            $( ".game-design" ).show();
        } 
        if($(this).hasClass('mobile-filter')) {
            $( ".game-design" ).hide();
            $( ".UX-design" ).hide();
            $( ".animation" ).hide();
            $( ".dev" ).hide();
            $( ".graphic-design" ).hide();
            $( ".illustration" ).hide();
            $( ".mobile" ).show();
        } 
        if($(this).hasClass('dev-filter')) {
            $( ".game-design" ).hide();
            $( ".UX-design" ).hide();
            $( ".animation" ).hide();
            $( ".mobile" ).hide();
            $( ".graphic-design" ).hide();
            $( ".illustration" ).hide();
            $( ".dev" ).show();
        } 
        if($(this).hasClass('graphic-filter')) {
            $( ".game-design" ).hide();
            $( ".UX-design" ).hide();
            $( ".animation" ).hide();
            $( ".mobile" ).hide();
            $( ".dev" ).hide();
            $( ".illustration" ).hide();
            $( ".graphic-design" ).show();
        }
        if($(this).hasClass('animation-filter')) {
            $( ".game-design" ).hide();
            $( ".UX-design" ).hide();
            $( ".graphic-design" ).hide();
            $( ".mobile" ).hide();
            $( ".dev" ).hide();
            $( ".illustration" ).hide();
            $( ".animation" ).show();
        }  
        if($(this).hasClass('illustration-filter')) {
            $( ".game-design" ).hide();
            $( ".UX-design" ).hide();
            $( ".graphic-design" ).hide();
            $( ".mobile" ).hide();
            $( ".dev" ).hide();
            $( ".animation" ).hide();
            $( ".illustration" ).show();
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
    }
});