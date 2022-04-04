import React, { useState } from "react";
import ReactDOM from "react-dom";
import Faq from "react-faq-component";
import "./FAQ.css";
function FAQ() {
  const [ setRowsOption] = useState(null);
  const data = {
   
    rows: [
      {
        title: "Do I have to be home to receive my order?",
        content: `If you choose Same-Day or Express Delivery at checkout, you will need to be home to receive your order and provide valid government-issued photo ID which proves you are 19 years of age or older. For Canada Post delivery, if no one is home, the Canada Post delivery agent will leave a delivery notice card with instructions for pickup. 

        Anyone who is 19 years of age or older may accept your order, as long as they show valid government-issued photo ID.  

        If your package is being picked up from a Canada Post outlet by someone other than you, they must show valid government-issued photo ID (or a document such as a utility bill) that shows they have the same address as you. If they do not live at the same address, they must show valid government-issued photo ID and either the notice card (signed by you and with their name printed on it) or a letter of authorization or a legal document (such as power of attorney) demonstrating their authority to act on your behalf.   `,
      },
      {
        title: "Will I have to show my ID when I receive my order?",
        content:
          "Yes. If you choose Same-Day or Express Delivery at checkout, you will need show valid government-issued photo ID which proves you are 19 years of age or older to the delivery driver.To accept a delivery from a Canada Post delivery agent, you must show original valid government-issued photo ID and sign for the package (due to ongoing COVID-19 restrictions, they may ask for a verbal signature instead). An order can only be delivered to an adult 19 years of age or older.",
      },
      {
        title: "Do you have vegan or gluten-free edibles?",
        content: `Regulations prohibit claims which reference special dietary requirements such as vegan or vegetarian. However, indicating possible allergens, gluten, or sulphites is a mandatory labelling requirement for all edible products. See nutritional label for a full list of ingredients. `,
      },
      {
        title:
          "The product I wanted to purchase is sold out. When will you get more stock?",
        content: `
            Inventory for new cannabis products such as edibles will be limited
            in the beginning but will increase over time. As soon as products
            are replenished, they will be available on our website. We encourage
            you to check back regularly.`,
      },
    ],
  };
 
  return (
    <div className="container">
      <h2 className="section-title" id="faqtitle">Frequently Asked Questions</h2>

      <div className="faq-style-wrapper">
        <Faq data={data} getRowOptions={setRowsOption} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FAQ />, rootElement);

export default FAQ;
