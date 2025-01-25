import express from 'express'
const PORT = 8080
const expressApp = express()

const data = [
    {id:1, name:'test1', description: 'description 1'},
    {id:2, name:'test2', description: 'description 2'},
    {id:3, name:'test3', description: 'description 3'},
]

expressApp.get('/ping', (req,res)=>{
    res.send('pong')
})
expressApp.get('/data', (req,res)=>{
    res.send(data)
})
expressApp.listen(PORT, ()=>console.info('Listening at http://localhost:8080/'))