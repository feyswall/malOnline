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
            <div class="section-title">
                <h2>Money Transfering</h2>
            </div>
            <div class="row">
                <div class="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Find the best people that can transfer your money safe in time.</h3>
                    <p class="fst-italic">
                        We know you have dreams, and you are working towards making those dreams come true
                    </p>

                    <p>
                        But working hard is nothing if you can not secure your money properly, and that's where Basmall International comes in role.
                        At Basmall International, we want to be a part of your dream “ whether it is to start a business or build your dream house
                        send your children to the best schools or keep your family in good health
                        by offering you a convenient way to send money back home, or anywhere you desire with very little cost.
                    </p>
                    <p>
                        We are humbled that we have been
                        instrumental in helping millions of people realize their dreams, for nearly two decades now.
                    </p>

                    <ul>
                        <li><i class="bi bi-check-circle text-info"></i>
                            INSTANT TRANSFERS: With our robust technology, your money is transferred instantly across the globe
                        </li>
                        <li><i class="bi bi-check-circle text-info"></i>CONVENIENCE: We equip you to send money the way you want - to a Bank Account, to be picked up in Cash,
                            to a Mobile Wallet or get Cash delivered to your Doorstep.
                        </li>
                        <li><i class="bi bi-check-circle text-info"></i>
                            AFFORDABLE: We want to help you save more on your money transfers and that’s why we offer low transfer fees and great exchange rates.
                        </li>
                        <li><i class="bi bi-check-circle text-info"></i>
                            SECURE: Our state-of-the-art technology and robust compliance process ensure that your money moves safely from one place to another.
                            .</li>
                    </ul>
                    <p>
                        We at Basmall International are committed to operating with integrity, within the scope of the law, and with security.
                        Therefore, when you choose our services to transfer money, irrespective of which country you are from or which
                        currency you are using, you can be assured that your money is safe and will reach your family when they need it the most.
                    </p>
                </div>
                <div class="col-lg-6">
                    <img src="public/assets/moneyTransfer_1.png" class="rounded img-fluid" alt="">
                </div>
            </div>

        </div>
    </section><!-- End About Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
        <div class="container">
            <div class="section-title">
                <h2>Our Services</h2>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div class="icon-box">
                        <a href="{{ route('service') }}">
                            <div class="icon"><i class="bx bx-book"></i></div>
                            <h4>Supply of stationary and Consumables</h4>
                            <p>Pay Tax The Right Way with The Help Basmall International.</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div class="icon-box">
                        <a href="{{ route('service') }}">
                            <div class="icon"><i class="bx bx-building-house"></i></div>
                            <h4><a href="">Provision Of Cleaning Services and Gardening</a></h4>
                            <p>Clean office In always a number one thing any professionals must have.</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div class="icon-box">
                        <a href="{{ route('service') }}">
                            <div class="icon"><i class="bx bx-money"></i></div>
                            <h4><a href="">Money Transfering</a></h4>
                            <p>Find the best people that can transfer your money safe in time.</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <a href="{{ route('service') }}">
                            <div class="icon"><i class="bx bxs-dollar-circle"></i></div>
                            <h4><a href="">Marketing</a></h4>
                            <p>Why is marketing is so Important and a core part of any business</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <a href="{{ route('service') }}">
                            <div class="icon"><i class="bx bxs-certification"></i></div>
                            <h4><a href="">Assist In Company Registration</a></h4>
                            <p>We provide Answers to the Questions of many business starters.</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <a href="{{ route('service') }}">
                            <div class="icon"><i class="bx bx-money-withdraw"></i></div>
                            <h4><a href="">Tax Consultancy</a></h4>
                            <p>Pay Tax The Right Way with The Help Of Basmall International.</p>
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
    <section id="about" class="about" class="pt-3">
        <div class="container mt-3 pt-3">
            <div class="row">
                <div class="section-title">
                    <h2>Assist In Company Registration</h2>
                </div>
                <div class="col-lg-6">
                    <img src="public/assets/register.jpg" class="rounded img-fluid" alt="">
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>We provide Answers to the Questions of many business starters.</h3>
                    <p class="fst-italic">
                        the next question is How to Register a company. Which one should I choose? Sole Proprietary,
                        Partnership, Private Limited Company, One Person Company, Limited Liability Partnership, or Public Limited Company.
                    </p>
                    <p>
                        All new businesses coming up would find it helpful to get the details of how to get the company registered as a public/private limited.
                        Here are the steps for your reference.
                    </p>
                    <p>
                        That's why at Basmall International, with our help we guarantee that registering your process will have no less than eating a piece of cake, with the help of highly experienced members.
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
