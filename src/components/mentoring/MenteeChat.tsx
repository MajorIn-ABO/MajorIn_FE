import { ReactComponent as SendIcon } from "../../assets/icon/send.svg";
import Gif from "../../assets/img/gif.gif";
import "../../styles/mentoring/MenteeChat.scss";
import { useState } from "react";
import axios from "axios";

interface ChatMessage {
  sender: "me" | "gpt";
  text: string;
  question: string;
  time: string;
}

const MenteeChat = () => {
  const [message, setMessage] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "me", text: message, time: currentTime, question: "" },
      ]);
      const userMessage = message;
      setMessage("");

      try {
        const storedAuth = localStorage.getItem("auth");
        const auth = storedAuth ? JSON.parse(storedAuth) : null;
        const accessToken = auth ? auth.access_token : null;
        const response = await axios.post(
          "http://3.35.123.253/api/mentorings/chat_with_gpt/",
          { message: userMessage },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          const replyTime = new Date().toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });

          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: "gpt",
              text: response.data.gpt_response,
              time: replyTime,
              question: response.data.question,
            },
          ]);
        } else {
          console.error("Server error:", response.statusText);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="chatting-container">
      <div className="chat-window">
        <div className="chat-message">
          {chatMessages.length === 0 ? (
            <div className="no-messages">
              <img src={Gif} alt="" />
              <h2>챗봇과 대화를 통해 나에게 필요한 멘토링을 추천받으세요.</h2>
              <h2>먼저 메시지를 보내면 챗봇과 대화가 시작됩니다.</h2>
            </div>
          ) : (
            chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.sender === "me" ? "my-message" : "gpt-message"
                }`}
              >
                {msg.sender === "me" ? (
                  <>
                    <span className="message-time">{msg.time}</span>
                    <p>{msg.text}</p>
                  </>
                ) : (
                  <>
                    <div>
                      <p>{msg.text}</p>
                      <p className="balloon">{msg.question}</p>
                    </div>
                    <span className="message-time">{msg.time}</span>
                  </>
                )}
              </div>
            ))
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="메시지를 입력해주세요."
            value={message}
            onChange={handleInputChange}
          />
          <SendIcon stroke="#1b1c3a" type="submit" />
        </form>
      </div>
      <div className="chat-list">
        <h1>💬 채팅 목록</h1>
      </div>
    </div>
  );
};

export default MenteeChat;
