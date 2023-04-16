import { type NextPage } from "next";
import TasksContainer from "~/components/actions/tasks/TasksContainer";
import StatsPreview from "~/components/actions/stats/StatsPreview";
import CalendarBar from "~/components/calendar/calendar-bar/CalendarBar";
import SprintProgressBar from "~/components/actions/stats/SprintProgressBar";
import SprintContributions from "~/components/actions/stats/SprintContributions";
import HeaderImage from "~/components/UI/HeaderImage";
import TimeCounter from "~/components/actions/TimeCounter";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex translate-y-0 flex-col items-center ">
        <HeaderImage />
        <div className="max-w-7xl">
          <CalendarBar />
          <div className="mt-20 grid gap-10 md:h-96 md:grid-cols-3">
            <TasksContainer />
            <StatsPreview />
          </div>
          <div className="divider mt-56">
            <TimeCounter />
          </div>

          <SprintProgressBar />
          <SprintContributions />
        </div>
      </div>
    </>
  );
};

export default Home;
