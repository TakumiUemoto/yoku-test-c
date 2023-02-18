import React, { useState } from 'react';
import styled from "styled-components";


function App() {

  const [selected, setSelected] = useState({id:null, name: ""});
  const [disabled_L, setDisabled_L] = useState(true);
  const [disabled_R, setDisabled_R] = useState(true);
  const [active, setActive] = useState(false);

//初期のリスト
  const [leftList, setLeftList] = useState([
    {id: 1, name: "Apple"},
    {id: 2, name: "Watermelon"},
    {id: 3, name: "Grape"},
    {id: 4, name: "Banana"},
  ]); 
  const [rightList, setRightList] = useState([
    {id: 5, name: "Strawberry"},
    {id: 6, name: "Peach"},
    {id: 7, name: "Cherry"},
    {id: 8, name: "Plum"},
  ]);

//リストの選択機能
  const handleClick1 = (i) => {
    setSelected(i); //リスト選択状態のセット
      setActive(!active); //選択状態表示
      setDisabled_R(false); 
  };

  const handleClick2 = (i) => {
    setSelected(i); 
      setActive(!active); 
      setDisabled_L(false); 
  };

//リストの移動機能
  const moveToRight = () => {
    setLeftList(leftList.filter((i) => i.id !== selected.id));
    setRightList([...rightList, selected]);

      setSelected({id:null, name: ""}); //リストの選択状態を解除
      setActive(!active); //選択状態非表示
      setDisabled_R(true); 
  };

  const moveToLeft = () => {
    setRightList(rightList.filter((i) => i.id !== selected.id));
    setLeftList([...leftList, selected]);

      setSelected({id:null, name: ""}); 
      setActive(!active); 
      setDisabled_L(true); 
  };


  return (
    <Container>

      <ListContainer>
        <List>
          {leftList.map((i) => (
            <ListItem key={i.id} onClick={() => handleClick1(i)} 
              active={active} disabled={disabled_R}>
                { i.name  }
            </ListItem>
          ))}
        </List>

        <List>
          {rightList.map((i) => (
            <ListItem key={i.id} onClick={() => handleClick2(i)} 
              active={active} disabled={disabled_L}>
                { i.name  }
            </ListItem>
          ))}
        </List>
      </ListContainer>

      <ButtonContainer>
        <Button className="button" onClick={moveToRight} 
                disabled={disabled_R}>右へ移動</Button>
        <Button className="button" onClick={moveToLeft} 
                disabled={disabled_L}>左へ移動</Button>
      </ButtonContainer>

      <StyledSelect 
        active={active}>{`選択中: ${selected.name}`}
      </StyledSelect>

    </Container>
  );
};

//デザイン
const Container = styled.div`
  width: 800px;
  margin: 100px;
`;
const ListContainer = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  padding-right: 40px;
  box-sizing: border-box;
  border: 1px solid darkblue;
  width: 350px;
  height: 550px;
  margin: 50px;
`

const ListItem = styled.li`
  text-align: center;
  padding: 18px 0;
  box-sizing: border-box;
  border-bottom: 1px solid darkblue; 

`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button` 
  text-align: center;
  padding: 5px 40px;
  margin: 0px 130px;
  background-color: darkblue;
  color: white;
`;

const StyledSelect = styled.h1`
  color: ${props => (props.active ? "black" : "white" )};
  text-align: center;
`;

export default App;