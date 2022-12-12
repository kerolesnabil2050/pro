var y=document.querySelectorAll(".childphoto");
for(var i=0;i<y.length;i++)
{
    y[i].addEventListener('click',function(e)
    {
var x=e.target.getAttribute('src');
var z=document.querySelector('.maibphoto').setAttribute('src',x);

    });
}