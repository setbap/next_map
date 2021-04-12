import fs from "fs";
import path from "path";
import matter from "gray-matter";
// @ts-ignore
import remark from "remark";
import html from "remark-html";

const ParentDir = "tutorial";

const tutorialFoldersDir = path.join(process.cwd(), "cms", ParentDir);

const getTutorialTypeShort = () => {
  const fileNames = fs.readdirSync(tutorialFoldersDir);
  const allPosts = fileNames.map((name) => {
    const postId = name.replace(/\.md$/, "");

    const fullPath = path.join(tutorialFoldersDir, name);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      postId,
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

async function getSingleTutorialData(id: string) {
  const fullPath = path.join(tutorialFoldersDir, `${id}.md`);
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
    contentHtml,
    ...matterResult.data,
  };
}

function getAllTutorialOfType() {
  const fileNames = fs.readdirSync(tutorialFoldersDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export { getAllTutorialOfType, getSingleTutorialData, getTutorialTypeShort };
