import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';

const App = () => {
  let tl = gsap.timeline();
  let wrapepr = useRef(null);
  let main = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: main.current,
      smooth: true,
    });
    scroll.scrollTo(main.current);
    tl.to(wrapepr.current, { y: '100vh', scale: 0.6, duration: 0 });
    tl.to(wrapepr.current, { y: '30vh', duration: 1, delay: 1 });
    tl.to(wrapepr.current, { y: '0vh', rotate: 360, scale: 1, duration: 0.8 });
    return () => {
      clearInterval(scroll);
    };
  });

  return (
    <>
      <div className="bg-[#222] overflow-hidden" ref={main} data-scroll>
        <div
          className="bg-[#C5BEB4] h-[125vh] w-screen relative overflow-hidden"
          ref={wrapepr}
        >
          <Navbar />
          <section className="w-full h-[420px] flex items-center justify-between py-10 px-12">
            <div className="w-[30%] h-full">
              <div className="h-[60%] overflow-hidden">
                <img
                  src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
                  alt="table lamp"
                  className="w-full h-full object-cover hover:scale-110 transition-all cursor-pointer"
                />
              </div>
              <h2 className="font-Canopee mt-3 text-4xl font-semibold flex items-center gap-2">
                AVRO | KO{' '}
                <span className="bg-[#DB1807] p-1 text-white text-2xl rounded-md font-medium">
                  NEW
                </span>
              </h2>
              <p className="mt-4 font-CondMedium text-2xl font-thin text-[#383733]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                ipsa doloribus a dolorem ratione minus voluptas totam ullam
                facilis alias!
              </p>
            </div>
            <div className="w-[30%] border-l-2 border-[#938D86] border-r-2 h-full  text-center px-5">
              <h2 className="font-CondMedium text-7xl mb-5">ALL WORK!</h2>
              <h3 className="mb-10 font-NewLight text-5xl font-normal">
                A Featured selection <br /> the last work - <br /> of the last
                years.
              </h3>

              <h5 className=" font-NewLight font-medium">
                {' '}
                <span className="font-CondMedium text-lg ml-2">TIP!</span> Drag
                sideways to navigate
              </h5>
            </div>
            <div className="w-[30%]">
              <div className="h-[60%] overflow-hidden">
                <img
                  src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?"
                  alt="shoe"
                  className="w-full h-full object-cover hover:scale-110 transition-all cursor-pointer"
                />
              </div>
              <h2 className="font-Canopee mt-3 text-4xl font-semibold flex items-center gap-2">
                The Roger hub{' '}
                <span className="bg-[#DB1807] p-1 text-white text-2xl rounded-md font-medium">
                  new
                </span>
              </h2>
              <p className="mt-4 font-CondMedium text-2xl font-thin text-[#383733]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur quae animi dolorum deserunt facilis voluptate illo
              </p>
            </div>
          </section>
          <h1 className="text-[700px]/[600px] bg-[#1c1c19] text-[#C4BCB3] w-[96%] ml-[2%] font-Canopee tracking-tighter font-thin text-center">
            MIRANDA
          </h1>
        </div>

        {/* start new section here */}
        <section className="bg-[#C5BEB4] w-full h-[140vh] py-14 px-[40px] flex items-center justify-between">
          <div className="w-[35%] h-full pr-[50px] border-r-2 border-[#555454]">
            <h1 className="text-[100px]/[150px] font-Canopee font-thin">
              INTERACTIVE <br />
              <span className="text-[210px] font-black">ARTIS!</span>
            </h1>
            <img
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg"
              alt="desing"
              className="h-[50%] w-full object-cover"
            />
            <p className="text-4xl font-CondMedium text-[#2f2f2f] mt-10">
              <span className="bg-[#222] text-white mr-2 text-4xl p-2">A</span>s
              a Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Beatae, id laudantium repudiandae consectetur illum quis sit nulla
              incidunt sint sed.
            </p>
          </div>

          <div className="w-[65%] h-full px-[60px]">
            <img
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-2000.jpeg"
              alt="design"
              className="h-[60%] object-cover w-full"
            />
            <h1 className="font-Canopee text-[130px]/[130px] font-thin mt-5">
              Digital Art Director Interative Designer Creative developer based
              in amsterdam, NL.
            </h1>
          </div>
        </section>

        {/* start new section here */}
        <section className="py-10 bg-[#C5BEB4] relative">
          <h1 className="uppercase font-Canopee bg-[#1c1c19] text-[550px]/[500px] tracking-[-10px] text-[#C4BCB3] w-fit font-thin ml-[2%] px-[20px]">
            Website
          </h1>
          <img
            src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/60474834660f934090d42877_stamp.png"
            alt="website"
            className="h-[450px] absolute top-10 right-6"
          ></img>
        </section>

        {/* start new section here */}
        <section className="w-full flex justify-between bg-[#C4BCB3] px-5">
          <div className="w-[65%] h-full border-[#938D86] border-r-2 px-[60px] py-[80px] ">
            <div className="flex  justify-between items-stretch">
              <div className="w-[50%] border-[#938D86] border-r-2 px-5 py-5 ">
                <h2 className="font-CondMedium text-6xl mb-5">
                  UPCOMMING NEXT
                </h2>
                <h3 className="mb-10 font-NewLight text-4xl font-normal">
                  Fresh entry - A selected
                  <br /> work from the latest - <br /> digital releases.
                </h3>

                <h5 className=" font-NewLight font-medium ">
                  {' '}
                  <span className="font-CondMedium text-lg ml-2">
                    TIP!
                  </span>{' '}
                  Click on the image to explore
                </h5>
              </div>
              <div className="w-[50%] px-5 py-5">
                <div className="h-[60%] overflow-hidden">
                  <img
                    src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5c79f349770ebcc28ec4_thumbnail-small.webp?"
                    alt="table lamp"
                    className="w-full h-full object-cover hover:scale-110 transition-all cursor-pointer"
                  />
                </div>
                <h2 className="font-Canopee mt-3 text-4xl font-semibold flex items-center gap-2">
                  UNEXPECTED TIME
                </h2>
                <p className="mt-4 font-CondMedium text-2xl font-thin text-[#383733]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  ipsa doloribus a dolorem ratione minus voluptas totam ullam
                  facilis alias!
                </p>
              </div>
            </div>
            <div className="mt-10">
              <img
                src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c679f33f67d3dd00b04b4_avatar-3.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-[35%] px-[60px] py-[80px]">
            <h1 className="font-Canopee text-8xl font-thin text-center mb-10">
              THINK, CREATE <br />{' '}
              <span className="font-semibold text-[150px]">DELIVER</span>
            </h1>

            <p className="text-4xl font-CondMedium font-thin text-[#2f2f2f] mb-[150px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
              obcaecati. Ut tempora doloribus consequatur odio perspiciatis
              neque minima sapiente delectus. <br />
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tempore ducimus exercitationem tenetur minima, nihil reprehenderit
              sapiente consequatur laboriosam quae cupiditate velit impedit eum
              quisquam excepturi.
            </p>

            {/* note added the class animation to apply hover effect for h1 and img code in index.css */}

            <div className="h-[260px] bg-[#CAC1B6] border border-[#2f2f2fc6] rounded-[50%] w-full flex items-center justify-center flex-nowrap overflow-hidden  hover:cursor-pointer animation">
              <img
                src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/61001a3509319b6ae39e156b_arrow-long.svg"
                alt="icon"
                className="h-[60px] transition ease-in duration-500 translate-x-[-120%]"
              />
              <h1 className="text-8xl font-thin font-Canopee w-full h-full flex items-center justify-center translate-x-[-26%] transition ease-in duration-500">
                All Work
              </h1>
            </div>
          </div>
        </section>

        {/* start new section here */}
        <section className="bg-[#C4BCB3] w-full h-[420px] flex items-center justify-between py-10 px-12">
          <div className="w-[30%] h-full">
            <div className="h-[60%] overflow-hidden">
              <img
                src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/647dc0777b1a5df29f8e5a58_thumbnail-small.webp?"
                alt="table lamp"
                className="w-full h-full object-cover hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            <h2 className="font-Canopee mt-3 text-4xl font-semibold flex items-center gap-2">
              WOW CONCEPT
              <span className="bg-[#DB1807] p-1 text-white text-2xl rounded-md font-medium">
                NEW
              </span>
            </h2>
            <p className="mt-4 font-CondMedium text-2xl font-thin text-[#383733]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsa
              doloribus a dolorem ratione minus voluptas totam ullam facilis
              alias!
            </p>
          </div>
          <div className="w-[30%] border-l-2 border-[#938D86] border-r-2 h-full  text-center px-5">
            <h2 className="font-CondMedium text-7xl mb-5">ALL WORK!</h2>
            <h3 className="mb-10 font-NewLight text-5xl font-normal">
              A Featured selection <br /> the last work - <br /> of the last
              years.
            </h3>

            <h5 className=" font-NewLight font-medium">
              {' '}
              <span className="font-CondMedium text-lg ml-2">TIP!</span> Drag
              sideways to navigate
            </h5>
          </div>
          <div className="w-[30%]">
            <div className="h-[60%] overflow-hidden">
              <img
                src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
                alt="lamp"
                className="w-full h-full object-cover hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            <h2 className="font-Canopee mt-3 text-4xl font-semibold flex items-center gap-2">
              AVRO | KO{' '}
              <span className="bg-[#DB1807] p-1 text-white text-2xl rounded-md font-medium">
                new
              </span>
            </h2>
            <p className="mt-4 font-CondMedium text-2xl font-thin text-[#383733]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur quae animi dolorum deserunt facilis voluptate illo
            </p>
          </div>
        </section>

        {/* used custom css for animation check in index.css */}

        <section className="move py-6 w-full bg-[#C4BCB3] border-t border-[#2f2f2f] border-b whitespace-nowrap overflow-x-auto overflow-y-hidden">
          <h1 className="font-CondMedium">
            Lets create something together{' '}
            <span className="font-Canopee">Email me</span>
          </h1>
          <h1 className="font-CondMedium">
            Lets create something together{' '}
            <span className="font-Canopee">Email me</span>
          </h1>
          <h1 className="font-CondMedium">
            Lets create something together{' '}
            <span className="font-Canopee">Email me</span>
          </h1>
        </section>
        <footer className="flex justify-between items-center bg-[#c4bcb3] w-full h-[100%] px-5 py-10  ">
          <div className="flex gap-3 items-center">
            <h1 className="font-Canopee text-2xl font-semibold">
              MIRANDA&copy;
            </h1>
            <img
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/60474834660f934090d42877_stamp.png"
              alt="icon"
              className="h-[50px]"
            />
            <h2 className="font-Canopee text-xl font-semibold">LEGAL</h2>
          </div>
          <div>
            <ul className="flex items-center gap-4 font-CondMedium font-semibold text-xl">
              <li className="cursor-pointer">TWITTER</li>
              <li className="cursor-pointer">INSTAGRAM</li>
              <li className="cursor-pointer">DRIBBBLE</li>
              <li className="cursor-pointer">BEHANCE</li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
