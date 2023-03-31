import React from "react";
import axios from "axios";

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: "",
      quoteAuthor: "",
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        this.setState({
          quoteText: response.data.content,
          quoteAuthor: response.data.author,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.quoteText}</div>
        <div id="author">{this.state.quoteAuthor}</div>
        <button id="new-quote" onClick={this.fetchQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            this.state.quoteText
          )} - ${encodeURIComponent(this.state.quoteAuthor)}`}
          target="_blank"
        >
          Tweet Quote
        </a>
      </div>
    );
  }
}

export default QuoteMachine;
