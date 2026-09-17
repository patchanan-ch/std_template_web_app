import {
  Calendar,
  CalendarProps,
  CardInfo,
  PageHeader,
} from "rcl-shared-components";

const events: CalendarProps["events"] = [
  {
    title: "Sample event",
    start: new Date(new Date().setHours(8, 0, 0, 0)),
    end: new Date(new Date().setHours(18, 0, 0, 0)),
  },
  {
    title: "Sample all-day event",
    start: new Date(),
    end: new Date(),
    allDay: true,
  },
  {
    title: "Sample long event",
    start: new Date(new Date().setHours(8, 0, 0, 0) + 1000 * 60 * 60 * 24),
    end: new Date(new Date().setHours(18, 0, 0, 0) + 1000 * 60 * 60 * 24 * 3),
  },
];

export const CalendarEx = () => {
  return (
    <div className="container-fluid">
      <PageHeader title={"Calendar Example"} />
      <CardInfo title="Summary">
        <div>This component is a wrapper of "react-big-calendar"</div>
        <a href="https://www.npmjs.com/package/react-big-calendar">
          https://www.npmjs.com/package/react-big-calendar
        </a>
        <div>The "localizer" prop is set to be Momemt.js by the library</div>
      </CardInfo>
      <CardInfo title="Components">
        <div></div>
        <div>
          <Calendar style={{ height: 700 }} events={events}></Calendar>
        </div>
      </CardInfo>
    </div>
  );
};
