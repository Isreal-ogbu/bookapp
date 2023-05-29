import express = require("express")

export function index(request: express.request, response: express.response) {
    response.send("Welcome to Book studio")
}
