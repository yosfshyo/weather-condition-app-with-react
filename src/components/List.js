import React, { Component } from 'react';

class List extends Component {
    render() {
    return (
      <div> 
           {this.props.products.map(prod =><div key={prod.id}>{prod.title}</div>) }

         </div>
    );
  }
}

export default List