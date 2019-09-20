import React from "react";
import Title from "../../components/Title";
import { Card, Col, Row } from "antd";
import { Container } from "./styles";

export const Home = props => {
  return (
    <React.Fragment>
      <Title>INICIO</Title>
      <Container>
        <div style={{ padding: "20px" }}>
          <Row gutter={25}>
            <Col span={8}>
              <Card title="Métricas" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Indices" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Metas" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
        ,
      </Container>
    </React.Fragment>
  );
};

export default Home;
