import React from "react";
import DefaultLabel from "../../Components/DefaultLabel";
import BodyContent from "../../Components/BodyContent";
import WeekTabs from "../../Components/WeekTabs";
import styles from "./AppointmentSelection.module.scss";
import { Button } from "govuk-react-jsx"

const AppointmentSelection = () => {
  const content = (
    <p>Select a week and weekday to see the available time slots.</p>
  )

  return (
    <>
      <DefaultLabel title="Choose a date" />
      <BodyContent content={ content } />
      <WeekTabs />
      <Button href="/confirmation">Book</Button>
    </>
  );
};

export default AppointmentSelection;
