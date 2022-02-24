document.addEventListener("DOMContentLoaded",()=>{

     //RUN CRONJOB
     window.deleteLogs = function(logsId,btn){
        
        submit = btn
        swal({
            title: "Are you sure?",
            text: "you wont be able to recover this logs",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(proceed => {
            if (proceed) {
                fetchResourse({id:logsId},window.location.href,"DELETE","noload") 
            }
        })

    }

})