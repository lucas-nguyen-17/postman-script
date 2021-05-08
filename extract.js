const _ = require("lodash");

const res = {
    "store": {
        "book": [
            {
                "category": "reference",
                "author": "Nigel Rees",
                "title": "Sayings of the Century",
                "price": 8.95
            },
            {
                "category": "fiction",
                "author": "Evelyn Waugh",
                "title": "Sword of Honour",
                "price": 12.99
            },
            {
                "category": "fiction",
                "author": "Herman Melville",
                "title": "Moby Dick",
                "isbn": "0-553-21311-3",
                "price": 8.99
            },
            {
                "category": "fiction",
                "author": "J. R. R. Tolkien",
                "title": "The Lord of the Rings",
                "isbn": "0-395-19395-8",
                "price": 22.99
            }
        ],
        "bicycle": {
            "color": "red",
            "price": 19.95
        }
    }
};

let books = res.store.book;
let isbns = _.map(books, _.property("isbn"));
console.log(isbns);

// let titles = [];
// books.forEach((element) => {
//     if (element.price < 15 && element.category === "fiction") {
//         titles.push(element.title);
//     }
// });

// let bookList = _.filter(books, (element) => {
//     return element.price < 15 && element.category === "fiction";
// });

// let titles = _.map(bookList, _.property("title"));
// console.log(titles);
