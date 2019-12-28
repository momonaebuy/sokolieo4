import React from 'react'
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions'
import AboveNavbar from './AboveNavbar';
import{Redirect,Link} from 'react-router-dom'
const SignedIn = (props) => {
  const {auth,profile,id}=props
  console.log("auth",auth.uid)
    return (
     <div>  
        <AboveNavbar/>     
<nav  class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
<div class="container">
<a class="navbar-brand"  href="./"><i  class="ion-ios-home pr-2"/>Sokoleo</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
<span class="oi oi-menu"></span> Menu</button>
<div class="collapse navbar-collapse" id="ftco-nav">
<ul class="navbar-nav ml-auto">
{(profile.userType==='Buyer')?
<li class="nav-item"><Link to="/" class="nav-link"><i  class="icon-shopping_cart pr-2 "/>products </Link></li>:null}

<li class="nav-item"><Link to="/chat" class="nav-link"><i  class="ion-ios-chatbubbles pr-2"/>My chat</Link></li>
{(profile.userType==='Buyer')?
<li class="nav-item"><Link to="/profileBuyer" class="nav-link"><i  class="ion-ios-person pr-2"/>Profile</Link>
</li>:<li class="nav-item"><Link to="/profile" class="nav-link"><i  class="ion-ios-person pr-2"/>Profile</Link></li>}

<li class="nav-item"><Link to="/contactus" class="nav-link"><i  class="ion-ios-call pr-2"/>Contact us</Link></li>
<li class="nav-item"><Link to="/aboutus" class="nav-link"><i  class="ion-ios-alert pr-2"/>About Us</Link></li>
{(profile.userType==='Buyer')?<li class="nav-item"><Link to="/mapbuyer"   class="nav-link">
  <i  class="ion-ios-map pr-2"/>Map</Link></li>:null}
<li class="nav-item"><Link to="/"onClick={props.signOut}  class="nav-link"><i  class="ion-ios-log-out pr-2"/>
Log Out</Link></li>
</ul>
</div>
</div>
</nav>
</div>  


    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return{
      auth: state.firebase.auth,
      profile:state.firebase.profile
    }
  }

const mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignedIn);
