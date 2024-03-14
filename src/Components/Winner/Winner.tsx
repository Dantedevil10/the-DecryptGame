import './Winner.css'
import songMenu from '/src/Assets/Songs/Songmenu.mp3'
function Winner(){
    return(<><h1 className="text-3xl text-green-700 absolute top-1/2 left-1/2 transform -translate-x-1/2
    -translate-y-1/2 blink text-center">Congratulations <br />
                            You Prove That You're not Dumb</h1>

    <audio src={songMenu} autoPlay/></>)
}
export default Winner