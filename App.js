import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import './mani.js';
function App() 
{
  const [studName,setName]=useState("");
  const [studName1,setEmail]=useState("");
  const [studName2,setPassword]=useState("");
  const [studNumber,setNumber]=useState(0);
  const [studList,setStudList]=useState([]);
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setStudList(response.data);   
    })
  },[]);
  const addToList=()=>{
    axios.post("/newstud",{studName:studName,studName1:studName1, studNumber:studNumber,studName2:studName2,});
    console.log(studName,studName1,studNumber,studName2);
  }
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">SDP
          <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/navbar-logo-img.png" class="food-munch-logo"
          />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-link active" id="navItem1" href="#wcuSection">
              Why Choose Us?
              <span class="sr-only">(current)</span>
            </a>
            <a class="nav-link" href="#exploreMenuSection" id="navItem2">Explore Menu</a>
            <a class="nav-link" href="#deliveryPaymentSection" id="navItem3">Delivery & Payment</a>
            <a class="nav-link" href="#followUsSection" id="navItem4">Follow Us</a>
            <a class="nav-link" href="#sign in" id="navItem5">Sign in</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="banner-section-bg-container d-flex justify-content-center flex-column">
      <div class="text-center">
        <h1 class="banner-heading mb-3">WELCOME TO SPACE AND AESTHETIC MANAGEMENT</h1>
        <p class="banner-caption mb-4">Shop Now</p>
        <button class="custom-button" onclick="display('beddance')">View Products</button>
        <button class="custom-outline-button">Order Now</button>
      </div>
    </div>
    <div class="wcu-section pt-5 pb-5" id="wcuSection">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="wcu-section-heading">Why Choose Us?</h1>
            <p class="wcu-section-description">
              Our business & design experts help you with flexible, affordable and sustainable solutions.<br/> Create a better life at work with us.
            </p>
          </div>
          <div class="col-12 col-md-3">
          <div href="#">
            <div class="wcu-card p-3 mb-3">
              <img
                src="\return.jpg"
                class="wcu-card-image"
              />
              <h1 class="wcu-card-title mt-3" >Returns policy</h1>
              <p class="wcu-card-description">
                Exceptions during COVID19
              </p>
              
              <a href="#signinview" class="menu-item-link">
                Learn More
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
              
            </div>
          </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="wcu-card p-3 mb-3">
              <img
                src="/click.jpg"
                class="wcu-card-image"
              />
              <h1 class="wcu-card-title mt-3">Click & collect</h1>
              <p class="wcu-card-description">
                Safe click and collect shopping!
              </p>
              <a href="#sofadance" class="menu-item-link">
                Learn More
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="wcu-card p-3 mb-3">
              <img
                src="/plan.jpg"
                class="wcu-card-image"
              />
              <h1 class="wcu-card-title mt-3">Planning tools</h1>
              <p class="wcu-card-description">
                Our planning tools will help you give shape to your ideas
              </p>
              <a href="" class="menu-item-link">
                Learn More
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="wcu-card p-3 mb-3">
              <img
                src="\offer.jpg"
                class="wcu-card-image"
              />
              <h1 class="wcu-card-title mt-3">Best Offers</h1>
              <p class="wcu-card-description">
                 Offers upto
                <span class="offers">50% OFF</span>
                and Exclusive Promo Codes on All Online Products.
              </p>
              <a href="" class="menu-item-link">
                Learn More
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="menu-section-heading">Explore Menu</h1>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="shadow menu-item-card p-3 mb-3">
              <img
                src="\sofas.jpg"
                class="menu-item-image w-100"
              />
              <h1 class="menu-card-title">Sofas & armchairs</h1>
              <a href="#sofadance" class="menu-item-link">
                View All
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="shadow menu-item-card p-3 mb-3">
              <img
                src="\bed.jpg"
                class="menu-item-image w-100"
              />
              <h1 class="menu-card-title">Beds and mattresses</h1>
              <a href="#beddance" class="menu-item-link">
                View All
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="menu-item-card shadow p-3 mb-3">
              <img
                src="\kitchen.jpg"
                class="menu-item-image w-100"
              />
              <h1 class="menu-card-title">Storage & organisation</h1>
              <a href="#storagedance" class="menu-item-link">
                View All
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="menu-item-card shadow p-3 mb-3">
              <img
                src="\table.jpg"
                class="menu-item-image w-100"
              />
              <h1 class="menu-card-title">Table and desks</h1>
              <a href="" class="menu-item-link">
                View All
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="menu-item-card shadow p-3 mb-3">
              <img
                src="\chair.jpg"
                class="menu-item-image w-100"
              />
              <h1 class="menu-card-title">Chairs</h1>
              <a href="" class="menu-item-link">
                View All
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="menu-item-card shadow p-3 mb-3">
              <img
                src="\lounge.jpg"
                class="menu-item-image w-100"
              />
              <h1 class="menu-card-title">Office lounge</h1>
              <a href="" class="menu-item-link">
                View All
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="menu-item-card shadow p-3 mb-3">
              <img
                src="\lights.jpg"
                class="menu-item-image w-100"
              />
              <h1 class="menu-card-title">Lights</h1>
              <a href="" class="menu-item-link">
                View All
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="menu-item-card shadow p-3 mb-3">
              <img
                src="\tvcabinet.jpg"
                class="menu-item-image w-100"
              />
              <h1 class="menu-card-title">Tv Cabinet</h1>
              <a href="" class="menu-item-link">
                View All
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="healthy-food-section pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5">
            <div class="text-center">
              <img
                src="\unsplash.jpg"
                class="healthy-food-section-img"
              />
            </div>
          </div>
          <div class="col-12 col-md-7">
            <h1 class="healthy-food-section-heading">
              Explore our furnishing range
            </h1>
            <p class="healthy-food-section-description">
              Whether you just moved into a new home or looking to revamp your current one, we  are here to inspire you with affordable home furniture solutions, there is a piece of furniture to every corner of your home. Create a home that is perfect for you.
              Make yourself at home in our many room settings in the store. Squeeze the upholsteries, feel the oriental rugs, try the sofa beds and open the cabinets to feel the quality. On the price tag, you’ll find all you need to know about a product, including where in the store you can pick it up.
            </p>
            <button class="custom-button">Watch Video</button>
          </div>
        </div>
      </div>
    </div>
    <div class="delivery-and-payment-section pt-5 pb-5" id="deliveryPaymentSection">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5 order-1 order-md-2">
            <div class="text-center">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
                class="delivery-and-payment-section-img"
              />
            </div>
          </div>
          <div class="col-12 col-md-7 order-2 order-md-1">
            <h1 class="delivery-and-payment-section-heading">
              Delivery and Payment
            </h1>
            <p class="delivery-and-payment-section-description">
              Enjoy hassle-free payment with the plenitude of payment options
              available for you. Get live tracking and locate your Product on a
              live map. It's quite a sight to see your product arrive to your door.
              Plus, you get a 5% discount on every order every time you pay
              online.
            </p>
            <button class="custom-button">Order Now</button>
            <div class="mt-3">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png"
                class="payment-card-img"
              />
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png"
                class="payment-card-img"
              />
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png"
                class="payment-card-img"
              />
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png"
                class="payment-card-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="thanking-customers-section pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
            <h1 class="thanking-customers-section-heading">
              Thank you for being a valuable customer to us.
            </h1>
            <p class="thanking-customers-section-description">
              We have a surprise gift for you
            </p>
            <div class="d-md-none">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
                class="thanking-customers-section-img"
              />
            </div>
            <div>
              <button class="custom-button">Redeem Gift</button>
            </div>
          </div>
          <div class="col-12 col-md-5 d-none d-md-block">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
              class="thanking-customers-section-img"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="follow-us-section pt-5 pb-5" id="followUsSection">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="follow-us-section-heading">Follow Us</h1>
          </div>
          <div class="col-12">
            <div class="d-flex flex-row justify-content-center">
              <div class="follow-us-icon-container">
                <i class="fab fa-twitter icon"></i>
              </div>
              <div class="follow-us-icon-container">
                <i class="fab fa-instagram icon"></i>
              </div>
              <div class="follow-us-icon-container">
                <i class="fab fa-facebook icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <section class="container forms">
            <div class="form login">
                <div class="form-content">
                    <header>Login</header>
                    <form action="#">
                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input"/>
                        </div>

                        <div class="field input-field">
                            <input type="password" placeholder="Password" class="password"/>
                            <i class='bx bx-hide eye-icon'></i>
                        </div>

                        <div class="form-link">
                            <a href="#" class="forgot-pass">Forgot password?</a>
                        </div>

                        <div class="field button-field">
                            <button>Login</button>
                        </div>
                    </form>

                    <div class="form-link">
                        <span>Don't have an account? <a href="#" class="link signup-link">Signup</a></span>
                    </div>
                </div>

                <div class="line"></div>

                <div class="media-options">
                    <a href="#" class="field facebook">
                        <i class='bx bxl-facebook facebook-icon'></i>
                        <span>Login with Facebook</span>
                    </a>
                </div>

                <div class="media-options">
                    <a href="#" class="field google">
                        <img src="#" alt="" class="google-img"/>
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>

           

            <div class="form signup">
                <div class="form-content">
                    <header>Signup</header>
                    <form action="#">
                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input"/>
                        </div>

                        <div class="field input-field">
                            <input type="password" placeholder="Create password" class="password"/>
                        </div>

                        <div class="field input-field">
                            <input type="password" placeholder="Confirm password" class="password"/>
                            <i class='bx bx-hide eye-icon'></i>
                        </div>

                        <div class="field button-field">
                            <button>Signup</button>
                        </div>
                    </form>

                    <div class="form-link">
                        <span>Already have an account? <a href="#" class="link login-link">Login</a></span>
                    </div>
                </div>

                <div class="line"></div>

                <div class="media-options">
                    <a href="#" class="field facebook">
                        <i class='bx bxl-facebook facebook-icon'></i>
                        <span>Login with Facebook</span>
                    </a>
                </div>

                <div class="media-options">
                    <a href="#" class="field google">
                        <img src="#" alt="" class="google-img"/>
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>
        </section>
  <div class="needhelp">

   <a href="https://forms.gle/7d7rziEb3B8kzxcN6">Need Help To Customize?</a>
  </div>
  <div id="signinview">
  <div class="returnvivek"> 
  <div> 
            <div> 
            <h1>Returns Policy - It’s ok to change your <br/>mind, we support you in the safest way!</h1> 
            <h2>      </h2> 
            <h3>Need to return your order? No worries! Retain the Flexi Box for easy returns.  
                Click to know more</h3> 
                <h1> 
                </h1> 
