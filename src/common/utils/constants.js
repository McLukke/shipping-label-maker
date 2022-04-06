export const SHIPPING_OPTION = {
  ground: 1,
  priority: 2,
};

const ADDRESS = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
};

export const INIT_APP_STATE = {
  from: ADDRESS,
  to: ADDRESS,
  weight: 0,
  shippingOption: 1,
};

export const TOTAL_STEPS = [
  { title: "Sender's Address" },
  { title: "Receiver's Address" },
  { title: "Package Weight" },
  { title: "Shipping Option" },
  { title: "Review and Confirm" },
];

export const SHIPPING_RATE = 0.4;
