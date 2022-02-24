let submit, cbText;

document.addEventListener("DOMContentLoaded", () => {
    
    //Profile Form
    
        document.querySelector("form#profile").addEventListener("submit", e => {
            e.preventDefault();
            const obj = {
                username: e.currentTarget.querySelector("input#username").value,
                
            };

        
            submit = e.currentTarget.querySelector("button");
            fetchResourse(obj,window.location.href,"POST","reload")
        })
    
        
    
        
        document.querySelector("form#password").addEventListener("submit", e => {
            e.preventDefault();
            const obj = {
                password: e.currentTarget.querySelector("input#password").value
            };

            const password2 = e.currentTarget.querySelector("input#password2").value;

            if (obj.password !== password2) {
                swal({title:"New Password Mismatched",icon:"error"})
                return 
            }

        
            submit = e.currentTarget.querySelector("button");
            fetchResourse(obj,window.location.href,"POST","reload")
        });
    

        
    
})