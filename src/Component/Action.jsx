import React from "react";
import faceLess from "../assets/Action/faceLess.jpg";
import faceLessV1 from "../assets/Action/faceLessV1.jpg";
import Avatar from "../assets/Action/Avatar.jpg";
import aiEditor from "../assets/Action/aiEditor.jpg";
import avatar2 from "../assets/Action/avatar2.jpg";
import videoEditor from "../assets/Action/videoEditor.jpg";
import { ChevronRight } from "lucide-react";

const Action = () => {
  const items = [
    {
      src: faceLess,
      tag: "Faceless V2",
      title: "Faceless V2 – Template-Based",
      desc: "Quick videos using layouts.",
    },
    {
      src: Avatar,
      tag: "Avatar",
      title: "AI Avatar Videos",
      desc: "Realistic talking AI avatars.",
    },
    {
      src: aiEditor,
      tag: "AI Editor",
      title: "Faceless V1 – Script-to-Video AI",
      desc: "From text to faceless video.",
    },
    {
      src: videoEditor,
      tag: "Video Editor",
      title: "Advanced Video Editor",
      desc: "Edit fast with AI tools.",
    },
    {
      src: avatar2,
      tag: "Avatar",
      title: "AI Avatar Videos",
      desc: "Realistic talking AI avatars.",
    },
    {
      src: faceLessV1,
      tag: "Faceless V1",
      title: "Advanced Video Editor",
      desc: "Sync, animate, and edit.",
      arrow: true,
    },
  ];

  const sharedBoxStyle =
    "relative rounded-xl overflow-hidden group shadow-md";

  return (
    <section className="w-full bg-white pt-10 px-4">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            See our <span className="text-purple-500">AI in action</span>
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Create stunning videos within no time
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-4 ">
          {/* Left large card */}
          <div className={`${sharedBoxStyle} row-span-2`}>
            <img
              src={faceLess}
              alt="Faceless V2"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              Faceless V2
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-base font-semibold">
                Faceless V2 – Template-Based
              </h3>
              <p className="text-sm text-purple-300">
                Quick videos using layouts.
              </p>
            </div>
          </div>

          {/* Center 2x2 grid */}
          <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {items.slice(1, 5).map((item, i) => (
              <div
                key={i}
                className={`${sharedBoxStyle} h-full`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute top-2 right-2 text-white text-xs px-3 py-1 rounded-full"
                  style={{
                    background:
                      item.tag === "Faceless V1"
                        ? "linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)"
                        : "#9333ea", // fallback purple-600
                  }}
                >
                  {item.tag}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm text-purple-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right large card with arrow */}
          <div className={`${sharedBoxStyle} row-span-2`}>
            <img
              src={faceLessV1}
              alt="Faceless V1"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute top-2 right-2 text-white text-xs px-3 py-1 rounded-full"
              style={{
                background:
                  "linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)",
              }}
            >
              Faceless V1
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-base font-semibold">Advanced Video Editor</h3>
              <p className="text-sm text-purple-300">
                Sync, animate, and edit.
              </p>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
              <ChevronRight className="text-purple-600" size={20} />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-4 mt-8">
          {items.map((item, i) => (
            <div key={i} className={sharedBoxStyle}>
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-2 right-2 text-white text-xs px-3 py-1 rounded-full"
                style={{
                  background:
                    item.tag === "Faceless V1"
                      ? "linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)"
                      : "#9333ea",
                }}
              >
                {item.tag}
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-purple-300">{item.desc}</p>
              </div>
              {item.arrow && (
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <ChevronRight className="text-purple-600" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Action;
