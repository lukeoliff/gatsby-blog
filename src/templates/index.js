import React, { Component } from 'react';
import Link from 'gatsby-link';
import BlogPosting from '../components/blog-posting';
import {
  Jumbotron,
  Col,
  Clearfix,
  Grid,
  Row,
  Pager,
  Breadcrumb
} from 'react-bootstrap';
import helmet from 'react-helmet';

const NavLink = props => {
  if (!props.test) {
    if (props.previous) {
      return (
        <Pager.Item previous href={url}>
          {props.text}
        </Pager.Item>
      );
    } else if (props.next) {
      return (
        <Pager.Item next href={url}>
          {props.text}
        </Pager.Item>
      );
    }
  } else {
    return <span />;
  }
};

class IndexPage extends Component {
  breadcrumbs() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item active>
          Blog
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  jumbotron() {
    return (
      <Jumbotron style={{
        height: '400px',
        backgroundColor: '#555',
        color: 'white'
      }}>
        <Col md={8} mdOffset={2} lg={6} lgOffset={3}>
          <h1>Blog</h1>
        </Col>
        <Clearfix />
      </Jumbotron>
    )
  }

  render() {
    const { data, pathContext } = this.props;
    const { group, nextPath, prevPath } = pathContext;

    return (
      <main>
        {this.jumbotron()}
        <Grid fluid>
          <Row className="show-grid">
            <Col md={8} mdOffset={2} lg={6} lgOffset={3}>
              {this.breadcrumbs()}
            </Col>
          </Row>
          {group.map(({ node }) => (
            <Row key={node.id} className="show-grid">
              <Col md={8} mdOffset={2} lg={6} lgOffset={3}>
                <BlogPosting post={node} preview="true" />
              </Col>
            </Row>
          ))}
          <Row className="show-grid">
            <Col md={8} mdOffset={2} lg={6} lgOffset={3}>
              <Pager>
                <Pager.Item disabled={!prevPath} previous href={prevPath}>
                  &larr; Older posts
                </Pager.Item>
                <Pager.Item disabled={!nextPath} next href={nextPath}>
                  Newer posts &rarr;
                </Pager.Item>
              </Pager>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }
}

export default IndexPage;
