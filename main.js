const express = require[('express')];
const followers = require[('instagram-followers')];
const app = express();

app.get('/' , (req , res)=>{
res.send("GeeksforGeeks");
});

app.get('/:username' , (req , res) => {
followers(req.params.username).then((count) => {
if(!count){
console.log("Account Not Found");
return;
}
console.log("Username " + req.params.username + 
" have " + "<b>" +  count + "</b>" + " followers");

});
});

// Server setup
app.listen(4000 , ()=>{
console.log("server is running on port 4000");
});