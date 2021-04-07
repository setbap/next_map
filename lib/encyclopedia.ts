import fs from "fs";
import path from "path";
import matter from "gray-matter";
// @ts-ignore
import remark from "remark";
import html from "remark-html";

const ParentDir = "encyclopedia";
enum EncyclopediaType {
  document = "document",
  article = "article",
  Introduction = "introduction",
}

const encyclopediaFoldersDir = (encyclopediaType: EncyclopediaType) =>
  path.join(process.cwd(), ParentDir, encyclopediaType.toLocaleLowerCase());

const getEncyclopediaTypeShort = (encyclopediaType: EncyclopediaType) => {
  const fileNames = fs.readdirSync(encyclopediaFoldersDir(encyclopediaType));
  const allPosts = fileNames.map((name) => {
    const postId = name.replace(/\.md$/, "");

    const fullPath = path.join(encyclopediaFoldersDir(encyclopediaType), name);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      postId,
      type: encyclopediaType.toString(),
      ...matterResult.data,
    };
  });

  return allPosts.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

async function getSingleEncyclopediaData(
  id: string,
  encyclopediaType: EncyclopediaType
) {
  const fullPath = path.join(
    encyclopediaFoldersDir(encyclopediaType),
    `${id}.md`
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    // @ts-ignore
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    type: encyclopediaType.toString(),
    contentHtml,
    ...matterResult.data,
  };
}

function getAllEncyclopediaOfType(encyclopediaType: EncyclopediaType) {
  const fileNames = fs.readdirSync(encyclopediaFoldersDir(encyclopediaType));

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
        type: encyclopediaType.toString(),
      },
    };
  });
}

export {
  getAllEncyclopediaOfType,
  getSingleEncyclopediaData,
  getEncyclopediaTypeShort,
  EncyclopediaType,
};
