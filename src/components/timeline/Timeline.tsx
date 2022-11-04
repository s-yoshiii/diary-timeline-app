import React, { FC } from "react";
import TimelineItem from "./TimelineItem";

const Timeline: FC = () => {
  return (
    <div className="timeline">
      <div className="timeline__inner">
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
      </div>
    </div>
  );
};

export default Timeline;
