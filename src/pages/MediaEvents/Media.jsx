import React from 'react';
import PageLayout from '/src/components/layout/PageLayout.jsx';
import { Newspaper, Video, MessageSquare, ExternalLink, Download, Share2 } from 'lucide-react';

const newsArticles = [];

const videos = [];

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
            <div className="bg-primary-light p-3 rounded-lg text-primary-brand flex-shrink-0">
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
          ) : (
            <div className="text-center p-12 bg-gray-50 border border-gray-100 rounded-2xl">
              <p className="text-secondary text-lg">No articles published yet. Stay tuned for press coverage.</p>
            </div>
          )}
        </section>

        {/* Video Highlights */}
        <section className="bg-sand p-12 rounded-2xl">
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
