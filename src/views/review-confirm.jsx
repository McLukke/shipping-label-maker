import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Typography from "antd/lib/typography";
import Button from "antd/lib/button";
import Space from "antd/lib/space";

import styles from "./styles.module.css";
import { getShippingCost } from "../common/utils/helper";

const ReviewConfirm = ({
  shippingLabel,
  resetAppState,
  setCurrentStep,
  currentStep,
}) => {
  const goBack = () => setCurrentStep(currentStep - 1);

  const handleConfirm = () => resetAppState();

  return (
    <Row align="middle" justify="center">
      <Col span={24}>
        <Typography.Title level={3}>Review and Confirm:</Typography.Title>
      </Col>

      <Col xs={24} sm={20} md={18} lg={16} xl={12}>
        <pre className={styles.code}>
          <code>{JSON.stringify(shippingLabel, null, 4)}</code>
        </pre>

        <Typography.Title level={5}>
          Your total shipping cost is: {getShippingCost(shippingLabel)}
        </Typography.Title>

        <Space>
          <Button onClick={goBack}>Back</Button>
          <Button type="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default ReviewConfirm;
