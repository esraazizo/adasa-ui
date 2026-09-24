import React from "react";
import Card from "../../Card/Card";
import data from "../../Data/posts.json";
import { Link } from "react-router";

function Home() {
  const allcategories = data.categories;
  const iconMap = {
    إضاءة: "fa-sun",
    بورتريه: "fa-user",
    "مناظر طبيعية": "fa-mountain",
    تقنيات: "fa-gear",
    معدات: "fa-camera",
    default: "fa-newspaper",
  };

  return (
    <>
      <div className="">
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"
            style={{ animationDelay: "-2s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="border border-orange-400 bg-[#25160B] inline-flex items-center gap-2 mb-8 animate-fade-in p-4 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                <span className="text-sm font-medium text-neutral-300">
                  مرحباً بك في عدسة
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                اكتشف <span className="text-[#FA9C1E]">فن</span>
                <br />
                التصوير الفوتوغرافي
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <a
                  className=" bg-orange-500 text-white p-4 border border-orange-400 rounded-full px-8  transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group transition-all ease-in-out duration-300"
                  href="/blog"
                  data-discover="true"
                >
                  <span>استكشف المقالات</span>
                  <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 p-4 border border-gray-400 bg-transparent rounded-full hover:bg-[#25160B] hover:border-orange-400 transition-all ease-in-out duration-300 "
                  href="/about"
                  data-discover="true"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>اعرف المزيد</span>
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div
                  className="bg-[#141414] border border-[#1E1E1D] rounded-2xl p-4 hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "0ms" }}
                >
                  <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                  <p className="text-2xl md:text-3xl font-bold text-orange-400">
                    +50
                  </p>
                  <p className="text-neutral-500 text-sm">مقالة</p>
                </div>
                <div
                  className="bg-[#141414] border border-[#1E1E1D] rounded-2xl p-4 hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "100ms" }}
                >
                  <i className="fa-solid fa-users text-2xl text-orange-500 mb-1" />
                  <p className="text-2xl md:text-3xl font-bold text-orange-400">
                    +10ألف
                  </p>
                  <p className="text-neutral-500 text-sm">قارئ</p>
                </div>
                <div
                  className="bg-[#141414] border border-[#1E1E1D] rounded-2xl p-4 hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "200ms" }}
                >
                  <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1" />
                  <p className="text-2xl md:text-3xl font-bold text-orange-400">
                    4
                  </p>
                  <p className="text-neutral-500 text-sm">تصنيفات</p>
                </div>
                <div
                  className="bg-[#141414] border border-[#1E1E1D] rounded-2xl p-4 hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "300ms" }}
                >
                  <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1" />
                  <p className="text-2xl md:text-3xl font-bold text-orange-400">
                    6
                  </p>
                  <p className="text-neutral-500 text-sm">كاتب</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0a0a0a] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 text-right">
              <div className="flex flex-col items-start justify-start">
                <span className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-orange-950/40 text-orange-400 border border-orange-900/50 rounded-full text-xs font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                  </span>
                  مميز
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-wide">
                  مقالات مختارة
                </h2>
                <p className="text-neutral-400 text-sm md:text-base font-light">
                  محتوى منتقى لبدء رحلة تعلمك
                </p>
              </div>
              <a
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#ED5E0E] text-white rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-600/10"
                href="/blog"
                data-discover="true"
              >
                <span>عرض الكل</span>
                {/* Arrow icon shifts pointing left for clean RTL context on hover */}
                <svg
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <Card />

        <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-orange-950/40 text-orange-400 border border-orange-900/50 rounded-full text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                التصنيفات
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-wide">
                استكشف حسب الموضوع
              </h2>
              <p className="text-neutral-400 text-sm md:text-base font-light">
                اعثر على محتوى مصمم حسب اهتماماتك
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {allcategories.map((cat) => {
                const categoryName = cat.name;
                const catCount = cat.count;
                const iconClass = iconMap[categoryName];
                return (
                  <Link
                    key={categoryName}
                    to={`/blog?category=${categoryName}`}
                    className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                        <i
                          className={`fa-solid ${iconClass} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}
                        />
                      </div>
                      <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                        {categoryName}
                      </h3>
                      <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                        {catCount} مقالة
                      </p>
                      <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                        <svg
                          className="w-4 h-4 text-white transform transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}

              {/* <a
                className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                href="/blog?category=إضاءة"
                data-discover="true"
                style={{ animationDelay: "0ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    <i className="fa-solid fa-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                    إضاءة
                  </h3>
                  <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    3 مقالة
                  </p>
                  <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-white rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
