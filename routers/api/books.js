const express = require('express')
const router = express.Router()

const Book = require('../../models/book')

router.get('/', (req,res) => {
    Book.find()
        .then((books) => {
            res.json(books)
        })
        .catch((err) => {
            res.status(404).json({mes: 'книги не найдены'})
        })
})

// получить одну книгу
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then((book) => {
            res.json(book)
        })
        .catch((err) => {
            res.status(404).json({mes:"книга не найдена"})
        })
})

// создать одну книгу
router.post('/', (req, res) => {
    console.log(req.body)
    Book.create(req.body)
        .then((book) => {
            res.json(book)
        })
        .catch((err) => {
            res.status(400).json({mes: 'книга не добавлена'})
        })
})


// изменить одну книгу
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then((book) => {
            res.json(book)
        })
        .catch((err) => {
            res.status(400).json({mes: 'книга не изменилась'})
        })
})


// удалить одну книгу
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then((book) => {
            res.json(book)
        })
        .catch((err) => {
            res.status(400).json({mes: 'книга не удалена'})
        })
})



// router.get('/', functione(req,res){
//     res.send('qwert')
// })
// router.get('/user', functione(req,res){
//     res.send('user')
// })




module.exports = router