import React, { useState } from "react";

const Contact = () => {
  const [Data, setData] = useState({
    fullname: " ",
    phone: " ",
    email: " ",
    msg: " ",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${Data.fullname}.my mobile no is ${Data.phone}. email is ${Data.email}.`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  Name="fullname"
                  value={Data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  Name="phone"
                  value={Data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile number"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  Name="email"
                  value={Data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Hobbies</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  Name="msg"
                  value={Data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <br/>
              <div className="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Contact;
