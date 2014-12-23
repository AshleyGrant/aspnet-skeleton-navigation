import _aureliaHttpClient = require('aurelia-http-client');
var httpClient = _aureliaHttpClient.HttpClient;

var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';

export class Flickr {
    public heading: string;
    public images: Array<any>;
    static inject() { return [httpClient]; }
    constructor(private http: _aureliaHttpClient.HttpClient) {
        this.heading = 'Flickr';
        this.images = [];
    }

    activate() {
        return this.http.jsonp(url).then(response => {
            this.images = response.content.items;
    });
}

canDeactivate() {
    return confirm('Are you sure you want to leave?');
}
}