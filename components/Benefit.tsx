"use client";
import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="container" id="benefit">
      <h1
        className="flex justify-center text-2xl font-viga font-bold lg:text-3xl"
        style={{ color: "#231f20" }}
      >
        ❯ Benefit You Will Get ❮
      </h1>
      <p className="font-plus-jakarta-sans font-semibold text-center mb-12 mt-3 md:text-[20px] lg:hidden">
      ❮Swipe to change card❯
      </p>
      <div className="min-w-screen lg:hidden">
        <div className="flex flex-col items-center">
          <div className="w-64 carousel rounded-box shadow-2xl md:w-6/12">
            <div className="carousel-item w-full">
              <Card className="h-72 w-96 bg-white shadow-lg hover:shadow-xl rounded-lg">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <div>
                    <Image
                      src="/relation.png"
                      alt="relation"
                      className="w-12"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h1 className="text-white text-[23px] md:text-[24px] font-viga font-regular mt-2 mb-2">
                    RELATION
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="font-plus-jakarta-sans font-semibold text-center mt-3 md:mt-2 md:text-[20px]">
                    Expanding your network and building relationships with new
                    people can open up exciting opportunities for personal and
                    professional growth.
                  </p>
                </div>
              </Card>
            </div>
            <div className="carousel-item w-full">
              <Card className="h-72 w-96 bg-white shadow-lg hover:shadow-xl rounded-lg">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <div>
                    <Image
                      src="/certificate.png"
                      alt="certificate"
                      className="w-12"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h1 className="text-white text-[23px] md:text-[24px] font-viga font-regular mt-2 mb-2">
                    E-CERTIFICATE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="font-plus-jakarta-sans font-semibold text-center mt-10 md:mt-8 md:text-[20px]">
                    as recognition of your dedication and commitment to
                    learning.
                  </p>
                </div>
              </Card>
            </div>
            <div className="carousel-item w-full">
              <Card className="h-72 w-96 bg-white shadow-lg hover:shadow-xl rounded-lg">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <div>
                    <Image
                      src="/knowledge.png"
                      alt="knowledge"
                      className="w-12"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h1 className="text-white text-[23px] md:text-[24px] font-viga font-regular mt-2 mb-2">
                    KNOWLEDGE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="font-plus-jakarta-sans font-semibold text-center mt-8 md:text-[20px]">
                    Your knowledge and understanding of the subject matter
                    significantly expanded.
                  </p>
                </div>
              </Card>
            </div>
            <div className="carousel-item w-full">
              <Card className="h-72 w-96 bg-white shadow-lg hover:shadow-xl rounded-lg">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <div>
                    <Image
                      src="/practice.png"
                      alt="pactice"
                      className="w-12"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h1 className="text-white text-[23px] md:text-[24px] font-viga font-regular mt-2 mb-2">
                    PRACTICE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="font-plus-jakarta-sans font-semibold text-center mt-16 md:mt-14 md:text-[20px]">
                    Practice makes perfect.
                  </p>
                </div>
              </Card>
            </div>
            <div className="carousel-item w-full">
              <Card className="h-72 w-96 bg-white shadow-lg hover:shadow-xl rounded-lg">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <div>
                    <Image
                      src="/experience.png"
                      alt="experience"
                      className="w-12"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h1 className="text-white text-[23px] md:text-[24px] font-viga font-regular mt-2 mb-2">
                    EXPERIENCE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="font-plus-jakarta-sans font-semibold text-center mt-6 md:text-[20px]">
                    valuable experience that enhances your understanding of the
                    subject and fosters collaborative learning.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block mt-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between ">
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg  w-80 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <div>
                    <Image
                      src="/relation.png"
                      alt="relation"
                      className="w-12"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h1 className="text-white text-[24px] font-viga font-regular mt-2 mb-2">
                    RELATION
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="font-plus-jakarta-sans font-semibold text-center mt-3 text-[20px]">
                    Expanding your network and building relationships with new
                    people can open up exciting opportunities for personal and
                    professional growth.
                  </p>
                </div>
              </Card>
            </div>
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg w-80 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <div>
                    <Image
                      src="/certificate.png"
                      alt="certificate"
                      className="w-12"
                      height={50}
                      width={50}
                    />
                  </div>

                  <h1 className="text-white text-[24px] font-viga font-regular mt-2 mb-2">
                    E-CERTIFICATE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="font-plus-jakarta-sans font-semibold text-center mt-9 text-[20px]">
                    as recognition of your dedication and commitment to
                    learning.
                  </p>
                </div>
              </Card>
            </div>
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg w-80 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <div>
                    <Image
                      src="/knowledge.png"
                      alt="knowledge"
                      className="w-12"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h1 className="text-white text-[24px] font-viga font-regular mt-2 mb-2">
                    KNOWLEDGE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="font-plus-jakarta-sans font-semibold text-center mt-8 text-[20px]">
                    your knowledge and understanding of the subject matter
                    significantly expanded.
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <div className="flex flex-row justify-center px-28 gap-10">
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg w-80 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <div>
                    <Image
                      src="/practice.png"
                      alt="pactice"
                      className="w-12"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h1 className="text-white text-[24px] font-viga font-regular mt-2 mb-2">
                    PRACTICE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="font-plus-jakarta-sans font-semibold text-center mt-16 text-[20px]">
                    Practice makes perfect.
                  </p>
                </div>
              </Card>
            </div>
            <div className="m-4 max-w-sm">
              <Card className="bg-white shadow-lg hover:shadow-xl rounded-lg w-80 h-72">
                <CardHeader className="bg-red-700 p-4 flex-row gap-4 rounded-t-lg">
                  <div>
                    <Image
                      src="/experience.png"
                      alt="experience"
                      className="w-12"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h1 className="text-white text-[24px] font-viga font-regular mt-2 mb-2">
                    EXPERIENCE
                  </h1>
                </CardHeader>
                <div className="p-4">
                  <p className="font-plus-jakarta-sans font-semibold text-center mt-6 text-[20px]">
                    valuable experience that enhances your understanding of the
                    subject and fosters collaborative learning.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
