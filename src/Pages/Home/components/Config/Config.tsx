import "./config.scss";
import ILink from "../../../../interfaces/ILink";
import Link from "./components/Link/Link";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

type ConfigProps = {
  links: ILink[];
  addLink: () => void;
  removeLink: (id: number) => void;
  onDragEnd: (result: DropResult) => void;
  setLinks: (links: ILink[]) => void;
};

function ConfigPage(props: ConfigProps) {
  return (
    <div className="config">
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button className="addlink_btn" onClick={() => props.addLink()}>
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
              {props.links.map((link: ILink, index: number) => (
                <Link
                  key={link?.id}
                  index={index}
                  linkId={link?.id}
                  link={link}
                  links={props.links}
                  removeLink={props.removeLink}
                  setLinks={props.setLinks}
                />
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default ConfigPage;
