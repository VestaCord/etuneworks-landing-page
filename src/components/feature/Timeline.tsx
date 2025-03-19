// components/Timeline.tsx
import React from 'react';

type ITimelineItem = {
  date: string;
  heading: string;
  description: string;
};

type ITimelineProps = {
  items: ITimelineItem[];
};

function Timeline(props: ITimelineProps) {
  return (
    <div className="relative w-4/5">
      {props.items.map((item, index) => (
        <div key={index} className="relative mb-8">
          <div className="absolute left-[43%] h-full w-1 -translate-x-1/2 bg-gray-600"></div>
          <div className="items-centerjustify-between flex">
            <div className="w-1/2 pr-4 text-right">
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
            <div className="w-2/3 pl-4">
              <div className="rounded-lg bg-gray-800 p-4 shadow-md hover:bg-gray-900">
                <h3 className="mb-2 text-lg font-semibold">{item.heading}</h3>
                <p className="text-md text-gray-300">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { type ITimelineItem, Timeline };
