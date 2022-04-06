import { SHIPPING_OPTION, SHIPPING_RATE } from "./constants";

export const getShippingCost = ({ weight, shippingOption }) => {
  const cost =
    weight *
    SHIPPING_RATE *
    (shippingOption === SHIPPING_OPTION.ground ? 1 : 1.5);

  return `$${cost.toFixed(2)}`;
};
