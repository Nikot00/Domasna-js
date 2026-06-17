import { StringUtils } from "./StringUtils.js"

class Mediaitem {
    static count = 0
    constructor(title, year, genre) {
        this.title = title,
        this.year = year,
        this.genre = genre,
        Mediaitem.count ++
    }

    describe() {
        return `${this.title} is from ${this.year} and its genre is ${this.genre} `
    }

}

const media1 = new Mediaitem("Interstellar", 2014, "Sci-Fi");

class Book extends Mediaitem {
    constructor(title, year, genre, author, pages) {
        super(title, year, genre)
        this.author = author
        this.pages = pages
    }

    describe() {
        return `${super.describe()}, the author is ${this.author} and this book has ${this.pages} pages.`
    }

      isClassic() {
        return new Date().getFullYear() - this.year > 50;
    }


}

const book1 = new Book("Harry Potter and the Chamber of Secrets ", 1998, "Fanstasy", "J.K.Rowling", 352)

class Podcast extends Mediaitem{
    constructor(title, year, genre, host, episodes) {
        super(title, year, genre)
        this.host = host,
        this.episodes = episodes
    }

    describe() {
        return `${super.describe()}, the host is ${this.host} and has ${this.episodes} episodes`
    }

    addEpisode() {
        this.episodes++
    }


}

const box2box = new Podcast("Box2Box", 2024, "Football talk", "Pala and Milli", 136)

//console.log(Mediaitem.count);

const podcast = new Podcast("JS Talks",2024,"Technology","James",10);
//console.log(podcast.describe());


//console.log(Mediaitem.count);


console.log(StringUtils.capitalize(""));
console.log(StringUtils.reverse(""));
console.log(StringUtils.wordCount(""));


 




