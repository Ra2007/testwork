import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getInstrumList } from '../../store/actions';

import Component from './index';

const mapStateToProps = state => ({
  instruments: state.instruments
});

const mapDispatchToProps = dispatch => ({
  getInstrumList: params => dispatch(getInstrumList(params))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Component)
);
