require('dotenv').config()

process.on('unhandledRejection', console.error)

import express from 'express'
import parser from 'body-parser'

const app = express()
app.use(parser.json())

app.get('/', (_: any, res: any) => {
	res.send('Hello World!')
})

app.listen(3000).on('listening', () => {
	console.log('Server running on port 3000')
})
