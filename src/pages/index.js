import * as React from "react"
import "../stylesheets/homepage.scss"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero">
        <article className="intro">
          <h1>Coffee. Your way.</h1>
          <h2>It's on the way.</h2>
        </article>
      </section>
      <section className="about">
        <h3>Cafe Shipt is coffee sent to you on a schedule.</h3>
        <h4>Your schedule is important to you and you are important to us.</h4>
        <button className="button-light">Ship Now</button>
      </section>
    </Layout>
  )
}

export default IndexPage
