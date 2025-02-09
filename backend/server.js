import app from "./app.js"

app.listen(process.env.PORT, ()=>{
    console.log(`server start on port ${process.env.PORT}`);

});
