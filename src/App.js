import logo from "./logo_black.png";
import "./App.css";

const handleClick = () => {
  console.log("Clicked!");

  var options = {
    key: "rzp_test_7PGzewMisE928v", // Enter the Key ID generated from the Dashboard
    amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Distinguished Society",
    description: "Test Transaction",
    // image: "https://example.com/your_logo",
    order_id: "order_JWaHoRo6FGQsHk", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response) {
      console.log(response);
      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
    },
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "7030737095",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    // theme: {
    //   color: "#3399cc",
    // },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();

  paymentObject.on("payment.failed", function (res) {
    console.log(res);
  });

  // var rzp1 = new Razorpay(options);
  // rzp1.on("payment.failed", function (response) {
  //   alert(response.error.code);
  //   alert(response.error.description);
  //   alert(response.error.source);
  //   alert(response.error.step);
  //   alert(response.error.reason);
  //   alert(response.error.metadata.order_id);
  //   alert(response.error.metadata.payment_id);
  // });
};

function App() {
  return (
    <div className="App">
      <button onClick={handleClick}>Start payment</button>
    </div>
  );
}

export default App;
