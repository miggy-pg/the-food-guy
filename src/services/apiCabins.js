// create function that will call the API endpoint for creating your CRUD request
//  this is a sample function
import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error("Cabins could not be loaded");

  return data;
}
