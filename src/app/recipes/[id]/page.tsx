import { createClient } from "@/utils/supabase/server";

export default async function Recipe({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient();

  const { id } = await params;

  const { data: recipes } = await supabase
    .from("recipes")
    .select()
    .eq("id", id)
    .single();

  return <pre>{JSON.stringify(recipes, null, 2)}</pre>;
}
