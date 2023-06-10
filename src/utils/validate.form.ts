const validateFormData = (formData: any): boolean => {
  for (const key in formData) {
    if (formData[key] === null || formData[key] === undefined) {
      return false;
    }
  }

  return true;
};

export default validateFormData;
