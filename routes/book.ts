import express = require("express");
import mongoose = require('mongoose');

function next(err: any): void{
    console.log(err)
};
mongoose.connect("mongodb://localhost:27017/books")

var bookschema = new mongoose.Schema({
    title: String,
    author: String,
    isbn: String
})

var bookmodel = mongoose.model<any>('book', bookschema)

export async function book(request: express.request, response: express.response){
    try {
        var book = await bookmodel.find({"_id": "646d04855b6fda08eda686d7"});
        response.render('book', {
            title: 'books',
        })
    } catch(err){
        return next(err)
    }   
}

export function submit(request: express.request, response: express.response){
    var addedbook = new bookmodel({
        title: request.body.book_title,
        author: request.body.author,
        isbn: request.body.book_isbn
    });

    addedbook.save()
    .then(data=>{
        response.redirect('/book')
    })
    .catch((err)=>{
        return next(err)
    })
}