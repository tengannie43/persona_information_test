import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ExerciseSelectionPage() {
  const [selectedExercise, setSelectedExercise] = useState("");
  const navigate = useNavigate();

  const exercises = [
    { label: "久坐", img: "https://i.postimg.cc/vHNF5ZSW/2025-06-10-165145.png" },
    { label: "輕度活動", img: "https://i.postimg.cc/ZKRz9djb/2025-06-10-165153.png" },
    { label: "中度活動", img: "https://i.postimg.cc/pVktXZfc/2025-06-10-165201.png" },
    { label: "重度活動", img: "https://i.postimg.cc/T1k87d2v/2025-06-10-165209.png" },
    { label: "無", img: "https://i.postimg.cc/2jnVHPfb/2025-06-10-164853.png" },
  ];

  const handleSelection = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleNext = () => {
    if (!selectedExercise) {
      alert("請選擇一項運動強度！");
      return;
    }

    alert(`你選擇的運動強度：${selectedExercise}\n\n👉 前往下一頁`);
    // navigate("/next-page"); // 可改成下一頁路由
  };

  return (
    <div className="min-h-screen w-full bg-white flex justify-center p-5">
      <div className="max-w-[390px] w-full text-center">
        <h2 className="text-2xl text-pink-400 mb-6">運動強度</h2>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {exercises.map((item) => (
            <div
              key={item.label}
              onClick={() => handleSelection(item.label)}
              className={`cursor-pointer p-3 rounded-lg transition ${
                selectedExercise === item.label
                  ? "border-4 border-red-400 bg-pink-100"
                  : "border-2 border-pink-300 bg-white"
              }`}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-16 h-16 object-contain mx-auto mb-2"
              />
              <div className="font-bold">{item.label}</div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="bg-red-400 text-white py-3 px-8 rounded-full text-lg hover:bg-red-500"
        >
          下一步
        </button>
      </div>
    </div>
  );
}
