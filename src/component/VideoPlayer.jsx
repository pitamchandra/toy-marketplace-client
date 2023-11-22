import video from '../assets/cars.mp4';
import coverImg from '../assets/cover.jpg'

const VideoPlayer = () => {
  
  return (
    <div>
      <video
        width=""
        height=""
        controls
        poster={coverImg}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;