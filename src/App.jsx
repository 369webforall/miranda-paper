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
      </div>
    </>
  );
};

export default App;
