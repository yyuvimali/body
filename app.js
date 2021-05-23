
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/about',function(req,res,next){
    res.send('<form action="/product" method="POST"><input type="text" name"title"><button type="submit">add</button></form>');

});
app.use('/product',function(req,res,next){
    console.log(req.body);
    res.redirect('/');
});
app.use('/',function(req,res,next){

    res.send('<h1>hello from express</h1>');
});
app.listen(3000);
