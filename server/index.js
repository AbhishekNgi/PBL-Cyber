// import * as dotenv from 'dotenv'
// dotenv.config()
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'
import fs from 'fs/promises'
import { VerifyRoute } from './routes/verify.js'
import { DigestRoutes } from './routes/digest.js'
import { router as contactRoutes } from './routes/contact.js'
import { router as imageRoutes } from './routes/image.js'
import { router as userRoutes } from './routes/users.js'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

console.log(process.env)

const app = express()
const swaggerDocument = JSON.parse(
    await fs.readFile(
        new URL('./swagger.json', import.meta.url)
    )
)

app.use(cors())
app.use(bodyParser.json())

app.use('/api/verify', VerifyRoute)
app.use('/api/user/', userRoutes)
app.use('/api/image/', imageRoutes)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api/contact', contactRoutes)
app.use('/api/digest', DigestRoutes)

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/graphical-password'
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connected')
        app.listen(process.env.PORT || 5000)
        console.log("Server running...")
    })
    .catch(err => console.error('MongoDB Connection Error:', err))

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
    })
}

// const currentAttempts = await userAttemptsModel.findOne({email: "test@gmail.com"})
// userAttemptsModel.findOneAndUpdate({email: "test@gmail.com", attempts: currentAttempts.attempts+1}).then(res => console.log(res)).catch(err => console.log(err))

// await usertModel.findOne({username: "test"})

// const testAttempts = new userAttemptsModel({
//     username: "test2",
//     email: "test2@gmail.com",
//     attempts: 0
// })

//testAttempts.save().then(res => console.log(res)).catch(err => console.log(err))

// transporter.sendMail(mailOptions, function(err, info) {
//     if (err) console.log(err)
//     else console.log("Email Sent: " + info.response)
// })

// const result = unsplash.search.getPhotos({
//     query: 'cats',
//     perPage: 64,
//     orientation: 'squarish'
// }).then(result => console.log(result.response.results))