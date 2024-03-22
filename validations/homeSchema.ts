import * as yup from "yup";

export const homeSchema = yup.object({
  title: yup.string().min(5).max(50).required(),
  countries: yup.string().min(5).max(50).required(),
  state: yup.string().min(5).max(50).required(),
  city: yup.string().max(50).required(),
  price: yup.number().required().typeError("Amount should be number."),
  description: yup.string().min(10).max(20000).required(),
  categories: yup
    .mixed<Array<string> | []>()
    .test("categories", "Please select at least one category", (data: any) => {
      const isValid = data?.length >= 1;
      return isValid;
    }),
  image: yup
    .mixed()
    .test(
      "image",
      "Please select an image, only JPEG,PNG,WEPB formats are allowed",
      (file: any) => {
        const isValid =
          file?.type == "image/jpeg" ||
          file?.type == "image/png" ||
          file?.type == "image/webp";
        return isValid;
      }
    )
    .test("imageSize", "Image size should be less than 2MB", (file: any) => {
      const isValid = file?.size <= 2 * 1024 * 1024;
      return isValid;
    }),
});
// .required();

export type AddHomeType = yup.InferType<typeof homeSchema>;
