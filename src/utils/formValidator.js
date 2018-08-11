const ValidateFormData = formData => {
  let newData = formData.length > 0 ? [...formData] : formData;
  newData.map(data => {
    let rules = data["rules"] || null;
    if (rules) {
      if (rules["isRequired"]) {
        if (data.value === "") {
          data.error = {
            hasError: true,
            errorMsg: "Required Field",
          };
        } else {
          data.error = {
            hasError: false,
            errorMsg: "",
          };
        }
      }
    } else {
      data.error = {
        hasError: false,
        errorMsg: "",
      };
    }
    return data;
  });
  return newData;
};
export default ValidateFormData;
