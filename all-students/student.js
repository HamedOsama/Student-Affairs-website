let data = []
const body = document.querySelector('.body');
let active = document.querySelectorAll(".status")
let c = 0;
if(localStorage.students){
    let iner = [];
    data = JSON.parse(localStorage.students);
    for(let i = 0 ; i < data.length ; i++){
        const id = i;
        const temp= `
        <tr class="data${id}"> 
        <td class="id${id}" >${data[id].id}</td>
        <td class="name${id}">${data[id].name}</td>
        <td class="gpa${id}">${data[id].gpa}</td>
        <td class="gender${id}">${data[id].gender}</td>
        <td class="level${id}">${data[id].level}</td>
        <td class="status${id} status" id="${id}">${data[id].status}</td>
        <td class="dep${id}">${data[id].dep}</td>
        <td class="email${id}">${data[id].email}</td>
        <td class="birth${id}">${data[id].birth}</td>
        <td class="number${id}">${data[id].number}</td>
        </tr>
        `
        iner.push(temp)
    }
    body.innerHTML = iner.join('');
}else{
    active.forEach((el)=>{
        const obj = {
            name : document.querySelector(`.name${c}`).innerHTML,
            id : document.querySelector(`.id${c}`).innerHTML,
            gpa : document.querySelector(`.gpa${c}`).innerHTML,
            gender : document.querySelector(`.gender${c}`).innerHTML,
            level : document.querySelector(`.level${c}`).innerHTML,
            status : document.querySelector(`.status${c}`).innerHTML,
            dep : document.querySelector(`.dep${c}`).innerHTML,
            email : document.querySelector(`.email${c}`).innerHTML,
            birth : document.querySelector(`.birth${c}`).innerHTML,
            number : document.querySelector(`.number${c}`).innerHTML
        }
        data.push(obj);
        c++;
    })
    localStorage.setItem("students", JSON.stringify(data))
    c =0;
}
active = document.querySelectorAll(".status")
const activeBtn = document.querySelector('.active');
const notActiveBtn = document.querySelector('.notActive');
const viewAllBtn = document.querySelector('.showAll')
const btn = function() {
    let iner = [];
    active.forEach((el)=>{
        if(el.innerHTML.toLocaleLowerCase() == 'active' && this.className == "active"){
            const id = el.id;
            const temp= `
            <tr class="data${id}"> 
            <td class="id${id}">${data[id].id}</td>
            <td class="name${id}">${data[id].name}</td>
            <td class="gpa${id}">${data[id].gpa}</td>
            <td class="gender${id}">${data[id].gender}</td>
            <td class="level${id}">${data[id].level}</td>
            <td class="status${id} status" id="${id}">${data[id].status}</td>
            <td class="dep${id}">${data[id].dep}</td>
            <td class="email${id}">${data[id].email}</td>
            <td class="birth${id}">${data[id].birth}</td>
            <td class="number${id}">${data[id].number}</td>
            </tr>
            `
            iner.push(temp)
        }else if(el.innerHTML.toLocaleLowerCase() == 'notactive'  && this.className == "notActive"){
            const id = el.id;
            const temp= `
            <tr class="data${id}"> 
            <td class="id${id}">${data[id].id}</td>
            <td class="name${id}">${data[id].name}</td>
            <td class="gpa${id}">${data[id].gpa}</td>
            <td class="gender${id}">${data[id].gender}</td>
            <td class="level${id}">${data[id].level}</td>
            <td class="status${id} status" id="${id}">${data[id].status}</td>
            <td class="dep${id}">${data[id].dep}</td>
            <td class="email${id}">${data[id].email}</td>
            <td class="birth${id}">${data[id].birth}</td>
            <td class="number${id}">${data[id].number}</td>
            </tr>
            `
            iner.push(temp)
        }
    })
    body.innerHTML = iner.join('');
};
viewAllBtn.addEventListener("click",()=>{
    let arr= [];
    for(let i = 0 ; i < data.length ; i++){
        const temp= `
        <tr class="data${i}"> 
        <td class="id${i}">${data[i].id}</td>
        <td class="name${i}">${data[i].name}</td>
        <td class="gpa${i}">${data[i].gpa}</td>
        <td class="gender${i}">${data[i].gender}</td>
        <td class="level${i}">${data[i].level}</td>
        <td class="status${i} status" id="${i}">${data[i].status}</td>
        <td class="dep${i}">${data[i].dep}</td>
        <td class="email${i}">${data[i].email}</td>
        <td class="birth${i}">${data[i].birth}</td>
        <td class="number${i}">${data[i].number}</td>
        </tr>
        `
        arr.push(temp);
    }
    body.innerHTML  = arr.join('');
})
activeBtn.addEventListener("click",btn)
notActiveBtn.addEventListener("click",btn)
if(localStorage.firstTime == 'true'){
    localStorage.firstTime = 'false';
    window.location.pathname = '../index.html'
    window.location.href = '../index.html'
}