import './GameST.css'
import { useState,useEffect,useRef} from 'react'
import Lose from '../Lose/Lose';
import Winner from '../Winner/Winner';

import audio1 from '/src/Assets/Songs/Phrase/PRimeira-palavra_Sound.mp3'
import audio2 from '/src/Assets/Songs/Phrase/segunda-frase.mp3'
import audio3 from '/src/Assets/Songs/Phrase/Ultima-Frase.mp3'
import audioStart from '/src/Assets/Songs/letstartthegame.mp3'

import videoWin from '/src/Assets/Video/Youwin.mp4'
import videoLoseT from '/src/Assets/Video/LoseForTime.mp4'
import videoLoseN from '/src/Assets/Video/Normallose.mp4'
function Game(){

    const [seeText,setSeeText] = useState("")
    const seeTextRef = useRef('');

    function seeTheWrite(event:any){
        setSeeText(event.target.value);
    }
    useEffect(() => {
        seeTextRef.current = seeText;
    }, [seeText]);


    const[minutos,setMinutos] = useState(10)
    const[segundos,setSegundos] = useState(0)
    
    useEffect(() => {
        let open:any;
        let close:any;
        const interval = setInterval(() => {
            if (minutos === 0 && segundos === 0) {
                clearInterval(interval);
                open = setTimeout(()=>{setApearTheGame(false),setFinalTime(true),setAudioLoaded(false)},10)
                close = setTimeout(()=>{setFinalTime(false),setLose(true)},15000)
            } else {
                if (segundos === 0) {
                    setMinutos(minutos - 1);
                    setSegundos(59);
                } else {
                    setSegundos(segundos - 1);
                }
            }
        }, 1000);
    
        return () => {clearInterval(interval),clearTimeout(open),clearTimeout(close)};
    }, [minutos, segundos]);

    const [callCounter, setCallCounter] = useState(false);

    useEffect(() => {
    const interval = setTimeout(() => {
        setCallCounter(true);
    }, 5000);
    return () => clearTimeout(interval);
    }, []);

    const [audioLoaded, setAudioLoaded] = useState(true);
    useEffect(() => {
       
        return ()=>{}
    }, []);


    const [appearthegame,setApearTheGame] = useState(true)
    const [lose,setLose] = useState(false)
    const [winner,setWinner] = useState(false)
    const [finaltime,setFinalTime] = useState(false)
    const [finalnormal,setFinalNormal] = useState(false)
    const [win,setWin] = useState(false)

    useEffect(()=>{
        let open:any;
        let close:any;
        document.addEventListener('keyup',event =>{
             
            if(event.key === 'Enter'){
                const currentSeeText = seeTextRef.current.toLowerCase();
           
                if( currentSeeText !== "socorro me ajudem"){
                    open = setTimeout(()=>{setApearTheGame(false),setFinalNormal(true),setAudioLoaded(false)},500)
                    close = setTimeout(()=>{setFinalNormal(false),setLose(true)},21000)
                } 
                else{
                    open = setTimeout(()=>{setApearTheGame(false),setWin(true),setAudioLoaded(false)},500)
                    close = setTimeout(()=>{setWin(false),setLose(false),setWinner(true)},22000)
                }

                if(lose){
                    open = setTimeout(()=>{setApearTheGame(false)},500)
                }else if (winner == true && lose == false){
                    open = setTimeout(()=>{setApearTheGame(false)},500)
                }
            }
        
        })
        return () => {clearTimeout(open),clearTimeout(close)}
    },[seeText,minutos,segundos])


    return(<>

    <div>
      {audioLoaded && 
        <div>
          <audio autoPlay>
            <source src={audioStart} type="audio/mp3" />
            Seu navegador não suporta a tag de áudio.
          </audio>
        </div>}
    </div>

    {win && <video width="100%" height="100%" autoPlay controls={false}>
    <source src={videoWin} type="video/mp4" />
    Seu navegador não suporta o elemento de vídeo.
    </video>}

    {finaltime && <video width="100%" height="100%" autoPlay controls={false}>
    <source src={videoLoseT} type="video/mp4" />
    Seu navegador não suporta o elemento de vídeo.
    </video>}

    {finalnormal && <video width="100%" height="100%" autoPlay controls={false}>
    <source src={videoLoseN} type="video/mp4" />
    Seu navegador não suporta o elemento de vídeo.
    </video>}

    {winner && <Winner/>}
    {lose && <Lose/>}
    
    {appearthegame &&
        <div>
        <h1 className='text-center title'>Decrypt the Message</h1>
        <div className="tips-container">
            <div id="n1" className="song flex flex-col text-center items-center write-animation"><audio controls><source src={audio1} type=""/></audio>
            <label htmlFor="n1"></label>
            </div>
            <div id="n2" className="song flex flex-col text-center items-center write-animation"><audio controls><source src={audio2}/></audio>
            <label htmlFor="n2"></label>
            </div>
            <div id="n3" className="song flex flex-col text-center items-center write-animation"><audio controls><source src={audio3}/></audio>
            <label htmlFor="n3"></label>
            </div>
        </div>
        <div className="dicas-posicoes flex">
                <p className='m-3 ps write-animation pl-[30px]'>
                    1 toque = 1a posicao = 1 <br />
                    2 toques = 2a posicao = 2 <br />
                    3 toques = 3a posicao = 4 <br />
                    4 toques = 4a posicao = 8 <br />
                    5 toques = 5a posicao = 16 <br />
                </p>
                <p className='m-3 ps write-animation'>
                    1=A 2=B 3=C 4=D 5=E 6=F <br />
                    7=G 8=H 9=I 10=J 11=K 12=L <br />
                    13=M 14=O 14=N 15=O 16=P 17=Q 18=R <br />
                    19=S 20=T 21=U 22=V 23=W 24=X <br />
                    25=Y 26=Z
                </p>
        </div>

       {callCounter && <div className='contador'>{minutos < 10 ? `0${minutos}` : minutos}:{segundos < 10 ? `0${segundos}` : segundos}</div>}
        <div className='textonc absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded'>({seeText})</div>
        <input id='texto' value={seeText} onChange={seeTheWrite} className="text-black-700 absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded p-4" type="text" />
        <p id='finalbtn'  className='absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 '>Press Enter To Submit</p>
    </div>}
    

    </>)
}
export default Game