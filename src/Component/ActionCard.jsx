




import React from 'react';
import { ChevronRight } from 'lucide-react';

export const ActionCard = ({
  item,
  className = '',
  heightClass = 'h-[220px]',
  showArrow = false,
}) => {
  const { src, tag, title, desc, gradient } = item;

  return (
    <div
      className={`relative rounded-xl overflow-hidden group shadow-md ${className} ${heightClass}`}
    >
      <img
        src={src}
        alt={`${title} preview`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div
        className={`absolute top-2 right-2 text-white text-xs px-3 py-1 rounded-full ${
          gradient
            ? 'bg-gradient-to-r from-indigo-600 to-purple-500'
            : 'bg-purple-600'
        }`}
      >
        {tag}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />

      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-purple-200">{desc}</p>
      </div>

      {showArrow && (
        <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-105">
          <ChevronRight className="text-purple-600" size={20} />
        </div>
      )}
    </div>
  );
};

