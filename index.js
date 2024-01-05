const express = require("express");

const app = express();
let sum = 50;
function calsum(n) {
  
  return sum+n;
}
app.get("/", (req, res) => {
  let n = parseInt(req.query.n);
  const result = calsum(n);
  res.send("sum is " + result);
});
app.use(express.json())
app.post("/",(req,res)=>{
    sum=sum/(req.body.num);
    res.send({
        msg:"done",
    })
})
app.listen(3001);
