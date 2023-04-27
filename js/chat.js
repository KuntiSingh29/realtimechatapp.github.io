document.getElementById('user1btn').addEventListener("click",showfirstmb);
document.getElementById('user2btn').addEventListener("click",showsecondmb);
document.getElementById('loginBtn').addEventListener("click", usr1Check);
document.getElementById('login2Btn').addEventListener("click", usr2Check);
document.getElementById('msgusr1send').addEventListener("click", msgsend1user);
document.getElementById('msgusr2send').addEventListener("click",  msgsend2user);

document.getElementById('openchatbox').addEventListener("click",openchatboxuser1);
document.getElementById('openchatbox2').addEventListener("click",openchatboxuser2);

document.getElementById('msg1TextBox').addEventListener("focus",typingpart);
document.getElementById('msg2TextBox').addEventListener("focus",typingpart1);

document.getElementById('msg1TextBox').addEventListener("blur",typingclrpart);
document.getElementById('msg2TextBox').addEventListener("blur",typingclrpart1);


document.getElementById('removepass').addEventListener("click",remove1pass);
document.getElementById('removepass1').addEventListener("click",remove2pass);

document.getElementById('logout1').addEventListener("click",logoutuser1);
document.getElementById('logout2').addEventListener("click",logoutuser2);

document.getElementById('changebg').addEventListener("click",changebackground);
document.getElementById('changebg1').addEventListener("click",changebackground1);
document.getElementById('changebg2').addEventListener("click",changebackground2);

document.getElementById('1changebg').addEventListener("click",change1background);
document.getElementById('2changebg').addEventListener("click",change2background);
document.getElementById('3changebg').addEventListener("click",change3background);


document.getElementById('clearchat').addEventListener("click",clearallchat);
document.getElementById('clearchatuser2').addEventListener("click",clearallchatuser2);

document.getElementById('changeusr1dp').addEventListener("click",chngedpusr1);
document.getElementById('changeusr2dp').addEventListener("click",chngedpusr2);





function showfirstmb()
{
	document.getElementById('user1mobile').style.display="block";
  document.getElementById('user1btn').style.display="none";


}
function showsecondmb()
{
	document.getElementById('user2mobile').style.display="block";
  document.getElementById('user2btn').style.display="none";
  
}
function  openchatboxuser1()
{
  document.getElementById('phonebox1').style.display="none";
  document.getElementById('usr1ChatBox').style.display="block";
}
 

function usr1Check()

{
  let txtPwd=document.getElementById('textbox').value;
  if (txtPwd=="00000")
  {
    document.getElementById('user1mobile').style.display="none";
    document.getElementById("phonebox1").style.display="block";

  }
  else
  {
  	document.getElementById("incorrectpass").innerHTML="Password incorrect.Please Try again";
    document.getElementById("incorrectpass").style="red";
  	document.getElementById("textbox").value="";
  	document.getElementById('textbox').focus();
  }
  if ((txtPwd.length<4)||(txtPwd.length>4))
  {
    document.getElementById('passcheck').innerHTML="Password should be 5 digit";
     document.getElementById('passcheck').style.color="red";
  }

  
}
function usr2Check()

{
  let txtPwd=document.getElementById('textbox1').value;
  if (txtPwd=="11111")
  {
    document.getElementById('user2mobile').style.display="none";
    document.getElementById("phonebox2").style.display="block";

  }
  else 
  {
  	document.getElementById("incorrectpass1").innerHTML="Password incorrect.Please Try again";
  	document.getElementById("textbox1").value="";
  	document.getElementById('textbox1').focus();
  }

  if ((txtPwd.length<4)||(txtPwd.length>4))
  {
    document.getElementById('passcheck1').innerHTML="Password should be 5 digit";
     document.getElementById('passcheck1').style.color="red";
  }
}

function  openchatboxuser2()
{
  document.getElementById('phonebox2').style.display="none";
  document.getElementById('usr2ChatBox').style.display="block";
}
 
 function  msgsend1user()
{
let mydata=document.getElementById('msg1TextBox').value;
let myelm1=document.createElement("p");

    myelm1.style.width="150px";
    myelm1.style.backgroundColor="#1fcf80";
    myelm1.style.color="white";
    myelm1.style.padding="8px";
    myelm1.style.borderBottomRightRadius="7px";
    myelm1.style.borderBottomLeftRadius="2px";
    myelm1.style.float="right";
    myelm1.innerHTML=mydata;
    if(mydata)
{
 document.getElementById('usr1TextArea').appendChild(myelm1);
 document.getElementById('msg1TextBox').value="";
  myelm1.scrollIntoView();
}
else
{

}
let myelm =document.createElement('p');

let date=new Date();
let hour=date.getHours();
let min=date.getMinutes();
myelm.innerHTML="<p>"+hour+":"+min+"</p>";

myelm.style.width="60px";
myelm.style.color="white";
myelm.style.float="right";
myelm.style.fontSize="10px";


document.getElementById('usr1TextArea').appendChild(myelm);



 let myelm2=document.createElement("p");

    myelm2.style.width="150px";
    myelm2.style.backgroundColor="white";
    myelm2.style.padding="8px";
    myelm2.style.color="black";
    myelm2.style.borderBottomRightRadius="7px";
    myelm2.style.float="left";
    myelm2.innerHTML=mydata;
  if(mydata)
     {
        document.getElementById("usr2TextArea").appendChild(myelm2);
        document.getElementById("msg1TextBox").value="";
        myelm2.scrollIntoView();
     }
  else
   {

   }
 let myti =document.createElement('p');

let d=new Date();
let h=d.getHours();
let m=d.getMinutes();
myti.innerHTML="<p>"+h+":"+m+"</p>";

myti.style.width="60px";
myti.style.color="white";
myti.style.float="left";
myti.style.fontSize="10px";



document.getElementById('usr2TextArea').appendChild(myti);
 }


