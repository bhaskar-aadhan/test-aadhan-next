import Link from "next/link";

const Home = () => {
  return (
    <div>
      <video autoPlay muted loop>
        <source src="https://static.indusapps.in/assets/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <br />
      <video autoPlay muted loop>
        <source src="https://static.indusapps.in/assets/videos/aboutus-video.mp4" type="video/mp4" />
      </video>
      <video autoPlay muted loop>
        <source src="https://static.indusapps.in/assets/videos/about-aadhan.mp4" type="video/mp4" />
      </video>
      <video autoPlay muted loop>
        <source src="https://static.indusapps.in/assets/videos/channel-videos/hi/insta_aadhan_hindi.mp4" type="video/mp4" />
      </video>
      <video autoPlay muted loop>
        <source src="https://static.indusapps.in/assets/videos/channel-videos/ta/insta_aadhan_aanmeegam.mp4" type="video/mp4" />
      </video>
      <video autoPlay muted loop>
        <source src="https://static.indusapps.in/assets/videos/channel-videos/te/insta_aadhan_health.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
