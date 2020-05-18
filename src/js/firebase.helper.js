class FirebaseHelper {

    constructor() {
        var config = new Config();
        this.firebaseConfig = config.fireBaseConfig();
        firebase.initializeApp(this.firebaseConfig);
        
    }

    async getProjects() {
        var starCountRef = await firebase.database().ref('/project').once('value');
        return starCountRef.val();
    }

}