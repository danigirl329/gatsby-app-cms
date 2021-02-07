import * as React from "react"
import Layout from "../components/layout"
import "../stylesheets/forms.scss"
import "../stylesheets/contact.scss"


export default class ContactPage extends React.Component {
  state = {
    name: "",
    email: "",
    comments: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    const email = target.email
    const comments = target.comments
    this.setState({
      [name]: value,
      [email]: value,
      [comments]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Thank you ${this.state.name}. We will contact you shortly.`)
  }

  render() {
    return (
      <Layout>
        <div className="centered-container">
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <h1>Contact Us</h1>
            <label>Full Name</label>
            <input 
              type="text" 
              name="name" 
              value = {this.state.name}
              onChange = {this.handleInputChange}
            />
            <label>Email Address</label>
            <input
            type="email" 
            name="email" 
            value = {this.state.email}
            onChange = {this.handleInputChange}
            />
            <label>Comments</label>
            <textarea
            name="comments"
            value={this.state.comments}
            onChange = {this.handleInputChange}
            ></textarea>
            <button className="button-dark" type="submit">Submit</button>
          </form>
        </div>
      </Layout>
    )
  }
}