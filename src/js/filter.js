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
            $( ".vector" ).hide()
            $( ".illustration" ).show()
        } 
        if($(this).hasClass('vector-filter')) {
            $( ".illustration" ).hide()
            $( ".vector" ).show()
        } 
    } 
    if($(this).hasClass('filter-button'))  {
        $( ".illustration" ).show()
        $( ".vector" ).show()
    }
});
