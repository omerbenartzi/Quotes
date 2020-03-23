package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math/rand"
	"net/http"
)

const DATA_PATH = "data.json"

type Quote struct {
	Anime     string `json:"anime"`
	Character string `json:"character"`
	Id        string `json:"id"`
	Content   string `json:"content"`
}

func readData(path string) []Quote {
	defaultQuote := Quote{
		Anime:     "Anime",
		Character: "Character",
		Id:        "SAfsdafdsa",
		Content:   "fsdafasdfasdfasdfasd"}

	data, err := ioutil.ReadFile(path)
	if err != nil {
		fmt.Println("FUUUUUU")
		return []Quote{defaultQuote}

	}

	var quotes []Quote
	if err := json.Unmarshal(data, &quotes); err != nil {
		return []Quote{defaultQuote}
	}
	return quotes
}

func handleGetQuote(w http.ResponseWriter, req *http.Request) {
	quotes := readData(DATA_PATH)

	data, err := json.Marshal(quotes[rand.Intn(len(quotes))])
	if err != nil {
		fmt.Println("Error occurred")
	}

	enableCors(&w)
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(data)
}

func main() {
	http.HandleFunc("/api/quote", handleGetQuote)
	http.ListenAndServe("0.0.0.0:5000", nil)
}
