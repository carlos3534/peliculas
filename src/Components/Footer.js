import React from "react";

function Footer() {
    return (
    <section aria-labelledby="footer-heading" id="footer" className="bg-black">
  <footer>
    <div
      className="mx-auto max-w-7xl divide-y divide-white lg:border-x border-white">
      <div
        className="flex-col flex lg:flex-row lg:items-center gap-y-12 items-start justify-between lg:py-16 pb-6 pt-16 px-8 lg:px-24">
        <div className="lg:mx-auto lg:text-center">
          <div className="text-white items-center flex">
            <div className="lg:mx-auto lg:text-center">
              <p
                className="font-display font-semibold lg:mx-auto italic lg:text-4xl text-2xl">
                ümovie
              </p><p className="mt-1 text-sm">
                Designed and built in the Åland Islands<br />by Michael
                Andreuzza.
              </p>
            </div>
          </div><nav className="flex-col flex lg:flex-row gap-8 mt-11">
            <a
              className="text-white hover:text-white 500 -mx-3 -my-2 delay-150 px-3 py-2 relative rounded-lg text-sm transition-colors"
              href="https://lexingtonthemes.com/license.html"
              ><span className="relative z-10">License</span>
            </a><a
              className="text-white hover:text-white 500 -mx-3 -my-2 delay-150 px-3 py-2 relative rounded-lg text-sm transition-colors"
              href="https://lexingtonthemes.com/faq.html"
              ><span className="relative z-10">Faq</span>
            </a><a
              className="text-white hover:text-white 500 -mx-3 -my-2 delay-150 px-3 py-2 relative rounded-lg text-sm transition-colors"
              href="https://lexingtonthemes.com"
              ><span className="relative z-10">Lexington</span>
            </a><a
              className="text-white hover:text-white 500 -mx-3 -my-2 delay-150 px-3 py-2 relative rounded-lg text-sm transition-colors"
              href="https://twitter.com/Mike_Andreuzza"
              ><span className="relative z-10">Social</span>
            </a>
          </nav>
        </div>
      </div>
      <div
        className="lg:mx-auto lg:text-center flex flex-col md:pt-6 pb-12 pt-8 px-8 lg:px-24">
        <p className="md:mt-0 mt-6 text-sm text-zinc-500">
          © Copyright 2022 . All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</section>
);
}

export default Footer;
