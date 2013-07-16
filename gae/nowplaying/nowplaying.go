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

    t := time.Date(1980,time.January,1,1,0,0,0,time.UTC)

    http.ServeContent(w, r, "", t, content)

}