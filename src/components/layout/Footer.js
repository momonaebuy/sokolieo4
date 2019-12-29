import React from 'react'
import{Redirect,Link} from 'react-router-dom'
export default function Footer() {
    return (
        <div>
<footer class="ftco-footer ftco-section" style={{marginTop:'30px'}}>
<div class="container">
<div class="row">
<div class="mouse">
<Link to="#" class="mouse-icon">
<div class="mouse-wheel"><span class="ion-ios-arrow-up"></span></div>
</Link>
</div>
</div>
<div class="row mb-5">
<div class="col-md">
<div class="ftco-footer-widget mb-4">
<h2 class="ftco-heading-2">Sokonileo</h2>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
<ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
<li class="ftco-animate"><Link to ="#"><span class="icon-twitter"></span></Link></li>
<li class="ftco-animate"><Link to ="#"><span class="icon-facebook"></span></Link></li>
<li class="ftco-animate"><Link to ="#"><span class="icon-instagram"></span></Link></li>
</ul>
</div>
</div>
<div class="col-md">
<div class="ftco-footer-widget mb-4 ml-md-5">
<h2 class="ftco-heading-2">Menu</h2>
<ul class="list-unstyled">
<li><Link to ="/products" class="py-2 d-block">Products</Link></li>
<li><Link to ="/aboutus"class="py-2 d-block">About Us</Link></li>
<li><Link to ="/contactus" class="py-2 d-block">Contact Us</Link></li>
</ul>
</div>
</div>
<div class="col-md-4">
<div class="ftco-footer-widget mb-4">
<h2 class="ftco-heading-2">Help</h2>
<div class="d-flex">
<ul class="list-unstyled mr-l-5 pr-l-3 mr-4">
<li><Link to ="#" class="py-2 d-block">Seller Information</Link></li>
<li><Link to ="#" class="py-2 d-block">Terms &amp; Conditions</Link></li>
<li><Link to ="#" class="py-2 d-block">Privacy Policy</Link></li>
</ul>
<ul class="list-unstyled">
<li><Link to ="#" class="py-2 d-block">FAQs</Link></li>
<li><Link to ="contactus" class="py-2 d-block">Contact</Link></li>
</ul>
</div>
</div>
</div>
<div class="col-md">
<div class="ftco-footer-widget mb-4">
<h2 class="ftco-heading-2">Have a Questions?</h2>
<div class="block-23 mb-3">
<ul>
<li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
<li><Link to ="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></Link></li>
<li><Link to ="#"><span class="icon icon-envelope"></span><span class="text"><span class="__cf_email__"
 data-cfemail="6900070f062910061c1b0d0604080007470a0604">[email&#160;protected]</span></span></Link></li>
</ul>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12 text-center">
<p>

</p>
</div>
</div>
</div>
</footer>
        </div>
    )
}
