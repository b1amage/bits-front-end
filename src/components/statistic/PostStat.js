import React from "react";
import Image from "../utilities/image/Image";
import Text from "../utilities/text/Text";

const PostStat = ({ postType, src, alt, quantity, time, detail }) => {
  return (
    <div className="flex w-full gap-2 2xl:gap-12 items-center">
      {postType == null || postType === "post" ? (
        <>
          <Image src={src} alt={alt} imageClassName={``} className={`w-1/5`} />
          <Text
            children={quantity}
            className={`text-xs lg:text-xl xl:text-2xl leading-[24px] font-medium text-secondary-20 md:text-lg 2xl:!text-5xl`}
          />
        </>
      ) : postType === "latest" ? (
          <Text
            children={time}
            className={`text-xs lg:text-xl xl:text-2xl leading-[24px] font-medium text-secondary-20 md:text-lg 2xl:!text-5xl`}
          />
      ) : (
        <>
          <Text
            children={quantity}
            className={`text-xs lg:text-xl xl:text-2xl leading-[24px] font-medium text-secondary-20 md:text-lg 2xl:!text-5xl`}
          />
          <Text
            children={detail}
            className={`text-xs lg:text-xl xl:text-2xl leading-[24px] font-medium text-secondary-20 md:text-lg 2xl:!text-5xl`}
          />
        </>
      )}
    </div>
  );
};

export default PostStat;
