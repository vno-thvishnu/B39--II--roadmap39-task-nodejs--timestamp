const fs = require("fs")
const express = require ("express")
const app = express()

const date = new Date()

const currentDay = date.getDate() + "." + (date.getMonth()+1)+ "." + date.getFullYear()
const currentTime = date.getHours() + "." + date.getMinutes() + "." + date.getSeconds()
const dayAndTime = "date"+currentDay + "-&-" + "time"+currentTime;

const timeStamp = "Current TimeStamp::"+ date.getHours() + "Hours" +"-"+ date.getMinutes() + "Minutes" +"-"+
                   date.getSeconds() + "Seconds"+"-" + date.getMilliseconds() + "Milliseconds"

fs.mkdir("./task",()=>{
    console.log("Folder Created Successfully")
})                

app.get("/task",(req,res)=>{
    fs.writeFile(`./task/${dayAndTime}.txt`,timeStamp,(err)=>{
        if(err) throw err;
        console.log("File Created Successfully")
    }),
    res.json({ message: `successfully file created. Filename is ${dayAndTime} and Content of the file ${timeStamp}` })
})
app.listen(4001);