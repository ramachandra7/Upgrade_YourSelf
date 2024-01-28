const promise=new Promise((resolve,reject)=>{
const myName="ramachandra";
const userName="ramachandra";
if(myName===userName){
resolve("names are same");
}
else{
reject("access denied")
}
});


promise.then((msg)=>console.log(msg)).catch((err)=>console.log(err));
