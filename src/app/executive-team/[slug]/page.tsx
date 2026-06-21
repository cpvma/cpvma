import { redirect } from "next/navigation";
import { executiveRoles } from "@/data/executiveTeam";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return executiveRoles.map((role) => ({ slug: role.slug }));
}

export default function ExecutiveRoleRedirect({ params }: Props) {
  redirect(`/about/team/${params.slug}`);
}

