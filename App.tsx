
import React, { useState } from 'react';
import { MAIN_ITINERARY, ALTERNATIVES, GOOGLE_MAPS_URL, GAS_STATIONS } from './constants';
import { Activity } from './types';

// Icons for categories
const CategoryIcon = ({ category }: { category: Activity['category'] }) => {
  switch (category) {
    case 'food': return <i className="fas fa-utensils text-orange-500"></i>;
    case 'view': return <i className="fas fa-camera text-blue-500"></i>;
    case 'activity': return <i className="fas fa-hiking text-green-500"></i>;
    case 'travel': return <i className="fas fa-car-side text-slate-500"></i>;
    default: return <i className="fas fa-map-marker-alt"></i>;
  }
};

const ItineraryCard: React.FC<{ item: Activity; isLast?: boolean }> = ({ item, isLast }) => {
  return (
    <div className="relative pl-10 pb-10">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-4 top-8 h-full w-0.5 bg-gradient-to-b from-indigo-500 to-indigo-100 flex items-center justify-center">
          {item.durationToNext && (
            <div className="absolute top-1/2 -translate-y-1/2 left-4 whitespace-nowrap bg-white border border-indigo-100 px-3 py-1 rounded-full shadow-sm text-xs font-bold text-indigo-500 flex items-center gap-1 z-20">
              <i className="fas fa-car-side text-[10px]"></i>
              {item.durationToNext}
            </div>
          )}
        </div>
      )}
      
      {/* Timeline Node */}
      <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-white border-4 border-indigo-500 shadow-md z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
      </div>

      <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-3">
             <span className="text-sm font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">
              {item.time}
            </span>
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              {item.location}
              <CategoryIcon category={item.category} />
            </h3>
          </div>
          <button 
            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location + ' 苗栗')}`, '_blank')}
            className="text-indigo-400 hover:text-indigo-600 text-xs font-medium flex items-center gap-1"
          >
            <i className="fas fa-location-arrow"></i>
            導航
          </button>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const AlternativeCard: React.FC<{ item: Activity }> = ({ item }) => {
  return (
    <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.time}</span>
        <CategoryIcon category={item.category} />
      </div>
      <h4 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{item.location}</h4>
      <p className="text-xs text-slate-500 mt-1">{item.description}</p>
    </div>
  );
};

export default function App() {
  const [showAlts, setShowAlts] = useState<boolean>(false);

  return (
    <div className="min-h-screen pb-20 bg-slate-50">
      {/* Header - 使用現代感漸層背景代替圖片 */}
      <header className="relative h-[400px] md:h-[450px] bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="max-w-5xl mx-auto w-full px-6 text-center z-10">
          <div className="inline-flex items-center gap-3 mb-6 animate-bounce">
             <span className="bg-indigo-500/20 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/20">
              2025.01.30 出發苗栗
             </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl">
            最愛說走就走😍
          </h1>
          <p className="text-indigo-300 text-lg md:text-xl font-medium tracking-[0.2em] uppercase opacity-70">
            Miaoli One Day Trip Planner
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 行程列表區 */}
          <div className="lg:col-span-7 space-y-6">
            <section className="bg-white rounded-[3rem] shadow-2xl p-6 md:p-10 border border-white">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                    <i className="fas fa-calendar-day"></i>
                  </div>
                  <span>1/30 行程表</span>
                </h2>
                <button 
                  onClick={() => window.print()}
                  className="hidden md:flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-2xl hover:bg-slate-200 transition-all text-sm font-bold"
                >
                  <i className="fas fa-print"></i>
                  列印行程
                </button>
              </div>

              <div className="flow-root">
                {MAIN_ITINERARY.map((item, index) => (
                  <ItineraryCard 
                    key={item.id} 
                    item={item} 
                    isLast={index === MAIN_ITINERARY.length - 1} 
                  />
                ))}
              </div>
            </section>
          </div>

          {/* 側邊資訊區 */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* 司機導航專區 */}
            <section className="bg-slate-900 rounded-[3rem] shadow-2xl p-8 text-white overflow-hidden relative border border-white/10">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-indigo-500 rounded-full blur-[80px] opacity-20"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white border border-white/10 shadow-lg shadow-indigo-500/20">
                  <i className="fas fa-route text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-wide">司機必備導航</h3>
                  <p className="text-sm text-slate-400 font-medium">點擊下方開啟完整路網</p>
                </div>
              </div>

              <div className="mb-8">
                <a 
                  href={GOOGLE_MAPS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 p-6 rounded-3xl transition-all group shadow-xl shadow-indigo-900/40"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <i className="fas fa-map-location-dot"></i>
                    </div>
                    <span className="font-bold text-lg">開啟 Google 導航圖</span>
                  </div>
                  <i className="fas fa-arrow-right text-white/50 group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>

              {/* 加油站區塊 */}
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-3 flex items-center gap-2">
                  <i className="fas fa-gas-pump text-indigo-400"></i>
                  路線經過 / 5分鐘內加油站
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {GAS_STATIONS.map((gas, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-default group">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform"></div>
                        <div>
                          <p className="text-sm font-bold text-slate-200">{gas.name}</p>
                          <p className="text-[10px] text-slate-500 mt-0.5">{gas.info}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-1 bg-indigo-500/10 rounded-lg text-indigo-400 border border-indigo-500/20">{gas.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 彈性備案點 */}
            <section className="bg-white rounded-[3rem] shadow-xl p-8 border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                   <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                     <i className="fas fa-lightbulb"></i>
                   </div>
                   靈活備案
                </h3>
                <button 
                  onClick={() => setShowAlts(!showAlts)}
                  className="text-xs font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl hover:bg-indigo-100"
                >
                  {showAlts ? '收合' : '展開全部'}
                </button>
              </div>
              
              <div className={`grid grid-cols-1 gap-4 transition-all duration-500 ${showAlts ? 'max-h-[1500px] opacity-100' : 'max-h-[300px] overflow-hidden opacity-100'}`}>
                {ALTERNATIVES.map((alt) => (
                  <AlternativeCard key={alt.id} item={alt} />
                ))}
              </div>
            </section>

            {/* 更新後的警告區塊 */}
            <section className="bg-rose-50 rounded-[3rem] p-8 border border-rose-100 shadow-xl shadow-rose-100/30">
              <h3 className="text-rose-900 font-black mb-6 flex items-center gap-3 text-lg">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-rose-500 shadow-sm">
                  <i className="fas fa-bullhorn"></i>
                </div>
                重要警告
              </h3>
              <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-inner">
                <p className="text-rose-600 text-2xl font-black text-center leading-relaxed animate-pulse">
                  請各位不要遲到真的:))
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                    <i className="fas fa-user-clock"></i>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                    <i className="fas fa-hand-holding-heart"></i>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-16 text-center border-t border-slate-200 bg-white">
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
          1/30 MIAOLI • BEST TRIP EVER
        </p>
        <div className="flex justify-center gap-4">
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
          <div className="w-2 h-2 bg-indigo-100 rounded-full"></div>
        </div>
      </footer>
    </div>
  );
}
