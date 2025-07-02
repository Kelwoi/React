import React from "react";
import { useForm } from "react-hook-form";

export default function ReviewForm({ onAddReview }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      rating: 1,
      pros: "",
      cons: "",
      comment: "",
    },
  });

  const onSubmit = (data) => {
    const reviewWithDate = {
      ...data,
      date: new Date().toISOString().split("T")[0],
    };
    onAddReview(reviewWithDate);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="review-form">
      <h2>Залишити відгук</h2>

      <label>Ім'я</label>
      <input {...register("name", { required: "Введіть ім'я" })} />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <label>Оцінка</label>
      <select {...register("rating", { required: true })}>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>

      <label>Переваги</label>
      <input {...register("pros", { required: "Введіть переваги" })} />
      {errors.pros && <p className="error">{errors.pros.message}</p>}

      <label>Недоліки</label>
      <input {...register("cons", { required: "Введіть недоліки" })} />
      {errors.cons && <p className="error">{errors.cons.message}</p>}

      <label>Коментар</label>
      <textarea {...register("comment", { required: "Введіть коментар" })} />
      {errors.comment && <p className="error">{errors.comment.message}</p>}

      <button type="submit">Надіслати</button>
    </form>
  );
}
