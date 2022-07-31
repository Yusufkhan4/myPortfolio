var navElement = $(".navbar").offset();
var navtop = navElement.top;
$("document").ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()> navtop-100){
            $('.navbar').css({             
                position: 'fixed',
                top: '100px',
            });
        }else{
            $('.navbar').css({ 
                position: 'absolute',
                top: '100vh'
            });        
            }
    });
});



const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
console.log(sections);
console.log(navLi);




// console.log($(window).scroll());
// console.log(navElement.top);
// console.log(navElement.top - 10);

// console.log(navtop-(navtop*(15/100)));
// console.log($(window).scrollTop());
// console.log(navElement);

let fnameNode= document.getElementById('fname');
let ageNode= document.getElementById('age');
let phoneNode= document.getElementById('contactdiv');
let emailNode= document.getElementById('mail');
let unameNode= document.getElementById('uname');
let passNode= document.getElementById('pass');
let conPassNode= document.getElementById('confirmpass');
let errorNode1= document.getElementById('error1');
let errorNode2= document.getElementById('error2');
let errorNode3= document.getElementById('error3');
let errorNode4= document.getElementById('error4');
let errorNode5= document.getElementById('error5');
let errorNode6= document.getElementById('error6');
let errorNode7= document.getElementById('error7');

let array = [errorNode1,errorNode2,errorNode3,errorNode4,errorNode5,errorNode6,errorNode7];

for(let node of array){
    node.style.color ="red";
}

function validateForm(){
    let v1 = validate1();
    let v2 = validate2();
    let v3 = validate3();
    let v4 = validate4();
    let v5 = validate5();
    let v6 = validate6();
    let v7 = validate7();

    return (v1 && v2 && v3 && v4 && v5 && v6 && v7);
}


function validate1(){
    let fname=fnameNode.value; 
    let regex = new RegExp("^[A-Za-z]*$");
    errorNode1.innerHTML = "";
    if(fname===''){ 
    errorNode1.innerHTML="<small><i>First name in required</i></small>"; 
    fnameNode.style.border="2px solid red";
    return false;
    }else if(regex.test(fname)== false){
        errorNode1.innerHTML = "<small><i>Username should not start with numbers</i></small>"
        fnameNode.style.border="2px solid red";
        return false;
    }else{
        fnameNode.style.border="2px solid green";
        return true;
    }

}
function validate2(){
    let age = ageNode.value;
    let regex = new RegExp("^[A-Za-z]*$");
    errorNode2.innerHTML = "";
    if(age ===""){
        errorNode2.innerHTML="<small><i>Age is required</i></small>"; 
        ageNode.style.border="2px solid red";
        return false;
    } else if(age<20 || age>60){
        errorNode2.innerHTML="<small><i>Age must be between 20 to 60</i></small>";
        ageNode.style.border="2px solid red"; 
        return false;
    }else{
        ageNode.style.border="2px solid green";
        return true;
    }
     
}
function validate3(){
    let mobile = phoneNode.value;
    let regex = new RegExp("^[0-9]{10}$");
    errorNode3.innerHTML = "";
    if(mobile === ""){
        errorNode3.innerHTML="<small><i>Phone number is required</i></small>"; 
        phoneNode.style.border="2px solid red";
        return false;
    }else if(regex.test(mobile)=== false){
        errorNode3.innerHTML="<small><i>Phone number must be of 10 digits only</i></small>"; 
        phoneNode.style.border = "2px solid red";
        return false;
    }else{
        phoneNode.style.border="2px solid green";
        return true;
    }
}
function validate4(){
    let email = emailNode.value;
    errorNode4.innerHTML = "";
    if(email === ''){
        errorNode4.innerHTML="<small> <i> Email is required </i> </small>";
        emailNode.style.border = "2px solid red";
        return false;
    }
    else if (!email.includes('@') || email.endsWith('@')){
        errorNode4.innerHTML="<small> <i>Please enter valid email </i> </small>";
        emailNode.style.border = "2px solid red";
        return false;
    }else{
        emailNode.style.border="2px solid green";
        return true;
    }
}
function validate5(){
    let uname = unameNode.value;
    errorNode5.innerHTML = "";
    if(uname === ""){
        errorNode5.innerHTML="<small> <i> Please provide an username </i> </small>";
        unameNode.style.border = "2px solid red";
        return false;
    }else if(uname.length < 3 || uname.length>10){
        errorNode5.innerHTML="<small>username must be 3 to 10 characters long</small>";
        unameNode.style.border="2px solid red";
        return false;
    }else{
        unameNode.style.border="2px solid green";
        return true;
    }
}
function validate6(){
    let passw = passNode.value;
    errorNode6.innerHTML = "";
    let regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if(passw === ""){
        errorNode6.innerHTML="<small><i>Password is required</i></small>";
        passNode.style.border="2px solid red";
        return false;
    }else if(regex.test(passw) == false){
        errorNode6.innerHTML="<small><i>Password should be 6 to 12 characters long Password should have atleast</i></small>";
        let ulNode = document.createElement('ul');
        errorNode6.append(ulNode);
        ulNode.style.fontSize = "10px";
        let ar = ['Capital letter',  'Small letter', 'Digit', 'Special Symbol'];
        for(let val of ar){
            let liNode = document.createElement('li');
            liNode.textContent = val;
            ulNode.append(liNode);
        }
    passNode.style.border="2px solid red";
    return false;

    }
    else{
        passNode.style.border="2px solid green";
        return true;

    }
}
function validate7(){
    let c_pass = conPassNode.value;
    errorNode7.innerHTML = "";
    if(c_pass === ""){
        errorNode7.innerHTML = "<small><i> Confirm password is required</i></small>";
        conPassNode.style.border = "2px solid red";
        return false;
    }
    else if(c_pass!=passw){
        errorNode7.innerHTML="<small><i>Both passwords should match</i></small>";
        conPassNode.style.border="2px solid red";
        return false;
    }else{
        conPassNode.style.border="2px solid green";
        return true;
    }

}

