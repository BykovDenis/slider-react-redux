import React, { Component } from 'react';

export default class ReSelect extends Component {
  render() {
    this.i = 1;
    console.log(this.i);
    return (
      <form method="get">
        <dl>
          <dt>
            name
          </dt>
          <dd>
            <input type="text" value="Значение" />
          </dd>
        </dl>
      </form>
    );
  }
}
