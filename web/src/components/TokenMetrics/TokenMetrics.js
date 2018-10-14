import React from "react";
import Auxiliary from "./../../hoc/Auxiliary/Auxiliary";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Jumbotron,
  Alert
} from "reactstrap";
import classnames from "classnames";
import classes from "./TokenMetrics.css";

export const TokenMetrics = props => (
  <Auxiliary>
    <Jumbotron className={classes.jumbotron}>
      <Col xs={{ size: 10, offset: 1 }} md={{size: 6, offset: 3}}>
        <h1>Token BNB Vitality measured by:</h1>
        
        {props.error && <Alert color="danger">{props.errorMessage}</Alert>}

        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: props.activeTab === "1" })}
              onClick={() => {
                props.tabChanged("1");
              }}
            >
              Operations
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: props.activeTab === "2" })}
              onClick={() => {
                props.tabChanged("2");
              }}
            >
              24h Volume
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: props.activeTab === "3" })}
              onClick={() => {
                props.tabChanged("3");
              }}
            >
              Capitalisation
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={props.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col xs="12">
                <Card body>
                  <CardTitle>Operations</CardTitle>
                  {props.fetchTokenDataPending ? (
                    <span>loading...</span>
                  ) : (
                    <CardText>
                      <span>Numer of operations made with BNB token usage: {props.tokenData.transfersCount}</span>
                    </CardText>
                  )}
                  <Button
                    onClick={() => {
                      props.fetchTokenData();
                    }
                  }>
                  Refresh</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col xs="12">
                <Card body>
                  <CardTitle>24h Volume</CardTitle>
                  {props.fetchTokenDataPending ? (
                    <span>loading...</span>
                  ) : (
                  <CardText>
                    <span>Token operations volume for last 24h in USD: {props.tokenPriceData.volume24h}</span>
                  </CardText>
                  )}
                  <Button
                    onClick={() => {
                      props.fetchTokenData();
                    }}
                  >
                    Refresh
                  </Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col xs="12">
                <Card body>
                  <CardTitle>Market Capitalisation</CardTitle>
                  {props.fetchTokenDataPending ? (
                    <span>loading...</span>
                  ) : (
                  <CardText>
                    <span>Market Capitalisation counted in USD: {props.tokenPriceData.marketCapUsd}</span>
                  </CardText>
                  )}
                  <Button
                    onClick={() => {
                      props.fetchTokenData();
                    }}
                  >
                    Refresh
                  </Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Col>
    </Jumbotron>
  </Auxiliary>
);
