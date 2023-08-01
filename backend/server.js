import express from "express"
import cors from 'cors';
const app=express();

const port=5500;
app.get("/",(req,res)=>{
    res.send("API running");
});

app.use(express.json({extended:false}));
app.use(cors());

app.listen(port,(req,res)=>{
    console.log(`App listening at port ${port}`)
})