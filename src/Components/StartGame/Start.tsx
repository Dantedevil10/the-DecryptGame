import './Start.css'
import { useEffect,useState } from 'react';
import songMenu from '/src/Assets/Songs/Songmenu.mp3'
import videoStart from '/src/Assets/Video/ShowVideo.mp4'
function Start(){
    const Url = "https://github.com/Dantedevil10";
    const [showIntro, setShowIntro] = useState(false);
    const [showCredits,setShowCredits] = useState(false)

    useEffect(() => {
        const interval = setTimeout(() => {
        setShowCredits(true);
        }, 10);
        return () => clearTimeout(interval);
    }, []);
    useEffect(() => {
        const interval = setTimeout(() => {
        setShowIntro(true);
        }, 1000);
        return () => clearTimeout(interval);
    }, []);

   
    const [startVideo,setStartVideo] = useState(false)

    useEffect(() => {
        let open:any;
        const keypress = (event: KeyboardEvent) =>{

            if(event.key === 'Enter'){
                open = setTimeout(()=>{setStartVideo(true),setShowIntro(false),setShowCredits(false)
                },10)
                
            }

        }
        document.addEventListener('keypress', keypress);
        return () => {clearTimeout(open),document.removeEventListener('keypress', keypress);}
    }, []);


    return(<>
    {showIntro && <h1 className="text-3xl text-red-700 absolute top-1/2 left-1/2 transform -translate-x-1/2
    -translate-y-1/2 blink"><audio src={songMenu} autoPlay/>Press Enter To Start</h1>}

    {showCredits && <p className="text-1xl text-red-700 mt-10 ml-10 word">A Game By Dante <br />not the final version <br /> 
    <p className="text-xs word2">Github:<a className="inline-block border-b-2 border-transparent hover:border-red-500" href={Url}>github/Dantedevil10</a></p></p>}
        

    {startVideo && <video width="100%" height="100%" autoPlay controls={false}>
    <source src={videoStart} type="video/mp4" />
     navegador não suporta o elemento de vídeo.
    </video>}

    </>)
}
export default Start