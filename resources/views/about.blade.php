@extends("layouts.system")

@section("content")
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <ol>
          <li><a href="{{ route("/") }}">Home</a></li>
          <li>About Us</li>
        </ol>
        <h2>About Us</h2>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="row">
          <div class="col-lg-6">
            <img src="public/assets/marketing.png" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content">
            <h3>What We Offer For Our Customers.</h3>
            <p class="fst-italic">
              Basmall Internation Co.Ltd is a company That provides The following services
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i>Marketing</li>
              <li><i class="bi bi-check-circle"></i>oney Transfering</li>
              <li><i class="bi bi-check-circle"></i>Provision Of Cleaning Services and Gardening</li>
              <li><i class="bi bi-check-circle"></i>Tax Consultancy</li>
              <li><i class="bi bi-check-circle"></i>Installation and supply of ICT equipments</li>
              <li><i class="bi bi-check-circle"></i>Supply of stationary and Consumables</li>


            </ul>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    <!-- ======= Counts Section ======= -->
    <section id="counts" class="counts">
      <div class="container">

        <div class="row no-gutters">
            <h3 class="text-center mb-2">We provide All Our Services With.</h3>
          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <span data-purecounter-start="0" data-purecounter-end="" data-purecounter-duration="1" class=""></span>
              <p><strong>INSTANT TRANSFERS: </strong></p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <span data-purecounter-start="0" data-purecounter-end="" data-purecounter-duration="1" class=""></span>
              <p><strong>CONVENIENCE: </strong> </p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <span data-purecounter-start="0" data-purecounter-end="" data-purecounter-duration="1" class=""></span>
              <p><strong>AFFORDABLE: </strong> .</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <span data-purecounter-start="0" data-purecounter-end="" data-purecounter-duration="1" class=""></span>
              <p><strong>  SECURE:</strong> .</p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Counts Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials">
      <div class="container">

      </div>
    </section><!-- End Testimonials Section -->
@endsection
