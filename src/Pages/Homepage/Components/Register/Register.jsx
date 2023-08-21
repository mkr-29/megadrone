import React, { useState } from "react";
// import bgimage from "./Assets/BGimage.png";
import qr from "./Assets/qr.png";
import "./Register.css";
import { Link } from "react-router-dom";
import Tread from "./Assets/tread.png";
import { db } from "../Firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function Register() {
  const [name, setName] = useState();
  const [roll, setRoll] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [tid, setTid] = useState();

  const userCollectionRef = collection(db, "contactData");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission and page refresh

    if (!name || !email || !roll || !contact || !tid) {
      alert("Please fill in all the details.");
      return;
    }

    addDoc(userCollectionRef, {
      name: name,
      email: email,
      roll: roll,
      contact: contact,
      tid: tid,
    })
      .then(() => {
        alert("Registered successfully!");
        setName("");
        setEmail("");
        setRoll();
        setContact();
        setTid("");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div id="register-sec">
      <img src={Tread} className="tread-reg" alt="" />
      <div className="heading">Register</div>
      <div className="register-section">
        <div className="reg-form">
          {/* <h1>Registrations Full</h1> */}
          {/* <h3>You'll be contacted soon if you have registered successfully!</h3> */}
          <form
            onSubmit={handleSubmit}
            className="reg-content form"
            method="post"
          >
            <input
              type="text"
              value={name}
              id="name"
              onChange={(event) => setName(event.target.value)}
              required
              placeholder="Name"
            />
            <input
              type="number"
              id="roll"
              value={roll}
              onChange={(event) => setRoll(event.target.value)}
              required
              placeholder="Enrollment No."
            />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="email"
              required
              placeholder="JUIT Email Id"
            />
            <input
              type="number"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              id="contact"
              required
              placeholder="Contact No."
            />
            <div>
              <input
                type="text"
                value={tid}
                onChange={(event) => setTid(event.target.value)}
                required
                placeholder="Payment Transaction ID"
                id="tid"
              />
            </div>
            <div className="reg-submit-btn">
              <button className="reg-submit" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
          <div className="qrimage">
            <p>Limited Seats</p>
            <img src={qr} alt="" />
            <p>Registration Charges: Rs. 100 per person</p>
          </div>
        </div>
      </div>
    </div>
  );
}
