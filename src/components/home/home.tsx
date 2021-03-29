import CommentItem from "./comment_item";
import { Features } from "./features";
import Profit from "./profit";
import Resualt from "./resualt";
import TeamMember from "./team_members";

const Home = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: "url('/tree.svg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/*Nav*/}
      {/*Hero*/}
      <Features />
      <Profit />
      <Resualt />
      <div className="flex flex-wrap justify-center">
        <CommentItem
          name="Dr M.P"
          title="عالی"
          comment="با این که از موبایل تماشا میکنم اما سایت بسیار عالی میباشد"
        />
        <CommentItem
          name="Dr O.A"
          title="فوق العاده  "
          comment=" با وجود عدم نمایش تمام چند صده اطلاعات محصول فوق العاده ای میباشد"
        />
        <CommentItem
          name="Dr M.E"
          title="بی نظیر"
          comment="با وجود این سایت دلیلی برای این که به شما نمره 20 ندهم نمی بینم"
        />
      </div>
      <TeamMember />
    </div>
  );
};

export default Home;
