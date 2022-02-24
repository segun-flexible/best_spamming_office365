function fetchResourse(body, url, method) {
        submit && loadingState(submit,true)
        return new Promise((resolve,reject)=>{

            fetch(url, {
                method,
                credentials: "include",
                mode: "cors",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(err => {
                    submit && loadingState(submit,false)
                    console.log(err.message)
                    return reject(err)
                })

        })
}

function loadingState(element, state) {
        if (state) {
            cbText = element.textContent;
            element.innerHTML = `<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>`;
            element.disabled = state
        } else {
            element.innerHTML = cbText;
            element.disabled = state
        }
  }