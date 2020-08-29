import React from "react";

const NewsData = () => {
  class NDetails {
    constructor(img, title, time) {
      this.img = img;
      this.title = title;
      this.time = time;
    }
  }

  const newsList = [
    new NDetails(
      "https://ichef.bbci.co.uk/news/320/cpsprodpb/FC99/production/_114156646_cccfa22c-f1ff-4eed-98e7-8367cd9515ff.jpg",
      "সাংবাদিক সাহিত্যিক রাহাত খানের মৃত্যু",
      "৫ ঘন্টা আগে"
    ),
    new NDetails(
      "https://ichef.bbci.co.uk/news/320/cpsprodpb/FC99/production/_114156646_cccfa22c-f1ff-4eed-98e7-8367cd9515ff.jpg",
      "'বন্ধুত্বের পর টাকা হাতিয়ে নিতো নাইজেরিয়ান প্রতারক চক্র'",
      "৪ ঘন্টা আগে"
    ),
    new NDetails(
      "https://ichef.bbci.co.uk/news/320/cpsprodpb/10C7E/production/_114043786_3f6d63dd-5d7d-45a8-b3b3-1f493df69533.jpg",
      "বেক্সিমকো-সেরাম চুক্তি, অক্সফোর্ড ভ্যাকসিন আসবে বাংলাদেশে",
      "৮ ঘন্টা আগে"
    ),
    new NDetails(
      "https://ichef.bbci.co.uk/news/320/cpsprodpb/366F/production/_114153931_5180951a-904d-4108-ad71-8c9981dba216.jpg",
      "এখনি স্কুল না খুলতে যেসব যুক্তি বিশেষজ্ঞদের",
      "২৮ অগাস্ট ২০২০"
    ),
    new NDetails(
      "https://ichef.bbci.co.uk/news/320/cpsprodpb/A5BA/production/_109562424_tiktok.png",
      "টিকটক কিনতে আমেরিকান কোম্পানিগুলোর দৌড়ঝাঁপ",
      "৯ ঘন্টা আগে"
    ),
    new NDetails(
      "https://ichef.bbci.co.uk/news/144/cpsprodpb/97A9/production/_114152883_mediaitem114152175.jpg",
      "অসুস্থতার কারণে পদত্যাগ করেছেন জাপানের প্রধানমন্ত্রী শিনজো আবে",
      "২৮ অগাস্ট ২০২০"
    ),
    new NDetails(
      "https://ichef.bbci.co.uk/news/320/cpsprodpb/69CC/production/_114148072_1cd22fab-1f1a-4e19-8a79-df9840739f29.jpg",
      "এই কৃষ্ণাঙ্গ তরুণকে চিড়িয়াখানার খাঁচায় আটকে রাখা হয়েছিল",
      "২৮ অগাস্ট ২০২০"
    ),
    new NDetails(
      "https://ichef.bbci.co.uk/news/320/cpsprodpb/1CE3/production/_106059370__106055645_gettyimages-1131111788.jpg",
      "'৫১ জনকে হত্যার পরও একজন বেঁচে থাকার সুযোগ পাওয়ায় আমরা মনক্ষুণ্ন'",
      "২৭ অগাস্ট ২০২০"
    ),
  ];

  return newsList;
};

export default NewsData;
