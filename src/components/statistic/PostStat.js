import Image from "components/utilities/image/Image";
import Text from "components/utilities/text/Text";

const PostStat = ({ src, alt, quantity }) => {
  return (
    <div className="flex items-center gap-4 2xl:gap-8">
      <>
        <Image
          src={src}
          alt={alt}
          imageClassName={``}
          className={`w-[2vw]`}
        />
        <Text
          children={quantity}
          className={`!text-[10px] sm:!text-base md:!text-lg 2xl:!text-2xl leading-[24px] font-medium text-secondary-20`}
        />
      </>
    </div>
  );
};

export default PostStat;
