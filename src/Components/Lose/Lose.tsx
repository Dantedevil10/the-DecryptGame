import './Lose.css'
import songMenu from '/src/Assets/Songs/Songmenu.mp3'
function Lose(){
   
    return(<>
    <h1 className="text-3xl text-red-700 absolute top-1/2 left-1/2 transform -translate-x-1/2
    -translate-y-1/2 blink">You Have Lost</h1>

    <audio src={songMenu} autoPlay/>
    </>)
}
export default Lose