const data = [
    {username:"hamedosama",password:123456},
    {username:"ibrahimismail",password:123456},
    {username:"malaktamer",password:123456},
    {username:"ahmedtamam",password:123456},
    {username:"mayahamed",password:123456},
    {username:"nadamohamed",password:123456},
]
const form = document.querySelector(".login")
const home = document.getElementById("home");
const login = document.getElementById("login");
const btn = document.getElementById("btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const child = document.createElement('p')
child.className = "wrong";
btn.addEventListener("click",()=>{
    let user = false;
    let pass = false;
    data.find((el)=>{
        if(el.username == username.value.toLocaleLowerCase() && el.password == password.value){
            sessionStorage.loggedin = 'true';
            user =true;
            pass = true;
            window.location.pathname = '../index.html'
            window.location.href = '../index.html'
        }
        if(el.username == username.value){
            user = true;
            username.style.backgroundColor = "#edf2f5"
            return user;
        }
        if(el.password == password.value){
            pass = true;
            password.style.backgroundColor = "#edf2f5"
            return pass;
        }
    })
    if(!user){
    child.innerHTML = "The Username that you've entered is incorrect";
        form.appendChild(child);
        username.style.backgroundColor = "#f3aeaec7"
    }else if(!pass){
    child.innerHTML = "The password that you've entered is incorrect";
    form.appendChild(child);
    password.style.backgroundColor = "#f3aeaec7"
    }
})