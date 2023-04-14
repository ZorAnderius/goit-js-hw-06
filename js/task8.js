const loginFormEl = document.querySelector(".login-form");
const textFieldEl = document.querySelector(".txt-box-task8");

loginFormEl.addEventListener("submit", onFormSubmitData);

function onFormSubmitData(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const currentEmail = formElements.email.value;
  const currentPassword = formElements.password.value;

  if (currentEmail === "" && currentPassword === "") {
    alert("Please enter a valid email and password");
    return;
  } else if (currentEmail === "") {
    alert("Please enter a valid email");
    return;
  } else if (currentPassword === "") {
    alert("Please enter a valid password");
    return;
  }

  const formData = {
    email: currentEmail,
    password: currentPassword,
  };

  createHTMLElements(formData);

  console.log(formData);

  //   const formDate = new FormData(event.currentTarget);

  //   formDate.forEach((x, y) => {
  //     console.log(`${y} : ${x}`);
  //   });
}

function createHTMLElements({ email, password }) {
  textFieldEl.innerHTML = "";

  const listEl = createHTMLWithClass({
    tag: "ul",
    className: "list-task8",
  });

  const itemEmailEl = createHTMLWithClass({
    tag: "li",
    className: "item-task8",
  });

  const titleEmailEl = createHTMLWithTextContent({
    tag: "p",
    txtContent: "Email:",
  });

  const valueEmailEl = createHTMLElement({
    tag: "span",
    className: "number-styles",
    txtContent: email,
  });

  const itemPasswordlEl = createHTMLWithClass({
    tag: "li",
    className: "item-task8",
  });

  const titlePasswordEl = createHTMLWithTextContent({
    tag: "p",
    txtContent: "Password:",
  });

  const valuePasswordEl = createHTMLElement({
    tag: "span",
    className: "number-styles",
    txtContent: password,
  });

  titleEmailEl.appendChild(valueEmailEl);
  titlePasswordEl.appendChild(valuePasswordEl);

  itemEmailEl.appendChild(titleEmailEl);
  itemPasswordlEl.appendChild(titlePasswordEl);

  listEl.append(itemEmailEl, itemPasswordlEl);
  textFieldEl.append(listEl);
}

const createHTMLWithClass = ({ tag, className }) => {
  const elem = document.createElement(tag);
  elem.className = className;
  return elem;
};

const createHTMLWithTextContent = ({ tag, txtContent }) => {
  const elem = document.createElement(tag);
  elem.textContent = txtContent;
  return elem;
};

const createHTMLElement = ({ tag, className, txtContent }) => {
  const elem = createHTMLWithClass({ tag, className });
  elem.textContent = txtContent;

  return elem;
};
