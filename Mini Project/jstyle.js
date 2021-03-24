var count=1;
    var r=0;
    function func(nm,n,e){
    var name=nm.value;
    var num=n.value;
    var email=e.value;
    if(name==="")
    {
        window.alert("Enter Valid name");
    }
    else if(num===""||num.length<10)
    {
        window.alert("Enter Valid number");
    }
    else if(email==="")
    {
        window.alert("Enter valid email");
    }
    else
    {
        func1(name,num,email);
    }
    }
function func1(nm,n,e){
    var table=document.getElementById("table");
    
var name=nm;
var num=n;
var email=e;
if(count===1)
{
    
    var row=table.insertRow(r);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    cell1.setAttribute('id','cel');
    cell2.setAttribute('id','cel');
    cell3.setAttribute('id','cel');
    cell1.innerHTML="Name";
    cell2.innerHTML="Mob. No.";
    cell3.innerHTML="Email ID";
    cell4.innerHTML="";
    r++;
    count++;
}
var row=table.insertRow(r);
var cell1=row.insertCell(0);
var cell2=row.insertCell(1);
var cell3=row.insertCell(2);
var cell4=row.insertCell(3);
cell1.setAttribute('id','cell');
cell2.setAttribute('id','cell');
cell3.setAttribute('id','cell');

cell1.innerHTML=name;
cell2.innerHTML=num;
cell3.innerHTML=email;
cell4.innerhtml='<button type="button" id="delbtn" onclick="deleteRow(this)">Delete</button>';
r++;
count++;
}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }

  function func(nm,n,e){
    var name=nm.value;
    var num=n.value;
    var email=e.value;
    if(name===""||name.length<3)
    {
        window.alert("Enter Valid name");
    }
    else if(num===""||num.length<10)
    {
        window.alert("Enter Valid number");
    }
    else if(email===""||!email.includes("@")||!email.includes(".com"))
    {
        window.alert("Enter valid email");
    }
    else
    {
        func1(name,num,email);
    }
    }