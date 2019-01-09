import React from "react";
import { navigate } from "gatsby-link";
import { Link } from 'gatsby'
import Layout from '../../layouts/Layout'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isValidated: false };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        })
            .then(() => navigate(form.getAttribute("action")))
            .catch(error => alert(error));
    };

    render() {
        return (
            <Layout>
                <section className="section buffer--y-md">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h1>Let's talk about everything!</h1>
                                <p>Don't like forms? Send us an <a href="/">email</a>.</p>
                                <p>An image will go here!</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <form
                                    name="contact"
                                    method="post"
                                    action="/contact/thanks/"
                                    data-netlify="true"
                                    data-netlify-honeypot="bot-field"
                                    onSubmit={this.handleSubmit}
                                >
                                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                    <input type="hidden" name="form-name" value="contact" />
                                    <div hidden>
                                        <label>
                                            Don’t fill this out:{" "}
                                            <input name="bot-field" onChange={this.handleChange} />
                                        </label>
                                    </div>
                                    <div className="field">
                                        <label className="label" htmlFor={"name"} >Your name</label>
                                        <div className="control">
                                            <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
                                        </div>
                                    </div>
                                    <div className="field mt-15">
                                        <label className="label" htmlFor={"email"}>Email</label>
                                        <div className="control">
                                            <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
                                        </div>
                                    </div>
                                    <div className="field  mt-15">
                                        <label className="label" htmlFor={"message"}>Message</label>
                                        <div className="control">
                                            <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
                                        </div>
                                    </div>
                                    <div className="field">                                        
                                        <div className="control mt-15">
                                            <input className="checkbox" type={"checkbox"} name={"agree"} onChange={this.handleChange} id={"agree"} required={true} />
                                            <label className="label pt-2 pl-1" htmlFor={"agree"}> accept <Link to="/terms">terms & conditions</Link></label>
                                        </div>
                                    </div>
                                    <div className="field mt-15">
                                        <button className="btn btn--sm btn__outline btn__sm-round btn--cta" type="submit">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}