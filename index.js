const express = require('express');
const bodyParser=require('body-parser');
const res = require('express/lib/response');
const app=express();

// for requesting from outside server
const cors=require("cors");
app.use(cors({origin:"*"}));


app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);

 

const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
   console.log('App is runing on port ${PORT}');
});