<ul>
    <li><a class="@if (URL::current() == route("/")) active @endif" href="{{ route('/') }}">Home</a></li>
    <li><a class="@if (URL::current() == route("about")) active @endif" href="{{ route('about') }}">About Us</a></li>
    <li><a class="@if (URL::current() == route("service")) active @endif" href="{{ route('service') }}">Services</a></li>
    <li><a class="@if (URL::current() == route("contact")) active @endif" href="{{ route('contact') }}">Contact</a></li>
  </ul>
  <i class="bi bi-list mobile-nav-toggle"></i>
