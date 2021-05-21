function auth(e, type="login"){
    e.preventDefault();
    const authData={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        returnSecureToken:true
    };
    let url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5p5FmHeUVq2YJ1Ro1JU3JcWUSBUmtZcc";
    if(type== "register") {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5p5FmHeUVq2YJ1Ro1JU3JcWUSBUmtZcc"
    }
    axios.post(url,authData)
        .then(res=>{
            console.log(res.data);
            const expirationDate=new Date((new Date()).getTime() + res.data.expiresIn*1000);

            localStorage.setItem("token",res.data.idToken);
            localStorage.setItem("userID",res.data.localId);
            localStorage.setItem("expirationDate",expirationDate);


            window.location=window.origin+"/";
        })
        .catch(err=>{
            console.log(err);
            alert("login failed");
            
        });
}
function isLogin(){
    if(localStorage.getItem("token")){
        const expirationDate=new Date(localStorage.getItem("expirationDate"));
        if( expirationDate <= new Date() ){
            return false;
        }
        else{
            return true;
        }
    }else{
        return false;
    }
}

function logout(){
    localStorage.removeItem("token"); 
   localStorage.removeItem("userID"); 
   localStorage.removeItem("expirationDate");
   window.location=window.origin;
}

function checkAuthorization(from="login"){
    if(!isLogin()) {
        if(from =="home") window.location=window.origin+"/login.html";
    } else {
        if(from !=="home") window.location = window.origin + "/";
    }
}