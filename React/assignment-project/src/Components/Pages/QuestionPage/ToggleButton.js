import {React, useRef} from "react";

function ToggleButton() {
  // **********************************************************************
  // const toggleRef =useRef();
  // const toggleMode = () => {

  // };

    // $("Button").click(function () {
  //   if ($(".toggle-circle").css("margin-left") == "0px") {
  //     $(".toggle-circle").animate(
  //       {
  //         marginLeft: "60px",
  //         backgroundColor: "#007bff"
  //       },
  //       1000
  //     );
  //   } else {
  //     $(".toggle-circle").animate(
  //       {
  //         marginLeft: "0",
  //       },
  //       1000
  //     );
  //   }
  // });

  // **********************************************************************
  return (
    <div className="pages" onClick={toggleMode}>
      <Button
        ref={toggleRef}
        className="toggle-btn-off shadow-none"
        variant="primary"
        type="mytogglebutton"
      >
        <div className="toggle-circle" />
      </Button>
    </div>
  );

}

export default ToggleButton;




