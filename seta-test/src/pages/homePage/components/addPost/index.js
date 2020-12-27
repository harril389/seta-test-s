import React, { useState } from "react";
import "./style.scss";
import { putPost } from "../../../../api/base/posts";

const AddPost = () => {
  const [posts, setPosts] = useState({
    userId: "",
    title: "",
    body: "",
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await putPost(posts);
    console.log(result);
    if (result.success) {
      alert("success");
    }
  };
  const onChange = (e) => {
    setPosts({ ...posts, [e.target.name]: [e.target.value] });
    console.log(e.target.value);
  };
  return (
    <div className="form-box">
      <form onSubmit={onSubmit} style={{ width: "100%" }}>
        <div className="box-tittle">
          <input
            className="box-tittle__input"
            type="number"
            onChange={(e) => onChange(e)}
            name="userId"
            placeholder="User id..."
            required
          />
          <input
            className="box-tittle__input input--tittle "
            type="text"
            onChange={(e) => onChange(e)}
            name="title"
            placeholder="Tittle..."
            required
          />
        </div>
        <textarea
          className="box-textarea"
          rows="9"
          cols="70"
          onChange={(e) => onChange(e)}
          name="body"
          required
          placeholder="Text..."
        />
        <div className="box-submit">
          <button type="submit" className="box-submit__button">
            post
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddPost;
