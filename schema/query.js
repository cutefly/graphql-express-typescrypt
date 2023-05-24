// const booksData = require('./data')
const { books} = require('../db/')

const query = {
    books: async ({limit}, context) => {
        // return limit ? booksData.slice(0, limit) : booksData;
        return await books.getAllBooks(limit)
    },

    book: async ({id}, context) => {
        // return booksData.find(book => book.id === id);
        return await books.getBookById(id)
    }
};

module.exports = query