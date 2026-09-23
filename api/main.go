package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"
)

var version = "dev"

type statusResponse struct {
	Status  string `json:"status,omitempty"`
	Version string `json:"version,omitempty"`
}

func routes() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /healthz", writeJSON(statusResponse{Status: "ok"}))
	mux.HandleFunc("GET /version", writeJSON(statusResponse{Version: version}))
	return mux
}

func writeJSON(response statusResponse) http.HandlerFunc {
	return func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		if err := json.NewEncoder(w).Encode(response); err != nil {
			log.Printf("write response: %v", err)
		}
	}
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	server := &http.Server{
		Addr:              ":" + port,
		Handler:           routes(),
		ReadHeaderTimeout: 5 * time.Second,
	}

	log.Printf("API listening on %s", server.Addr)
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatal(err)
	}
}
