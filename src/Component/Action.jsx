import React from 'react';
import { ActionCard } from './ActionCard';
import faceless from "../assets/faceless.jpg"
import faceless2 from "../assets/faceless2.jpg"
import avatar from "../assets/avatar.jpg"
import avatar2 from "../assets/avatar2.jpg"
import aieditor from "../assets/aieditor.jpg"
import video from "../assets/video.jpg"
const actions = [
  {
    src: faceless,
    tag: 'Faceless V2',
    title: 'Faceless V2 – Template-Based',
    desc: 'Quick videos using layouts',
  },
  {
    src: avatar,
    tag: 'Avatar',
    title: 'AI Avatar Videos',
    desc: 'Realistic talking AI avatars',
  },
  {
    src: aieditor,
    tag: 'AI Editor',
    title: 'Faceless V1 – Script-to-Video AI',
    desc: 'From text to faceless video',
  },
  {
    src: video,
    tag: 'Video Editor',
    title: 'Advanced Video Editor',
    desc: 'Edit fast with AI tools',
  },
  {
    src: avatar2,
    tag: 'Avatar',
    title: 'AI Presenter Tool',
    desc: 'Custom avatar presentations',
  },
  {
    src: faceless2,
    tag: 'Faceless V1',
    title: 'Enhanced AI Editor',
    desc: 'Sync, animate, and edit',
    gradient: true,
  },
];

const Action = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
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
            <ActionCard item={actions[0]} heightClass="h-full" />
          </div>

          {/* Center Grid */}
          <div className="col-span-6 grid grid-cols-2 grid-rows-2 gap-4">
            <ActionCard item={actions[1]} heightClass="h-full" />
            <ActionCard item={actions[2]} heightClass="h-full" />
            <ActionCard item={actions[3]} heightClass="h-full" />
            <ActionCard item={actions[4]} heightClass="h-full" />
          </div>

          {/* Right Tall Card */}
          <div className="col-span-3">
            <ActionCard item={actions[5]} heightClass="h-full" showArrow />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden px-2 grid grid-cols-1 gap-4">
          {actions.map((item, index) => (
            <ActionCard
              key={index}
              item={item}
              heightClass="h-[260px]"
              showArrow={index === actions.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Action;