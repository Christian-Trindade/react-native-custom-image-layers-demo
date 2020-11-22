import React from "react";
import { SafeAreaView } from "react-native";

import CustomImageLayers from "react-native-custom-image-layers";

const App = () => {
  //example with external images, to use external images pass the prop externalPath
  const avatarSample = [
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/92763base2.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/73183cabelo1.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/31344sobrancelha1.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/66750olho1.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/79014nariz1.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/73470boca4.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/regata-bluish.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/24995calca-hot3.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/kik-red.png",
  ];

  //example with local image
  const shirtSample = [
    require("./src/samples/shirts/base.jpg"),
    // require("./src/samples/shirts/stamp1.png"),
    require("./src/samples/shirts/stamp2.png"),
  ];

  //example with local image
  const wallSample = [
    require("./src/samples/wall/base-wall.jpg"),
    require("./src/samples/wall/spray.png"),
  ];

  return (
    <>
      <SafeAreaView
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <CustomImageLayers
          layers={shirtSample}
          size={"full"}
          inverted={false}
          externalPath={false}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
