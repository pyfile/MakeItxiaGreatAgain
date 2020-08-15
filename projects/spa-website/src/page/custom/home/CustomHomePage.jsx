import React from "react";
import { Alert, Button, Card, Col, Row } from "antd";
import { Redirect } from "react-router-dom";
import { routePath } from "PAGE/routePath";
import { useToggle } from "HOOK";
import { CenterMeResponsive } from "COMPONENTS/layout";

function CustomHomePage() {
  const [gotoOrder, setGotoOrder] = useToggle(false);

  function handleGoToOrder() {
    setGotoOrder(true);
  }
  if (gotoOrder) {
    return <Redirect push to={routePath.custom.ORDER} />;
  }

  const orderNotification = (
    <ul style={{ margin: "0.5em" }}>
      <li>
        预约之前，请查看我们的
        <a
          rel="noopener noreferrer"
          href="https://itxia.club/service#TOS"
          target="_blank"
        >
          服务条款
        </a>
      </li>
      <li>
        加入
        <a
          rel="noopener noreferrer"
          href="https://itxia.club/service#groups"
          target="_blank"
        >
          IT侠互助QQ群
        </a>
        在线寻找帮助
      </li>
    </ul>
  );

  return (
    <Card title="预约维修">
      <Row gutter={[8, 24]} type="flex" justify="center" align="top">
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/img/itxia-logo.jpg"
            alt="logo"
            style={{ display: "block" }}
          />
        </Col>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" onClick={handleGoToOrder}>
            发起预约
          </Button>
        </Col>
        <Col span={24}>
          <CenterMeResponsive>
            <Alert type="info" message={orderNotification} />
          </CenterMeResponsive>
        </Col>
      </Row>
    </Card>
  );
}

export { CustomHomePage };
