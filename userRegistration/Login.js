document.getElementById("login").addEventListener("click",validate)

function validate(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let arr = [] 
    arr = JSON.parse(localStorage.getItem("localData"))
    let usernameL = arr[0].username 
    let passwordL = arr[0].password 
    if(username == usernameL && password == passwordL){
        alert("logged in")
    }
    else{
        alert("username or password is incorrect")
    }
}

