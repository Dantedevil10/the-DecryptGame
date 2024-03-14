import videoStart from '/src/Assets/Video/ShowVideo.mp4'
function Video(){

  return(<video width="100%" height="100%" autoPlay controls={false}>
  <source src={videoStart} type="video/mp4" />
  Seu navegador não suporta o elemento de vídeo.
  </video>)
}
export default Video