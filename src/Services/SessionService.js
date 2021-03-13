class SessionService{
  
  
 
  // initSession(JSON){
  //   sessionStorage.setItem("JSON", JSON);
  // }
  clearSession(){
    sessionStorage.removeItem("JSON");
  }
  isAuthenticated(){
    return true;
    //return (sessionStorage.getItem("JSON")!=null);
  }
  getdata(){
    if(sessionStorage.getItem("JSON")){
      return sessionStorage.getItem("JSON")
    }else{
      return '{"user_id":"0"}'
    }
    
  }
}
export default new SessionService();