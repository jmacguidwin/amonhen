import React, { useRef, useEffect, useState} from 'react';
// import BudgetBox from '../components/cards/BudgetBox';
import { TotalBox, RemainingBox, RemainingBoxMonth } from '../components/cards/Budget';

function App() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [totalBudget, setTotalBudget] = useState(0); // new
  const [spent, setSpent] = useState(0); // new


  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080}
      })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;


        // Add event listeners to play the video when the metadata has loaded
        video.onloadedmetadata = () => {
          video.play();
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
    <div className="app">
      
      <div className='header'>
        <h1>Jim</h1>
      </div>

      <div className="camera">
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>Banana!</button>
      </div>

      <div className={'result ' + (hasPhoto ? 'hasPhoto'
      : '')}>
        <canvas ref={photoRef}></canvas>
        <button onClick={closePhoto}>CLOSE!</button>
      </div>

      <div className="budgetBoxes">
        <RemainingBox totalBudget={totalBudget} spent={spent} />
      </div>

      <div className="budgetBoxes">
        <TotalBox totalBudget={totalBudget} spent={spent} />
      </div>

      <div className="budgetBoxes">
        <RemainingBoxMonth totalBudget={totalBudget} spent={spent} />
      </div>
      
      <div className='footer'>
          <p>footer</p>
      </div>

    </div>
  );
}

export default App;
