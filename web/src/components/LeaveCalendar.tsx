import React, { useEffect, useState } from 'react';
import '../css/calendar.css';

interface CalendarItem {
  _id: string;
  date: string;
  day: string;
  leaveName: string;
}

interface Calendar {
  year: number;
  country: string;
  data: CalendarItem[];
}

export const LeaveCalendar = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<'2023' | '2024' | null>('2024');
  const [calendars, setCalendars] = useState<Calendar[]>([]);

  useEffect(() => {
    const fetchData = async (year: number) => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/leave/fetchleavecalendar`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': process.env.REACT_APP_AUTH_TOKEN || '',
          },
          body: JSON.stringify({ year, country: 'India' }),
        });

        if (response.ok) {
          const responseJson = await response.json();
          setCalendars((prevCalendars) =>
            prevCalendars.filter((calendar) => calendar.year !== year).concat({
              year,
              country: 'India',
              data: responseJson.data,
            })
          );
        } else {
          setError(`Failed to fetch data: ${response.statusText}`);
        }
      } catch (error: any) {
        setError(error.message || 'An error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchData(2023);
    fetchData(2024);
  }, []);

  const toggleSection = (year: '2023' | '2024') => {
    setActiveSection(activeSection === year ? null : year);
  };

  const renderTable = (calendar: Calendar) => (
    <table className="table-style">
      <thead>
        <tr>
          <th className="th-style">Serial No.</th>
          <th className="th-style">Date</th>
          <th className="th-style">Day</th>
          <th className="th-style">Leave Name</th>
        </tr>
      </thead>
      <tbody>
        {calendar.data.map((item, index) => (
          <tr
            key={item._id}
            className={index % 2 === 0 ? 'hover-style' : 'odd-row-style'}
          >
            <td className="td-style">{index + 1}</td>
            <td className="td-style">{item.date}</td>
            <td className="td-style">{item.day}</td>
            <td className="td-style">{item.leaveName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="leave-calendar-container">
      <div className="button-container-style">
        <button
          onClick={() => toggleSection('2024')}
          className="button-style"
        >
          {activeSection === '2024' ? 'Hide 2024 Calendar' : 'Show 2024 Calendar'}
        </button>
        <button
          onClick={() => toggleSection('2023')}
          className="button-style"
        >
          {activeSection === '2023' ? 'Hide 2023 Calendar' : 'Show 2023 Calendar'}
        </button>
      </div>
      {activeSection === '2024' && (
        <div>
          <h3><strong>Indian leave calendar - 2024</strong></h3>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            calendars
              .filter((c) => c.year === 2024)
              .map((calendar) => renderTable(calendar))
          )}
        </div>
      )}
      {activeSection === '2023' && (
        <div>
          <h3>India Leave Calendar - 2023</h3>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            calendars
              .filter((c) => c.year === 2023)
              .map((calendar) => renderTable(calendar))
          )}
        </div>
      )}
    </div>
  );
};