<p>With our return policy, we have ensured that our customers have a safe shopping experience with US. Our mission is to enhance the customer experience and to enable our customers in making informed decisions.</p> 
</div> 
        </div> 
       
            <h1>MVM India:</h1> 
            <h1>Returns Policy</h1> 
            <ul class="unordered1"> 
                <li>Return or Exchange within 60 Days from the day of the purchase</li> 
                <li>MVM Family members: Returns or Exchange within 90 Days from the day of purchase</li> 
                <li>7 days returns or exchange for purchases made from Circular Hub</li> 
                <li>The following articles are not eligible for returns or exchange</li> 
                <ul> 
                    <li>Cut Fabrics</li> 
                    <li>Food Articles</li> 
                    <li>Plants</li> 
                    <li>Custom made worktops</li> 
                </ul> 
                <li><span>Love it or exchange it-</span>It takes time for you and your new mattress to get used to each other. That's why we give you 30 days to be sure you're compatible. If the chemistry isn't right, simply come back and choose another mattress. To avail the chance to change the mattress we require you to use the mattress for at least 30 days. We will only exchange the mattress once during this 90-day period. Please ensure that the mattress you want to exchange is in clean, hygienic and unstained condition. The mattress that you wish to exchange must be selected from our full price mattress range. If the new mattress is higher in price you will need to pay the difference, if the mattress you select is lower in price the difference will be refunded to you on an IKEA gift card.</li> 
         
            </ul> 
             
        
        <div> 
            <h1>Terms and Conditions apply:</h1> 
            <ul> 
                <li>For returns or exchange of online orders, we insist customers share the pictures of the articles and the proof of purchase (invoice) with our Customer Support Center at customercare.india@MVM.com before the articles are accepted for returns or exchange by our CSC Co-workers and accordingly picked up from the customer’s doorstep.</li> 
                <li>If the article is eligible to be returned, we suggest you pack the articles exactly in the same condition as you received it</li> 
                <li>Returns or Exchange Packaging: Retain the original packaging of the articles opened as the returns or exchange will be accepted only once the articles are packed in their original packaging as per the instructions provided. Know more.</li> 
                <li>Returns or Exchange will be processed on presenting the original invoice only</li> 
                <li>All refunds will be processed in the original mode of payment</li> 
                <li>All refunds will be processed within 14 days from the date of returns accepted by MVM</li> 
                 
            </ul> 
        </div> 
        </div>
  </div>
 
  <div href="#">
  <div id="sofadance" class="meghdance">
  <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="d-flex  justify-content-center flex-column">
            
                    <div class="button_style" >
                        <h1>Category</h1>
                        <button class="button button-green" >Sofas& armchairs</button>
                        <button class="button button-orange" href="#beddance">mattresses</button>
                        <button class="button button-green">Storage</button>
                        <button class="button button-orange">Tbles and desks</button>
                        <button class="button button-green">Chairs</button>
                        <button class="button button-orange">Office lounge</button>
                        <button class="button button-green">Lights</button>
                    
                </div>
                </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                    <div>
                        <div class="favourite-place-card-container d-flex flex-column">
                            <img
                              src="/s2.jpg"
                              class="favourite-place-card-image"
                            />
                            <div>
                              <h1 class="favourite-place-card-heading">GLOSTAD</h1>
                              <p class="favourite-place-card-description">
                              2-seat sofa
                              </p>
                             <p>Rs.<span>9,000</span></p>
                            </div>
                          </div>
                          </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div>
                            <div class="favourite-place-card-container d-flex flex-column">
                                <img
                                  src="/s3.jpg"
                                  class="favourite-place-card-image"
                                />
                                <div>
                                  <h1 class="favourite-place-card-heading">EKTORP</h1>
                                  <p class="favourite-place-card-description">
                                  Totebo light beige
                                  </p>
                                 <p>Rs.<span>24,900</span></p>
                                </div>
                              </div>
                              </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div>
                                <div class="favourite-place-card-container d-flex flex-column">
                                    <img
                                      src="/s4.jpg"
                                      class="favourite-place-card-image"
                                    />
                                    <div>
                                      <h1 class="favourite-place-card-heading">HEMLINGBY</h1>
                                      <p class="favourite-place-card-description">
                                      Knisa dark grey
                                      </p>
                                     <p>Rs.<span>13,490</span></p>
                                    </div>
                                  </div>
                                  </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div>
                                    <div class="favourite-place-card-container d-flex flex-column">
                                        <img
                                          src="/s5.jpg"
                                          class="favourite-place-card-image"
                                        />
                                        <div>
                                          <h1 class="favourite-place-card-heading">PÄRUP</h1>
                                          <p class="favourite-place-card-description">
                                          3-seat sofa
                                          </p>
                                         <p>Rs.<span>44,990</span></p>
                                        </div>
                                      </div>
                                      </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div>
                                        <div class="favourite-place-card-container d-flex flex-column">
                                            <img
                                              src="/s6.jpg"
                                              class="favourite-place-card-image"
                                            />
                                            <div>
                                              <h1 class="favourite-place-card-heading">LANDSKRONA</h1>
                                              <p class="favourite-place-card-description">
                                              Gunnared light green/wood
                                              </p>
                                             <p>Rs.<span>44,000</span></p>
                                            </div>
                                          </div>
                                          </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div>
                                            <div class="favourite-place-card-container d-flex flex-column">
                                                <img
                                                  src="/s7.jpg"
                                                  class="favourite-place-card-image"
                                                />
                                                <div>
                                                  <h1 class="favourite-place-card-heading">ÄPPLARYD</h1>
                                                  <p class="favourite-place-card-description">
                                                  Djuparp red/brown
                                                  </p>
                                                 <p>Rs.<span>1,19,990</span></p>
                                                </div>
                                              </div>
                                              </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-3">
                                            <div>
                                                <div class="favourite-place-card-container d-flex flex-column">
                                                    <img
                                                      src="/s8.jpg"
                                                      class="favourite-place-card-image"
                                                    />
                                                    <div>
                                                      <h1 class="favourite-place-card-heading">GRÖNLID</h1>
                                                      <p class="favourite-place-card-description">
                                                      Sporda natural
                                                      </p>
                                                     <p>Rs.<span>59,990</span></p>
                                                    </div>
                                                  </div>
                                                  </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-3">
                                                <div>
                                                    <div class="favourite-place-card-container d-flex flex-column">
                                                        <img
                                                          src="/s9.jpg"
                                                          class="favourite-place-card-image"
                                                        />
                                                        <div class="vivekstyle">
                                                          <h1 class="favourite-place-card-heading">GLOSTAD</h1>
                                                          <p class="favourite-place-card-description">
                                                          Knisa medium blue
                                                          </p>
                                                         <p>Rs.<span>9,990</span></p>
                                                        </div>
                                                      </div>
                                                      </div>
                                                </div>
                                                
                                                                      
                                                                        
