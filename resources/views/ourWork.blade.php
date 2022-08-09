@extends('layouts.system')


@section('content')
    <section>

       <!-- Gallery -->
<div class="row mt-5 p-2">
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img
        src="assets/img/tv.jpg" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />
  
      <img
      src="assets/img/girl.jpg" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain Landscape"
      />

      <img
      src="assets/img/222.jpg" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain Landscape"
      />

      <img
      src="assets/img/motor.jpg" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain Landscape"
      />
    </div>
  
    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
      src="assets/img/3.jpg" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
      />

      <img
      src="assets/img/1.jpg" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
      />
  
      <img
      src="assets/img/goood.jpg" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite National Park"
      />

      <img
      src="assets/img/sur11.jpg" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />

      <img
      src="assets/img/ac21.jpg" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />
    </div>
  
    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
      src="assets/img/it3.jpg" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Waves at Sea"
      />
  
      <img
      src="assets/img/11.webp" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite National Park"
      />

      <img
      src="assets/img/it4.jpg" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite National Park"
      />

      <img
      src="assets/img/fir.jpg" alt=""
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite National Park"
      />
    </div>
  </div>
  <!-- Gallery -->

    <!-- Our Awesome Service -->
   <!-- Our Awesome Service -->
   <div id="contact">
    <div class="">
        <h2 class="section-title">We serve for you</h2>

        <div class="margin">
            <div class="s-12 m-12 l-8 margin-bottom margin-right right-align">
                <img src="{{ asset('assets/img/now.jpg') }}" alt="" class="photo-right">
            </div>
            <div class="s-12 m-12 l-4">
                <div class="s-12 m-12 l-7 margin-bottom right-align">
                    <img src="{{ asset('assets/img/service/111.jpg') }}" alt="" class="photo-down">
                </div>
                <div class="s-12 m-12 l-7 margin-bottom right-align">
                    <img src="{{ asset('assets/img/service/make.jpg') }}" alt="" class="photo-left">
                </div>
                <div class="s-12 m-12 l-7 margin-bottom right-align">
                    <img src="{{ asset('assets/img/cheche.jpg') }}" alt="" class="photo-up">
                </div>
            </div>
        </div>
    </div>
</div>
    </section>
@endsection

@section('script')
    <script src="{{ asset('assets/animate/code.js') }}""></script>
@endsection
