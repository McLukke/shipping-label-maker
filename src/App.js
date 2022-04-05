import React from "react";
import PageHeader from "antd/lib/page-header";
import Steps from "antd/lib/steps";

import styles from "./App.module.css";

const totalSteps = [
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

const App = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <div className={styles.base}>
      <PageHeader title="Shipping Label Maker" />

      <div className={styles.content}>
        <Steps current={currentStep}>
          {totalSteps.map((step) => (
            <Steps.Step key={step.title} title={step.title} />
          ))}
        </Steps>

        <div className={styles.wizard}>Wizard here</div>
      </div>
    </div>
  );
};

export default App;
