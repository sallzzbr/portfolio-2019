class ProjectBuilder {

    constructor() {
        this.fireBase = new FirebaseHelper();
    }

    async getProjects() {
        this.data = await this.fireBase.getProjects();
        for (var i = 0; i < this.data.length; i++) {
            $(".projects").append(HTMLprojectCard);
            var projectLink = HTMLprojectLink.replace("%data%", this.data[i].link);
            $(".project-card-content:last").append(projectLink);
            var projectImage = HTMLprojectImage.replace("%data%", this.data[i].image);
            $(".project-link:last").append(projectImage);
            var projectName = HTMLprojectName.replace("%data%", this.data[i].name);
            $(".project-card-content:last").append(projectName);
            for (var j = 0; j < this.data[i].tags.length; j++) {
                var projectTags = HTMLprojectTag.replace("%data%", this.data[i].tags[j]);
                $(".tags-list:last").append(projectTags);
                $(".project-card:last").addClass(this.data[i].tags[j]);
            }
        }
    }

    async getFeatured() {
        this.data = await this.fireBase.getProjects();
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].featured == true) {
                $(".projects").append(HTMLprojectCard);
                var projectLink = HTMLprojectLink.replace("%data%", this.data[i].link);
                $(".project-card-content:last").append(projectLink);
                var projectImage = HTMLprojectImage.replace("%data%", this.data[i].image);
                $(".project-link:last").append(projectImage);
                var projectName = HTMLprojectName.replace("%data%", this.data[i].name);
                $(".project-card-content:last").append(projectName);
                for (var j = 0; j < this.data[i].tags.length; j++) {
                    var projectTags = HTMLprojectTag.replace("%data%", this.data[i].tags[j]);
                    $(".tags-list:last").append(projectTags);
                    $(".project-card:last").addClass(this.data[i].tags[j]);
                }
            }
        }
    }

}


