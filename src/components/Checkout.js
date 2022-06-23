import React from "react";
import "./Checkout.css";
import FormInput from "./FormInput";
export default function Checkout(props) {
  const [isFormShown, setIsFormShown] = React.useState(false);
  const [areThanksShown, setAreThanksShown] = React.useState(false);

  const [buyerInfo, setBuyerInfo] = React.useState({
    name: "",
    country: "",
    location: "",
  });

  // State to handle input validation (Could've added to buyerInfo state)
  const [validity, setValidity] = React.useState([
    { name: "name", isValid: false },
    { name: "location", isValid: false },
  ]);

  // Changes both states according to what is added in the input elements.
  function handleInput(e) {
    setValidity((oldValidity) =>
      oldValidity.map((input) =>
        input.name !== e.target.name
          ? input
          : { ...input, isValid: e.target.checkValidity() }
      )
    );
    setBuyerInfo({ ...buyerInfo, [e.target.name]: e.target.value });
  }

  // Potentially moving countryList to another file
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ];
  const countries = countryList.map((country) => {
    return (
      <option value={country} label={country}>
        {country}
      </option>
    );
  });

  //Inputs data to map over and generate input components (mostly for ease of validation)
  const inputsData = [
    {
      key: 1,
      name: "name",
      label: "Name",
      placeholder: "Your name",
      type: "text",
      required: true,
      errorMessage:
        "Name should be at least 3 and up to 16 characters. Letters and spaces only.",
      pattern: "^[a-zA-Z\\s]{3,16}$",
    },
    {
      key: 2,
      name: "country",
      label: "Country",
      placeholder: "Select your country",
      type: "text",
      required: true,
      errorMessage: "Choose an existing country",
      pattern: "^[a-zA-Z\\s]{3,16}$",
    },
    {
      key: 3,
      name: "location",
      label: "Location",
      placeholder: "Location/City",
      type: "text",
      required: true,
      errorMessage: "City should be at least 2 and up to 16 characters",
      pattern: "^[A-Za-z0-9\\s]{2,16}$",
    },
  ];
  const inputs = inputsData.map((input) => {
    return input.name !== "country" ? (
      <FormInput id={input.key} {...input} onChange={handleInput} />
    ) : (
      <div className="country-selector-container">
        <label>{input.label}</label>
        <select
          onChange={handleInput}
          id={input.id}
          name={input.name}
          className="country-selection"
          required="true"
        >
          <option disabled="disabled">Choose a country</option>
          {countries}
        </select>
      </div>
    );
  });

  const cart = props.cart;
  const total = Math.floor(
    cart.reduce(function (previous, current) {
      return previous + current.price * current.quantity;
    }, 0)
  );

  function placeOrder() {
    props.resetCart();
    setAreThanksShown(true);
  }
  function showPaymentForm() {
    setIsFormShown(true);
  }

  function avoidSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="checkout">
      <div className="pay-btns">
        <button
          type="button"
          style={!isFormShown ? { display: "block" } : { display: "none" }}
          onClick={showPaymentForm}
        >
          Pay $ {total} in laughs :D{<br></br>} ←
        </button>
        <button
          type="button"
          style={!isFormShown ? { display: "block" } : { display: "none" }}
          onClick={showPaymentForm}
        >
          Pay ${total} in smiles :) {<br></br>} →
        </button>
      </div>
      <form
        onSubmit={avoidSubmit}
        className="payment-info"
        style={!isFormShown ? { display: "none" } : { display: "flex" }}
      >
        <div
          className="inputs-container"
          style={areThanksShown ? { display: "none" } : { display: "flex" }}
        >
          {inputs}
          <button
            type="button"
            className="order-btn"
            onClick={(e) => {
              avoidSubmit(e);
              placeOrder();
            }}
          >
            Place order
          </button>
        </div>
        <p
          className="thanks-text"
          style={areThanksShown ? { display: "block" } : { display: "none" }}
        >
          Thank you {buyerInfo.name} for your purchase! Your memes will shortly
          be on their way to {buyerInfo.location}, {buyerInfo.country}. The
          order should arrive in about 4d20h and 69 minutes.
        </p>
      </form>
    </section>
  );
}
