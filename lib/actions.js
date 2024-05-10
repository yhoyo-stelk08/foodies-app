'use server';

import { saveMeal } from '@/db_query/meals';
import { redirect } from 'next/navigation';

function isInvalidInput(text) {
  return !text || text.trim() === '';
}

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instruction: formData.get('instruction'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidInput(meal.title) ||
    isInvalidInput(meal.summary) ||
    isInvalidInput(meal.instruction) ||
    isInvalidInput(meal.creator) ||
    isInvalidInput(meal.creator_email) ||
    !meal.creator_email.include('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error('Error occured caused by invalid input.');
  }
  await saveMeal(meal);
  redirect('/meals');
};
