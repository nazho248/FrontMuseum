export function ArgumentedReality() {
  //pruebas.html?somedata=5&more=bacon
  return (
    <iframe
      title="Argumented Reality"
      className="min-h-screen"
      src="pruebas.html?model=C422"
      width="100%"
      height="100%"
      allow="camera; microphone"
    ></iframe>
  )
}

export default ArgumentedReality
