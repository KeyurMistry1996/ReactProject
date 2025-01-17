import React from "react"
import Heading from "../Heading"

export default function contact() {
  return (
    <section className="py-3">
      <Heading title="Contact Us"></Heading>
      <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/mjvagdzy" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your Name"
              className="form-control my-3"
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your Email"
              className="form-control my-3"
            />
            <input
              type="text"
              name="mobile"
              id="mobile"
              required
              placeholder="Your Mobile"
              className="form-control my-3"
            />
            <textarea
              type="text"
              name="message"
              id="message"
              required
              placeholder="Your Message"
              className="form-control my-3"
            />
          </div>
          <button className="btn btn-outline-info btn-block"> Submit</button>
        </form>
      </div>
    </section>
  )
}
