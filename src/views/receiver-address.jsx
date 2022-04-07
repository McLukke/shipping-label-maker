import CaptureAddressForm from "../common/components/capture-address-form";

const GetReceiverAddress = (props) => {
  const title = "Enter Receiver's Address";

  return <CaptureAddressForm title={title} {...props} />;
};

export default GetReceiverAddress;
