import * as Yup from "yup";

export const addPlaylistValues = {
  name: "",
  description: "",
  testType: "",
};

export const addPlaylistValid = Yup.object().shape({
  name: Yup.string()
    .required("Name is required *")
    .max(12, "Name should not exceed 12 characters."),
  description: Yup.string()
    .required("Description is required *")
    .max(24, "Description should not exceed 24 characters."),
  testType: Yup.string().required("Test type is required *"),
});
