"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submit = exports.book = void 0;
function book(request, response) {
    response.render("book", { title: 'Books' });
}
exports.book = book;
function submit(request, response) {
    response.render('book', {
        title: 'Books',
        message: 'Book not yet saved'
    });
}
exports.submit = submit;
