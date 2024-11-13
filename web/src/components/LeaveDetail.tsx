import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/leaveDetail.css';

interface LeaveDetailProps {
  _id: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  managerIds: string[];
  comments: string;
  status: string;
}

export const LeaveDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [leave, setLeave] = useState<LeaveDetailProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaveDetail = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/leave/getleave/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': process.env.REACT_APP_AUTH_TOKEN || '',
          },
        });

        if (response.ok) {
          const responseJson = await response.json();
          setLeave(responseJson.data);
          setError(null);
        } else {
          setError('Failed to fetch leave detail');
        }
      } catch (err) {
        setError('Failed to fetch leave detail');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaveDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!leave) return <div>No leave details found</div>;

  return (
    <div className="leave-detail-container">
      <div className="header-container">
        <h2><strong>Leave Details</strong></h2>
        <Link to="/appliedleave" className="back-link">Back</Link>
      </div>
      <div className="leave-info">
        <div className="info-card">
          <table className="info-table">
            <tbody>
              <tr>
                <td className="label">Leave Type:</td>
                <td>{leave.leaveType}</td>
              </tr>
              <tr>
                <td className="label">Start Date:</td>
                <td>{new Date(leave.startDate).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td className="label">End Date:</td>
                <td>{new Date(leave.endDate).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td className="label">Comments:</td>
                <td>{leave.comments}</td>
              </tr>
              <tr>
                <td className="label">Status:</td>
                <td>{leave.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
