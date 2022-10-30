<?php
use Illuminate\Support\Facades\URL;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    @include('_partials._head')
</head>

<body>

    <!-- ======= Top Bar ======= -->
    <section id="topbar" class="d-flex align-items-center">
        @include('_partials._topBar')
    </section>

    <!-- ======= Header ======= -->
    <header id="header" class="d-flex align-items-center">
        @include('_partials._header')
    </header><!-- End Header -->

    <!-- ======= Hero Section ======= -->
    @yield('hero')

    <main id="main">
        @yield('content')
    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <footer id="footer">
        @include('_partials._footer')
    </footer><!-- End Footer -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

    @include('_partials._scripts')

    @yield("js")
</body>

</html>
