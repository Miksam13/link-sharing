import "./preview.scss";
import IData from "../../../../interfaces/IData";
import ILink from "../../../../interfaces/ILink";

type PreviewTypeProps = {
  data: IData;
  links: ILink[];
  isSave: boolean;
};

function PreviewComp(props: PreviewTypeProps) {
  return (
    <div className="preview">
      {props.isSave ? (
        <div className="preview_body">
          {props.data.isProfile ? (
            <>
              <img
                className="profile_img_preview"
                alt=" "
                src={props.data.img_url}
              />
              <h2>
                {props.data.first_name} {props.data.last_name}
              </h2>
              <h4>{props.data.email}</h4>
            </>
          ) : null}
          <div className="links">
            {props.links.map((link: ILink) => (
              <a
                key={link.position}
                className="link_p"
                style={{ backgroundColor: `${link.color}` }}
                href={`${link.url}`}
              >
                <img
                  style={{
                    width: `${link.size}px`,
                  }}
                  alt=" "
                  src={`/src/${link.logo}`}
                />
                <h3>{link.title}</h3>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PreviewComp;
