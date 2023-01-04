import Image from "components/utilities/image/Image";
import background from "assets/svg/parallelogram.svg";
import Title from "components/utilities/text/Title";
import Text from "components/utilities/text/Text";

const Avatar = ({ avatar, username, biography }) => {
  return (
    <div>
      <div className={`relative`}>
        <Image
          src={background}
          alt={"background"}
          imageClassName={``}
          className={``}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[32vw] h-[32vw] 2xl:!w-[14vw] 2xl:!h-[14vw] sm:!w-[28vw] sm:!h-[28vw] flex p-4">
          <Image
            src={avatar}
            alt={"avatar"}
            imageClassName={``}
            className={`bg-teriary-purple-100 !rounded-full`}
          />
        </div>
      </div>
      <Title
        children={username}
        className={`text-center text-lg md:!text-2xl lg:!text-3xl 2xl:!text-4xl py-4`}
      />
      <Text children={biography} className={`text-center`} />
    </div>
  );
};

export default Avatar;
