import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Typography from "antd/lib/typography";
import Button from "antd/lib/button";
import Space from "antd/lib/space";

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const PackageWeight = ({ updateAppState, setCurrentStep, currentStep }) => {
  const handleSubmit = ({ weight }) => {
    updateAppState({ weight });
    setCurrentStep(currentStep + 1);
  };

  const goBack = () => setCurrentStep(currentStep - 1);

  return (
    <Row align="middle" justify="center">
      <Col span={24}>
        <Typography.Title level={3}>
          Enter Package Weight (in grams):
        </Typography.Title>
      </Col>

      <Col xs={24} sm={20} md={18} lg={16} xl={12}>
        <Form {...formLayout} name="package-weight" onFinish={handleSubmit}>
          <Form.Item
            name="weight"
            label="Package Weight (g)"
            rules={[{ required: true }]}
          >
            <Input />
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

export default PackageWeight;
