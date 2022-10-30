@extends('layouts.system')

@section('hero')
    <section id="hero">
        <div class="hero-container">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

                <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                <div class="carousel-inner" role="listbox">

                    <!-- Slide 1 -->
                    <div class="carousel-item active" style="background-image: url(public/assets/img/slide/printers.jpg)">
                        <div class="carousel-container">
                            <div class="carousel-content">
                                <h2 class="animate__animated animate__fadeInDown">Welcome to <span
                                        class="text-warning">Basmall International
                                        Co.Ltd</span></h2>
                                <p class="animate__animated animate__fadeInUp">Supply stationary and consumables such as
                                    printers, Staplers, Punching machines, Sticky Tapes, Scissors, Desk Tidy, Pen Cups, Note
                                    Holders, Paper clips, etc.</p>
                            </div>
                        </div>
                    </div>


                    <!-- Slide 2 -->
                    <div class="carousel-item" style="background-image: url(public/assets/img/slide/creaning.jpg)">
                        <div class="carousel-container">
                            <div class="carousel-content">
                                <h2 class="animate__animated fanimate__adeInDown">Our <span
                                        class="text-warning">Highest Consideration</span></h2>
                                <p class="animate__animated animate__fadeInUp">
                                    We respect our customers and we guarantee to provide the outer most desired services.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3 -->
                    <div class="carousel-item" style="background-image: url(public/assets/img/slide/slide-3.jpg)">
                        <div class="carousel-container">
                            <div class="carousel-content">
                                <h2 class="animate__animated animate__fadeInDown">We are <span class="text-warning">at your
                                        service</span></h2>
                                <p class="animate__animated animate__fadeInUp">At Basmall International Co Ltd we provide
                                    Assistance in company registration and Tax consultancy so that you can do your business
                                    efficiently and more confident.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>

                <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>

            </div>
        </div>
    </section><!-- End Hero -->
@endsection

