// lib/queries.js
import { groq } from "next-sanity";

export const fourProducts = groq`*[_type == "product"][0..3]["price]`
export const fourCategories = groq`*[_type == "category"]`
