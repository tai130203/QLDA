import classNames from 'classnames/bind';
import styles from './Calendar.module.scss';

import Kalend, { CalendarView } from 'kalend'; // import component
import 'kalend/dist/styles/index.css'; // import styles

const cx = classNames.bind(styles);

function Calendar() {
    const events = [
        {
            id: 2,
            startAt: '2023-04-21T18:00:00.000Z',
            endAt: '2023-04-21T19:00:00.000Z',
            summary: 'test',
            color: 'blue',
            calendarID: 'work',
        },

        {
            id: 3,
            startAt: '2023-04-21T18:00:00.000Z',
            endAt: '2023-04-21T19:00:00.000Z',
            summary: 'test',
            color: 'green',
            calendarID: 'work',
        },

        {
            id: 4,
            startAt: '2023-04-21T18:00:00.000Z',
            endAt: '2023-04-21T19:00:00.000Z',
            summary: 'test',
            color: 'red',
            calendarID: 'work',
        },

        {
            id: 5,
            startAt: '2023-04-21T18:00:00.000Z',
            endAt: '2023-04-21T19:00:00.000Z',
            summary: 'test',
            color: 'blue',
            calendarID: 'work',
        },
    ];

    console.log(new Date().toISOString());
    return (
        <>
            <Kalend
                events={events}
                initialDate={new Date().toISOString()}
                hourHeight={60}
                initialView={CalendarView.WEEK}
                disabledViews={[CalendarView.DAY]}
                timeFormat={'24'}
                weekDayStart={'Monday'}
                calendarIDsHidden={['work']}
                language={'en'}
            />
        </>
    );
}

export default Calendar;