@section('content')
    <!-- ======= Featured Section ======= -->
    <section id="featured" class="featured">
        <div class="container">

            <div class="row">
                <div class="col-lg-6">
                    <div class="icon-box">
                        <i class="bi bi-card-checklist text-warning"></i>
                        <h3><a href="">Mission</a></h3>
                        <p>To deliver goods and services to our client at high quality
                            and honestly.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0">
                    <div class="icon-box">
                        <i class="bi bi-bar-chart text-warning"></i>
                        <h3><a href="">Vision</a></h3>
                        <p>Aimed to bringing benefits and Implovements to the organization in the future</p>
  
                    </div>
                </div>
            </div>

        </div>
    </section><!-- End Featured Section -->

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container">

            <div class="row">
                <div class="col-lg-6">
                    <img src="public/assets/Basmall.png" class="rounded img-fluid" alt="">
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                    <p class="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore
                        magna aliqua.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci possimus necessitatibus.
                        Ea laborum delectus ipsa distinctio blanditiis officiis nesciunt quod sequi voluptatum. Numquam
                        tempore quae dolorem deserunt ducimus eum minus deleniti incidunt facilis! Dolorem quisquam quaerat
                        et quidem nulla.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci possimus necessitatibus.
                        Ea laborum delectus ipsa distinctio blanditiis officiis nesciunt quod sequi voluptatum. Numquam
                        tempore quae dolorem deserunt ducimus eum minus deleniti incidunt facilis! Dolorem quisquam quaerat
                        et quidem nulla.
                    </p>
                    <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>

        </div>
    </section><!-- End About Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
        <div class="container">
            <div class="section-title">
                <h2>Our Services</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                    sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div class="icon-box">
                        <a href="{{ route('/') }}">
                            <div class="icon"><i class="bx bx-book"></i></div>
                            <h4>Supply of stationary and Consumables</h4>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div class="icon-box">
                        <a href="{{ route('/') }}">
                            <div class="icon"><i class="bx bx-building-house"></i></div>
                            <h4><a href="">Provision Of Cleaning Services and Gardening</a></h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div class="icon-box">
                        <a href="{{ route('/') }}">
                            <div class="icon"><i class="bx bx-money"></i></div>
                            <h4><a href="">Money Transfering</a></h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <a href="{{ route('/') }}">
                            <div class="icon"><i class="bx bxs-dollar-circle"></i></div>
                            <h4><a href="">Marketing</a></h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <a href="{{ route('/') }}">
                            <div class="icon"><i class="bx bxs-certification"></i></div>
                            <h4><a href="">Assist In Company Registration</a></h4>
                            <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <a href="{{ route('/') }}">
                            <div class="icon"><i class="bx bx-money-withdraw"></i></div>
                            <h4><a href="">Tax Consultancy</a></h4>
                            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    </section><!-- End Services Section -->





    <!-- NOTES

                        using this as a staring point to experiment with some bootstrap parallax effects.

                        http://untame.net/2013/04/how-to-integrate-simple-parallax-with-twitter-bootstrap/

                        -->

    <!-- Section 1 -->
    <section id="section1" data-speed="8" data-type="background">
        <div class="container d-flex align-content-center">
            <!-- ======= Testimonials Section ======= -->
            <section id="testimonials" class="testimonials">
                <div class="row mt-5">
                    <div class="col-lg-6">
                        <div class="testimonial-item">
                            <img src="public/assets/face.jpg" class="testimonial-img" alt="">
                            <h3>Matondo Mpakanjia</h3>
                            <h4>Chief &amp; Marketer</h4>
                            <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                                Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="testimonial-item mt-4 mt-lg-0">
                            <img src="public/assets/face.jpg" class="testimonial-img" alt="">
                            <h3>Isaya Mwalukasa</h3>
                            <h4>Proffesional Noise Maker</h4>
                            <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum
                                eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim
                                culpa.
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>

                </div>
            </section><!-- End Testimonials Section -->
        </div>
    </section>
    <!-- Section 2 -->
    <!-- ======= About Section ======= -->
    <section id="about" class="about mt-5">
        <div class="container">

            <div class="row">
                <div class="col-lg-6">
                    <img src="public/assets/Basmall.png" class="rounded img-fluid" alt="">
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                    <p class="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore
                        magna aliqua.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci possimus necessitatibus.
                        Ea laborum delectus ipsa distinctio blanditiis officiis nesciunt quod sequi voluptatum. Numquam
                        tempore quae dolorem deserunt ducimus eum minus deleniti incidunt facilis! Dolorem quisquam quaerat
                        et quidem nulla.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci possimus necessitatibus.
                        Ea laborum delectus ipsa distinctio blanditiis officiis nesciunt quod sequi voluptatum. Numquam
                        tempore quae dolorem deserunt ducimus eum minus deleniti incidunt facilis! Dolorem quisquam quaerat
                        et quidem nulla.
                    </p>
                    <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>

        </div>
    </section><!-- End About Section -->

    <!-- ======= Clients Section ======= -->
    <!--      <section id="clients" class="clients">
                                        <div class="container">

                                          <div class="section-title">
                                            <h2>Clients</h2>
                                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                          </div>

                                          <div class="clients-slider swiper">
                                            <div class="swiper-wrapper align-items-center">
                                              <div class="swiper-slide"><img src="public/assets/img/clients/client-1.png" class="img-fluid" alt=""></div>
                                              <div class="swiper-slide"><img src="public/assets/img/clients/client-2.png" class="img-fluid" alt=""></div>
                                              <div class="swiper-slide"><img src="public/assets/img/clients/client-3.png" class="img-fluid" alt=""></div>
                                              <div class="swiper-slide"><img src="public/assets/img/clients/client-4.png" class="img-fluid" alt=""></div>
                                              <div class="swiper-slide"><img src="public/assets/img/clients/client-5.png" class="img-fluid" alt=""></div>
                                              <div class="swiper-slide"><img src="public/assets/img/clients/client-6.png" class="img-fluid" alt=""></div>
                                              <div class="swiper-slide"><img src="public/assets/img/clients/client-7.png" class="img-fluid" alt=""></div>
                                              <div class="swiper-slide"><img src="public/assets/img/clients/client-8.png" class="img-fluid" alt=""></div>
                                            </div>
                                            <div class="swiper-pagination"></div>
                                          </div>

                                        </div>
                                      </section> -->
    <!-- End Clients Section -->
@endsection
