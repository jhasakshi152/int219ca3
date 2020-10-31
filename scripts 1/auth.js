//listen fir auth status changes
auth.onAuthStateChanged(user=>{
  if(user){
    console.log('user logged in:' ,user);
  }else{
    console.log('user logged out');
  }
}); 





//signup
const signupForm= document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e)=>{// to prevent default values from causing a refresh
  e.preventDefault();
  //get user info
  const email=signupForm['signup-email'].value;//find an input with the id of signup in the signup form
  const password= signupForm['signup-password'].value;
  //console.log(email,password); 

  //sign up the user
  auth.createUserWithEmailAndPassword(email,password).then(cred=>{
    //asynchronous task
    //console.log();
    console.log(auth.currentUser.email);
    $(document).ready(() => {
    const modal= document.querySelector('#modal-signup');
    var instance= M.Modal.init(modal);
    instance.close();
    //console.log("hello");
    signupForm.reset();
    });

});

});
//logout
const logout= document.querySelector('#logout');
logout.addEventListener('click',(e)=>{
  e.preventDefault();
  auth.signOut();
});

//login

/*document.addEventListener('DOMContentLoaded', function () {
const loginForm= document.querySelector('#login-form');
if(loginForm){
loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  //get user info
  const email = loginForm['login-email'].value;
  const password= loginForm['login-password'].value;
  auth.signInWithEmailAndPassword(email,password).then(cred=>{
    
    console.log(cred.user); 
    const modal= document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
    
  });
});
}*/
const loginForm = document.querySelector('#login-form');
const btnlogin= document.querySelector('#loginBtn');
btnlogin.addEventListener("click", (e) => {
  e.preventDefault(); // avoid the page to refresh when we click signup

  // get user info from the id of the input
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const promise=auth.signInWithEmailAndPassword(email, password);
  promise.catch(e=>console.log(e.message));
      // Handle Errors here.
      promise.then(cred=>{console.log(cred.user);
      //loginForm.reset();
      });
      
  //}).then( cred => {
    //console.log("user logged in");
    
      //loginForm.reset();
      // div id
  });








