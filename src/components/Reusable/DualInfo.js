import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfo({ heading, src }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading}></Heading>
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              voluptates inventore non vel beatae necessitatibus ipsam.
              Accusamus obcaecati inventore earum, perferendis eos expedita
              aliquid quasi quas molestias suscipit minus, incidunt veritatis
              aspernatur dicta praesentium! Veniam, odio ratione porro aperiam
              voluptate sapiente dolorem voluptas perspiciatis tenetur fugiat
              quo aliquid eaque expedita?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maiores reprehenderit eum aspernatur incidunt
              voluptate. Est delectus, natus non tempore, alias veritatis
              quaerat voluptatem nesciunt veniam, maxime repudiandae quibusdam
              dolorem! Modi ipsa hic fuga doloremque cumque tempora laboriosam
              ea debitis accusantium commodi sequi minima voluptate unde
              cupiditate, eaque, recusandae odit sapiente quia. Doloribus
              necessitatibus quasi distinctio, deleniti aspernatur quos
              provident nam. In numquam deleniti facilis blanditiis dolores
              libero minus aliquid. Quia, aliquid atque quaerat dolores dicta
              optio animi quod doloremque commodi itaque, voluptatum libero
              quibusdam eaque? Perspiciatis praesentium, cupiditate, tempora
              aliquam enim accusamus voluptas, expedita soluta molestiae cum
              molestias ut veritatis.
            </p>
          </div>
          <div className="col-4 ">
            <div className="card bg-dark text-white">
              <img src={src} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Just Click</h5>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla eos earum provident dolorem, eaque perspiciatis maxime
                  ex facilis incidunt ducimus deleniti inventore nostrum et nisi
                  quo! Voluptatem suscipit unde expedita.
                </p>
                <Link to="/" className="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
