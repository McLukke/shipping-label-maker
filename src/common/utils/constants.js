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
  hasError: false,
};

export const TOTAL_STEPS = [
  {
    title: "Sender's Address",
    content: "collect sender address",
  },
  {
    title: "Receiver's Address",
    content: "collect receiver address",
  },
  {
    title: "Package Weight",
    content: "get package weight",
  },
  {
    title: "Shipping Option",
    content: "get shipping option",
  },
  {
    title: "Review and Confirm",
    content: "review and confirm",
  },
];
