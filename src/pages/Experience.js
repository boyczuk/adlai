import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2016 - 2020'
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'> 
            Harbord Collegiate Institute, Toronto, Ontario
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2016 - 2020'
        iconStyle={{ background: "#16abf5", color: "#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> 
            Metro Inc, Toronto, Ontario
          </h3>
          <p> Front-End Clerk at grocery store</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2020 - present'
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'> 
            Queen's University, Kingston, Ontario
          </h3>
          <p> Bachelors of Computing (Honours)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2023 - TBD'
        iconStyle={{ background: "#16abf5", color: "#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> 
            Hopefully Toronto, Ontario TBD
          </h3>
          <p> Software Developer or related field internship</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;