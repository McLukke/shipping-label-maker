import CaptureAddressForm from "../common/components/capture-address-form";

const GetSenderAddress = (props) => {
  const title = "Enter Sender's Address";

  return <CaptureAddressForm title={title} {...props} />;
};

export default GetSenderAddress;
