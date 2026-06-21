import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const About = () => {
  const images = [
    '/group.jpg',
    '/asking.jpg',
    '/fairway.jpg',
    '/teaching.jpg',
    '/work.jpg'
  ]

  const stats = [
    { label: 'Experience', value: '1+ Years' },
    { label: 'Projects Built', value: '10+' },
    { label: 'Passion', value: '100%' }
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 px-4 md:px-8 transition-colors duration-300">
      {/* Image Carousel Side */}
      <div className="relative group">
        {/* Swiper Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(79,70,229,0.3)] dark:shadow-[0_0_40px_rgba(99,102,241,0.2)] border border-neutral-200 dark:border-indigo-500/30 transition-all duration-500 hover:shadow-indigo-500/50 h-[450px] w-full bg-white dark:bg-neutral-900">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            loop={true}
            speed={800}
            effect="slide"
            className="w-full h-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 pointer-events-none" />

          {/* Text Inside Image Card */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-30 pointer-events-none">
            <h3 className="text-2xl font-black tracking-wider uppercase mb-1">
              Aung Khant Nyar
            </h3>
            <p className="text-indigo-400 font-medium text-sm tracking-wide">
              Images of Memories Passing By
            </p>
          </div>

          {/* Navigation Arrows */}
          <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-40 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white border border-white/30">
            <ChevronLeft size={14} />
          </button>
          <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-40 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white border border-white/30">
            <ChevronRight size={14} />
          </button>

          {/* Pagination Dots */}
          <div className="swiper-pagination absolute bottom-4 right-8 z-40 !bottom-auto !top-6 !right-8 !left-auto" />
        </div>
      </div>

      {/* Text Content Side */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
             <br />
            <span className="text-indigo-600 dark:text-cyan-400">Who I Am?</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-200 font-light leading-relaxed">
            I am juggling three worlds. By day, I study Chemistry (B.Sc.) at Dagon University, and by night, I dive into Full-stack Web Development and prepare for the ITPEC Fundamental IT Engineer (FE) exam. Balancing academic studies, intensive coding can be stressful, but I genuinely enjoy my life with friends.I am deeply focused on effective communication ensuring that I can clearly share technical ideas and collaborate well with others.For me, it's all about challenge, leveling up my skills, and building  my future to be better.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 pt-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`pl-4 ${index !== 0 ? 'border-l border-neutral-200 dark:border-neutral-800' : ''}`}
            >
              <div className="text-2xl font-bold text-indigo-600 dark:text-cyan-400">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-300 font-semibold mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
