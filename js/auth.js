const loginForm = document.getElementById('login-form')
loginForm.addEventListener('submit',(e)=> {
    e.preventDefault()
   const email = loginForm['login-email'].value
   const password = loginForm['login-password'].value
   auth.signInWithEmailAndPassword(email, password)
   .then(cred => {
       if(cred.user.uid == 'sxAy7lcrpuP8RPiC2kAvOUy84Au2'){
            window.location.replace('../homeAdmin.html')
       }else{
          window.location.replace('../home.html')
       }
      
       console.log(cred.user.uid);
   })
})





