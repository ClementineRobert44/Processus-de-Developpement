function setFormatDate(myDate) {
  var dd = String(myDate.getDate()).padStart(2, "0");
  var mm = String(myDate.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = myDate.getFullYear();

  return dd + "/" + mm + "/" + yyyy;
}

// Format stringDate : "mm/dd/yyyy"
function getDateFromString(stringDate) {
  return new Date(stringDate);
}

export { setFormatDate, getDateFromString };
