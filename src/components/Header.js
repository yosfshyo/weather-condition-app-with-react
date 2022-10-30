import React, { Component } from 'react';

 class Header  extends Component {
  render() {
    return (
      <div> Header comp <br/>

      {this.props.title} <br/>
      {this.props.desc} <br/>
      {this.props.newData} <br/>
      </div>
    );
  }
}
export default Header