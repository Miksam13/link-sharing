import ConfigPage from "./components/Config/Config";
import PreviewPage from "./components/Preview/Preview";
import "./home.scss";
import { useState } from "react";
import ILink from "../../interfaces/ILink";
import { DropResult } from "react-beautiful-dnd";

function HomePage() {
  const [links, setLinks] = useState<ILink[]>([]);

  console.log(links);

  const addLink = () => {
    const newLink = {
      id: +Date.now(),
      title: "",
      url: "",
      logo: "",
      color: "#fff",
      position: links.length + 1,
    };
    setLinks([...links, newLink]);
  };

  const removeLink = (id: number) => {
    const updatedLinks = links.filter((link: ILink) => link.id !== id);

    setLinks(
      updatedLinks.map((link: ILink, index) => ({
        ...link,
        position: index + 1,
      })),
    );
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    const items = [...links];
    const [removed] = items.splice(source.index, 1);
    items.splice(destination.index, 0, removed);

    setLinks(items);
  };

  return (
    <>
      <div className="header">
        <button>View</button>
        <button>Share Link</button>
      </div>
      <div className="body">
        <PreviewPage />
        <ConfigPage
          links={links}
          addLink={addLink}
          removeLink={removeLink}
          onDragEnd={onDragEnd}
          setLinks={setLinks}
        />
      </div>
    </>
  );
}

export default HomePage;
