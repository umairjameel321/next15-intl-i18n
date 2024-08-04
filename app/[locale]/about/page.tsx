import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.aboutTitle;

  return {
    title,
  };
}

const AboutPage = () => {
  const t = useTranslations("AboutPage");
  return (
    <div className="flex w-full items-center justify-center">
      <h1 className="text-3xl font-bold mt-20">{t("title")}</h1>
    </div>
  );
};

export default AboutPage;
