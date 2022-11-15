const express =require("express")
const router=express.Router()
const postModel=require("./modal/postModel")
const userModel=require("./modal/userModel");
router.post("/createuser",(req,res)=>{
    postModel.find({login:req.body.login}).then((user)=>{
        console.log(user)
        if(user.length){
        res.send("User Already Exists")
        }
else{
// userModel.find({login:req.body.login}).then((user)=>{
// if(user.length>0){
//     res.send("User Already Exists Please try with different One")
    

// }
//             })
            
            postModel.create({login:req.body.login,id:req.body.id,node_id:req.body.node_id,avatar_url:req.body.avatar_url,
                gravatar_id:req.body.gravatar_id,
                url:req.body.url,
                html_url:req.body.html_url,
                followers_url:req.body.followers_url,
                following_url:req.body.following_url,
                gists_url:req.body.gists_url,
                starred_url:req.body.starred_url,
                subscriptions_url:req.body.subscriptions_url,
                organizations_url:req.body.organizations_url,
                repos_url:req.body.repos_url,
                events_url:req.body.events_url,
                received_events_url:req.body.received_events_url,
                type:req.body.type,
                site_admin:req.body.site_admin
                     }).then(()=>{
                        res.status(400).send("NewUser Created Successfully...")
                     }).catch((err)=>{
console.log(err)
                     })
        }
    })

})
router.delete('/delete/:login',(req,res)=>{
    postModel.deleteOne(req.params).then(()=>{
res.send("Deleted Successfully...")
    }).catch((err)=>{
        res.send(err)
    })
})
module.exports=router;

