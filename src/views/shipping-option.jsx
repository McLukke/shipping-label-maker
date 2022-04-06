import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Form from "antd/lib/form";
import Select from "antd/lib/select";
import Typography from "antd/lib/typography";
import Button from "antd/lib/button";
import Space from "antd/lib/space";

import { SHIPPING_OPTION } from "../common/utils/constants";

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ShippingOption = ({ updateAppState, setCurrentStep, currentStep }) => {
  const handleSubmit = ({ shippingOption }) => {
    updateAppState({ shippingOption });
    setCurrentStep(currentStep + 1);
  };

  const goBack = () => setCurrentStep(currentStep - 1);

  return (
    <Row align="middle" justify="center">
      <Col span={24}>
        <Typography.Title level={3}>
          Select Preferred Shipping Option:
        </Typography.Title>
      </Col>

      <Col xs={24} sm={20} md={18} lg={16} xl={12}>
        <Form {...formLayout} name="shipping-option" onFinish={handleSubmit}>
          <Form.Item
            name="shippingOption"
            label="Shipping Option"
            rules={[{ required: true }]}
          >
            <Select>
              {Object.entries(SHIPPING_OPTION).map((entry) => (
                <Select.Option key={entry[0]} value={entry[1]}>
                  {`${entry[0].charAt(0).toUpperCase()}${entry[0]
                    .toLowerCase()
                    .slice(1)}`}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Space>
              <Button onClick={goBack} htmlType="submit">
                Back
              </Button>
              <Button type="primary" htmlType="submit">
                Next
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ShippingOption;
