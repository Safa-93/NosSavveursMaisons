import React from "react";
import Utilisateur from "./Utilisateur";

export default class Client extends Utilisateur {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div>hello</div>;
  }
}
