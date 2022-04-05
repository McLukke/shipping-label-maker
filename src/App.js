import React, { useState, useEffect } from "react";
import PageHeader from "antd/lib/page-header";
import Steps from "antd/lib/steps";
import Spin from "antd/lib/spin";

import {
  TOTAL_STEPS,
  INIT_APP_STATE as initState,
} from "./common/utils/constants";
import styles from "./App.module.css";
import GetSenderAddress from "./views/GetSenderAddress";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [shippingLabel, setShippingLabel] = useState({ ...initState });
  const [postalData, setPostalData] = useState({
    isLoading: false,
    data: [],
  });

  useEffect(() => {
    if (!postalData.isLoading && !postalData.data.length) {
      setPostalData({
        ...postalData,
        isLoading: true,
      });

      Promise.all([
        fetch(
          "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json"
        ).then((res) => res.json()),
        fetch(
          `https://parseapi.back4app.com/classes/US_Zip_Code?limit=50&keys=Primary_city,County,State,US_Zip_Code,country&where=${JSON.stringify(
            { country: "US" }
          )}`,
          {
            headers: {
              "X-Parse-Application-Id":
                "aE79wHM9EudKOTLWVaIJ1hR0hygU4CAVGvGfetjP",
              "X-Parse-Master-Key": "An2S02k3ly1LioZ0AQaKbKsafGnIe8IOrXTooFSn",
            },
          }
        ).then((res) => res.json()),
      ]).then((responses) => {
        setPostalData({
          isLoading: false,
          data: responses[1].results.map((data) => ({
            ...data,
            stateCode: data.State,
            state: responses[0][data.State],
          })),
        });
      });
    }
  }, [postalData]);

  const resetAppState = () => {
    setCurrentStep(0);
    setShippingLabel({ ...initState });
  };

  return (
    <div className={styles.base}>
      <PageHeader title="Shipping Label Maker" />

      <div className={styles.content}>
        {postalData.isLoading ? (
          <Spin />
        ) : (
          <>
            <Steps
              current={currentStep}
              status={shippingLabel.hasError ? "error" : "process"}
            >
              {TOTAL_STEPS.map((step) => (
                <Steps.Step key={step.title} title={step.title} />
              ))}
            </Steps>

            <div className={styles.wizard}>
              <GetSenderAddress
                setShippingLabel={setShippingLabel}
                setCurrentStep={setCurrentStep}
                postalData={postalData.data}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
