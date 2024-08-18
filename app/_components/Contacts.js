"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme, useMediaQuery } from "@mui/material";

import leftArrow from "@/public/leftArrow.svg";
import headerBack from "@/public/header back.svg";

const Contacts = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    message: "",
  });
  const [error, setError] = useState("");
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/sendWhatsAppMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setError("Sent Successfully!");
    } else {
      <div>Failed</div>;
    }
  };

  return (
    <div
      className="relative flex almarai flex-col text-right items-center justify-center gap-4 p-0 sm:p-12 sm:pt-0 pt-0 bg-[#FCFCFC]"
      style={{ direction: "rtl" }}
    >
      <div className="flex flex-col p-11 gap-6 w-full sm:w-fit bg-white">
        <h1 className="text-text1 almarai-extrabold text-3xl">تواصل معنا</h1>
        <p className="text-text2 font-normal text-sm">
          يرجى ترك معلوماتك لنا، حتى نتمكن من بدء محادثتنا لتزويدك بمزيد من
          المعلومات
        </p>
        <div className="max-w-4xl text-center flex flex-col items-center justify-center">
          <form className="flex flex-col items-start" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 p-6 items-center justify-center w-[800px]">
              <div className="flex flex-col sm:flex-row gap-[18px] items-center justify-center w-full">
                <input
                  type="text"
                  name="fullName"
                  placeholder="أدخل الاسم الكامل"
                  className="bg-[#FBFBFB] border-[#BBC1CE] focus:border-gold border-2 focus:outline-none  rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-[38%] sm:w-full h-12"
                  onChange={handleChange}
                  value={formData.fullName}
                  required
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="رقم الهاتف"
                  className="bg-[#FBFBFB] border-[#BBC1CE] focus:border-gold border-2 focus:outline-none  rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-[38%] sm:w-full h-12"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-[18px] items-center justify-center w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الالكتروني"
                  className="bg-[#FBFBFB] border-[#BBC1CE] focus:border-gold border-2 focus:outline-none  rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-[38%] sm:w-full h-12"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="اسم الشركة"
                  className="bg-[#FBFBFB] border-[#BBC1CE] focus:border-gold border-2 focus:outline-none  rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-[38%] sm:w-full h-12"
                  onChange={handleChange}
                  value={formData.companyName}
                />
              </div>
              <textarea
                name="message"
                className="bg-[#FBFBFB] border-[#BBC1CE]  focus:border-gold border-2 focus:outline-none resize-none rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-[38%] sm:w-full h-48"
                rows={30}
                cols={20}
                placeholder="اترك رسالتك"
                onChange={handleChange}
                value={formData.message}
              />
            </div>
            <div className="flex justify-center sm:justify-start items-center my-6 w-full">
              <button
                type="submit"
                className="flex justify-center items-center text-center bg-gold rounded-3xl text-white px-8 py-3 my-2 text-xl font-almarai almarai-extrabold w-40 gap-[10px]"
              >
                ارسال
                <div className="flex justify-center items-center h-full">
                  <Image
                    className="pt-2 mx-2"
                    src={leftArrow}
                    alt="Arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Image
        src={headerBack}
        alt="Header Back"
        className="absolute -top-[14px] sm:-top-9 right-1/6"
      />
    </div>
  );
};

export default Contacts;
