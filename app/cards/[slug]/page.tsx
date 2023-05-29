import fs from 'fs';
import matter from 'gray-matter';

const getCardContent = (slug: string) => {
  const folder = 'content/';
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, 'utf-8');
  const matterResult = matter(content);
  return matterResult;
};

const CardPage = (props: any) => {
  const slug = props.params.slug;
  const card = getCardContent(slug);

  return (
    <p>
      <h1>This is content: {slug}</h1>
      <p>{card.content}</p>
    </p>
  );
};

export default CardPage;
