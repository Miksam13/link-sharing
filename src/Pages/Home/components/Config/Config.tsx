import "./config.scss";
import ILink from "../../../../interfaces/ILink";
import { DropResult } from "react-beautiful-dnd";
import LinksComp from "./components/Links/Links";
import ProfileComp from "./components/Profile/Profile";
import IData from "../../../../interfaces/IData";
import { useState } from "react";

type ConfigProps = {
  data: IData;
  links: ILink[];
  setLinks: (links: ILink[]) => void;
  setData: (links: IData) => void;
  setIsSave: (isSave: boolean) => void;
};

function ConfigComp(props: ConfigProps) {
  const [stateData, setStateData] = useState(
    props.data || {
      first_name: "",
      last_name: "",
      email: "",
      img_url: "",
      isProfile: true,
    },
  );
  const [stateLinks, setStateLinks] = useState(props.links || []);

  const saveData = () => {
    if (
      stateData.first_name !== "" &&
      stateData.last_name !== "" &&
      stateData.email !== "" &&
      stateData.img_url !== ""
    ) {
      props.setData({
        first_name: stateData.first_name,
        last_name: stateData.last_name,
        email: stateData.email,
        img_url: stateData.img_url,
        isProfile: stateData.isProfile,
      });
      props.setLinks(stateLinks);
      console.log(props.data);
      console.log(stateLinks);
      props.setIsSave(true);
    }
  };

  const removeLink = (id: number) => {
    const updatedLinks = stateLinks.filter((link: ILink) => link.id !== id);

    setStateLinks(
      updatedLinks.map((link: ILink, index) => ({
        ...link,
        position: index + 1,
      })),
    );
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    const items = [...stateLinks];
    const [removed] = items.splice(source.index, 1);
    items.splice(destination.index, 0, removed);

    setStateLinks(items);
  };

  return (
    <div className="config">
      <ProfileComp setStateData={setStateData} stateData={stateData} />
      <LinksComp
        stateLinks={stateLinks}
        removeLink={removeLink}
        onDragEnd={onDragEnd}
        setStateLinks={setStateLinks}
      />
      <button className="save_btn" onClick={saveData}>
        Save
      </button>
    </div>
  );
}

export default ConfigComp;
