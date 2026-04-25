import React, { useState } from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Newspaper, Video, MessageSquare, ExternalLink, Download, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

import news1 from '/src/assets/news-1.jpeg';
import news2 from '/src/assets/news-2.jpeg';
import news3 from '/src/assets/news-3.jpeg';
import news4 from '/src/assets/news-4.jpeg';
import news5 from '/src/assets/news-5.jpeg';

const newsArticles = [
  {
    title: "Police Honour GWA for Stress Management Program",
    date: "April 2026",
    source: "Press Release",
    desc: "ACP Prachi Karne (ACP, Vikhroli Division) and Senior PI Santosh Ghatekar (Parksite Vikhroli Police Station) presented bouquets and certificates to the President, Chairman & Director of Ghatkopar Welfare Association along with the dedicated doctors of our Medical Unit, in appreciation for successfully organising a Stress Management Seminar for Parksite Police Station. A proud moment for the entire GWA family!",
    images: [news1, news2, news3, news4, news5]
  }
];

const videos = [];

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 group bg-gray-100">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-full object-cover transition-opacity duration-300" />

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-dark p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-dark p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all shadow-sm ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/60 hover:bg-white/80'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Media() {
  return (
    <PageLayout
      title="Media & Press"
      subtitle="Discover our latest news features, press releases, and multimedia content."
    >
      <div className="media-page space-y-12 py-12">
        {/* Newspaper Reports */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg text-primary-brand flex-shrink-0">
              <Newspaper size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">In the News</h2>
              <p className="text-secondary">Recent press coverage and articles about our initiatives.</p>
            </div>
          </div>

          {newsArticles.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {newsArticles.map((article, idx) => (
                <div key={idx} className="card-flat hover-up-small border-l-4 border-primary-brand p-8 flex flex-col">
                  {article.images && <ImageCarousel images={article.images} />}
                  <span className="text-sm font-bold text-primary-brand mb-2 block">{article.date} • {article.source}</span>
                  <h3 className="text-xl font-bold mb-4 leading-tight">{article.title}</h3>
                  <p className="text-secondary mb-6 flex-grow">{article.desc}</p>
                  {article.link && (
                    <a href={article.link} className="inline-flex items-center gap-2 text-primary-brand font-bold hover:underline mt-auto">
                      Read Article <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center p-12 bg-gray-50 border border-gray-100 rounded-2xl">
              <p className="text-secondary text-lg">No articles published yet. Stay tuned for press coverage.</p>
            </div>
          )}
        </section>

        {/* Video Highlights */}
        <section className="bg-sand p-12 rounded-2xl" style={{ marginTop: '2rem', borderRadius: '20px' }}>
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-white p-3 rounded-lg text-primary-brand shadow-sm flex-shrink-0">
              <Video size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Video Gallery</h2>
              <p className="text-secondary">Watch short clips and documentaries of our ground-level work.</p>
            </div>
          </div>

          {videos.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-10">
              {videos.map((vid, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                    <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 p-4 rounded-full text-primary-brand transform scale-75 group-hover:scale-100 transition-transform">
                        <Video size={32} fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {vid.duration}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-primary-brand transition-colors">{vid.title}</h4>
                  <p className="text-sm text-secondary">{vid.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center p-12 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="text-secondary text-lg">Video highlights coming soon. Please check back later.</p>
            </div>
          )}
        </section>
      </div>
    </PageLayout>
  );
}
