import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 sm-8 mx-auto text-white text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              neque quaerat corrupti? Sint omnis tempore doloribus unde itaque
              obcaecati! Est et nesciunt numquam temporibus, molestiae non ut
              pariatur quia officiis iusto reprehenderit mollitia, minima quasi
              autem ex debitis blanditiis voluptatum illo earum. Velit cum
              pariatur laudantium voluptatibus autem rerum asperiores obcaecati,
              quis debitis nostrum odit ipsa eos saepe ducimus inventore.
            </p>
            <Link to="/about/">
              <button className="btn btn-warning bts-lg ">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
