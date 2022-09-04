


function faq(){
    
const clearSeection = document.getElementById('newsCard');
clearSeection.innerHTML = '';

const clearSection2 = document.getElementById('secondaryNav');
clearSection2.innerHTML = 'Frequently Asked Questions';

const faq = document.getElementById('faq');
const ask = document.createElement('div');
ask.innerHTML = `<!-- ====== FAQ Section Start -->
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
<br><br>
<section
   x-data="
   {
   openFaq1: false, 
   openFaq2: false, 
   openFaq3: false, 
   openFaq4: false, 
   openFaq5: false, 
   openFaq6: false
   }
   "
   class="
   bg-black
   pt-20
   lg:pt-[120px]
   pb-12
   lg:pb-[90px]
   relative
   z-20
   overflow-hidden
   "
   >
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[520px]">
               <span class="font-semibold text-lg text-primary mb-2 block">
               FAQ
               </span>
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  Have a Question? We have an answer!\n
                 
               </h2>
               <p class="text-gray-600 text-body-color">
                Here are some of our FAQs. If you have any other questions you'd like answered please feel free to contact us. 
               </p>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap -mx-2 p-2">
         <div class="w-full lg:w-1/2 px-4">
            
            <div
               class="
               single-faq
               w-full
               bg-[#D6B75B]
               border border-[#F3F4FE]
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
               >
               <button
                  class="faq-btn flex w-full text-left"
                  @click="openFaq2 = !openFaq2"
                  >
                  <div
                     class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-outline-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
                     >
                     <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        class="fill-current icon"
                        >
                        <path
                           d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                           fill="#3056D3"
                           stroke="#3056D3"
                           />
                     </svg>
                  </div>
                  <div class="w-full">
                     <h4 class="text-lg font-semibold text-black">
                        What is the difference between Arrow function and Regular function?
                     </h4>
                  </div>
               </button>
               <div x-show="openFaq2" class="faq-content pl-[62px]">
                  <p class="text-gray-600 text-body-color leading-relaxed py-3">
                  Difference between Arrow function and Regular function: The regular function just made the changes within its own this. In JS arguments array in functions is a special object that can be used to get all the arguments passed to the function. Similar to this, arrow functions do not have their own binding to a arguments object, they are bound to arguments of enclosing scope.
                  </p>
               </div>
            </div>
            <div
               class="
               single-faq
               w-full
               bg-[#D6B75B]
               border border-[#F3F4FE]
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
               >
               <button
                  class="faq-btn flex w-full text-left"
                  @click="openFaq3 = !openFaq3"
                  >
                  <div
                     class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-outline-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
                     >
                     <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        class="fill-current icon"
                        >
                        <path
                           d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                           fill="#3056D3"
                           stroke="#3056D3"
                           />
                     </svg>
                  </div>
                  <div class="w-full">
                     <h4 class="text-lg font-semibold text-black">
                        What are the differences among Map, forEach, Filter and Reduce?
                     </h4>
                  </div>
               </button>
               <div x-show="openFaq3" class="faq-content pl-[62px]">
                  <p class="text-gray-600 text-body-color leading-relaxed py-3">
                  Differences among Map, forEach, Filter and Reduce: Map is used to transform an array into another array. Filter is used to filter an array based on a condition. Reduce is used to reduce an array to a single value. ForEach is used to iterate over an array.
                  </p>
               </div>
            </div>
         </div>
         <div class="w-full lg:w-1/2 px-4">
            <div
               class="
               single-faq
               w-full
               bg-[#D6B75B]
               border border-[#F3F4FE]
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
               >
               <button
                  class="faq-btn flex w-full text-left"
                  @click="openFaq4 = !openFaq4"
                  >
                  <div
                     class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-outline-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
                     >
                     <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        class="fill-current icon"
                        >
                        <path
                           d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                           fill="#3056D3"
                           stroke="#3056D3"
                           />
                     </svg>
                  </div>
                  <div class="w-full">
                     <h4 class="text-lg font-semibold text-black">
                        Why do we need to use template strings?
                     </h4>
                  </div>
               </button>
               <div x-show="openFaq4" class="faq-content pl-[62px]">
                  <p class="text-gray-600 text-body-color leading-relaxed py-3">
                     Usage of template strings: Template strings are used to create a string with embedded expressions. Template strings are enclosed by backticks. Template strings are used to create multiline strings. Template strings are used to create string with embedded expressions. Template strings are used to create string with embedded expressions.
                  </p>
               </div>
            </div>
            <div
               class="
               single-faq
               w-full
               bg-[#D6B75B]
               border border-[#F3F4FE]
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
               >
               <button
                  class="faq-btn flex w-full text-left"
                  @click="openFaq5 = !openFaq5"
                  >
                  <div
                     class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-outline-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
                     >
                     <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        class="fill-current icon"
                        >
                        <path
                           d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                           fill="#3056D3"
                           stroke="#3056D3"
                           />
                     </svg>
                  </div>
                  <div class="w-full">
                     <h4 class="text-lg font-semibold text-black">
                     What is the difference among Var, Let and Const?
                     </h4>
                  </div>
               </button>
               <div x-show="openFaq5" class="faq-content pl-[62px]">
                  <p class="text-gray-600 text-body-color leading-relaxed py-3">
                  Difference among Var, Let and Const: Var is a global variable, Let is a local variable and Const is a constant variable.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="absolute bottom-0 right-0 z-[-1]">
      <svg
         width="1440"
         height="886"
         viewBox="0 0 1440 886"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         >
         <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
            />
         <defs>
            <linearGradient
               id="paint0_linear"
               x1="1308.65"
               y1="1142.58"
               x2="602.827"
               y2="-418.681"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#3056D3" stop-opacity="0.36" />
               <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
               <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
         </defs>
      </svg>
   </div>
</section>
<!-- ====== FAQ Section End -->`
;
faq.appendChild(ask);
}