import React, { useState } from 'react';
import './App.css';

function App() {
  const [lists1, setLists1] = useState([
    {id: 1, name: "Apple"},
    {id: 2, name: "Watermelon"},
    {id: 3, name: "Grape"},
    {id: 4, name: "Banana"},
  ]); 
  const [lists2, setLists2] = useState([
    {id: 5, name: "Strawberry"},
    {id: 6, name: "Peach"},
    {id: 7, name: "Cherry"},
    {id: 8, name: "Plum"},
  ]);

  const [selected, setSelected] = useState(null);
  const [disabled1, setDisabled1] = useState(false);
  const [disabled2, setDisabled2] = useState(false);

  const handleClick1 = (i) => {
    setSelected(i); //リスト選択状態のセット
    setDisabled1(true); //「左へ移動」を無効に
  };

  const handleClick2 = (i) => {
    setSelected(i); //リスト選択状態のセット
    setDisabled2(true); //「右へ移動」を無効に
  };

  const moveToRight = () => {
    setLists1(lists1.filter((i) => i.id !== selected.id));
    setLists2([...lists2, selected]);

    setSelected(null); //リストの選択状態を解除
    setDisabled1(false); //「左へ移動」の無効を解除
  };

  const moveToLeft = () => {
    setLists2(lists2.filter((i) => i.id !== selected.id));
    setLists1([...lists1, selected]);

    setSelected(null); //リストの選択状態を解除
    setDisabled2(false); //「右へ移動」の無効を解除
  };

  return (
    <div>
      <div className='ul-wrapper'>
        <ul>
    {/* 同じリストへ移動できないように左右のリストを同時選択不可に*/}
          {lists1.map((i) => (
            <li key={i.id} onClick={() => handleClick1(i)} disabled={disabled2}>
              {i.name}
            </li>
          ))}
        </ul>
        <ul>
          {lists2.map((i) => (
            <li key={i.id} onClick={() => handleClick2(i)} disabled={disabled1}>
              {i.name}
            </li>
          ))}
        </ul>
      </div>
      <div className='button-wrapper'>
          <button className="button" onClick={moveToRight} 
                  disabled={disabled2}>右へ移動</button>
          <button className="button" onClick={moveToLeft} 
                  disabled={disabled1}>左へ移動</button>
      </div>
    </div>
  )
}

export default App;