package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestStatusEndpoints(t *testing.T) {
	tests := []struct {
		path string
		want statusResponse
	}{
		{path: "/healthz", want: statusResponse{Status: "ok"}},
		{path: "/version", want: statusResponse{Version: "dev"}},
	}

	for _, tt := range tests {
		t.Run(tt.path, func(t *testing.T) {
			request := httptest.NewRequest(http.MethodGet, tt.path, nil)
			response := httptest.NewRecorder()

			routes().ServeHTTP(response, request)

			if response.Code != http.StatusOK {
				t.Fatalf("status = %d, want %d", response.Code, http.StatusOK)
			}
			if got := response.Header().Get("Content-Type"); got != "application/json; charset=utf-8" {
				t.Fatalf("content type = %q", got)
			}
			var got statusResponse
			if err := json.NewDecoder(response.Body).Decode(&got); err != nil {
				t.Fatal(err)
			}
			if got != tt.want {
				t.Fatalf("response = %#v, want %#v", got, tt.want)
			}
		})
	}
}
