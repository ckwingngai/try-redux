import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import combinedListData from '../api/combinedListData.json';
import CombinedListTable from './components/combinedListTable';

class CombinedList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      combinedList: [],
      defaultStartPeriod: '',
    };
  }
  componentWillMount() {
    // console.log('componentWillMount()', this.props);
  }
  componentWillReceiveProps() {
    // console.log('componentWillReceiveProps()', this.props);
  }
  handleOnCombine() {
    console.log('onCombine', this.state.combinedList);
    let defaultStartPeriod = 0;
    let timeStampArr = [];
    console.log('this.state.combinedList.length', this.state.combinedList.length);
    if (this.state.combinedList.length > 0) {
      _.map(this.state.combinedList, (o) => {
        console.log(o.endPeriod);
        timeStampArr.push({timestamp: moment(o.endPeriod).format('X'), date: o.endPeriod});
      });
      console.log('timeStampArr', timeStampArr);
      defaultStartPeriod = _.max(timeStampArr, 'timestamp').date;
      console.log('defaultStartPeriod', defaultStartPeriod);
      this.setState({ defaultStartPeriod });
    }
  }
  handleOnSelect(item) {
    const isExist = _.findIndex(this.state.combinedList, { id: item.id });
    if (isExist === -1) {
      const combinedList = [...this.state.combinedList, item];
      this.setState({ combinedList });
    } else {
      const combinedList = _.toArray(_.omitBy(this.state.combinedList, { id: item.id }));
      this.setState({ combinedList });
    }
  }
  render() {
    return (
      <div>
        <h3>Combined List</h3>
        <CombinedListTable data={combinedListData} {...this.state} onSelectItem={this.handleOnSelect.bind(this)} onCombine={this.handleOnCombine.bind(this)} />
      </div>
    );
  }
}

export default CombinedList;
