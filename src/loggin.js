import React from "react";
import {Link} from "react-router-dom";

function loggIn(){
  return(
      <div>
          <form>
 
  <div classname="form-outline mb-4">
    <input type="email" id="form2Example1" classname="form-control" />
    <label classname="form-label" for="form2Example1">Email address</label>
  </div>


  <div classname="form-outline mb-4">
    <input type="password" id="form2Example2" classname="form-control" />
    <label classname="form-label" for="form2Example2">Password</label>
  </div>

  
  <div classname="row mb-4">
    <div classname="col d-flex justify-content-center">
     
      <div classname="form-check">
        <input classname="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label classname="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div classname="col">
    
      <a href="#!">Forgot password?</a>
    </div>
  </div>

 
  <button type="button" classname="btn btn-primary btn-block mb-4">Sign in</button>

 
  <div classname="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" classname="btn btn-link btn-floating mx-1">
      <i classname="fab fa-facebook-f"></i>
    </button>

    <button type="button" classname="btn btn-link btn-floating mx-1">
      <i classname="fab fa-google"></i>
    </button>

    <button type="button" classname="btn btn-link btn-floating mx-1">
      <i classname="fab fa-twitter"></i>
    </button>

    <button type="button" classname="btn btn-link btn-floating mx-1">
      <i classname="fab fa-github"></i>
    </button>
  </div>
</form>
      </div>
  )
}

export default loggIn;