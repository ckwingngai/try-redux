import React, { Component } from 'react';
import _ from 'lodash';

class MonthIndicators extends Component {
  constructor(props) {
    super();

    this.state = {
      data: props.data
    };
  }
  componentWillMount() {
    // console.log('componentWillMount()', this.props);
  }
  componentWillReceiveProps() {
    // console.log('componentWillReceiveProps()', this.props);
  }
  loadForms() {
    let list = _.split(this.state['data'], ',')
    let formList = []
    _.map(list, (item) => {
      let [formId, months] = _.split(item, ':')
      formList.push({formId: formId, indicators: this.getMonthList(months)})
    })

    return _.map(formList, (form) => {
      return (
        <div key={form.formId}>
          <h1>form</h1>
          {this.loadIndicators(form)}
        </div>
      )
    })
  }
  loadIndicators(form) {
    return _.map(form.indicators, (indicator) => {
      return (
        <input type="checkbox" key={indicator.id} checked={indicator.checked} onChange={this.changeIndicator.bind(this, form.formId, indicator)} />
      );
    });
  }
  getMonthList(months) {
    let list = []
    for (let i=0; i<months.length; i++) {
      list.push({
        id: i,
        checked: this.getMonthBoolean(months[i])
      })
    }
    return list
  }
  getMonthBoolean(month) {
    if (month === "1") {
      return true
    }
    return false
  }
  changeIndicator(selectFormId, selectIndicator) {
    console.log('changeIndicator')
    console.log(selectFormId, selectIndicator)
    let list = _.split(this.state['data'], ',')
    let formList = []
    _.map(list, (item) => {
      let [formId, months] = _.split(item, ':')
      formList.push({formId: formId, indicators: this.getMonthList(months)})
    })
    let updatedList = _.map(formList, (formItem) => {
      if (Number(formItem.formId) === Number(selectFormId)) {
        _.forEach(formItem.indicators, (indicator) => {
          if (Number(indicator.id) === Number(selectIndicator.id)) {
            indicator.checked = !indicator.checked
          }
        })
      }
      return formItem;
    })
    let dataToApi = this.convertToApiFormat(updatedList)
    this.setState({data: dataToApi})
  }
  convertToApiFormat(updatedList) {
    let list = []
    _.map(updatedList, (item) => {
      console.log('convertToApiFormat', item)
      let indicatorList = ''
      _.forEach(item.indicators, (indicator) => {
        if (indicator.checked === true) {
          indicatorList += '1'
        }
        if (indicator.checked === false) {
          indicatorList += '0'
        }
      })
      list.push(item.formId+':'+indicatorList)
    })
    return _.join(list, ',')
  }
  render() {
    console.log('MonthIndicators', this.props);
    console.log('state', this.state);
    return (
      <div>
        {this.loadForms()}
        <input type="checkbox" onChange={() => { this.changeIndicator(2,6)} }/>
      </div>
    );
  }
}

export default MonthIndicators;
