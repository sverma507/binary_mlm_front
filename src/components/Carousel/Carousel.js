import React from 'react';
import Slider from "react-slick"; // Install react-slick & slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <div className="relative overflow-hidden pt-20">
            <Slider {...settings} className="header-carousel">
                {/* Carousel Slide 1 */}
                <div className="header-carousel-item relative">
                    <img src={ require("./images/cursole-1.jpg")} alt="Carousel 1" className="object-cover w-full h-[700px]" />
                    <div className="absolute inset-0  flex items-center">
                        <div className="container-fluid mx-auto px-4 text-white">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className=' rounded-xl  grid place-items-center 0  '>
                                    <img className='w-[80%] border-2 border-white rounded-xl' src={require('./images/h1.jpeg')}/>
                                </div>
                                <div className="text-center md:mr-24 md:mt-24  md:text-right animate-fadeInLeft">
                                    <h4 className="   text-uppercase text-3xl text-yellow-300 font-bold mb-4">Welcome To U Tech International</h4>
                                    <h1 className="text-2xl font-bold uppercase text-white mb-4">Secure Your Future With Us.</h1>
                                    <p className="mb-5 text-lg">
                                    "Secure your financial success with strategic investments and exceptional returns."                                    </p>
                                    <div className="flex justify-center md:justify-end space-x-4 mb-4">
                                        <a href="#" className="btn bg-white text-black rounded-full py-3 px-5 flex items-center">
                                            <i className="fas fa-play-circle mr-2"></i> Watch Video
                                        </a>
                                        <a href="#" className="btn bg-primary text-white rounded-full py-3 px-5">Learn More</a>
                                    </div>
                                    <div className="flex justify-center md:justify-end items-center">
                                        <h2 className="text-white mr-2">Follow Us:</h2>
                                        <div className="flex space-x-2">
                                            <a href="#" className="btn bg-slate-600  text-white rounded-full h-14 w-14"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#" className="btn bg-slate-600  text-white rounded-full h-14 w-14"><i className="fab fa-twitter"></i></a>
                                            <a href="#" className="btn bg-slate-600 text-white rounded-full h-14 w-14"><i className="fab fa-instagram"></i></a>
                                            <a href="#" className="btn bg-slate-600 text-white rounded-full h-14 w-14"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Slide 2 */}
                <div className="header-carousel-item relative">
                    <img src={require("./images/cursole-2.jpg")} alt="Carousel 2" className="object-cover w-full h-[700px]" />
                    <div className="absolute inset-0  flex items-center">
                        <div className="container mx-auto px-4 text-white">
                            <div className="grid grid-cols-1">
                                <div className="text-center animate-fadeInUp">
                                    {/* <h4 className="text-green-500 text-uppercase font-bold mb-4">Welcome To U Tech International</h4> */}
                                    <h1 className="text-4xl font-bold uppercase text-white mb-4">Boost your earnings with superior returns on investment</h1>
                                    <p className="mb-5 text-lg">
                                    "Unlock your financial future with smart investments and exponential growth."
                                    </p>
                                    <div className="flex justify-center space-x-4 mb-4">
                                        <a href="#" className="btn bg-slate-600 text-black rounded-full py-3 px-5 flex items-center">
                                            <i className="fas fa-play-circle mr-2"></i> Watch Video
                                        </a>
                                        <a href="#" className="btn bg-primary text-white rounded-full py-3 px-5">Learn More</a>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <h2 className="text-white mr-2 font-bold">Follow Us:</h2>
                                        <div className="flex space-x-2">
                                            <a href="#" className="btn bg-slate-600 text-black rounded-full p-3 h-14 w-14"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#" className="btn bg-slate-600 text-black rounded-full p-3 h-14 w-14"><i className="fab fa-twitter"></i></a>
                                            <a href="#" className="btn bg-slate-600 text-black rounded-full p-3 h-14 w-14"><i className="fab fa-instagram"></i></a>
                                            <a href="#" className="btn bg-slate-600 text-black rounded-full p-3 h-14 w-14"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;



















