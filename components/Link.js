/* eslint-disable no-unused-vars */
export class Link {
    constructor(name, category, link, img, text) {
        this.name = name;
        this.category = category;
        this.link = link;
        this.img = img;
        this.text = text;
        Link.all.push(this);

        switch (category) {
            case 'entertainment':
                Link.entertainment.push(this);
                break;
            case 'finance':
                Link.finance.push(this);
                break;
            case 'tools':
                Link.tools.push(this);
                break;
        }
    }
    static all = [];
    static entertainment = [];
    static finance = [];
    static tools = [];
}



const youtube = new Link('youtube', 'entertainment', 'https://www.youtube.com', 'youtube.png');
const twitter = new Link('twitter', 'entertainment', 'https://twitter.com/home', 'twitter.png');
const twitch = new Link('twitch', 'entertainment', 'https://www.twitch.tv', 'twitch.png');
const playlist = new Link('playlist', 'entertainment', 'https://www.youtube.com/playlist?list=PLARB-Fzu-9HwysbWrrpyYx0oNNqFU95nU', 'playlistthumb.jpg');
const discover = new Link('discover', 'finance', 'https://www.discover.com', 'discover.png');
const capitalone = new Link('capitalone', 'finance', 'https://www.capitalone.com', 'capitalone.png');
const esl = new Link('esl', 'finance', 'https://www.esl.org', 'esl.png');
const supabase = new Link('supabase', 'tools', 'https://app.supabase.com/', null, 'Supabase');



