import React, { Component } from 'react';

class Course extends Component {
  state = {
    courseTitle: '',
  };
  // ---  nested component
  componentDidMount() {
    this.parseQueryParams();
  }

  componentDidUpdate() {
    this.parseQueryParams();
  }

  parseQueryParams() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (this.state.courseTitle !== param[1])
        this.setState({ courseTitle: param[1] });
    }
  }
  // ---
  render() {
    return (
      <div>
        {/* Param: */}
        {/* <h1>{this.props.match.params.courseTitle}</h1> */}
        {/* nested component */}
        <h1>{this.state.courseTitle}</h1>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
