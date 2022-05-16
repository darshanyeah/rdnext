import React, { useEffect, useRef, useState } from "react";
// 08:00:00 AM 16/05/2022
export const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function Test() {
  const typeRef = useRef(null);

  const [marginBottomTexts, setMarginBottomTexts] = useState(0);
  const [msg, setMsg] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setMarginBottomTexts(typeRef.current?.clientHeight);
  }, [msg]);

  useEffect(() => {
    if (data.length === 0) setData(initData);
  });

  const currentUser = "D";

  const initData = [
    {
      id: 1,
      user: "Bot",
      text: "Start Conversation here, i'll check it every-day you can type here anything it's secure for us and please change the status of message to readed for my information so i can understood that you have readed the message.",
      time: "08:00:00 AM 16/05/2022",
    },
  ];

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const currentTime = () => {
    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    const hours =
      today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    const isAM = today.getHours() > 12 ? "PM" : "AM";

    const time =
      hours + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + isAM;

    return time + " " + date;
  };

  const validate = () => {
    if (msg.length > 0 && currentUser.length > 0) return true;
    return false;
  };

  const submit = () => {
    const obj = {
      user: currentUser,
      text: msg,
      time: currentTime(),
    };
    if (validate()) console.log("_dp", obj);
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: marginBottomTexts,
        }}
      >
        {data.map((elem) =>
          elem.user !== currentUser ? (
            <div key={elem.id} className="right-cont">
              <div className="right-avatar">
                <h6>{elem.user}</h6>
              </div>
              <div className="right-text">
                <p>{elem.text}</p>
                <div className="right-time">{elem.time}</div>
              </div>
            </div>
          ) : (
            <div key={elem.id} className="left-cont">
              <div className="left-avatar">
                <h6>{elem.user}</h6>
              </div>
              <div className="left-text">
                <p>{elem.text}</p>
                <div className="right-time">{elem.time}</div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="type-text-cont" ref={typeRef}>
        <textarea
          className="type-text"
          placeholder="Type here :)"
          onChange={handleChange}
        />
        <button onClick={submit} className="type-text-btn">
          Send
        </button>
      </div>
    </div>
  );
}
