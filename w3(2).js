
let a=document.getElementById('w')
a.addEventListener('click',function(){
    const b=document.getElementById('q')
    var s=Number(b.value);
    mul(s,sub)
})
function mul(s,sub)
{
    let a=s*2;
    sub(a,add)
}
function sub(s,add)
{
    let a=s-3;
    add(a)
}
function add(s)
{
    console.log(s+10)
}
