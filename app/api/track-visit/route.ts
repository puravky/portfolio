import supabase from "@/lib/supabase";

export async function POST() {
  const { data, error: readError } = await supabase
    .from("visit_counts")
    .select("count")
    .eq("id", 1)
    .single();

  if (readError) {
    return new Response(JSON.stringify({ error: readError }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const newCount = data.count + 1;

  const { error: updateError } = await supabase
    .from("visit_counts")
    .update({ count: newCount })
    .eq("id", 1);

  if (updateError) {
    return new Response(JSON.stringify({ error: updateError }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true, newCount }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function GET() {
  const { data, error } = await supabase
    .from("visit_counts")
    .select("count")
    .eq("id", 1)
    .single();

  if (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ count: data.count }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
