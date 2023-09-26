import Header from "../components/header";
import Card from "../components/Card";
import "../styles/styles.css";
import Choir from "../assets/choir.webp";
import abimbola from "../assets/abimbola-made.webp";
import education from "../assets/education.webp";
import stage1 from "../assets/stage1.webp";
import stage3 from "../assets/stage3.webp";
import webblog from "../assets/web-blog.webp";
import amethstng from "../assets/amethstng.webp";
import gallery from "../assets/gallery.webp";
import loanlink from "../assets/loanlink.webp";
import movie from "../assets/movie.webp";
import profile from "../assets/profile.webp";
import raffle from "../assets/raffle.webp";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <Header />
      <div className="service-header">Latest works</div>
      <div className="card-item">
        <div className="card-inner">
          <div className="card">
            <Card
              image={gallery}
              title={"Bishop's NFT Gallery"}
              viewlink={`https://thebishopgallery.vercel.app/`}
              githublink={`https://github.com/AKIN-THOMAS/DnD-Gallery`}
            />
            <Card
              image={movie}
              title={"Movie App"}
              viewlink={`https://thebishopmovie.vercel.app/`}
              githublink={`https://github.com/AKIN-THOMAS/Movie-App`}
            />
            <Card
              image={profile}
              title={"Profile task"}
              viewlink={`https://thebishop.vercel.app/`}
              githublink={`https://github.com/AKIN-THOMAS/THE.BISHOP`}
            />
            <Card
              image={loanlink}
              title={"Decentralized loan (Loanlink)"}
              viewlink={`https://loanlink.vercel.app/`}
              githublink={`https://github.com/orgs/LoanLink-Hedera-Hackaton/repositories?type=source`}
            />
            <Card
              image={raffle}
              title={"Decentralized Raffle (Lottery)"}
              viewlink={`https://bishopraffle.on.fleek.co/`}
              githublink={`https://github.com/AKIN-THOMAS/nextjs-raffle`}
            />
            <Card
              image={amethstng}
              title={"GEMAMETHYSTNG"}
              viewlink={`https://gemamethystng.vercel.app/`}
              githublink={`https://github.com/AKIN-THOMAS/GEMAMETHYSTNG`}
            />
            <Card
              image={Choir}
              title={"Choir Website"}
              viewlink={`https://choir-lmu.onrender.com/`}
              githublink={`https://github.com/Praisebakare/Landmark-University-Choir`}
            />
            <Card
              image={abimbola}
              title={"Personal Portfolio Website"}
              viewlink={`https://bishopabimbola.netlify.app/`}
              githublink={`https://github.com/AKIN-THOMAS/BISHOP`}
            />{" "}
            <Card
              image={webblog}
              title={"Web Blog App"}
              viewlink={``}
              githublink={``}
            />
            <Card
              image={stage1}
              title={"HNG Task"}
              viewlink={`https://frontend-stage1.netlify.app/`}
              githublink={`https://github.com/AKIN-THOMAS/Front-End-stage1`}
            />
            <Card
              image={stage3}
              title={"HNG Task"}
              viewlink={`https://metabnb-bishop.netlify.app/`}
              githublink={`https://github.com/AKIN-THOMAS/Metabnb`}
            />
            <Card
              image={education}
              title={"AKIN-THOMAS University"}
              viewlink={``}
              githublink={``}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
