 <nav>
     <div class="line">
         <div class="s-12 l-2">
             <p class="logo"><strong>RMA</strong>CONTRACTORS</p>
         </div>
         <div class="top-nav s-12 l-10">

             <ul class="right">
                 <li class="{{ Route::current()->getName() == '' ? 'active-item' : '' }}"><a href="/">Home</a></li>
                 <li class="{{ Route::current()->getName() == 'features' ? 'active-item' : '' }}"><a
                         href="{{ route('features') }}">Features</a></li>
                 <li class="{{ Route::current()->getName() == 'aboutUs' ? 'active-item' : '' }}"><a
                         href="{{ route('aboutUs') }}">About Us</a></li>
                 <li class="{{ Route::current()->getName() == 'ourWork' ? 'active-item' : '' }}"><a
                         href="{{ route('ourWork') }}">Our Work</a></li>
                 <li class="{{ Route::current()->getName() == 'services' ? 'active-item' : '' }}"><a
                         href="{{ route('services') }}">Services</a></li>
                 <li class="{{ Route::current()->getName() == 'contactUs' ? 'active-item' : '' }}"><a
                         href="{{ route('contactUs') }}">Contact</a></li>
             </ul>
         </div>
     </div>
 </nav>
