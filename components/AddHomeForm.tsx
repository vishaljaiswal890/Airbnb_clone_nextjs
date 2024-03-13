"use client";
import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { countries } from "@/Config/countries";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { categories } from "@/Config/Cateogories";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddHomeType, homeSchema } from "@/validations/homeSchema";
import { Button } from "./ui/button";
import { login } from "@/app/redux/UiSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/UiStore";
import { useRouter } from "next/navigation";

const AddHomeForm = () => {
  const [desription, setDesription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [homeCateogories, setHomeCateogories] = useState<string[]>([]);
  // const dispatch = useDispatch(); // Redux dispatch function
  const isLoggedIn = useSelector((state: RootState) => state.ui.isLoggedIn); // Get login status from Redux store
  const router = useRouter();
  const uiRedux = useSelector((state: RootState) => state.ui);

  //Validations
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AddHomeType>({
    resolver: yupResolver(homeSchema),
  });

  useEffect(() => {
    setValue("categories", homeCateogories);
    setValue("description", desription);
  }, [homeCateogories, desription]);

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setValue("image", file);
    }
  };

  const onSubmit = async (payload: AddHomeType) => {
    if (isLoggedIn) {
      console.log("Form Submitted", payload);
    } else {
      console.log("User not logged in", isLoggedIn);
      router.push("/");
      // dispatch(login());
    }
  };
  return (
    <div>
      {uiRedux.isLoggedIn ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mt-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter your title..."
                {...register("title")}
              />
              <span className="text-xs text-red-500">
                {errors?.title?.message}
              </span>
            </div>
            <div className="mt-2">
              <Label htmlFor="country">Countries</Label>
              <select
                id="country"
                className="outline-brand h-10 w-full rounded-md px-3 py-2 text-sm border"
                {...register("country")}
              >
                <option value="">--Select Country--</option>
                {countries.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
              <span className="text-xs text-red-500">
                {errors?.country?.message}
              </span>
            </div>
            <div className="mt-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                placeholder="Enter your state..."
                {...register("state")}
              />
              <span className="text-xs text-red-500">
                {errors?.state?.message}
              </span>
            </div>
            <div className="mt-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="Enter your city..."
                {...register("city")}
              />
              <span className="text-xs text-red-500">
                {errors?.city?.message}
              </span>
            </div>
            <div className="mt-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                placeholder="Enter your price..."
                {...register("price")}
              />
              <span className="text-xs text-red-500">
                {errors?.price?.message}
              </span>
            </div>
            <div className="mt-2">
              <Label htmlFor="image">Image</Label>
              <Input id="image" type="file" onChange={handleChangeImage} />
              <span className="text-xs text-red-500">
                {errors?.image?.message}
              </span>
            </div>
            <div className="mt-2 col-span-2 w-full">
              <Label htmlFor="Description">Description</Label>
              <ReactQuill
                theme="snow"
                value={desription}
                onChange={setDesription}
              />
              <span className="text-xs text-red-500">
                {errors?.description?.message}
              </span>
            </div>
          </div>
          <div className="mt-2">
            <Label htmlFor="categories">Categories</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2 w-full">
              {categories.map((item) => (
                <div className="flex space-x-2">
                  <input
                    type="checkbox"
                    id={item.name}
                    value={item.name}
                    checked={homeCateogories.includes(item.name)}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setHomeCateogories([...homeCateogories, item.name]);
                      } else {
                        const filterCategories = homeCateogories.filter(
                          (item) => item !== event.target.value
                        );
                        setHomeCateogories(filterCategories);
                      }
                    }}
                  />
                  <Label htmlFor={item.name} className="text-sm font-medium">
                    {item.name}
                  </Label>
                </div>
              ))}
            </div>
            <span className="text-xs text-red-500">
              {errors?.categories?.message}
            </span>
          </div>
          <Button className="bg-brand text-white mt-5 mb-5 w-full">
            Add Home
          </Button>
        </form>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711147137!2d73.78056572345795!3d18.524598599628863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710080369649!5m2!1sen!2sin"
          width="600"
          height="650"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
};

export default AddHomeForm;
