import express = require("express")

export function book(request: express.request, response: express.response){
    response.render("book", {title: 'Books'})
}

export function submit(request: express.request, response: express.response){
    response.render('book', {
        title: response.data,
        message: 'Book not yet saved'
    })
}