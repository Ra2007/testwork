import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Component from './index';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Component)
);
