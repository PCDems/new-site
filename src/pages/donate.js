import React from "react";

export default class DonateRedirect extends React.Component {
  componentDidMount() {
    window.location.href = "https://secure.actblue.com/donate/jdpacslate";
  }

  render() {
    return <div />;
  }
}
