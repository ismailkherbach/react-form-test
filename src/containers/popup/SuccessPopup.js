import React, { useEffect } from "react";
import closeIcon from "../../assets/cancel.svg";

export default function SuccessPopup(props) {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    clearInterval();
  }, []);

  return (
    <>
      <div className="popup-container flex fdc aic jcc">
        <div className="success-container flex fdc aic jcc">
          <div className="close flex fdr aic jcc">
            <img alt="close" src={closeIcon} onClick={props.close} />
          </div>
          {loading ? (
            <div className="loading flex fdc aic jcc">
              <div className="loading-main"></div>
            </div>
          ) : (
            <h4>Your course has been successfully registered.</h4>
          )}
        </div>
      </div>
    </>
  );
}
