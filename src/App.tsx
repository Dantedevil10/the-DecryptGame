import './App.css'
import Start from './Components/StartGame/Start'
import { useEffect,useState } from 'react';
import Video from './Components/VideoPlayer/Video.tsx';
import Game from './Components/GameRuning/Game.tsx';
function App() {

  const [Menu, setmenu] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setmenu(true);
    }, 2000);
    return () => clearTimeout(interval);
  }, []);

  const [startVideo,setStartVideo] = useState(false);
  const [detectEnter, setDetectEnter] = useState(true);

  useEffect(() => {
    let close:any;
    let open:any;
    const handleKeyUp = (event:any) => {
      if (detectEnter && event.key === 'Enter') {
        open = setTimeout(() => {
          setStartVideo(true);
          setmenu(false);
        }, 500);
        close = setTimeout(() => {
          setStartVideo(false);
          setStartGame(true);
          setmenu(false);
          setDetectEnter(false); // Desativar a detecção do Enter quando o jogo começar
          document.removeEventListener('keyup', handleKeyUp); // Remover o listener de keyup
        }, 37000);
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
    {startVideo && <Video/>}
    {startgame && <Game/>}
    </>
  )
}

export default App
