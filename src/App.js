import React from "react";
import PageHeader from "antd/lib/page-header";
import Steps from "antd/lib/steps";

import { TOTAL_STEPS, INIT_APP_STATE as initState } from "./constants";
import styles from "./App.module.css";

const App = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [appState, setAppState] = React.useState({ ...initState });

  const resetAppState = () => {
    setCurrentStep(0);
    setAppState({ ...initState });
  };

  return (
    <div className={styles.base}>
      <PageHeader title="Shipping Label Maker" />

      <div className={styles.content}>
        <Steps
          current={currentStep}
          status={appState.hasError ? "error" : "process"}
        >
          {TOTAL_STEPS.map((step) => (
            <Steps.Step key={step.title} title={step.title} />
          ))}
        </Steps>

        <div className={styles.wizard}>Wizard here</div>
      </div>
    </div>
  );
};

export default App;
