import React from "react"
import Logo from "../images/logo.png"
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

export default function Layout({ children }) {
  return (
    <main>
      <title>Cafe Shipt</title>
      <nav className="dark-background">
        <ul>
          <li>
            <a href="/">
              <img className="logo" alt="illustration of coffee cup with steam coming out of it" src={Logo} />
            </a>
          </li>
        {nav.map(link => (
          <li key={link.text}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
        </ul>
      </nav>
      {children}
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