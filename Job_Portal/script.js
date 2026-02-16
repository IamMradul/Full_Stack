let post=document.querySelector("#post");
let name=document.querySelector("#name");
let location1=document.querySelector("#location");
let experience=document.querySelector("#experience");
let div=document.querySelector("#New_posting");
let button = document.querySelector("button");
button.addEventListener("click",new_job);

function new_job(e){

    e.preventDefault();
    
    let job_post=post.value;
    let job_name= name.value;
    let job_loc = location1.value;
    let job_experience = experience.value;

    let postdiv=document.createElement('div');

    postdiv.innerHTML = `
    <h1>${job_post}</h1>
    <h1>${job_name}</h1>
    <h2>${job_loc}</h2>
    <p>${job_experience}</p>
    `
    div.appendChild(postdiv)
    

}