</div>
</div>
</div>
</div>
<div id="beddance" class="meghdance">
  <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="d-flex  justify-content-center flex-column">
            
                    <div class="button_style">
                        <h1>Category</h1>
                        <button class="button button-green" >Sofas& armchairs</button>
                        <button class="button button-orange">mattresses</button>
                        <button class="button button-green">Storage</button>
                        <button class="button button-orange">Tbles and desks</button>
                        <button class="button button-green">Chairs</button>
                        <button class="button button-orange">Office lounge</button>
                        <button class="button button-green">Lights</button>
                    
                </div>
                </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                    <div>
                        <div class="favourite-place-card-container d-flex flex-column">
                            <img
                              src="/b1.jpg"
                              class="favourite-place-card-image"
                            />
                            <div>
                              <h1 class="favourite-place-card-heading">SONGESAND</h1>
                              <p class="favourite-place-card-description">
                              Bed frame
                              </p>
                             <p>Rs.<span>16,990</span></p>
                            </div>
                          </div>
                          </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div>
                            <div class="favourite-place-card-container d-flex flex-column">
                                <img
                                  src="/b2.jpg"
                                  class="favourite-place-card-image"
                                />
                                <div>
                                  <h1 class="favourite-place-card-heading">MALMBed</h1>
                                  <p class="favourite-place-card-description">
                                   frame
                                  </p>
                                 <p>Rs.<span>26,990</span></p>
                                </div>
                              </div>
                              </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div>
                                <div class="favourite-place-card-container d-flex flex-column">
                                    <img
                                      src="/b3.jpg"
                                      class="favourite-place-card-image"
                                    />
                                    <div>
                                      <h1 class="favourite-place-card-heading">HEMNES</h1>
                                      <p class="favourite-place-card-description">
                                      Bed frame
                                      </p>
                                     <p>Rs.<span>32,900</span></p>
                                    </div>
                                  </div>
                                  </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div>
                                    <div class="favourite-place-card-container d-flex flex-column">
                                        <img
                                          src="/b4.jpg"
                                          class="favourite-place-card-image"
                                        />
                                        <div>
                                          <h1 class="favourite-place-card-heading">GRIMSBU</h1>
                                          <p class="favourite-place-card-description">
                                          Bed frame
                                          </p>
                                         <p>Rs.<span>4,900</span></p>
                                        </div>
                                      </div>
                                      </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div>
                                        <div class="favourite-place-card-container d-flex flex-column">
                                            <img
                                              src="/b5.jpg"
                                              class="favourite-place-card-image"
                                            />
                                            <div>
                                              <h1 class="favourite-place-card-heading">ÅNNELAND</h1>
                                              <p class="favourite-place-card-description">
                                              Foam mattress
                                              </p>
                                             <p>Rs.<span>.32,990</span></p>
                                            </div>
                                          </div>
                                          </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div>
                                            <div class="favourite-place-card-container d-flex flex-column">
                                                <img
                                                  src="/b6.jpg"
                                                  class="favourite-place-card-image"
                                                />
                                                <div>
                                                  <h1 class="favourite-place-card-heading">VATNESTRÖM</h1>
                                                  <p class="favourite-place-card-description">
                                                  Pocket sprung mattress
                                                  </p>
                                                 <p>Rs.<span>54,990</span></p>
                                                </div>
                                              </div>
                                              </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-3">
                                            <div>
                                                <div class="favourite-place-card-container d-flex flex-column">
                                                    <img
                                                      src="/b7.jpg"
                                                      class="favourite-place-card-image"
                                                    />
                                                    <div>
                                                      <h1 class="favourite-place-card-heading">VANNAREID</h1>
                                                      <p class="favourite-place-card-description">
                                                      Pocket sprung mattress
                                                      </p>
                                                     <p>Rs.<span>7,990</span></p>
                                                    </div>
                                                  </div>
                                                  </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-3">
                                                <div>
                                                    <div class="favourite-place-card-container d-flex flex-column">
                                                        <img
                                                          src="/b8.jpg"
                                                          class="favourite-place-card-image"
                                                        />
                                                        <div class="vivekstyle">
                                                          <h1 class="favourite-place-card-heading">KLEPPSTAD</h1>
                                                          <p class="favourite-place-card-description">
                                                           matress
                                                          </p>
                                                         <p>Rs.<span>10,900</span></p>
                                                        </div>
                                                      </div>
                                                      </div>
                                                </div>
                                                
                                                                      
                                                                        
