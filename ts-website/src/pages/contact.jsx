import React from 'react'
export default function ContactUs() {
  return (
    <div>
    <section class="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover bannerBg" >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 text-center">
            <h1 class="display-2 fw-bold text-white">
              We’re Here to Help.
            </h1>
            <p class="lead text-white text-opacity-75 mb-0">
              We always want to hear from you! Let us know how we can best help you and we'll do our very best.
            </p>

          </div>
        </div>
      </div>
    </section>
    <div class="position-relative">
      <div class="shape shape-bottom shape-fluid-x text-light">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"/></svg>      </div>
    </div>
    <section class="py-7 py-md-9 border-bottom border-gray-300" id="info">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <a href="#info" class="btn btn-white btn-rounded-circle shadow mt-n11 mt-md-n13" data-scroll>
              <i class="fe fe-arrow-down"></i>
            </a>

          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 text-center border-end border-gray-300">
            <h6 class="text-uppercase text-gray-700 mb-1">
              Message us
            </h6>
            <div class="mb-5 mb-md-0">
              <a href="tel:1234567890" class="h4 text-primary">
                Start a chat!
              </a>
            </div>

          </div>
          <div class="col-12 col-md-4 text-center border-end border-gray-300">
            <h6 class="text-uppercase text-gray-700 mb-1">
              Call anytime
            </h6>

            <div class="mb-5 mb-md-0">
              <a href="tel:1234567890" class="h4">
              1234567890
              </a>
            </div>

          </div>
          <div class="col-12 col-md-4 text-center">
            <h6 class="text-uppercase text-gray-700 mb-1">
              Email us
            </h6>
            <a href="#!" class="h4">
              support@trendsarthi.com
            </a>

          </div>
        </div> 
      </div>
    </section>

    <section class="pt-8 pt-md-11 pb-8 pb-md-14">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 text-center">

            <h2 class="fw-bold">
              Let us hear from you directly!
            </h2>
            <p class="fs-lg text-body-secondary mb-7 mb-md-9">
              We always want to hear from you! Let us know how we can best help you and we'll do our very best.
            </p>

          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-md-12 col-lg-10">
            <form>
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="form-group mb-5">

                    <label class="form-label" for="contactName">
                      Full name
                    </label>
                    <input class="form-control" id="contactName" type="text" placeholder="Full name" />

                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-group mb-5">
                    <label class="form-label" for="contactEmail">
                      Email
                    </label>

                    <input class="form-control" id="contactEmail" type="email" placeholder="hello@domain.com" />

                  </div>
                </div>
              </div> 
              <div class="row">
                <div class="col-12">
                  <div class="form-group mb-7 mb-md-9">

                    <label class="form-label" for="contactMessage">
                      What can we help you with?
                    </label>

                    <textarea class="form-control" id="contactMessage" rows="5" placeholder="Tell us what we can help you with!"></textarea>

                  </div>
                </div>
              </div> 
              <div class="row justify-content-center">
                <div class="col-auto">

                  <button type="submit" class="btn btn-success lift">
                    Send message
                  </button>

                </div>
              </div>
            </form>

          </div>
        </div> 
      </div> 

      </section>
   
    </div>
  )
}
