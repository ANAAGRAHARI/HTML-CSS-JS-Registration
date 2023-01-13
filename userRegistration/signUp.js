
let userData = [];

const addData=()=>{
    
    userData.push({
        name:document.getElementById("Name").value,
        surname:document.getElementById("Surname").value,
        surname:document.getElementById("Surname").value,
        email:document.getElementById("email").value,
        DOB:document.getElementById("DOB").value,
        username:document.getElementById("username").value,
        password:document.getElementById("password").value,
    })
    localStorage.setItem("localData", JSON.stringify(userData));
    console.log(JSON.stringify(userData))
    window.location.href= "Login.html";
}


document.getElementById("home").addEventListener("click", home);
document.getElementById("submit").addEventListener("click", addData);



function home(){
    window.location.href= "index.html";
    return false
}