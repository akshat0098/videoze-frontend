import React from "react";
import { ActionCard } from "./ActionCard";
import aiEditor from "../assets/Action/aiEditor.jpg";
import avatar2 from "../assets/Action/avatar2.jpg";
import Avatar from "../assets/Action/Avatar.jpg";
import facelessV1 from "../assets/Action/faceLessv1.jpg";
import faceLess from "../assets/Action/faceLess.jpg";
import videoEditor from "../assets/Action/videoEditor.jpg";

const actions = [
  {
    src: faceLess,
    tag: "Faceless V2",
    title: "Faceless V2 – Template-Based",
    desc: "Quick videos using layouts",
  },
  {
    src: Avatar,
    tag: "Avatar",
    title: "AI Avatar Videos",
    desc: "Realistic talking AI avatars",
  },
  {
    src: aiEditor,
    tag: "AI Editor",
    title: "Faceless V1 – Script-to-Video AI",
    desc: "From text to faceless video",
  },
  {
    src: videoEditor,
    tag: "Video Editor",
    title: "Advanced Video Editor",
    desc: "Edit fast with AI tools",
  },
  {
    src: avatar2,
    tag: "Avatar",
    title: "AI Avatar Videos",
    desc: "Realistic talking AI avatars",
  },
  {
    src: facelessV1,
    tag: "Faceless V1",
    title: "Advanced Video Editor",
    desc: "Sync, animate, and edit",
    gradient: true,
  },
];

const Action = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            See our AI <span className="text-purple-500">in action</span>
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Create stunning videos within no time
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-4 h-[560px]">
          {/* Left Tall Card */}
          <div className="col-span-3">
            <ActionCard item={actions[0]} heightClass="h-[560px]" />
          </div>

          {/* Center Grid */}
          <div className="col-span-6 grid grid-cols-2 gap-4">
            {/* First Row */}
            <div>
              <ActionCard
                item={actions[1]}
                heightClass="h-[280px] aspect-square"
              />
            </div>
            <div className="-ml-8">
              {" "}
              <ActionCard item={actions[2]} heightClass="h-[280px]" />
            </div>

            {/* Second Row */}
            <div className="-mr-12">
              {" "}
              <ActionCard item={actions[3]} heightClass="h-[260px] w-full" />
            </div>

            <div className="ml-12">
              <ActionCard
                item={actions[4]}
                heightClass="h-[260px] aspect-square"
              />
            </div>
          </div>

          {/* Right Tall Card */}
          <div className="col-span-3">
            <ActionCard item={actions[5]} heightClass="h-[560px]" showArrow />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden grid grid-cols-1 gap-2">
          {actions.map((item, index) => (
            <ActionCard
              key={index}
              item={item}
              heightClass="h-[260px]"
              showArrow={index === 5}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Action;
