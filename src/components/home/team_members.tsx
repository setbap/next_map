import { FiLinkedin } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";
import Image from "next/image";
import persons from "~/utils/persons.json";
const TeamMember = () => {
  return (
    <div className="container mx-auto my-12">
      <div className="p-8 bg-skin-card dark:bg-gray-800 rounded-lg shadow">
        <p className="text-center text-3xl font-bold text-skin-base dark:text-white">
          اعضای تیم
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {persons.slice(0, 4).map((data, index) => {
            return (
              <TeamMemberItem
                key={index}
                primary
                scholar={data.scholar}
                fullname={data.name}
                post={data.work}
                image={data.image}
                linkedin={data.linkedin}
              />
            );
          })}
          {persons.slice(4, persons.length).map((data, index) => {
            return (
              <TeamMemberItem
                key={index}
                fullname={data.name}
                post={data.work}
                image={data.image}
                linkedin={data.linkedin}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TeamMember;

interface ITeamMemberItemProps {
  fullname: string;
  post: string;
  image: string;
  linkedin: string;
  primary?: boolean;
  scholar?: string;
}

const TeamMemberItem = ({
  fullname,
  post,
  image,
  linkedin,
  primary,
  scholar,
}: ITeamMemberItemProps) => {
  return (
    <div className="p-4">
      <div className="flex-col  flex justify-center items-center">
        <div className="flex-shrink-0">
          <div className="block relative">
            <div
              className={`${
                primary ? "border-skin-primary" : "border-skin-secondary"
              } rounded-full border-4  w-20 h-20 shadow-2xl `}
            >
              <Image
                src={image}
                className="rounded-full"
                alt="Our time picture"
                width={72}
                height={72}
              />
            </div>
          </div>
        </div>
        <div className="mt-2 text-center justify-center items-center flex flex-col">
          <span className="text-skin-base dark:text-white text-lg font-medium">
            {fullname}
          </span>

          <span className="text-skin-muted my-3 text-xs">{post}</span>

          <div className="flex  flex-row justify-center items-center w-full">
            <a
              target="_blank"
              href={`https://www.linkedin.com/in/${linkedin}`}
              className={`text-skin-muted text-center  ${
                primary
                  ? "hover:text-skin-primary"
                  : "hover:text-skin-secondary"
              }`}
            >
              <FiLinkedin size={24} />
            </a>
            {primary ? (
              <>
                <div className="p-2" />
                <a
                  target="_blank"
                  href={scholar}
                  className={`text-skin-muted text-center  ${
                    primary
                      ? "hover:text-skin-primary"
                      : "hover:text-skin-secondary"
                  }`}
                >
                  <SiGooglescholar size={24} />
                </a>
              </>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
