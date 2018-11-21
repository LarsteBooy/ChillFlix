export class Movie {
    constructor(
        // OMDB /TITLE
        public Title?: string,
        // OMDB /DESCRIPTION
        public Description?: string,
        // OMDB /GENRE
        public Genre?: string,
        // OMDB /ACTORS
        public Actors?: string,
        // YOUTUBE   /snippet/resourceId/videoId
        public id?: string
        ) {}
}
