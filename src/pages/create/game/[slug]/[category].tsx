import { useRouter } from "next/router";
import { Audience, Orders, Calendar, TwitchContent, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from '..';
// pages/category/[category]/[subcategory].tsx
const SubCategoryPage = () => {
  const router = useRouter();
  // Navigating to category/webdevelopment/react will return category = webdevelopment and subcategory = react
  // Navigating to /category/webdevelopment/react/anothercategory will result in a 404 error
  const { slug, category } = router.query;
  return (
    category === "audience"
    ? <Audience/>
    : category === "twitch"
    ? <Orders/>
    : category === "youtube"
    ? <TwitchContent/>
    : category === "tiktok"
    ? <Customers/>
    : category === "todo"
    ? <Kanban/>
    : category === "discover"
    ? <Editor/>
    : category === "plan"
    ? <Calendar/>
    : category === "generate"
    ? <ColorPicker/>
    : category === "popularity"
    ? <Line/>
    : category === "topic"
    ? <Area/>
    : category === "demographics"
    ? <Bar/>
    : category === "geography"
    ? <Pie/>
    : category === "twitchdata"
    ? <Financial/>
    : category === "youtubedata"
    ? <ColorMapping/>
    : category === "market"
    ? <Stacked/>
    : null

  );
};
export default SubCategoryPage;
