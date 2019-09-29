import React from 'react';

const CalendarIcon = props => {
    return (
        <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="calendar-day"
            className="calendar-day-solid_svg__svg-inline--fa calendar-day-solid_svg__fa-calendar-day calendar-day-solid_svg__fa-w-14"
            viewBox="0 0 448 512"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="currentColor"
                d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
            />
        </svg>
    );
};

export default CalendarIcon;
