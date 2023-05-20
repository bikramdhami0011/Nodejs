module.exports= filter=(req,resp,next)=>{
    if(!req.query.age){
       resp.send("please inter age")
    } 
    else if (req.query.age<18)
        resp.send("you are not adult so you can't access")
     else {
       next()
    }
    
    
 }