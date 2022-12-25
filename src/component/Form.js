import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Hob, setHob] = useState("");

  // to store what is written in input boxes we use two attributes
  //1. value={state}
  //2. onChange=(e)=>setstate(e.target.value)}

  const handlesubmit = async () => {
    try {
      console.log("yes entered");
      const response = await axios.post("/api/formdata", {
        Name,
        Phone,
        Email,
        Hob,
      });

      if (response.data.success) {
        alert("Content successfully saved");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`saved successfully`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Register</h1>
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
                  Name="Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  Name="Phone"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={Hob}
                  onChange={(e) => setHob(e.target.value)}
                ></textarea>
              </div>
              <br />
              <div className="col-12">
                <button
                  class="btn btn-outline-primary"
                  type="submit"
                  onClick={() => handlesubmit()}
                >
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
