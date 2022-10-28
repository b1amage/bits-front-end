import React from "react";
import Image from "../utilities/image/Image";
import Text from "../utilities/text/Text";

const PostStat = ({ postType, src, alt, quantity, time, detail }) => {
  return (
    <div className="flex gap-1 2xl:gap-5 items-center">
      {postType == null || postType === "post" ? (
        <>
          <Image src={src} alt={alt} imageClassName={``} className={`w-[3vw] xl:w-[2vw]`} />
          <Text
            children={quantity}
            className={`!text-[10px] sm:!text-base md:!text-lg 2xl:!text-2xl leading-[24px] font-medium text-secondary-20`}
          />
        </>
      ) : postType === "latest" ? (
          <Text
            children={time}
            className={`!text-[10px] sm:!text-base md:!text-lg 2xl:!text-2xl leading-[24px] font-medium text-secondary-20`}
          />
      ) : (
        <>
          <Text
            children={quantity}
            className={`!text-[10px] sm:!text-base md:!text-lg 2xl:!text-2xl leading-[24px] font-medium text-secondary-20`}
          />
          <Text
            children={detail}
            className={`!text-[10px] sm:!text-base md:!text-lg 2xl:!text-2xl leading-[24px] font-medium text-secondary-20`}
          />
        </>
      )}
    </div>
  );
};

export default PostStat;
