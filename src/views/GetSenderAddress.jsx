import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Typography from "antd/lib/typography";
import Select from "antd/lib/select";

const GetSenderAddress = ({ postalData }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {};

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
    <Row>
      <Col span={24}>
        <Typography.Title level={3}>Enter receiver's address:</Typography.Title>
      </Col>
      <Form form={form} name="Get Sender's Address" onFinish={handleSubmit}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="zipCode" label="Zip Code" rules={[{ required: true }]}>
          <Select showSearch>
            {zipCodes.map((zipCode) => (
              <Select.Option key={zipCode} value={zipCode}>
                {zipCode}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="City" label="City" rules={[{ required: true }]}>
          <Select showSearch>
            {cities.map((city, i) => (
              <Select.Option key={i} value={city}>
                {city}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="State" label="State" rules={[{ required: true }]}>
          <Select showSearch>
            {states.map((state, i) => (
              <Select.Option key={i} value={state}>
                {state}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default GetSenderAddress;
