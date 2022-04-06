import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Typography from "antd/lib/typography";
import Select from "antd/lib/select";
import Button from "antd/lib/button";
import Space from "antd/lib/space";

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const GetSenderAddress = ({
  postalData,
  updateAppState,
  setCurrentStep,
  currentStep,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    updateAppState({
      from: values,
    });
    setCurrentStep(currentStep + 1);
  };

  const handleZipcodeSelect = (selectedZipcode) => {
    const selectedAddressInfo = postalData.find(
      (postal) => postal.US_Zip_Code === selectedZipcode
    );

    form.setFieldsValue({
      city: selectedAddressInfo.Primary_city,
      state: selectedAddressInfo.state,
    });
  };

  const { cities, states, zipCodes } = postalData.reduce(
    (result, next) => {
      const newResult = { ...result };

      if (!result.cities.includes(next.Primary_city)) {
        newResult.cities = newResult.cities.concat(next.Primary_city);
      }

      if (!result.states.includes(next.state)) {
        newResult.states = newResult.states.concat(next.state);
      }

      if (!result.zipCodes.includes(next.US_Zip_Code)) {
        newResult.zipCodes = newResult.zipCodes.concat(next.US_Zip_Code);
      }

      return newResult;
    },
    { cities: [], states: [], zipCodes: [] }
  );

  return (
    <Row align="middle" justify="center">
      <Col span={24}>
        <Typography.Title level={3}>Enter Sender's Address:</Typography.Title>
      </Col>

      <Col xs={24} sm={20} md={18} lg={16} xl={12}>
        <Form
          {...formLayout}
          form={form}
          name="Get Sender's Address"
          onFinish={handleSubmit}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="zipCode"
            label="Zip Code"
            rules={[{ required: true }]}
          >
            <Select showSearch onChange={handleZipcodeSelect}>
              {zipCodes.map((zipCode) => (
                <Select.Option key={zipCode} value={zipCode}>
                  {zipCode}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="state" label="State" rules={[{ required: true }]}>
            <Select showSearch>
              {states.map((state, i) => (
                <Select.Option key={i} value={state}>
                  {state}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="city" label="City" rules={[{ required: true }]}>
            <Select showSearch>
              {cities.map((city, i) => (
                <Select.Option key={i} value={city}>
                  {city}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Space>
              <Button onClick={() => form.resetFields()}>Reset</Button>
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

export default GetSenderAddress;
