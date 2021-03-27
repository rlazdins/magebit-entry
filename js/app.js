
let emailEl,agreedTermsEl;
let canSubscribe = emailValid = agreedTerms = false;
let form;


// kad dokuments ir ielādējies
document.onreadystatechange = () => {
    if(document.readyState == "interactive"){
        emailEl=document.getElementById("e-mail")
        agreedTermsEl=document.getElementById("checkbox") 
        form = document.getElementById("subscribe")

        emailEl.addEventListener("blur",function(){
            emailValid = validateEmail(this.value);
            validateSubscribe();

            if(emailValid){
                document.getElementById("email-status").classList.add("hidden");
            }else{
                document.getElementById("email-status").classList.remove("hidden");
            }
        })

        agreedTermsEl.addEventListener("click", function() {
            agreedTerms = this.checked;
            validateSubscribe();
        })

        form.addEventListener("submit", function(e){
            e.preventDefault();

            if(agreedTerms){
                document.getElementById("terms-status").classList.add("hidden");
            }else{
                document.getElementById("terms-status").classList.remove("hidden");
            }

            if(canSubscribe) {
                document.getElementById("intro").classList.add("hidden");
                document.getElementById("outro").classList.remove("hidden");
                document.getElementById("subscribe").classList.add("hidden");
            }
        })
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateSubscribe() {
    canSubscribe = emailValid && agreedTerms;
}