import React, { PureComponent } from "react";
import { TokenMetrics as TokenMetricsRender } from "../components/TokenMetrics/TokenMetrics";
import { connect } from "react-redux";
import { changeTab, fetchDataEpic } from "../store/reducer";

const mapStateToProps = state => {
  return {
    activeTab: state.activeTab,
    tokenData: state.tokenData,
    tokenPriceData: state.tokenPriceData,
    error: state.error,
    errorMessage: state.errorMessage,
    fetchTokenDataPending: state.fetchTokenDataPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tabChanged: id => dispatch(changeTab(id)),
    fetchTokenData: (tokenAddress) => dispatch(fetchDataEpic(tokenAddress))
  };
};
class TokenMetrics extends PureComponent {
  componentDidMount() {
    // console.log("container mounted");
    // console.log(this.props)
    this.props.fetchTokenData()
    
  }
  render() {
    return <TokenMetricsRender {...this.props} />;
  }
}

export const TokenMetricsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenMetrics);
