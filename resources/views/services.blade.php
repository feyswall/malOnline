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


        <div id="our-work">
            <div class="line">
                <h2 class="section-title">What We Provide</h2>
                <div class="tabs">
                    <div class="tab-item tab-active">
                        <a class="tab-label active-btn">Electricity</a>
                        <div class="tab-content">
                            <div class="margin">
                                <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>Consultancy</h4>
                                            {{-- <p>Laoreet dolore magna aliquam erat volutpat.</p> --}}
                                        </div><img src="assets/img/bg1.jpg" alt="" class="t">
                                    </a></div>
                                <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>Solar Systems Installation</h4>
                                            {{-- <p>Laoreet dolore magna aliquam erat volutpat.</p> --}}
                                        </div><img src="assets/img/por4.jpg" alt="" class="">
                                    </a></div>
                                <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>AC Services</h4>
                                            {{-- <p>Laoreet dolore magna aliquam erat volutpat.</p> --}}
                                        </div><img src="assets/img/ac.jpg" alt="" class="">
                                    </a></div>
                                <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>Electrical Design</h4>
                                            {{-- <p>Laoreet dolore magna aliquam erat volutpat.</p> --}}
                                        </div><img src="assets/img/por3.jpg" alt="" class="">
                                    </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-item">
                        <a class="tab-label">Fire Control</a>
                        <div class="tab-content">
                            <div class="margin">
                                <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>Industrial Fire Fighting Systems</h4>
                                            <p>Full Automated File Fighting Systems.</p>
                                        </div><img src="assets/img/fire1.jpg" alt="">
                                    </a></div>
                                <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>Fire Estinguisher Portable Devices</h4>
                                            <p>Fire Estinguisher CO<sub>2</sub> Tanks</p>
                                        </div><img src="assets/img/fire2.jpg" alt="">
                                    </a></div>
                                <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>Residential Fire Fighting Systems</h4>
                                            <p>Fire Fighting System In Your Confort.</p>
                                        </div><img src="assets/img/fire3.jpg" alt="">
                                    </a></div>
                                <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>Water Spreying Devices</h4>
                                            <p>Auto smoke detectors.</p>
                                        </div><img src="assets/img/fire4.jpg" alt="">
                                    </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-item">
                        <a class="tab-label">Surveillence Systems</a>
                        <div class="tab-content">
                            <div class="margin">
                                <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>Portable Tablet View</h4>
                                            <p>CCTV Connected with Your Hand Devices.</p>
                                        </div><img src="assets/img/sur1.jpg" alt="">
                                    </a></div>
                                <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>WIFI and Wired Cameras</h4>
                                            <p>To fit your Needs.</p>
                                        </div><img src="assets/img/sur2.jpg" alt="">
                                    </a></div>
                                <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>Hight Definition View</h4>
                                            <p>Current Generation Lens For Better View.</p>
                                        </div><img src="assets/img/sur4.jpg" alt="">
                                    </a></div>
                                <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>Portable CCTV</h4>
                                            <p>CCTV That Are Portable and Easy To Use.</p>
                                        </div><img src="assets/img/sur3.jpg" alt="">
                                    </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-item">
                        <a class="tab-label">Training & Consultancy</a>
                        <div class="tab-content">
                            <div class="margin">
                                <div class="s-12 m-6 l-6"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>Leasons Concern Electricity</h4>
                                            <p>Our Programs are Under High Care With Good Trained Instructors In
                                                Electricity.</p>
                                        </div><img src="assets/img/it3.jpg" alt="">
                                    </a></div>
                                <div class="s-12 m-6 l-6"><a class="our-work-container lightbox margin-bottom">
                                        <div class="our-work-text">
                                            <h4>Leasons Concerning IT</h4>
                                            <p>Learn Everything You Need To Know Concerning IT Field.</p>
                                        </div><img src="assets/img/it4.jpg" alt="">
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
@endsection
