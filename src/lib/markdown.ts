// filepath: /d:/code/portfolio/src/lib/markdown.ts
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const casesDirectory = "/cases/";
const casesNames = ["lorem", "ipsum"];

const getCaseData = async (fileName: string) => {
  const fileContents = await fetch(
    `${process.env.PUBLIC_URL || ""}${casesDirectory}${fileName}/${fileName}.md`
  ).then((res) => res.text());

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    fileName,
    ...data,
    contentHtml,
  };
};

const getAllCases = async () => {
  return Promise.all(casesNames.map(getCaseData));
};

export { getCaseData, getAllCases };
