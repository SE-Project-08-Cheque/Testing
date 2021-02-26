class SessionService{
  
  
 
  initSession(JSON){
    sessionStorage.setItem("JSON", JSON);
  }
  clearSession(){
    sessionStorage.removeItem("JSON");
  }
  isAuthenticated(){
    return true;
    //return (sessionStorage.getItem("JSON")!=null);
  }
  getdata(){
    return sessionStorage.getItem("JSON")
  }
}
export default new SessionService();