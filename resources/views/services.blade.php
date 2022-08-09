@extends('layouts.system')


@section('content')
    <section>


                <!-- Our Awesome Service -->
        <div id="contact">
            <div class="">
                <h2 class="section-title">Our Awesome Services</h2>

                <div class="margin">
                    <div class="s-12 m-12 l-8 margin-bottom margin-right right-align">
                        <img src="{{ asset('assets/img/service/serList.jpg') }}" alt="" class="photo-right">
                    </div>
                    <div class="s-12 m-12 l-4">
                        <div class="s-12 m-12 l-7 margin-bottom right-align">
                            <img src="{{ asset('assets/img/service/111.jpg') }}" alt="" class="photo-down">
                        </div>
                        <div class="s-12 m-12 l-7 margin-bottom right-align">
                            <img src="{{ asset('assets/img/service/make.jpg') }}" alt="" class="photo-left">
                        </div>
                        <div class="s-12 m-12 l-7 margin-bottom right-align">
                            <img src="{{ asset('assets/img/service/ele.jpg') }}" alt="" class="photo-up">
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div id="services">
            <div class="pt-4 mt-5">
                <h2 class="section-title">What we do</h2>
                <div class="margin">
                    <div class="s-12 m-6 l-4 margin-bottom">
                        <i class="icon-vector"></i>
                        <div class="service-text">
                            <h3>We find the problem</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        </div>
                    </div>
                    <div class="s-12 m-6 l-4 margin-bottom">
                        <i class="icon-eye"></i>
                        <div class="service-text">
                            <h3>We look to the future</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        </div>
                    </div>
                    <div class="s-12 m-12 l-4 margin-bottom">
                        <i class="icon-random"></i>
                        <div class="service-text">
                            <h3>We create a solution</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
@endsection
