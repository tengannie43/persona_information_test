import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function KidneyStatusPage() {
  const [gfr, setGfr] = useState("");
  const [ckd, setCkd] = useState("");
  const [disease, setDisease] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!gfr || !ckd || !disease) {
      alert("請完整填寫所有項目！");
      return;
    }

    alert(`已填寫內容：\nGFR：${gfr} ml/min\nCKD 期數：第 ${ckd} 期\n其他慢性疾病：${disease}\n\n👉 下一頁準備開始！`);

    // 跳轉下一頁（自行修改路徑）
    // navigate("/next-page");
  };

  return (
    <div className="min-h-screen w-full bg-white flex justify-center p-5">
      <div className="max-w-[390px] w-full text-center">
        <div className="logo mb-5">
          <img
            src="https://i.postimg.cc/Wp5Pbz2G/2025-06-10-155707.png"
            alt="腎臟圖"
            className="w-[150px] max-w-[80%] mx-auto mb-5"
          />
        </div>

        <h2 className="text-2xl mb-5">腎病概況</h2>

        <div className="mb-5 text-left">
          <label className="font-bold mb-2 block">腎絲球過濾率 (GFR)</label>
          <div className="flex items-center bg-pink-100 p-3 rounded-full justify-between">
            <input
              type="number"
              placeholder="請輸入數值"
              min="0"
              value={g
