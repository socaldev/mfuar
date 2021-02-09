const path = require('path')
const express = require('express')

const port = process.env.PORT || 3000

const app = express()

const publicDirPath = path.join(__dirname, '../public')
//Serve static assets
app.use(express.static(publicDirPath, {
    extensions: ['html', 'htm']
}))

console.log(publicDirPath)

//Routes

//Start Server
app.listen(port, ()=>{
    console.log('Server started successfully on port ' + port)
})

