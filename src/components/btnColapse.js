import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const BtnColapse = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleButtonClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <p>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={handleButtonClick}
        >
          Calendario
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          {showCalendar && (
            <>
              <DayPicker
                selected={selectedDay}
                onDayClick={handleDayClick}
                // Otras propiedades y configuraciones del DayPicker aquí
              />
              <p>
                {selectedDay && (
                  <span>
                    Has seleccionado el día: {selectedDay.toLocaleDateString()}
                  </span>
                )}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BtnColapse;
