import * as React from "react"

const nav = [
  {
    text: "About",
    url: "/about"
  },
  {
    text: "Shop",
    url: "/shop"
  },
  {
    text: "Contact",
    url: "/contact"
  },
  {
    text: "Account",
    url: "/account"
  },
]

const IndexPage = () => {
  return (
    <main>
      <title>Cafe Shipt</title>
      <nav className="dark-background">
        <ul>
        {nav.map(link => (
          <li>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
        </ul>
      </nav>
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
      <section className="footer dark-background">
        <article className="social-links">
          <ul>
            <li>fb</li>
            <li>ig</li>
            <li>tw</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default IndexPage
