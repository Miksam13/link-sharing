import React from "react";
import "./profile.scss";
import IData from "../../../../../../interfaces/IData";

type ConfigProps = {
  stateData: IData;
  setStateData: (stateData: IData) => void;
};

function ProfileComp(props: ConfigProps) {
  const fileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const filesLength = files ? files.length : 0;
    if (filesLength > 0) {
      const imageSrc = URL.createObjectURL(files![0]);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const imagePreviewElement: HTMLImageElement =
        document.querySelector("#tb-image");
      imagePreviewElement.src = imageSrc;
      imagePreviewElement.style.display = "block";
      props.setStateData({
        ...props.stateData,
        img_url: imageSrc,
      });
    }
  };

  return (
    <>
      <h1
        style={
          !props.stateData.isProfile
            ? { color: "#5e5e5e" }
            : { color: "#ffffff" }
        }
      >
        <input
          type="checkbox"
          onChange={() => {
            props.setStateData({
              ...props.stateData,
              isProfile: !props.stateData.isProfile,
            });
          }}
          defaultChecked={props.stateData.isProfile}
        />
        Profile Details
      </h1>
      <p
        style={
          !props.stateData.isProfile
            ? { color: "#5e5e5e" }
            : { color: "#ffffff" }
        }
      >
        Add your details to create a personal touch to your profile!
      </p>
      {props.stateData.isProfile ? (
        <>
          <div>
            <div className="profile_inp profile_img">
              <h5>Profile picture</h5>
              <div className="tb-container">
                <div className="tb-img-view">
                  <img id="tb-image" src={props.stateData.img_url} />
                </div>
                <label htmlFor="tb-file-upload">Upload Image</label>
                <input
                  type="file"
                  id="tb-file-upload"
                  accept="image/*"
                  onChange={fileUpload}
                />
              </div>
            </div>
            <div className="profile_inp">
              <h5>First name</h5>
              <input
                value={props.stateData.first_name}
                onChange={(event) => {
                  props.setStateData({
                    ...props.stateData,
                    first_name: event.target.value,
                  });
                }}
              />
            </div>
            <div className="profile_inp">
              <h5>Last name</h5>
              <input
                value={props.stateData.last_name}
                onChange={(event) => {
                  props.setStateData({
                    ...props.stateData,
                    last_name: event.target.value,
                  });
                }}
              />
            </div>
            <div className="profile_inp">
              <h5>Email</h5>
              <input
                value={props.stateData.email}
                onChange={(event) => {
                  props.setStateData({
                    ...props.stateData,
                    email: event.target.value,
                  });
                }}
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default ProfileComp;
