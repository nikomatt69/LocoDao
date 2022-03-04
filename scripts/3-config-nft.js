import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x787a7533994CF01F041258425435B82ac2f5321c",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "LocoDAO Member Card",
        description: "This NFT will give you access to LocoDAO!",
        image: readFileSync("scripts/assets/Freak o Punk #.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()