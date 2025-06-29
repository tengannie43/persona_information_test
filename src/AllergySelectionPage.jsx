import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllergySelectionPage() {
  const [selectedAllergens, setSelectedAllergens] = useState([]);
  const navigate = useNavigate();

  const allergens = [
    { label: "花生", img: "https://i.postimg.cc/HLgwNp8K/2025-06-10-164139.png" },
    { label: "堅果類", img: "https://i.postimg.cc/nzVvH0kG/2025-06-10-164130.png" },
    { label: "牛奶", img: "https://i.postimg.cc/T3mjQy1g/2025-06-10-164152.png" },
    { label: "海鮮", img: "https://i.postimg.cc/jdD4w3r8/2025-06-10-164204.png" },
    { label: "無", img: "https://i.postimg.cc/2jnVHPfb/2025-06-10-164853.png" },
  ];

  const toggleSelection = (allergen) => {
    if (selectedAllergens.includes(allergen)) {
      setSelectedAllergens(selectedAllergens.filter(item => item !== allergen));
    } else {
      setSelectedAllergens([...selectedAllergens, allergen]);
    }
  };

  const handleNext = () => {
    if (selectedAllergens.length === 0) {
      alert("請至少選擇一個過敏源或按下一步繼續");
      return;
    }

    alert(`你選擇的過敏源：${selectedAllergens.join("、")}\n\n👉 前往下一頁`);
    navigate("/exercise");
  };

  return (
    <div className="min-h-screen w-full bg-white flex justify-center p-5">
      <div className="max-w-[390px] w-full text-center">
        <h2 className="text-2xl text-pink-400 mb-6">過敏源</h2>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {allergens.map((item) => (
            <div
              key={item.label}
              onClick={() => toggleSelection(item.label)}
              className={`cursor-pointer border-2 p-3 rounded-lg transition ${
                selectedAllergens.includes(item.label)
                  ? "border-red-400"
                  : "border-pink-300"
              } bg-white`}
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
