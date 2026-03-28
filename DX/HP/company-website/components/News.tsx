'use client';

import { useState } from 'react';

const tabs = ['すべて', 'お知らせ', '採用', '製品・サービス', 'プレスリリース'];

const newsData = {
  すべて: [
    {
      id: 1,
      date: '2026.03.20',
      category: 'お知らせ',
      title: '新オフィス移転のお知らせ',
    },
    {
      id: 2,
      date: '2026.03.15',
      category: '製品・サービス',
      title: '新サービス「Cloud Platform X」をリリースしました',
    },
    {
      id: 3,
      date: '2026.03.10',
      category: '採用',
      title: '2027年度 新卒採用を開始しました',
    },
    {
      id: 4,
      date: '2026.03.05',
      category: 'プレスリリース',
      title: 'A社との業務提携に関するお知らせ',
    },
  ],
  お知らせ: [
    {
      id: 1,
      date: '2026.03.20',
      category: 'お知らせ',
      title: '新オフィス移転のお知らせ',
    },
    {
      id: 2,
      date: '2026.02.28',
      category: 'お知らせ',
      title: 'ゴールデンウィーク休業のお知らせ',
    },
  ],
  採用: [
    {
      id: 1,
      date: '2026.03.10',
      category: '採用',
      title: '2027年度 新卒採用を開始しました',
    },
    {
      id: 2,
      date: '2026.02.20',
      category: '採用',
      title: 'エンジニア職（中途採用）募集のお知らせ',
    },
  ],
  '製品・サービス': [
    {
      id: 1,
      date: '2026.03.15',
      category: '製品・サービス',
      title: '新サービス「Cloud Platform X」をリリースしました',
    },
    {
      id: 2,
      date: '2026.02.10',
      category: '製品・サービス',
      title: 'AI分析ツール「DataInsight Pro」のアップデート',
    },
  ],
  プレスリリース: [
    {
      id: 1,
      date: '2026.03.05',
      category: 'プレスリリース',
      title: 'A社との業務提携に関するお知らせ',
    },
    {
      id: 2,
      date: '2026.01.25',
      category: 'プレスリリース',
      title: 'B社との資本業務提携契約締結に関するお知らせ',
    },
  ],
};

export default function News() {
  const [activeTab, setActiveTab] = useState('すべて');

  const currentNews = newsData[activeTab as keyof typeof newsData] || [];

  return (
    <section className="section-padding bg-white" id="news">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <p className="font-en text-sm text-primary font-semibold tracking-widest">
            NEWS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
            お知らせ
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-border pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-text-sub hover:text-text-main'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {currentNews.map((news) => (
            <a
              key={news.id}
              href="#"
              className="block p-6 bg-bg-light hover:bg-white border border-transparent hover:border-primary rounded-lg transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="font-en text-sm text-text-light">
                  {news.date}
                </span>
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs rounded-full w-fit">
                  {news.category}
                </span>
                <h3 className="text-text-main font-medium flex-1">
                  {news.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a href="#" className="btn btn-secondary">
            VIEW MORE
          </a>
        </div>
      </div>
    </section>
  );
}
