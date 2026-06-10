import { getTranslations } from "next-intl/server";
import { APP_NAME } from "@/config/app";

export default async function Home() {
  const t = await getTranslations("home");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {APP_NAME}
      </h1>
      <p className="max-w-md text-lg text-zinc-400">{t("tagline")}</p>
      <p className="text-sm text-zinc-500">{t("subtitle")}</p>
    </main>
  );
}
