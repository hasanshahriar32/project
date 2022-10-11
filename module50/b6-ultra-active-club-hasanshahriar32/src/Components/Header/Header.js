import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className=''>
        <div class="navbar bg-neutral-focus">
          <div class="flex-1">
            <a href="https://paradox-bd.com" class="btn btn-ghost normal-case text-xl">ParadoxBD</a>
          </div>
          <div class="flex-none gap-2">
            <div class="form-control hidden md:block">
              <input type="text" placeholder="Search" class="input input-bordered" />
            </div>
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a href="#headerName" class="justify-between">
                    Daily Routine
                    
                  </a>
                </li>
                <li><a href="#faq">FAQs <span class="badge">New</span></a></li>
                <li><a href="#clock">Clock</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <br />
      <br />
      <h1 id='headerName' className='text-warning text-4xl m-3'>My Daily Routine   ⏰</h1>
      <br />
        </div>
    );
};

export default Header;