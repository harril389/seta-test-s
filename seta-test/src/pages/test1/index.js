import React, { useState } from "react";
import "./style.scss";

const TestFirst = () => {
  const [posts, setPosts] = useState("");
  const onSubmitTest1 = (e) => {
    e.preventDefault();
    var data = posts.split(",");
    var lists = [];
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      if (lists.length === 0) {
        let arr = [];
        arr.push(data[i]);
        lists.push(arr);
      } else {
        let temp = -1;
        for (let j = 0; j < lists.length; j++) {
          if (lists[j][0].length === data[i].length) {
            temp = j;
            break;
          }
        }
        if (temp !== -1) {
          lists[temp].push(data[i]);
        } else {
          let arr = [];
          arr.push(data[i]);
          lists.push(arr);
        }
      }
    }
    console.log(lists);
    let max = lists[0].length;
    var temp = 0;
    for (let j = 0; j < lists.length; j++) {
      if (lists[j].length >= max) {
        max = lists[j].length;
        temp = j;
      }
    }
    alert("Max: " + lists[temp]);
  };
  const onSubmitTest2 = (e) => {
    e.preventDefault();
    var data = posts.split(",");
    var lists = [];
    var checkData = true;
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      if (Number.isNaN(Number(data[i]))) {
        checkData = false;
        alert(data[i] + " is not number!");
        break;
      } else {
        lists.push(Number(data[i]));
      }
    }
    console.log(lists);
    if (checkData) {
      lists.sort();
      var result = lists[lists.length - 1] + lists[lists.length - 2];
      alert("Sum of integers on top 2 = " + result);
    }
  };
  const onChange = (e) => {
    setPosts(e.target.value);
  };
  return (
    <div className="form-box">
      <div>
        1. Provide an array of strings, eg: [‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def,
        ‘gh’]. Write a function to find the strings’ length that appear most in
        this array. Writing the unit test function and provide some test-cases.
        The result for example array is [‘ab’, ‘cd’, ‘gh’]
      </div>
      <form onSubmit={onSubmitTest1} style={{ width: "100%" }}>
        <textarea
          className="box-textarea"
          rows="9"
          cols="70"
          onChange={(e) => onChange(e)}
          name="text"
          required
          placeholder='The elements are separated by ","'
        />
        <div className="box-submit">
          <button type="submit" className="box-submit__button">
            submit
          </button>
        </div>
      </form>
      <div>
        2. Provide an array of integers, eg: [1, 4, 2, 3, 5]. Write a function
        to find sum of integers on top 2. Writing the unit test function and
        provide some test-cases. The result for the example array is 9
      </div>
      <form onSubmit={onSubmitTest2} style={{ width: "100%" }}>
        <textarea
          className="box-textarea"
          rows="9"
          cols="70"
          onChange={(e) => onChange(e)}
          name="text"
          required
          placeholder='The elements are separated by ","'
        />
        <div className="box-submit">
          <button type="submit" className="box-submit__button">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default TestFirst;
