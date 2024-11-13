import React from 'react'
import '../css/leavePolicy.css';

export const LeavePolicy = () => {
  return (
    <div className="leave-policy-container">
      <h2>Leave Buddy - Policies</h2>
      <ul className="leave-policy-list">
        <li>
          <strong>Annual Leave:</strong> Employees are entitled to 20 days of paid leave per year, which can be used for personal vacations, rest, or any other needs. This ensures work-life balance and supports well-being.
        </li>
        <li>
          <strong>Sick Leave:</strong> 12 days of paid sick leave per year for personal illness, medical appointments, or recovery from minor ailments. We prioritize our employees' health and well-being.
        </li>
        <li>
          <strong>Casual Leave:</strong> 8 days of casual leave for short-term, unplanned needs, such as family obligations or unforeseen personal matters. This allows flexibility in handling day-to-day commitments.
        </li>
        <li>
          <strong>Parental Leave:</strong> Up to 6 months of leave for new parents, with additional flexibility for adoption or surrogacy. We support family growth and bonding during this significant life stage.
        </li>
        <li>
          <strong>Bereavement Leave:</strong> 3 to 5 days of paid leave for the loss of a close family member, allowing time to manage personal responsibilities and grieve.
        </li>
        <li>
          <strong>Compassionate Leave:</strong> Additional leave is available for serious family emergencies or crises, ensuring employees have time to care for their loved ones when needed.
        </li>
        <li>
          <strong>Flexible Work-from-Home Policy:</strong> Eligible employees may work from home up to two days per week. This flexibility supports work-life integration and reduces commuting stress.
        </li>
        <li>
          <strong>Public Holidays:</strong> The company observes all national public holidays and adjusts for regional differences where necessary, honoring employees' cultural and national celebrations.
        </li>
      </ul>
    </div>
  );
}
