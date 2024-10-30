import { useEffect, useState } from "react";
import Game from "../Game/Game";


function App() {
  return <Game />
  // const [count, setCount] = useState(0);
  // const [call, setCall] = useState(false);

  // console.log('start');

//   useEffect будет выполнен после первого render
//  [] - массив зависимостей, если он пустой, то useEffect будет выполнен 1 раз

  // useEffect(() => {
  //   // console.log('один раз подг все авто в гараж');
  //   // fetch(`https://auto.ru/api/box/all?user=${user.id}`)
  //   // console.log('открой шл');
  //   // console.log('update after render');
  // }, []);

//  useEffect(() => {
//    document.addEventListener('click', () => {
//     console.log('yes');
//    })

//   //  componentDidUnmount
//    return () => {}
//  }, [])

  // console.log('finish');
  // const [isActiveBlock, setIsActiveBlock] = useState(false);

  // useEffect(() => {
  //   console.log("hover")
  // }, [isActiveBlock])

  // const getDataHandler = () => {
  //   // fetch('https://ya.ru/api')
  //   console.log('fetch -> https://ya.ru/api');
  // }
  
  // return (
  //   <div onMouseOver={() => setIsActiveBlock(true)} onMouseOut={() => setIsActiveBlock(false)} onClick={getDataHandler}>
  //     update data
  //   </div>
  // );
  
}

export default App;
