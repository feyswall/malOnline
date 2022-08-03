<!DOCTYPE html>
<html lang="en">

<head>
@include('_partials._head')
</head>

<body>



  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">
   @include('_partials._header')
  </header><!-- End Header -->



  <!-- ======= Hero Section ======= -->
  <section id="hero" class="hero d-flex align-items-center section-bg">
  @include('_partials._hero')
  </section><!-- End Hero Section -->



    @yield('content')
    

  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">
    @include('_partials._footer')
  </footer><!-- End Footer -->
  <!-- End Footer -->

  <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  @include('_partials._script')

</body>

</html>