import "./link.scss";
import ILink from "../../../../../../interfaces/ILink";
import { FaGripLines } from "react-icons/fa";
import { BiChevronDown, BiLink } from "react-icons/bi";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

type LinkProps = {
  index: number;
  linkId: number;
  link: ILink;
  links: ILink[];
  removeLink: (id: number) => void;
  setLinks: (links: ILink[]) => void;
};

function Link(props: LinkProps) {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectPlatform, setSelectPlatform] = useState(false);

  const platforms = [
    {
      id: 1,
      title: "Github",
      logo: "assets/icons/github.png",
      color: "#1b1f23",
      size: "50",
    },
    {
      id: 2,
      title: "LinkedIn",
      logo: "assets/icons/linkedin.png",
      color: "#0c64c5",
      size: "50",
    },
    {
      id: 3,
      title: "Telegram",
      logo: "assets/icons/telegram.png",
      color: "#34aadf",
      size: "50",
    },
    {
      id: 4,
      title: "Discord",
      logo: "assets/icons/discord.png",
      color: "#5d6af2",
      size: "40",
    },
    {
      id: 5,
      title: "Instagram",
      logo: "assets/icons/instagram.png",
      color: "#fd0bda",
      size: "35",
    },
    {
      id: 6,
      title: "YouTube",
      logo: "assets/icons/youtube.png",
      color: "#ff0808",
      size: "45",
    },
    {
      id: 7,
      title: "FaceBook",
      logo: "assets/icons/facebook.png",
      color: "#1877f2",
      size: "40",
    },
    {
      id: 8,
      title: "Reddit",
      logo: "assets/icons/reddit.png",
      color: "#ff4500",
      size: "40",
    },
    {
      id: 9,
      title: "Steam",
      logo: "assets/icons/steam.png",
      color: "#193b6e",
      size: "40",
    },
    {
      id: 10,
      title: "Twitch",
      logo: "assets/icons/twitch.png",
      color: "#944cff",
      size: "35",
    },
    {
      id: 11,
      title: "Twitter",
      logo: "assets/icons/twitter.png",
      color: "#000000",
      size: "40",
    },
  ];

  return (
    <Draggable
      key={props?.linkId}
      draggableId={`${props?.linkId}`}
      index={props.index}
    >
      {(provided) => (
        <div
          className="link"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="link_header">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FaGripLines style={{ cursor: "grab" }} />
              <h3 className="link_position">Link #{props.link?.position}</h3>
            </div>
            <button
              onClick={() => props.removeLink(props.linkId)}
              className="link_remove"
            >
              Remove
            </button>
          </div>
          <div className="link_platform">
            <h5>Platform</h5>
            <div className="filter_region">
              <div
                onClick={() => setSelectPlatform(!selectPlatform)}
                className="select_platform"
              >
                <p>
                  {selectedPlatform === ""
                    ? "Select Platform"
                    : selectedPlatform}
                </p>
                <button>
                  <BiChevronDown
                    style={{
                      color: "white",
                      marginTop: "-5px",
                      cursor: "pointer",
                    }}
                    size="30px"
                  />
                </button>
              </div>
              <div className={selectPlatform ? "drop_select_platform" : "hide"}>
                {platforms.map((platform) => (
                  <button
                    onClick={() => {
                      setSelectedPlatform(platform.title);
                      props.setLinks(
                        props.links.map((link: ILink) =>
                          link.id === props.linkId
                            ? {
                                ...link,
                                title: platform.title,
                                logo: platform.logo,
                              }
                            : {
                                ...link,
                                title: link.title,
                                logo: link.logo,
                              },
                        ),
                      );
                      setSelectPlatform(false);
                    }}
                    style={{ backgroundColor: platform.color }}
                    key={platform.id}
                  >
                    <img
                      style={{
                        width: platform.size + "px",
                      }}
                      src={"/src/" + platform.logo}
                    />
                    <h3>{platform.title}</h3>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="link_url">
            <h5>Link</h5>
            <div className="link_url_inp">
              <BiLink style={{ marginLeft: "7px" }} />
              <input
                placeholder="Url of your platform:"
                onChange={(e) => {
                  props.setLinks(
                    props.links.map((link: ILink) =>
                      link.id === props.linkId
                        ? {
                            ...link,
                            url: e.target.value,
                          }
                        : {
                            ...link,
                            url: link.url,
                          },
                    ),
                  );
                }}
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Link;
