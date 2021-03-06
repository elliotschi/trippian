import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronTrippianWidget, InquiryListWidget, ReviewListWidget, TextIntroPlainWidget, TextIntroRichWidget, TripPostFormWidget, DummyRichTextWidget,
  UserinquiryWidget, TrippianProfileWidget
}
from '../../components/index'
import {
  Alert
}
from 'react-bootstrap'
import {
  bindActionCreators
}
from 'redux'
import {
  connect
}
from 'react-redux'
import {
  MyInquiries as appConfig
}
from '../../config/appConfig'

function mapStateToProps(state) {
  return {
    // get the data directly from store as we already fetched in the Dashboard container
    dashboard: state.apiTrippian.get('dashboard')
  }
}

@
connect(mapStateToProps)
export default class MyInquiries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowTripForm: true
    }
  }

  handleSubmit(data) {
    log.info('--- submitting the inquiry now', data)
    this.props.postTrip(data)
  }
  render() {
    const {
      inquiries
    } = this.props.dashboard
    log.info('inside MyInquiries render', inquiries)
    return (
      <div className="my-inquiries-page">
        <h2>{appConfig.containerTitle}</h2>
        <InquiryListWidget dataList={inquiries} noContentMessage={appConfig.noContentMessage} /> 
      </div >

    )
  }
}



MyInquiries.propTypes = {
  name: PropTypes.string
}

MyInquiries.displayName = 'MyInquiries Page'
