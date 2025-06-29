import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 這一行是關鍵


export default function PersonaInformationPage() {
  const [selectedGender, setSelectedGender] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [age, setAge] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    updateAge();
  }, [year, month, day]);

  const updateAge = () => {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge >= 0 ? calculatedAge : 0);
  };

  const handleNext = () => {
    if (!selectedGender) {
      alert("請選擇性別！");
      return;
    }
    alert(`已選擇：\n性別：${selectedGender}\n生日：${year}年 ${month}月 ${day}日\n年齡：${age} 歲\n\n（下一頁可以開始囉！）`);
    navigate("/kidney");
  };

  const years = Array.from({ length: new Date().getFullYear() - 1920 + 1 }, (_, i) => 1920 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="container p-4 max-w-md mx-auto text-center">
      <div className="logo mb-8">
        <img src="https://i.postimg.cc/348Kgkxk/image.png" alt="食食在 Logo" className="mx-auto w-48 max-w-full" />
      </div>

      <div className="section mb-8 text-left">
        <h3 className="text-lg mb-3">性別</h3>
        <div className="flex gap-3 justify-center">
          {['女性', '男性', '其它'].map(gender => (
            <div
              key={gender}
              onClick={() => setSelectedGender(gender)}
              className={`flex-1 p-3 rounded-lg cursor-pointer text-center border-2 ${selectedGender === gender ? 'border-red-400' : 'border-transparent'} bg-pink-100 transition`}
            >
              <div className={`text-3xl mb-1 ${gender === '女性' ? 'text-pink-500' : gender === '男性' ? 'text-blue-500' : 'text-gray-500'}`}>
                {gender === '女性' ? '♀' : gender === '男性' ? '♂' : '⚪'}
              </div>
              <div>{gender}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section mb-8 text-left">
        <h3 className="text-lg mb-3">出生年月日</h3>
        <div className="flex justify-center mb-3">
          <select className="p-2 mx-1 rounded border" value={year} onChange={e => setYear(parseInt(e.target.value))}>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          年
          <select className="p-2 mx-1 rounded border" value={month} onChange={e => setMonth(parseInt(e.target.value))}>
            {months.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          月
          <select className="p-2 mx-1 rounded border" value={day} onChange={e => setDay(parseInt(e.target.value))}>
            {days.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          日
        </div>
        <div className="text-xl font-bold text-center">{age} 歲</div>
      </div>

      <button
        onClick={handleNext}
        className="w-full bg-red-400 text-white py-3 rounded-lg text-lg hover:bg-red-500 transition"
      >
        下一頁
      </button>
    </div>
  );
}
