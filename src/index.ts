import express,{Request,Response} from "express";
const app = express();
const PORT = 3000;

app.get('/',(req:Request,res:Response)=>{
  res.send("Hello Form Express + TS...")
})

app.get('/users/:name',(req:Request,res:Response)=>{
  res.send(`Hello ${req.params.name}`)
})

app.listen(PORT,()=>console.log("server is running..."))
