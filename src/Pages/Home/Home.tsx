import ConfigComp from "./components/Config/Config";
import PreviewComp from "./components/Preview/Preview";
import "./home.scss";
import { useState } from "react";
import ILink from "../../interfaces/ILink";
import IData from "../../interfaces/IData";

function HomePage() {
  const [links, setLinks] = useState<ILink[]>([
    {
      id: 1,
      title: "Github",
      logo: "assets/icons/github.png",
      color: "#1b1f23",
      url: "shototam",
      position: 1,
      size: "50",
    },
    {
      id: 3,
      title: "Telegram",
      logo: "assets/icons/telegram.png",
      color: "#34aadf",
      url: "",
      position: 2,
      size: "50",
    },
  ]);
  const [data, setData] = useState<IData>({
    first_name: "Miksam",
    last_name: "Omel",
    email: "miksam@miksam.com",
    img_url:
      "https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg",
    isProfile: true,
  });
  const [isSave, setIsSave] = useState(true);

  return (
    <>
      <div className="header">
        <button>View</button>
        <button>Share Link</button>
      </div>
      <div className="body">
        <PreviewComp links={links} data={data} isSave={isSave} />
        <ConfigComp
          data={data}
          links={links}
          setLinks={setLinks}
          setData={setData}
          setIsSave={setIsSave}
        />
      </div>
    </>
  );
}

export default HomePage;
