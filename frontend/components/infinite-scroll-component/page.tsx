"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Терафлы уугаад миний өвдөлт намдсан санал болгож байна.Усанд хийж уухад гоё байсан",
    name: "Бат",
    rating: 3,
    title: "Терафлы",
  },
  {
    quote: "Нэг удаагын малгай нь хэрэглэхэд хялбар чанартай байсан.",
    name: "Дорж",
    rating: 4,
    title: "Нэг удаагын малгай",
  },
  {
    quote:
      "Терафлы уугаад миний өвдөлт намдсан санал болгож байна.Усанд хийж уухад гоё байсан",
    name: "Cараа",
    rating: 3.4,
    title: "Зүү",
  },
  {
    quote:
      "Терафлы уугаад миний өвдөлт намдсан санал болгож байна.Усанд хийж уухад гоё байсан",
    name: "Цэцгээ",
    rating: 5,
    title: "Санитоз",
  },
  {
    quote:
      "Терафлы уугаад миний өвдөлт намдсан санал болгож байна.Усанд хийж уухад гоё байсан",
    name: "Бат",
    rating: 4.5,
    title: "Ацц",
  },
  {
    quote:
      "Терафлы уугаад миний өвдөлт намдсан санал болгож байна.Усанд хийж уухад гоё байсан",
    name: "Болд",
    rating: 4,
    title: "Эм",
  },
  {
    quote:
      "Терафлы уугаад миний өвдөлт намдсан санал болгож байна.Усанд хийж уухад гоё байсан",
    name: "Даш",
    rating: 4.3,
    title: "Тариа",
  },
  {
    quote:
      "Терафлы уугаад миний өвдөлт намдсан санал болгож байна.Усанд хийж уухад гоё байсан",
    name: "Ням",
    rating: 3,
    title: "Уян боолт",
  },
  {
    quote:
      "Терафлы уугаад миний өвдөлт намдсан санал болгож байна.Усанд хийж уухад гоё байсан",
    name: "Од",
    rating: 5,
    title: "Уян боолт",
  },
  {
    quote:
      "Терафлы уугаад миний өвдөлт намдсан санал болгож байна.Усанд хийж уухад гоё байсан",
    name: "Бат",
    rating: 3.2,
    title: "Уян боолт",
  },
  {
    quote:
      "Терафлы уугаад миний өвдөлт намдсан санал болгож байна.Усанд хийж уухад гоё байсан",
    name: "Болд",
    rating: 3.5,
    title: "Уян боолт",
  },
];
