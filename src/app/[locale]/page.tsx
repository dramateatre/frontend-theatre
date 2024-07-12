"use client";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>{t("Hi")}</span>
    </main>
  );
}
