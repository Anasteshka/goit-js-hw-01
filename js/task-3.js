`use strict`;

function getElementWidth(content, padding, border) {
  const contentWidth = Number.parseFloat(content);
  const contentPadding = Number.parseFloat(padding);
  const contentBorder = Number.parseFloat(border);
  const width = contentWidth + contentPadding * 2 + contentBorder * 2;
  return width;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