</div>
</div>
</div>  
<div id="storagedance" class="meghdance">
  <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="d-flex  justify-content-center flex-column">
            
                    <div class="button_style">
                        <h1>Category</h1>
                        <button class="button button-green" >Sofas& armchairs</button>
                        <button class="button button-orange">mattresses</button>
                        <button class="button button-green">Storage</button>
                        <button class="button button-orange">Tbles and desks</button>
                        <button class="button button-green">Chairs</button>
                        <button class="button button-orange">Office lounge</button>
                        <button class="button button-green">Lights</button>
                    
                </div>
                </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                    <div>
                        <div class="favourite-place-card-container d-flex flex-column">
                            <img
                              src="/k1.jpg"
                              class="favourite-place-card-image"
                            />
                            <div>
                              <h1 class="favourite-place-card-heading">SONGESAND</h1>
                              <p class="favourite-place-card-description">
                              Side plate,
                              </p>
                             <p>Rs.<span>990</span></p>
                            </div>
                          </div>
                          </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div>
                            <div class="favourite-place-card-container d-flex flex-column">
                                <img
                                  src="/k2.jpg"
                                  class="favourite-place-card-image"
                                />
                                <div>
                                  <h1 class="favourite-place-card-heading">MALMBed</h1>
                                  <p class="favourite-place-card-description">
                                  Side plate
                                  </p>
                                 <p>Rs.<span>799</span></p>
                                </div>
                              </div>
                              </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div>
                                <div class="favourite-place-card-container d-flex flex-column">
                                    <img
                                      src="/k3.jpg"
                                      class="favourite-place-card-image"
                                    />
                                    <div>
                                      <h1 class="favourite-place-card-heading">HEMNES</h1>
                                      <p class="favourite-place-card-description">
                                      Plate
                                      </p>
                                     <p>Rs.<span>329</span></p>
                                    </div>
                                  </div>
                                  </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div>
                                    <div class="favourite-place-card-container d-flex flex-column">
                                        <img
                                          src="/k4.jpg"
                                          class="favourite-place-card-image"
                                        />
                                        <div>
                                          <h1 class="favourite-place-card-heading">GRIMSBU</h1>
                                          <p class="favourite-place-card-description">
                                          Saucepan with lid
                                          </p>
                                         <p>Rs.<span>999</span></p>
                                        </div>
                                      </div>
                                      </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div>
                                        <div class="favourite-place-card-container d-flex flex-column">
                                            <img
                                              src="/k5.jpg"
                                              class="favourite-place-card-image"
                                            />
                                            <div>
                                              <h1 class="favourite-place-card-heading">ÅNNELAND</h1>
                                              <p class="favourite-place-card-description">
                                              Jar with insert,
                                              </p>
                                             <p>Rs.<span>.329</span></p>
                                            </div>
                                          </div>
                                          </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div>
                                            <div class="favourite-place-card-container d-flex flex-column">
                                                <img
                                                  src="/k6.jpg"
                                                  class="favourite-place-card-image"
                                                />
                                                <div>
                                                  <h1 class="favourite-place-card-heading">VATNESTRÖM</h1>
                                                  <p class="favourite-place-card-description">
                                                  Lunch bag
                                                  </p>
                                                 <p>Rs.<span>299</span></p>
                                                </div>
                                              </div>
                                              </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-3">
                                            <div>
                                                <div class="favourite-place-card-container d-flex flex-column">
                                                    <img
                                                      src="/k7.jpg"
                                                      class="favourite-place-card-image"
                                                    />
                                                    <div>
                                                      <h1 class="favourite-place-card-heading">VANNAREID</h1>
                                                      <p class="favourite-place-card-description">
                                                      Pocket sprung mattress
                                                      </p>
                                                     <p>Rs.<span>7,990</span></p>
                                                    </div>
                                                  </div>
                                                  </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-3">
                                                <div>
                                                    <div class="favourite-place-card-container d-flex flex-column">
                                                        <img
                                                          src="/k8.jpg"
                                                          class="favourite-place-card-image"
                                                        />
                                                        <div class="vivekstyle">
                                                          <h1 class="favourite-place-card-heading">KLEPPSTAD</h1>
                                                          <p class="favourite-place-card-description">
                                                          Saucepan with lid
                                                          </p>
                                                         <p>Rs.<span>999</span></p>
                                                        </div>
                                                      </div>
                                                      </div>
                                                </div>
                                                
                                                                      
                                                                        
</div>
</div>
</div>  
  </div>
 
    
  );
}

export default App;
