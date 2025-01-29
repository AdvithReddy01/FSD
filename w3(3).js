
let a=document.getElementById('w')
a.addEventListener('click',function(){
   const b=document.getElementById('q')
   let s=Number(b.value);
   s=s*1000
   time(s,greet)
})
function time(s,greet)
{
    setTimeout(s,greet)
}
function greet()
{
    alert("Hello")
}
