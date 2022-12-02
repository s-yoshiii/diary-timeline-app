import React, { FC } from "react";

const TimelineItem: FC = () => {
  return (
    <div className="timeline__item">
      <time className="timeline__date" dateTime="2018-07-07">
        2018/07/07
      </time>
      <div className="timeline__itemInner">
        <div className="timeline__photo">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="timeline__txtArea">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
