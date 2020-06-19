// alert("I will go to the client");
const d=document;

const loginForm=d.querySelector(".login");
const emailBox=d.querySelector(".email");
const passwordBox=d.querySelector(".password");

async function loginHelper(email,password){
    const backendResponse=await axios.post("/api/users/login",{email,password});
    // console.log(backendResponse);
    if(backendResponse.data.status="UserLogged In"){
        alert("UserLogged In");
    }else{
        alert("Wrong Email or Password");
    }
}

loginForm.addEventListener("submit",function(e){
    // default behaviour
    e.preventDefault();//Avoid Reloading of page
    const email=emailBox.value; //i.e input.value
    const password=passwordBox.value;
    console.log(password+"   "+email);
    loginHelper(email,password);
})