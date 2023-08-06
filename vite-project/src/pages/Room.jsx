// import * as React from 'react';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import MyContext from "./../context";
export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function Room() {
  const { roomId } = useParams(); // const roomID = Math.floor(Math.random() * 100000 + 100000).toString();
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 1545157414;
    const serverSecret = "9cbbccd74a3fedb2c79d4c259da008c3";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "yash"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      // sharedLinks: [
      //   {
      //     name: "Personal link",
      //     url: contextData.url,
      //     // window.location.protocol +
      //     // "//" +
      //     // window.location.host +
      //     // window.location.pathname +
      //     // "?roomID=" +
      //     // roomID,
      //   },
      // ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}
