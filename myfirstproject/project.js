var allproducts;
if(localStorage.getItem("ourproducts")!=null)
{
 allproducts=JSON.parse( localStorage.getItem("ourproducts"));
 display();

}
else
{
    var allproducts=[];

}

var productname=document.getElementById("productName");
var productprice=document.getElementById("productPrice");
var productcategory=document.getElementById("productCategory");
var productndescription=document.getElementById("productDescription");

 function ADD()
{
    var product=
    {
        name:productname.value,
        price:productprice.value,
        category:productcategory.value,
        description:productndescription.value
    }
    
    allproducts.push(product);
    localStorage.setItem("ourproducts",JSON.stringify(allproducts));
    claer();
    display();
}
function claer()
{
    productname.value="";
    productprice.value=""
    productcategory.value="";
    productndescription.value="";

}
function display()
{
    container=``;
    for(var i=0;i<allproducts.length;i++)
    {
        container+=`<tr>
        <td>${(i+1)}</td>
        <td>${allproducts[i].name}</td>
        <td>${allproducts[i].price}</td>
        <td>${allproducts[i].category}</td>
        <td>${allproducts[i].description}</td>
       <td ><button calss="one" onclick="delte(${i})" >Delete</button></td> 
       </tr>`

    }
    document.getElementById("body").innerHTML=container;


    }

    function delte(index)
    {
allproducts.splice(index,1);
localStorage.setItem("ourproducts",JSON.stringify(allproducts));
display();
    }



function serach(term)
{
    container=``;
for(var i=0;i<allproducts.length;i++)
{

    if(allproducts[i].name.toLowerCase().includes(term.toLowerCase())==true)
    {
        {
            container+=`<tr>
            <td>${(i+1)}</td>
            <td>${allproducts[i].name}</td>
            <td>${allproducts[i].price}</td>
            <td>${allproducts[i].category}</td>
            <td>${allproducts[i].description}</td>
           <td ><button calss="one" onclick="delte(${i})" >Delete</button></td> 
           </tr>`
    
        }
        document.getElementById("body").innerHTML=container;
    }
}
}

