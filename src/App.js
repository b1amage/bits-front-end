import { Routes, Route } from "react-router-dom";
// import { Image } from "./components/utilities/image/Image";
// import { Text } from "./components/utilities/text/Text";
// import { Title } from "./components/utilities/text/Title";
// import onBoarding1 from "./assets/svg/onBoarding1.svg";
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            {/* <Image src={onBoarding1} alt={"undefined"} />{" "}
            <Title title={"What should I know about Blogie?"} />{" "}
            <Text
              text={
                "Blogie is an open platform where 170 million readers come to find insightful and dynamic thinking."
              }
            /> */}
          </div>
        }
      />
    </Routes>
  );
};

export default App;
