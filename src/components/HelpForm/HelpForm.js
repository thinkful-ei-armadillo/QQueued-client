import React, { Component } from "react";
import { Input } from "../Form/Form";
import QueueContext from "../../context/QueueContext";

import "./HelpForm.css";
import Button from "../../components/Button/Button";

export default class HelpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      hideInput: true,
      buttonTitle: "Get Help!"
    };
  }

  static contextType = QueueContext;

  toggleHelpForm = () => {
    this.setState({ hideInput: !this.state.hideInput });
    if (this.state.buttonTitle === "Get Help!") {
      this.setState({ buttonTitle: "Back" });
    } else if (this.state.buttonTitle === "Back") {
      this.setState({ buttonTitle: "Get Help!" });
    }
  };

  updateInput = text => {
    this.setState({ input: text });
  };

  handleSubmit = e => {
    const { addStudent } = this.context;
    e.preventDefault();
    e.target.reset();
    addStudent(this.state.input);
    this.setState({
      hideInput: !this.state.hideInput,
      buttonTitle: "Get Help!"
    });
  };

  render() {
    return (
      <>
        <Button onClick={() => this.toggleHelpForm()}>
          {this.state.buttonTitle}
        </Button>
        <section className="Help-Form-Section">
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className={this.state.hideInput ? "hidden" : ""}>
              <Input
                className={"Help-Form-Input"}
                onChange={e => this.updateInput(e.target.value)}
                type={"text"}
                required
              />
              <Button type={"submit"}>Submit</Button>
            </div>
          </form>
        </section>
      </>
    );
  }
}