// second send part
function  msgsend2user()
{
  let mychat=document.getElementById('msg2TextBox').value;
  let myele3=document.createElement('p');
  
  myele3.style.width="150px";
  myele3.style.backgroundColor="#1fcf80";
  myele3.style.color="white";
  myele3.style.padding="8px";
  myele3.style.float="right";
  myele3.style.borderBottomRightRadius="7px";
  myele3.style.textAlign="right";
  myele3.innerHTML=mychat;
 if(mychat)
  {
    document.getElementById('usr2TextArea').appendChild(myele3);
    document.getElementById("msg2TextBox").value="";
    myele3.scrollIntoView();

  }
 else
  {

  }

let myt =document.createElement('p');

let da=new Date();
let ho=da.getHours();
let mi=da.getMinutes();
myt.innerHTML="<p><br>"+ho+":"+mi+"</p>";

myt.style.width="60px";
myt.style.color="white";
myt.style.float="right";
myt.style.fontSize="10px";
myt.style.marginTop="10px";


document.getElementById('usr2TextArea').appendChild(myt);



  let myele4=document.createElement("p");

    myele4.style.width="150px";
    myele4.style.backgroundColor="white";
    myele4.style.padding="8px";
    myele4.style.borderBottomLeftRadius="7px";
    myele4.style.float="left";
    myele4.innerHTML=mychat;



    setTimeout(Display1Data,700);
    function Display1Data()
    {
      if(mychat)
       {
        document.getElementById("usr1TextArea").appendChild(myele4);
        document.getElementById("msg1TextBox").value="";
        myele4.scrollIntoView();

       }
       else
         {

         }
    }
let myta =document.createElement('p');

let dat=new Date();
let hou=dat.getHours();
let miu=dat.getMinutes();
myta.innerHTML="<p>"+hou+":"+miu+"</p>";

myta.style.width="60px";
myta.style.color="white";
myta.style.float="left";
myta.style.fontSize="10px";
myta.style.marginTop="40px";




document.getElementById('usr1TextArea').appendChild(myta);

}

function typingpart()
{
  document.getElementById('typmsg2').innerHTML="Typing . . .  .";
}


function typingpart1()
{
  document.getElementById('typmsg1').innerHTML="Typing . . .  .";
}
function typingclrpart()
{
  document.getElementById('typmsg2').innerHTML="";
}
function typingclrpart1()
{
  document.getElementById('typmsg1').innerHTML="";
}


function remove1pass()
{
  let txt=document.getElementById('textbox').value;
  let data=txt.slice(0,-1);
  document.getElementById('textbox').value=data;

}


function remove2pass()
{
  let txt=document.getElementById('textbox1').value;
  let data=txt.slice(0,-1);
  document.getElementById('textbox1').value=data;

}

function logoutuser1()
{
  document.getElementById('usr1ChatBox').style.display="none";
  document.getElementById('user1mobile').style.display="block";
}
function logoutuser2()
{
  document.getElementById('usr2ChatBox').style.display="none";
  document.getElementById('user2mobile').style.display="block";
}

function changebackground()
{
  document.getElementById('usr1ChatBox').style.backgroundColor="#f08dd2";
}

function changebackground1()
{
  document.getElementById('usr1ChatBox').style.backgroundColor="#bcf5c4";
}

function changebackground2()
{
  document.getElementById('usr1ChatBox').style.backgroundImage="url(image/bg.jpg)";
}

function change1background()
{
  document.getElementById('usr2ChatBox').style.backgroundColor="#f08dd2";
}

function change2background()
{
  document.getElementById('usr2ChatBox').style.backgroundImage="url(image/bg1.jpg)";
}
function change3background()
{
  document.getElementById('usr2ChatBox').style.backgroundImage="url(image/bg2.jpg)";
}

function chngedpusr1()
{
   document.getElementById('dp1').src="image/miky2.jpg";
   document.getElementById('dp1').style.borderRadius="50px";
   document.getElementById('dp1').style.width="30px";
  
}
function chngedpusr2()
{
   document.getElementById('dp2').src="image/mini.jpg";
   document.getElementById('dp2').style.borderRadius="50px";
   document.getElementById('dp2').style.width="30px";
}

function clearallchat()
{
  document.getElementById('usr1TextArea').remove();
}

function clearallchatuser2()
{
   
   document.getElementById('usr2TextArea').remove();
}

