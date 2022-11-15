const express=require("express")
const app=express()
app.use(express.json())
const fetch=require("node-fetch")
const postModel=require("./modal/postModel")
const mongoose=require("mongoose")
const userController=require("./user")
// var Key="False"
mongoose.connect("mongodb://localhost:27017/kanthara",(data)=>{
console.log("Successfully Connected to DB")
},(err)=>{
console.log(err)
})
app.listen(3003,(err)=>{
    if(!err){
        console.log("Connected at Port 3003")
    }
    else{
        console.log(err)
    }
}
)
var Key=false
async function getPosts(){
//   Key=true
  const Details=  await fetch("https://api.github.com/users")
  const response=await Details.json()
 console.log(response)
  for(let i=0;i<response.length;i++){
    // console.log(response[i].id)
   const post= new postModel({
        login:response[i]['login'],
        id:response[i]['id'],
        node_id:response[i]['node_id'],
        avatar_url:response[i]['avatar_url'],
        gravatar_id:response[i]['gravatar_id'],
        url:response[i]['url'],
        html_url:response[i]['html_url'],
        followers_url:response[i]["followers_url"],
        following_url:response[i]['following_url'],
        gists_url:response[i]['gists_url'],
        starred_url:response[i]['starred_url'],
        subscriptions_url:response[i]['subscriptions_url'],
        organizations_url:response[i]["organizations_url"],
        repos_url:response[i]["repos_url"],
        events_url:response[i]["events_url"],
        received_events_url:response[i]["received_events_url"],
        type:response[i]["type"],
        site_admin:response[i]["site_admin"]


        

    })
    // Key=true;
    // post.save()
    // break;
    post.save()
    Key=true;
    
    
  }
  //post.save()
    // break;
//   console.log(response)
}
let count=0
if(!Key){
count++;
if(count<=1){
getPosts()
}
}
// count++

app.use("/user",userController)