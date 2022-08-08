<!DOCTYPE html>
<html lang="en-US">

<head>
    @include('_partials._head')

</head>

<body class="size-1140">
    <!-- PREMIUM FEATURES BUTTON -->
    <a target="_blank" class="hide-s" href="../template/onepage-premium-template/"
        style="position:fixed;top:130px;right:-14px;z-index:10;"><img src="img/premium-features.png" alt=""></a>
    <!-- TOP NAV WITH LOGO -->

    @include('_partials._header')

    @yield('content')
    <!-- FOOTER -->
    <footer>
        @include('_partials._footer')
    </footer>
    @include('_partials._script')

    @yield('script')
</body>

</html>
