import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { Button, Checkbox, Table } from 'react-bootstrap';

class CombinedListTable extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // console.log('componentWillMount()', this.props);
  }
  componentWillReceiveProps() {
    // console.log('componentWillReceiveProps()', this.props);
  }
  loadList() {
    return _.map(this.props.data, (data) => {
      return (
        <tr key={data.id}>
          <td><Checkbox onClick={() => this.props.onSelectItem(data)}>{data.id}</Checkbox></td>
          <td>{data.title}</td>
          <td>{data.startPeriod}</td>
          <td>{data.endPeriod}</td>
        </tr>
      );
    });
  }
  onCombine() {
    console.log('onCombine', this.props);
    let defaultStartPeriod = 0;
    let timeStampArr = [];
    console.log('this.props.combinedList.length', this.props.combinedList.length);
    if (this.props.combinedList.length > 0) {
      _.map(this.props.combinedList, (o) => {
        timeStampArr.push({timestamp: moment(o.endPeriod).format('X'), date: o.endPeriod});
      });
      console.log('timeStampArr', timeStampArr);
      let max = 0;
      _.forEach(timeStampArr, (item) => {
        console.log(Number(item.timestamp));
        if (Number(item.timestamp) > max) {
          max = item;
        }
      });
      console.log(max);
      console.log('defaultStartPeriod', max);
      this.setState({ defaultStartPeriod: max });
    }
  }
  render() {
    console.log('combinedList', this.props.combinedList);
    console.log('defaultStartPeriod', this.props.defaultStartPeriod);
    return (
      <div>
        <Button bsStyle="info" onClick={this.onCombine.bind(this)}>Combine</Button>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Start Period</th>
              <th>End Period</th>
            </tr>
          </thead>
          <tbody>
            {this.loadList()}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CombinedListTable;
