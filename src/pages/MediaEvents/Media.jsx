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
      <div className="media-page space-y-12 py-12">
        {/* Newspaper Reports */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary-light p-3 rounded-lg text-primary-brand">
              <Newspaper size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">In the News</h2>
              <p className="text-secondary">Recent press coverage and articles about our initiatives.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsArticles.map((article, idx) => (
              <div key={idx} className="card-flat hover-up-small border-l-4 border-primary-brand p-8">
                <span className="text-sm font-bold text-primary-brand mb-2 block">{article.date} • {article.source}</span>
                <h3 className="text-xl font-bold mb-4 leading-tight">{article.title}</h3>
                <p className="text-secondary mb-6">{article.desc}</p>
                <a href={article.link} className="inline-flex items-center gap-2 text-primary-brand font-bold hover:underline">
                  Read Article <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Video Highlights */}
        <section className="bg-sand p-12 rounded-2xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-white p-3 rounded-lg text-primary-brand shadow-sm">
              <Video size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Video Gallery</h2>
              <p className="text-secondary">Watch short clips and documentaries of our ground-level work.</p>
            </div>
          </div>

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
        </section>

        {/* Press Kit / Downloads */}
        <section className="bg-dark text-white p-12 rounded-2xl overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Press & Media Kit</h2>
              <p className="opacity-70 mb-0">Working on a story about Ghatkopar Welfare Association? Download our official logos, brand guidelines, and high-resolution images.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary bg-secondary-accent text-dark border-none hover:bg-white flex items-center gap-2">
                <Download size={18} /> Download Kit
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-white/10 flex items-center gap-2">
                <MessageSquare size={18} /> Media Inquiry
              </button>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-brand/20 rounded-full blur-3xl"></div>
        </section>
      </div>
    </PageLayout>
  );
}
