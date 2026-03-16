import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import './App.css';

const App: React.FC = () => {
  const [lanterns, setLanterns] = useState<number[]>([]);

  // Generate random lanterns on mount
  useEffect(() => {
    const initialLanterns = Array.from({ length: 15 }, (_, i) => i);
    setLanterns(initialLanterns);
  }, []);

  const photos = Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`);

  return (
    <div className="night-container">
      {/* Background Lanterns */}
      <div className="lantern-container">
        {lanterns.map((id) => (
          <div
            key={id}
            className="lantern"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 10}s`,
              width: `${20 + Math.random() * 20}px`,
              height: `${30 + Math.random() * 30}px`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="content-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="poem">
          众里寻他千百度，<br />
          蓦然回首，<br />
          那人却在，<br />
          灯火阑珊处。
        </div>
        
        <div className="wishes">
          <p>元宵节快乐，我的宝贝</p>
          <p>愿我们岁岁年年，长守此情</p>
        </div>
      </motion.div>

      {/* Polaroid Gallery */}
      <motion.div 
        className="gallery-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {photos.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="polaroid-card">
                <img src={src} alt={`Moment ${index + 1}`} />
                <div className="polaroid-caption">
                   Our Sweet Moment #{index + 1}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Analysis report link */}
      <a className="analysis-link" href="/analysis.html">📊 情感分析报告</a>
    </div>
  );
};

export default App;
