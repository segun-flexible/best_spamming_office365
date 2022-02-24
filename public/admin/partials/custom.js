document.addEventListener("DOMContentLoaded", () => {
    //Date
    try {
        document.querySelector("span.date").textContent = new Date().getFullYear();
    } catch (error) {
        
    }

    
    try {
        let li = [...document.querySelectorAll("aside ul.navbar-nav li")]
        li.forEach(li => {
            let a = li.querySelector("a");
            if (a) {
                if (a.dataset.bsToggle) {
                    //Has Sub Menu
                    const lis = li.querySelectorAll(".collapse ul > li a");
                    lis.forEach(subLi => {
                        if (subLi.href === (window.location.origin + window.location.pathname)) {
                           li.querySelector("li > a").classList.add("active")
                       }
                    })
                } else {
                    
                if (a.href === (window.location.origin + window.location.pathname)) {
                    a.classList.add("active")

                }
                }
            }
        })

    } catch (error) {
        
    }
  
})