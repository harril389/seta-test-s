import React from "react";
import "./style.scss";
const ShowPost = (props) => {
  const { userId, id, title, body } = props;
  return (
    <div className="content">
      <div className="box-user">
        <div className="box-user__userId">User Id: {userId}</div>
        <div className="box-user__Id"> Id post:{id}</div>
      </div>
      <div className="content__title">
        <b>Title:</b> {title}
      </div>
      <div className="content__body">
        <b>Body:</b> {body}
      </div>
    </div>
  );
};
export default ShowPost;
