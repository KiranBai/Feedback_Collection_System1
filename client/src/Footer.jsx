import React from "react";
import "./App.css";

function Footer() {

return (
<>
    {/* Footer Section Starts */}
 
 <div className="share">
   <a href="https://www.facebook.com/login.php" className="fab fa-facebook-f" />
   <a href="https://twitter.com/i/flow/login" className="fab fa-twitter" />
   <a href="https://www.instagram.com/accounts/login/?hl=en" className="fab fa-instagram" />
   <a href="https://www.linkedin.com/login" className="fab fa-linkedin" />
   <a href="https://www.pinterest.ph/login/" className="fab fa-pinterest" />
 </div>
 <div className="credit">
   {" "}
   created by <span>kiran Talreja</span> | all rights reserved!{" "}
 </div>
</>
);
}
export default Footer;