import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ 加這行

  const handleLogin = () => {
    if (!account || !password) {
      alert("請輸入帳號與密碼");
      return;
    }
    alert(`登入帳號：${account}`);

    // ✅ 登入成功後跳轉到 persona 頁
    navigate("/persona");
  };

  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-center">
      <div className="w-[360px] p-5 text-center">
        <img
          src="https://imgur.com/dvAwnNc.png"
          alt="食食在 Logo"
          className="w-[120px] mx-auto mb-10"
        />

        <div className="mb-5 text-left">
          <label htmlFor="account" className="text-sm block mb-1">
            帳號
          </label>
          <input
            type="text"
            id="account"
            placeholder="手機 / 信箱"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-[#ffd9d6] text-base outline-none"
          />
        </div>

        <div className="mb-5 text-left">
          <label htmlFor="password" className="text-sm block mb-1">
            密碼
          </label>
          <input
            type="password"
            id="password"
            placeholder="請注意大小寫"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-[#ffd9d6] text-base outline-none"
          />
        </div>

        <div className="text-right mb-5">
          <a href="#" className="text-sm text-black">
            忘記密碼?
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="bg-[#ff8c85] text-white border-none py-3 px-8 rounded-full text-lg cursor-pointer mb-5"
        >
          登入
        </button>

        <div className="text-sm">
          <a href="#" className="text-black">
            註冊帳號
          </a>
        </div>
      </div>
    </div>
  );
}
