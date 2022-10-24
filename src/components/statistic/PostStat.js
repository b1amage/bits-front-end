import React from "react";
import Image from "../utilities/image/Image";
import Text from "../utilities/text/Text";

const PostStat = ({ postType, src, alt, quantity, time, detail }) => {
  return (
    <div className="flex w-full gap-2 2xl:gap-12 items-center">
      {postType == null || postType === "post" ? (
        <>
          <Image src={src} alt={alt} imageClassName={``} className={`w-[3vw]`} />
          <Text
            children={quantity}
            className={`text-[10px] lg:text-xl xl:text-2xl leading-[24px] font-medium text-secondary-20 md:text-lg`}
          />
        </>
      ) : postType === "latest" ? (
          <Text
            children={time}
            className={`text-[10px] lg:text-xl xl:text-2xl leading-[24px] font-medium text-secondary-20 md:text-lg`}
          />
      ) : (
        <>
          <Text
            children={quantity}
            className={`text-[10px] lg:text-xl xl:text-2xl leading-[24px] font-medium text-secondary-20 md:text-lg`}
          />
          <Text
            children={detail}
            className={`text-[10px] lg:text-xl xl:text-2xl leading-[24px] font-medium text-secondary-20 md:text-lg`}
          />
        </>
      )}
    </div>
  );
};

export default PostStat;
