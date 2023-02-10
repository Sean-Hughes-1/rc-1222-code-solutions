import React from 'react';

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIndex: -1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    if (this.state.openIndex === index) {
      this.setState({
        openIndex: -1
      });
    } else {
      this.setState({
        openIndex: index
      });
    }
  }

  render() {
    const { data } = this.props;

    return (
      <>
        {data.map((section, index) => (
          <>
            <button className="accordion" onClick={() => this.handleClick(index)}>{section.title}</button>
            <div className={this.state.openIndex === index ? 'panel open' : 'panel'}>
              <p>{section.content}</p>
            </div>
          </>
        ))}
      </>
    );
  }
}
