import React, { useRef, useEffect, useState} from 'react';

function App() {
  const videoRef = useRef(null);
  const videoRef2 = useRef(null); //new
  const photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080}
      })
      .then(stream => {
        let video = videoRef.current;
        let video2 = videoRef2.current; //new
        video.srcObject = stream;
        video2.srcObject = stream; //new

        // Add event listeners to play the video when the metadata has loaded
        video.onloadedmetadata = () => {
          video.play();
        };
        video2.onloadedmetadata = () => {
          video2.play();
        };
      })

      .catch(err => {
        console.error(err);
      })
  }

  const takePhoto = () => {
    const width = 1000;
    const height = width / (16/9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);

    setHasPhoto(true);
  }

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photoRef.current.getContext('2d');
  
    ctx.clearRect(0, 0, photo.width, photo.height);

    setHasPhoto(false);
  }

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="App">
      <div className="camera">
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>Banana!</button>
        <video ref={videoRef2}></video> {/*new*/}
      </div>
      <div className={'result ' + (hasPhoto ? 'hasPhoto'
      : '')}>
        <canvas ref={photoRef}></canvas>
        <button onClick={closePhoto}>CLOSE!</button>
      </div>
    </div>
  );
}

export default App;
