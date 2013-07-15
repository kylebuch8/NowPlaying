package nowplaying

import (
	//"fmt"
	"net/http"
	//"net/url"
	"io/ioutil"
	//"encoding/json"

	"time"
	"bytes"

	"appengine"
	"appengine/urlfetch"
	"html/template"
)

var index = template.Must(template.ParseFiles(
  "dist/index.html",
))

func init() {
	http.HandleFunc("/", rootHandler)
	http.HandleFunc("/img", imgHandler)
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	//c := appengine.NewContext(r)
	if err := index.Execute(w, nil); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func imgHandler(w http.ResponseWriter, r *http.Request) {
	v := r.URL.Query()
	url := v.Get("url")
    c := appengine.NewContext(r)
    client := urlfetch.Client(c)
    resp, err := client.Get(url)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	} 

	content := bytes.NewReader(body)

    var t time.Time

    http.ServeContent(w, r, "foo", t, content)

}

/*
type Rating struct {
	Critics_Rating string
	Critics_Score int64
	Audience_Rating string
	Audience_Score int64
}

type Posters struct {
	Thumbnail string
	Profile string
	Detailed string
	Original string
}

type Film struct {
    Id string
    Title string
    Ratings Rating
    Synopsis string
    Posters Posters
}

type NowPlayingAPI struct {
	Movies []Film
}

func init() {
	http.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
	url := "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=ufj8dmh2y6wu9ut4jmpk6ts2"
    c := appengine.NewContext(r)
    client := urlfetch.Client(c)
    
    resp, err := client.Get(url)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		c.Errorf("Failed reading body: %v", err)
		http.Error(w, err.Error(), 500)
		return
	}

	var results NowPlayingAPI
    if err := json.Unmarshal(body, &results); err != nil {
    	msg := fmt.Sprintf("Malformed JSON from %v: %v", url, err)
		c.Errorf("%s", msg)
		http.Error(w, msg, 500)
		return
    }

    fmt.Fprintf(w, "HTTP GET returned status %v", results)
}

*/