import './App.css'
import Start from './Components/StartGame/Start'
import { useEffect,useState } from 'react';
import Game from './Components/GameRuning/Game.tsx';

function App() {

  const [Menu, setmenu] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setmenu(true);
    }, 2000);
    return () => clearTimeout(interval);
  }, []);


  const [detectEnter, setDetectEnter] = useState(true);

  useEffect(() => {
    let close:any;
    let open:any;
    const handleKeyUp = (event:any) => {
      if (detectEnter && event.key === 'Enter') {
        open = setTimeout(() => {
         
          setmenu(false);
        }, 36000);
        close = setTimeout(() => {
         
          setStartGame(true);
          setDetectEnter(false); // Desativar a detecção do Enter quando o jogo começar
          document.removeEventListener('keyup', handleKeyUp); // Remover o listener de keyup
        }, 36500);
      }
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      clearTimeout(close);
      clearTimeout(open);
      document.removeEventListener('keyup', handleKeyUp); // Remover o listener de keyup no cleanup
    }
  }, [detectEnter]);

  const [startgame,setStartGame] = useState(false)
  

  return (
    <>
    {Menu && <Start/>}
    {startgame && <Game/>}
    </>
  )
}

export default App
