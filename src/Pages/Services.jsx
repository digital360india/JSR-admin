import React, { useEffect, useState } from "react";
import Service from "../Components/Service";
import Navbar from "../Components/Navbar";
import FooterNav from "../Components/FooterNav";

import { RiFileAddFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../released.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";

const Services = () => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  async function get() {
    try {
      const { data } = await axios.get("https://jsr-backend-x7rr.onrender.com/Banner/services");
      console.log(data);
      setBanner(data.img);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    get();
  }, []);
  async function handle(index) {
   banner.img.splice(index, 1);
    try {
      const res=await axios.delete("https://jsr-backend-x7rr.onrender.com/Banner/services", {
        data: banner,
        
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  // console.log(banner);
  return (
    <>
      <div className="fixed top-[320px] lg:top-[260px] right-0 h-72 w-10 items-center flex flex-col gap-10 justify-center bg-gray-600 opacity-75 z-20 rounded-tl-md rounded-bl-md    ">
        <a href="https://www.facebook.com/JSRProductionhouse" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
            alt=""
            className="w-7 h-7 hover:scale-125 duration-200"
          />
        </a>
        <a
          href="https://www.instagram.com/jsrproductionhouse/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
            alt=""
            className="w-7 h-7 hover:scale-125  duration-200"
          />
        </a>
        <a
          href="https://www.youtube.com/@jsrproductionhouse9127"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt=""
            className="w-7 h-7 hover:scale-125  duration-200"
          />
        </a>
        <a href="https://twitter.com/house_jsr?lang=en">
          {/* <BsTwitter className="w-8 h-8 text-blue-500 hover:scale-125  duration-200" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 512 512"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </a>
      </div>
      <div className="">
        <div className="bg-transparent absolute  inset-1">
          <Link
            to={`/Banner/services`}
            className=" flex justify-center relative z-50 bg-black "
          >
            <RiFileAddFill size={38} color="blue" />
          </Link>

          <Navbar
            navBgColor={"bg-white"}
            absolute={" absolute "}
            bar={"text-white"}
          />
          <div className="flex justify-center relative top-[-15%] z-50 items-center">
            <h1 className="text-7xl text-white tracking-wider absolute top-44 lg:top-52">
              SERVICES
            </h1>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper hidden lg:flex "
        >
              <>
                <SwiperSlide className=" relative z-50">
                  <div className=" w-full ">
                    <img
                      src={banner}
                      // src="https://pelicula.qodeinteractive.com/wp-content/uploads/2020/03/h4-title-image.jpg"
                      alt=""
                      className="h-[400px] lg:h-[500px] w-full object-cover"
                    />
                    {/* <button
                      className=" bottom-5 absolute  left-[47%] cursor-pointer   bg-red-800 text-black text-2xl p-4 "
                      onClick={() => handle(index)}
                    >
                      Delete
                    </button> */}
                  </div>
                </SwiperSlide>
              </>
          not working
        </Swiper>
        <img
          src="https://res.cloudinary.com/djb3n17c0/image/upload/v1691131047/EXTRA._gumksl.png"
          alt=""
          className="lg:hidden h-[400px] lg:h-[500px] w-full object-cover"
        />
      </div>

      <div className="bg-black ">
        <ul className="flex flex-col  items-center w-full  px-4 lg:px-12 py-0 lg:py-20">
          {/* <li className=" lg:border-l-[2px] border-gray-100 opacity-10 h-full absolute z-1  left-4 lg:left-20"></li>
          <li className="lg:border-l-[2px] border-gray-100 opacity-10 left-[50%] h-full absolute z-1"></li>
          <li className="lg:border-l-[2px] border-gray-100 opacity-10 h-full absolute z-1 right-4 lg:right-20"></li> */}
          <Service />
        </ul>
      </div>
      <FooterNav />
    </>
  );
};

export default Services;
