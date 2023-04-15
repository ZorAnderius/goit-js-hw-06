const listEl = document.querySelectorAll(".item");
const textBoxEl = document.querySelector(".text-box");

// create object with length, title and li-content properties
const itemInfo = {
  length,
  titleArray: [],
  itemArray: [],
};

itemInfo.length = listEl.length;

// add title to object infoItem
listEl.forEach((listELement) => {
  const { titleArray } = itemInfo;
  const titleElement = listELement.firstElementChild;
  titleArray.push(titleElement.textContent);
});

// add li-content to object infoItem
let count = 0;
listEl.forEach((listELement) => {
  const { itemArray } = itemInfo;
  const itemTemp = listELement.lastElementChild.children;

  const contentArray = [];
  // Object.keys(itemTemp).forEach((item) => {
  //   contentArray.push(item.textContent);
  // });

  Array.prototype.forEach.call(itemTemp, (item) => {
    contentArray.push(item.textContent);
  });

  if (count < listEl.length) {
    itemArray.push(contentArray);
  }
  count++;
});

//add information into HTML page
const btnWrapEl = document.querySelector(".btn-wrap-task1");
const buttonEl = btnWrapEl.firstElementChild;
const clearButtonEl = btnWrapEl.lastElementChild;

buttonEl.addEventListener("click", addCategory);

clearButtonEl.addEventListener("click", onRemoveCategory);

//key that adds the information one time on the HTML page
let switcher = false;

//callback function
function addCategory() {
  //add categories number to HTML page
  if (switcher) {
    return;
  }

  const categTextEl = createHTMLElement({
    tag: "p",
    className: "txt-content",
    txtContent: "Number of categories:",
  });

  const categLengthEl = createHTMLElement({
    tag: "span",
    className: "categories-number",
    txtContent: itemInfo.length,
  });

  console.log(`Number of categories:   ${itemInfo.length}`);
  console.log("");

  categTextEl.append(categLengthEl);
  const { titleArray, itemArray } = itemInfo;

  // add title, ul and li-content to HTML page
  const listEl = createHTMLWithClass({
    tag: "ul",
    className: "categories-list",
  });

  const liArr = titleArray.map((title) => {
    const index = titleArray.indexOf(title);

    const itemEl = createHTMLWithClass({
      tag: "li",
      className: "categories-item",
    });

    const titleCategoryEl = createHTMLWithTextContent({
      tag: "p",
      txtContent: "Category:",
    });

    const numberCategoryEl = createHTMLElement({
      tag: "span",
      className: "number-styles",
      txtContent: title,
    });

    const titleElemEl = createHTMLWithTextContent({
      tag: "p",
      txtContent: "Elements:",
    });

    const numberElemEl = createHTMLElement({
      tag: "span",
      className: "number-styles",
      txtContent: itemArray[index].length,
    });

    titleCategoryEl.appendChild(numberCategoryEl);
    titleElemEl.appendChild(numberElemEl);

    itemEl.append(titleCategoryEl, titleElemEl);
    console.log(`Category:  ${title}`);
    console.log(`Elements: ${itemArray[index].length}`);
    console.log("");

    return itemEl;
  });
  listEl.append(...liArr);

  textBoxEl.append(categTextEl, listEl);

  switcher = true;
}

// remove all HTML elements from text-box
function onRemoveCategory() {
  if (switcher) {
    textBoxEl.innerHTML = "";
    switcher = false;
  }
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
