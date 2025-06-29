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
    navigate("/allergy"); // 直接跳轉到 1-3 過敏源頁面
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

        <h2 className="text-2xl mb-6">腎病概況</h2>

        {/* GFR */}
        <div className="mb-5 text-left">
          <label htmlFor="gfr" className="font-bold mb-2 block">
            腎絲球過濾率 (GFR)
          </label>
          <div className="flex items-center bg-pink-100 p-3 rounded-full justify-between">
            <input
              type="number"
              id="gfr"
              placeholder="請輸入數值"
              min="0"
              value={gfr}
              onChange={(e) => setGfr(e.target.value)}
              className="bg-transparent outline-none w-3/4"
            />
            <span className="text-sm">ml/min</span>
          </div>
        </div>

        {/* CKD */}
        <div className="mb-5 text-left">
          <label htmlFor="ckd" className="font-bold mb-2 block">
            CKD (期數)
          </label>
          <select
            id="ckd"
            value={ckd}
            onChange={(e) => setCkd(e.target.value)}
            className="w-full p-3 rounded-lg bg-pink-100"
          >
            <option value="">請選擇</option>
            <option value="1">第一期</option>
            <option value="2">第二期</option>
            <option value="3">第三期</option>
            <option value="4">第四期</option>
            <option value="5">第五期</option>
          </select>
        </div>

        {/* 慢性疾病 */}
        <div className="mb-5 text-left">
          <label htmlFor="disease" className="font-bold mb-2 block">
            其他慢性疾病
          </label>
          <select
            id="disease"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            className="w-full p-3 rounded-lg bg-pink-100"
          >
            <option value="">請選擇</option>
            <option value="高血壓">高血壓</option>
            <option value="糖尿病">糖尿病</option>
            <option value="心臟病">心臟病</option>
            <option value="其他">其他</option>
            <option value="無">無</option>
          </select>
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-red-400 text-white py-3 rounded-lg text-lg hover:bg-red-500"
        >
          下一頁
        </button>
      </div>
    </div>
  );
}
