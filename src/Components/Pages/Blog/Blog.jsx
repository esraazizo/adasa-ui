import React, { useEffect, useState } from "react";
import data from "../../Data/posts.json";
import Posts from "../Posts/Posts";
import { useSearchParams } from "react-router";

function Blog() {
   const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get("category");
  const allPosts = data.posts;
  const allCategories = data.categories;
  const [selectCat, setSelectCat] = useState(urlCategory || null);
  const selectedCat = selectCat
    ? data.posts.filter((b) => b.category === selectCat)
    : data.posts;
 

  const getButtonClass = (categoryName) => {
    const baseClasses = "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:cursor-pointer";
    const isActive = selectCat === categoryName;

    return isActive 
      ? `${baseClasses} bg-orange-500 text-white` 
      : `${baseClasses} bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30`;
  };

 useEffect(() => {
    if (urlCategory) {
      setSelectCat(urlCategory);
    }
  }, [urlCategory]);

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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="border border-orange-400 bg-[#25160B] inline-flex items-center gap-2 mb-8 animate-fade-in p-4 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                <span className="text-sm font-medium text-neutral-300">
                  مدونتنا{" "}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                استكشف <span className="text-[#FA9C1E]">مقالاتنا</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="categories">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-80">
                <input
                  placeholder="ابحث في المقالات..."
                  className="input-dark w-full px-5 py-3 pr-12"
                  type="text"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setSelectCat(null)}
                  className={getButtonClass(null)}>
                
                  جميع المقالات
                </button>
                {allCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectCat(cat.name)}
                    className={getButtonClass(cat.name)}>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedCat.map((post) => (
              <Posts post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
