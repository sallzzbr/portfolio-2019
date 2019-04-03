$.getJSON( "../data.json", function( data ) {
    console.log (data.project.length);

    for(var i = 0; i < data.project.length; i++){
        $(".projects").append(HTMLprojectCard);
        var projectLink = HTMLprojectLink.replace("%data%", data.project[i].link);
        $(".project-card-content:last").append(projectLink);
        var projectImage = HTMLprojectImage.replace("%data%", data.project[i].image);
        $(".project-link:last").append(projectImage);
        var projectName = HTMLprojectName.replace("%data%", data.project[i].name);
        $(".project-card-content:last").append(projectName);
        for(var j = 0; j < data.project[i].tags.length; j++){
            var projectTags = HTMLprojectTag.replace("%data%", data.project[i].tags[j]);
            $(".tags-list:last").append(projectTags);
        }
    }

});
