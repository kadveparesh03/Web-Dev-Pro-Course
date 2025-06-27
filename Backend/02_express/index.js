import express from 'express';

const app = express ()
const port = 3000

// app.get("/",(req,res)=>{
//     res.send("hello from paresh kadve")
// })

// app.get("/ice-tea",(req,res)=>{
//     res.send("What Ice would you prefer")
// })

// app.get("/twitter", (req,res)=>{
//     res.send("Paresh.com")
// })

app.use(express.json())

let teaData = []
let nextId= 1


// add a new data
app.post('/teas',(req,res)=>{
    
    const {name,price}=req.body
    const newTea= {id: nextId++ ,name,price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})

app.get('/teas',(req,res)=>{
    res.status(200).send(teaData)
})

app.get('/teas:id',(req,res)=>{
    const tea=teaData.find(t=> t.id=== parseInt(req.params.id))
    if (!tea){
        return res.status(404).send('Tea not found')
    }
    res.status(200).send(tea)
})

// update Tea  

app.put ('/teas/:id', (req,res)=>{
    
    const tea=teaData.find(t=> t.id=== parseInt(req.params.id))

    if (!tea){
        return res.status(404).send('Tea not found')
    }
    const {name,price}=req.body
    tea.name=name
    tea.price=price
    res.send(200).send(tea)
})

//app delete

app.delete('/teas/:id',(req,res)=>{
    const index=teaData.findIndex(t=> t.id === parseInt(req.params.id))
    if(index=== -1){
        return res.status(404).send('Tea not found')
    }
    teaData.splice(index,1)
    return res.status(404).send('Deleted')
})


app.listen(port,()=> {
    console.log(`Server is running at port: ${port}..`)
})