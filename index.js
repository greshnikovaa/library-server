const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()
connectDB()

app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

const books = require('./routers/api/books')
app.use('/api/books', books)



const port = 8000;
app.listen(port, () => {
    console.log("server listening on port 8000")
})