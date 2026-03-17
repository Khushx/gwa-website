import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Newspaper, Video, MessageSquare, ExternalLink, Download, Share2 } from 'lucide-react';

const newsArticles = [
  {
    title: "Ghatkopar Welfare Association's Initiative for Cleanliness",
    source: "Mumbai Mirror",
    date: "Dec 15, 2025",
    link: "#",
    desc: "A detailed report on the recent community-led cleanliness drive organized across Ghatkopar West."
  },
  {
    title: "Food Security Drive Reaches 500+ Families",
    source: "Mid-Day",
    date: "Jan 10, 2026",
    link: "#",
    desc: "GWA's monthly food distribution program garners appreciation from local civic bodies."
  },
  {
    title: "Empowering Women through Vocational Training",
    source: "Hindustan Times",
    date: "Feb 05, 2026",
    link: "#",
    desc: "Feature on our latest workshop focused on financial literacy and small business skills for women."
  }
];

const videos = [
  {
    title: "GWA Foundation Day Highlights",
    thumbnail: "/images/WhatsApp Image 2026-03-07 at 03.41.19.jpeg",
    duration: "4:20",
    date: "Nov 2025"
  },
  {
    title: "Community Outreach: A Day in the Life",
    thumbnail: "/images/WhatsApp Image 2026-03-07 at 03.41.20.jpeg",
    duration: "6:15",
    date: "Jan 2026"
  }
];

export default function Media() {
  return (
    <PageLayout 
      title="Media & Press" 
      subtitle="Discover our latest news features, press releases, and multimedia content."
    >
      <div className="media-page space-y-12">
        {/* Newspaper Reports */}
        <section className="mb-huge">
          <div className="flex align-center gap-small mb-large">
            <div className="bg-primary-light p-4 rounded-xl text-primary-brand">
              <Newspaper size={32} />
            </div>
            <div>
              <h2 className="m-0 mb-1">In the News</h2>
              <p className="text-secondary m-0">Recent press coverage and articles about our initiatives.</p>
            </div>
          </div>

          <div className="grid-3 mb-large">
            {newsArticles.map((article, idx) => (
              <div key={idx} className="card-flat hover-up-small border-l-4 border-primary-brand p-8 bg-sand/30 card-hover-up">
                <span className="text-xs font-bold text-primary-brand mb-2 block uppercase tracking-wider">{article.date} • {article.source}</span>
                <h3 className="text-xl font-bold mb-4 leading-tight">{article.title}</h3>
                <p className="text-sm text-secondary mb-6 leading-relaxed">{article.desc}</p>
                <a href={article.link} className="inline-flex items-center gap-2 text-primary-brand font-bold text-sm hover:underline group">
                  Read Article <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Video Highlights */}
        <section className="bg-sand p-12 rounded-2xl mb-huge">
          <div className="flex align-center gap-small mb-large">
            <div className="bg-white p-4 rounded-xl text-primary-brand shadow-sm">
              <Video size={32} />
            </div>
            <div>
              <h2 className="m-0 mb-1">Video Gallery</h2>
              <p className="text-secondary m-0">Watch short clips and documentaries of our ground-level work.</p>
            </div>
          </div>

          <div className="grid-2">
            {videos.map((vid, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 shadow-lg">
                  <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white p-5 rounded-full text-primary-brand transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl">
                      <Video size={32} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm font-bold">
                    {vid.duration}
                  </div>
                </div>
                <h4 className="text-xl font-bold group-hover:text-primary-brand transition-colors mb-1">{vid.title}</h4>
                <p className="text-sm text-secondary m-0 font-medium">{vid.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Press Kit / Downloads */}
        <section className="bg-dark text-white p-12 rounded-2xl overflow-hidden relative mb-large">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
            <div className="max-w-xl">
              <h1 className="text-white text-4xl mb-4">Press & Media Kit</h1>
              <p className="text-white opacity-70 mb-0 text-lg leading-relaxed">Working on a story about Ghatkopar Welfare Association? Download our official logos, brand guidelines, and high-resolution images.</p>
            </div>
            <div className="flex flex-wrap gap-normal">
              <button className="btn btn-accent px-8">
                <Download size={20} /> Download Kit
              </button>
              <button className="btn btn-outline border-white text-white hover-bg-white hover-text-dark px-8">
                <MessageSquare size={20} /> Media Inquiry
              </button>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary-brand/20 rounded-full blur-3xl"></div>
        </section>
      </div>
    </PageLayout>
  );
;
}
