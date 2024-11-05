import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className="relative mx-auto flex min-h-screen flex-col items-center justify-center overflow-hidden bg-blue-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <h1 className="text-center">{t("title")}</h1>
      </div>
    </main>
  );
}
