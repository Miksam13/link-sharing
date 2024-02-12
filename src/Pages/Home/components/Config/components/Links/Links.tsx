import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import ILink from "../../../../../../interfaces/ILink";
import Link from "../Link/Link.tsx";
import "./links.scss";

type LinksProps = {
  removeLink: (id: number) => void;
  onDragEnd: (result: DropResult) => void;
  setStateLinks: (stateLinks: ILink[]) => void;
  stateLinks: ILink[];
};

function LinksComp(props: LinksProps) {
  return (
    <>
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button
        className="addlink_btn"
        onClick={() => {
          const newLink = {
            id: +Date.now(),
            title: "",
            url: "",
            logo: "",
            color: "#fff",
            position: props.stateLinks.length + 1,
            size: "50",
          };
          props.setStateLinks([...props.stateLinks, newLink]);
        }}
      >
        + Add new link
      </button>
      <DragDropContext onDragEnd={props.onDragEnd}>
        <Droppable droppableId="1">
          {(provided) => (
            <div
              className="links"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {props.stateLinks.map((link: ILink, index: number) => (
                <Link
                  key={link?.position}
                  index={index}
                  linkId={link?.id}
                  link={link}
                  links={props.stateLinks}
                  removeLink={props.removeLink}
                  setLinks={props.setStateLinks}
                />
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default LinksComp;
