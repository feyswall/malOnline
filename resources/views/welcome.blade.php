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
                        currency you are using, you can be assured that your money is safe and will reach your destination in time.
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
                            <h4><a href="{{ route('service') }}">Provision Of Cleaning Services and Gardening</a></h4>
                            <p>Clean office In always a number one thing any professionals must have.</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div class="icon-box">
                        <a href="{{ route('service') }}">
                            <div class="icon"><i class="bx bx-money"></i></div>
                            <h4><a href="{{ route('service') }}">Money Transfering</a></h4>
                            <p>Find the best people that can transfer your money safe in time.</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <a href="{{ route('service') }}">
                            <div class="icon"><i class="bx bxs-dollar-circle"></i></div>
                            <h4><a href="{{ route('service') }}">Marketing</a></h4>
                            <p>Why is marketing is so Important and a core part of any business</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <a href="{{ route('service') }}">
                            <div class="icon"><i class="bx bxs-certification"></i></div>
                            <h4><a href="{{ route('service') }}">Assist In Company Registration</a></h4>
                            <p>We provide Answers to the Questions of many business starters.</p>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <a href="{{ route('service') }}">
                            <div class="icon"><i class="bx bx-money-withdraw"></i></div>
                            <h4><a href="{{ route('service') }}">Tax Consultancy</a></h4>
                            <p>Pay Tax The Right Way with The Help Of Basmall International.</p>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    </section><!-- End Services Section -->


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


    <!-- ======= Counts Section ======= -->
    <section id="counts" class="counts">
        <div class="container">

            <div class="row no-gutters">
                <div class="section-title">
                    <h2>Our Clients</h2>
                </div>
                <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch text-center">
                    <div class="count-box">
                        <span data-purecounter-start="0" data-purecounter-end="" data-purecounter-duration="1" class=""></span>
                        <p><strong class="lead font-bold">Sicim Oil and Gas Company </strong></p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch text-center">
                    <div class="count-box">
                        <span data-purecounter-start="0" data-purecounter-end="" data-purecounter-duration="1" class=""></span>
                        <p><strong class="lead">Nextgen Solar</strong> </p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch  text-center">
                    <div class="count-box">
                        <span data-purecounter-start="0" data-purecounter-end="" data-purecounter-duration="1" class=""></span>
                        <p><strong class="lead">Heineman</strong> .</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch text-center">
                    <div class="count-box">
                        <span data-purecounter-start="0" data-purecounter-end="" data-purecounter-duration="1" class=""></span>
                        <p><strong class="lead">Tata Consultance Engeers (TCE)</strong> .</p>
                    </div>
                </div>

            </div>

        </div>
    </section><!-- End Counts Section -->

    <div class="row justify-content-center mb-sm-2 mb-md-5">
        <div class="section-title">
            <h2>Our Location</h2>
        </div>
        <div class="col-lg-9 col-sm-12">
            <iframe class="mb-4 mb-lg-0"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3961.941770205721!2d39.24351036517153!3d-6.776942068158643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sderm%20plaza!5e0!3m2!1ssw!2stz!4v1665165831055!5m2!1ssw!2stz"
                    frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe>
        </div>
    </div>
    <!-- ======= Clients Section ======= -->


    <!-- End Clients Section -->
@endsection
