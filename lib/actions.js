'use server';

import { saveMeal } from "@/db_query/meals";
import { redirect } from "next/navigation";

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instruction: formData.get('instruction'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  await saveMeal(meal);
  redirect('/meals');
};
