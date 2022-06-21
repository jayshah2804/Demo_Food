
const SimpleInput = (props) => {
  const inputCHangeHandler = (event) => {
    async function postalCodes() {
      let response = await fetch("https://api.postalpincode.in/pincode/" + event.target.value);
      let data = await response.json();
      if (data[0].PostOffice) {
        let finalArr = data[0].PostOffice.filter((status) =>
          status.DeliveryStatus === "Delivery").map(data => data.Name);
        document.getElementById("postalResults").innerHTML = null;
        for (let i = 0; i < finalArr.length; i++) {
          const para = document.createElement("p");
          para.innerText = finalArr[i];
          document.getElementById("postalResults").appendChild(para);
        }
      }

    }
    postalCodes();
  }

  return (
    <form >
      <input type="text" onChange={inputCHangeHandler} style={{ width: "500px", height: "30px" }} />
      <div id="postalResults"></div>
    </form>
  );
};

export default SimpleInput;
