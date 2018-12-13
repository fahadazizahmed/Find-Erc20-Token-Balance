var express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
app.set('port', port);
app.use(cors());
app.use(bodyParser.json());
app.get('/tokenBalance/:address/:symbol',async function(req,res){
   const TokenSymbol = req.params.symbol;
    datas = [];
    var a= 0;
    var c ;
   
    
    await axios.get("http://api.ethplorer.io/getAddressInfo/"+req.params.address+"?apiKey=freekey").then((response)=>{
        
        response.data.tokens.map(post=>{
           
           datas.push(post)
          

        });
        
         datas.map(function (el) {
      
          if(el.tokenInfo.symbol == TokenSymbol){
         
             tokenBalance = a+ el.balance;
            c = tokenBalance/1000000000000000000
          }
              
          });
         

res.send(JSON.stringify(c))

});

});
app.listen(port,function(req,res){
    console.log(`server is listen on ${port}`)
  });
  