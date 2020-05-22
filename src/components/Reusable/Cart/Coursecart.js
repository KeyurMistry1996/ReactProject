import React, { Component } from "react"
import Img from "gatsby-image"
import Heading from "../Heading"

const getCaty = items => {
  let holditem = items.map(items => {
    return items.node.category
  })
  let holdCategory = new Set(holditem)
  let categorys = Array.from(holdCategory)
  categorys = ["all", ...categorys]
  return categorys
}

export default class Coursecart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
      mycategory: getCaty(props.courses.edges),
    }
  }

  catyClicked = category => {
    let kettitall = [...this.state.courses]

    if (category === "all") {
      this.setState(() => {
        return {
          mycourses: kettitall,
        }
      })
    } else {
      let holdme = kettitall.filter(({ node }) => {
        return node.category === category
      })
      this.setState(() => {
        return {
          mycourses: holdme,
        }
      })
    }
  }

  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.mycategory.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-info m-3 px-3"
                    key={index}
                    onClick={() => {
                      this.catyClicked(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row ">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex mx-auto my-4"
                >
                  <Img fixed={node.image.fixed} />
                  <div className="px-3 flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0 text-success">${node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      className="btn btn-warning snipcart-add-item"
                      data-item-id={node.id}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-url="https://reactprojectlco.netlify.app/"
                      data-item-image={node.image.fixed.src}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
