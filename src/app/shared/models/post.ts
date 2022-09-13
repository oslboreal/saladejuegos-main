export class Post {
    public author: string;
    public title: string;
    public tags: string[];
    public videoId: string;

    constructor(author: string, title: string, tags: string[], videoId: string) {
        this.author = author;
        this.title = title;
        this.tags = tags;
        this.videoId = videoId;
    }
}