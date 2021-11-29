
document.getElementById("date").innerHTML=document.getElementById("dob").value
function calculateAge()
{
   var currentDate=new Date();
   var x = new Date(document.getElementById("dob").value);
   var year=currentDate.getFullYear()-x.getFullYear();
   var month=currentDate.getMonth()-x.getMonth();
   var days=currentDate.getDate()-x.getDate();
   if(year>0 || month>0 || days>0)
   {  
   var age;
   if(year>0)
   { 
       age=year+" years"+month+" months" +days+" days old";
   } 
   else if(month>0)
   {
       age=month+" months" +days+" days old";
   }
   else 
   {
      age=days+" days old";
   }

  alert(age);
}
else
{
    age=("Bady will be born on "+x.getDate()+"/"+x.getMonth()+"/"+x.getFullYear())
    alert(age);
}
}