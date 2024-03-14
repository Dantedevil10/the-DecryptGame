import './Start.css'
import { useEffect,useState } from 'react';
import songBit from '/src/Assets/Songs/Effects/EffectsSounds(Entering).mp3'
import songMenu from '/src/Assets/Songs/Songmenu.mp3'
function Start(){
    const Url = "https://github.com/Dantedevil10";
    const [showStart, setShowStart] = useState(false);

    useEffect(() => {
        const interval = setTimeout(() => {
        setShowStart(true);
        }, 3000);
        return () => clearTimeout(interval);
    }, []);

    const [bitSong,setBitSong] = useState(false)

    useEffect(() => {
        document.addEventListener('keypress',event =>{

            if(event.key == 'Enter'){
                setBitSong(true)
            }

        })
        return () => {}
    }, []);
    

    return(<>
    
    <h1 className="text-3xl text-red-700 absolute top-1/2 left-1/2 transform -translate-x-1/2
    -translate-y-1/2 blink">Press Enter To Start</h1>

    {showStart && <p className="text-1xl text-red-700 mt-10 ml-10 word">A Game By Dante <br />not the final version <br /> 
    <p className="text-xs word2">Github:<a className="inline-block border-b-2 border-transparent hover:border-red-500" href={Url}>github/Dantedevil10</a></p></p>}

    <audio src={songMenu} autoPlay/>

    {bitSong && <audio src={songBit} autoPlay/>}
    </>)
}
export default Start