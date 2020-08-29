import React from "react";
import NewsBody from "./NewsBody/NewsBody";
import NewsData from "./NewsBody/NewsData";
import Category from "./BodyCategory/Category";
import BigNews from "./BigNews/BigNews";

const News = () => {
  const nData = NewsData();
  return (
    <div>
      <div className="flex justify-center flex-column-m">
        <div className="news_image self-center-m" style={{ width: "100%" }}>
          <img
            src="https://ichef.bbci.co.uk/news/800/cpsprodpb/6059/production/_114156642_e9b192cb-54c8-4b7c-a2ef-9fbab7e43792.jpg"
            alt="img"
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="news_header mt3-m ml4 gray"
          style={{ maxWidth: "780px" }}
        >
          <h3 className="" style={{ fontSize: "1.7rem", fontWeight: "700" }}>
            'দিল্লির দাঙ্গায় সামিল ছিল পুলিশও': অ্যামনেস্টি ইন্টারন্যাশনাল
          </h3>
          <p className="pt2 pr4" style={{ fontSize: "1.25rem" }}>
            ফেব্রুয়ারি মাসে দিল্লির উত্তর-পূর্বাঞ্চলে যে সাম্প্রদায়িক দাঙ্গা
            হয়েছিল, তাতে সেখানকার পুলিশও সামিল হয়েছিল বলে অভিযোগ করছে
            অ্যামনেস্টি ইন্টারন্যাশনাল।
          </p>
          <div className="">৬ ঘন্টা আগে</div>
          <hr />
          <h4 className="mb4">দাঙ্গার সময় যা দেখেছিলেন বিবিসি সংবাদদাতা</h4>
        </div>
      </div>
      {/* 1st news section */}
      <div className="flex flex-wrap justify-center">
        {nData.map((n, idx) => {
          return (
            <NewsBody
              img={n.img}
              title={n.title}
              time={n.time}
              key={idx}
            ></NewsBody>
          );
        })}
      </div>
      {/* corona section */}
      <Category nameCorona="করোনাভাইরাস"></Category>
      <div className="flex flex-wrap justify-center">
        {nData.map((n, idx) => {
          return (
            <NewsBody
              img={n.img}
              title={n.title}
              time={n.time}
              key={idx}
            ></NewsBody>
          );
        })}
      </div>
      {/* audio video */}
      <div>
        <Category nameCorona="অডিও ও ভিডিও"></Category>
        <BigNews
          img="https://ichef.bbci.co.uk/news/320/cpsprodpb/16FCB/production/_114155149_p08pwml9.jpg"
          title="লেবানন থেকে ফিরে আসতে কয়েক হাজার বাংলাদেশীর আকুতি"
          disp="গত কয়েকবছর ধরে লেবাননের আর্থ-সামাজিক পরিস্থিতি বেশ খারাপ। লেবাননে থাকা প্রায় দেড় লাখ বাংলাদেশী নাগরিকের অনেকেই অনিশ্চিত ও মানবেতর জীবনযাপন করছেন সেখানে।"
          time="২৮ অগাস্ট ২০২০"
        ></BigNews>
        <div className="flex flex-wrap justify-center">
          {nData.map((n, idx) => {
            return (
              <NewsBody
                img={n.img}
                title={n.title}
                time={n.time}
                key={idx}
              ></NewsBody>
            );
          })}
        </div>
      </div>
      {/* letter and motprokash section */}
      <div>
        <Category nameCorona="চিঠিপত্র ও মতামত"></Category>
        <BigNews
          img="https://ichef.bbci.co.uk/news/660/cpsprodpb/17C5F/production/_114157379_whatsubject.jpg"
          title="এডিটার'স মেইলবক্স: আমির খান এর এরদোয়ান বিতর্ক আর ভ্যাক্সিন নিয়ে প্রশ্ন"
          disp="করোনাভাইরাস মহামারি এখনো প্রভাব বিস্তার করছে, কিন্তু এর মধ্যে অভিনেতা আমির খানকে 'দেশদ্রোহী' আখ্যায়িত করে হিন্দুত্ববাদীদের প্রচারণা চলছে।"
          time="৮ ঘন্টা আগে"
        ></BigNews>
      </div>
      {/* bishes protibedon section */}
      <div>
        <Category nameCorona="চিঠিপত্র ও মতামত"></Category>
        <BigNews
          img="https://ichef.bbci.co.uk/news/320/cpsprodpb/BCBA/production/_113941384_gettyimages-1215009552.jpg"
          title="করোনাভাইরাস দীর্ঘমেয়াদে যে প্রভাব রেখে যাচ্ছে"
          disp="বাংলাদেশে কোভিড-১৯ এ আক্রান্ত তরুণ বা যুবকদেরও অনেকের শরীরে দীর্ঘ মেয়াদে নেতিবাচক প্রভাব দেখা যাচ্ছে। এই দীর্ঘস্থায়ী প্রভাব কাটিয়ে উঠার দিকে বাংলাদেশের চিকিৎসা ব্যবস্থায় কতটা নজর দেয়া হচ্ছে?"
          time="১৫ অগাস্ট ২০২০"
        ></BigNews>
      </div>
      {/* onnano section */}
      <div>
        <Category nameCorona="অন্যান্য খবর"></Category>
        <div className="flex flex-wrap justify-center">
          {nData.map((n, idx) => {
            return (
              <NewsBody
                img={n.img}
                title={n.title}
                time={n.time}
                key={idx}
              ></NewsBody>
            );
          })}
        </div>
      </div>
      {/* বিবিসি বাংলা জরিপ section */}
      <div>
        <Category nameCorona="বিবিসি বাংলা জরিপ"></Category>
        <BigNews
          img="https://ichef.bbci.co.uk/news/660/cpsprodpb/11DF3/production/_111330237_mujib.jpg"
          title="সর্বকালের সর্বশ্রেষ্ঠ বাঙালি: শ্রোতাদের ভোটে প্রথম কুড়িজন"
          disp="পনের বছর আগে বিবিসি বাংলার চালানো জরিপে শ্রোতারা নির্বাচন করেছিলেন কুড়িজন শ্রেষ্ঠ বাঙালিকে। কুড়ি জনের জীবন কথা রয়েছে এই লিংকে।"
          time="১৭ মার্চ ২০২০"
        ></BigNews>
      </div>
      {/* ফটো গ্যালারি section */}
      <div>
        <Category nameCorona="ফটো গ্যালারি"></Category>
        <BigNews
          img="https://ichef.bbci.co.uk/news/240/cpsprodpb/BF47/production/_113976984_2016.33b.jpg"
          title="আমেরিকায় মৃত্যুদণ্ডের আসামীর জীবনের শেষ আহার"
          disp="যুক্তরাষ্ট্রে প্রাণদণ্ড কার্যকর হওয়ার আগে দণ্ডিতরা শেষবারের মতো যে খাবার খেয়েছিলেন ফটোগ্রাফার জ্যাকি ব্ল্যাক সেই খাবারগুলো জোগাড় করে ছবি তুলেছেন।"
          time="১৮ অগাস্ট ২০২০"
        ></BigNews>
      </div>
      {/* বিবিসি একাডেমি section */}
      <div>
        <Category nameCorona="বিবিসি একাডেমি"></Category>
        <BigNews
          img="https://ichef.bbci.co.uk/news/320/cpsprodpb/176A1/production/_106750959_mediaitem106750958.jpg"
          title="আমেরিকায় মৃত্যুদণ্ডের আসামীর জীবনের শেষ আহার"
          disp=""
          time="১৬ মার্চ ২০১৭"
        ></BigNews>
      </div>
      {/* করোনাভাইরাস section */}
      <div>
        <Category nameCorona="করোনাভাইরাস"></Category>
        <BigNews
          img="https://ichef.bbci.co.uk/news/660/cpsprodpb/1566F/production/_111336678_coronavirus_index_main_976.jpg"
          title="বিবিসির ব্যাখ্যা ও বিশ্লেষণ"
          disp="করোনাভাইরাসের লক্ষণ, উপসর্গ, চিকিৎসা, কীভাবে ঠেকাবেন, কোথায় যাবেন, কতটা ভয়াবহ এবং বাংলাদেশ ও বিশ্ব পরিস্থিতি নিয়ে বিবিসি বাংলার ব্যাখ্যা বিশ্লেষণধর্মী ভিডিও ও প্রতিবেদন।"
          time="১৮ মার্চ ২০২০"
        ></BigNews>
      </div>
      {/* onnano section */}
      <div>
        <Category nameCorona="আর্কাইভ"></Category>
        <div className="flex flex-wrap justify-center">
          {nData.map((n, idx) => {
            return (
              <NewsBody
                img={n.img}
                title={n.title}
                time={n.time}
                key={idx}
              ></NewsBody>
            );
          })}
        </div>
      </div>
      {/* সর্বাধিক পঠিত Section */}
      <div className="">
        <Category nameCorona="সর্বাধিক পঠিত"></Category>
        <ol className="" style={{ fontSize: "1.5rem", lineHeight: "5rem" }}>
          <li>
            বেক্সিমকো-সেরাম চুক্তি, অক্সফোর্ডের ভ্যাকসিন সরবরাহ হবে বাংলাদেশে
          </li>
          <li>
            'দিল্লির দাঙ্গায় সামিল ছিল পুলিশও': অ্যামনেস্টি ইন্টারন্যাশনাল
          </li>
          <li>
            ফেসবুকে প্রতারণা: বন্ধুত্ব করার পর টাকা হাতিয়ে নিতো নাইজেরিয়ান
            চক্র
          </li>
          <li>চীনা ভ্যাকসিন: বাংলাদেশে ট্রায়াল কীভাবে হবে?</li>
          <li>
            আমেরিকায় যে কৃষ্ণাঙ্গ তরুণকে চিড়িয়াখানার খাঁচায় আটকে রাখা
            হয়েছিল
          </li>
        </ol>
      </div>
    </div>
  );
};

export default News;
