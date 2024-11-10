import { expect } from 'chai';
import { describe, it } from 'mocha';
import { LeaveController } from '../controller/leaveController';
import { httpStatusCode } from '../common/httpStatusCodes';
import { ApiResponse } from '../common/apiResponse';

describe("LeaveController Tests", () => {
  const leaveController = new LeaveController();

  it("should fetch all leaves for a user", async () => {
    const mockRequest = {
      body: {
        user: { id: "user123" }
      }
    };

    const response = await leaveController.getAllLeaves(mockRequest as any);
    expect(response.statusCode).to.equal(httpStatusCode.success);
    expect(response.message).to.equal('Leaves fetched successfully.');
    expect(response.data).to.be.an('array');
  });

  it("should fetch a leave by ID", async () => {
    const mockRequest = {
      params: { id: "leave123" }
    };

    const response = await leaveController.getLeaveById(mockRequest as any);
    if (response.statusCode === httpStatusCode.success) {
      expect(response.statusCode).to.equal(httpStatusCode.success);
      expect(response.message).to.equal('Leave fetched successfully.');
      expect(response.data).to.be.an('object');
    } else {
      expect(response.statusCode).to.equal(httpStatusCode.notFound);
      expect(response.message).to.equal('Leave not found.');
    }
  });

  it("should create a new leave request", async () => {
    const mockRequest = {
      body: {
        user: { id: "user123" },
        startDate: "2024-12-01",
        endDate: "2024-12-10",
        email: "user@example.com",
        reason: "Vacation",
        leaveType: "Annual"
      }
    };

    const response = await leaveController.createLeave(mockRequest as any);
    if (response.statusCode === httpStatusCode.success) {
      expect(response.statusCode).to.equal(httpStatusCode.success);
      expect(response.message).to.equal('Leave request submitted successfully.');
      expect(response.data).to.be.an('object');
    } else {
      expect(response.statusCode).to.equal(httpStatusCode.badRequest);
      expect(response.message).to.include('You already have a leave request for this time period.');
    }
  });

  it("should update a leave request", async () => {
    const mockRequest = {
      body: {
        id: "leave123",
        startDate: "2024-12-05",
        endDate: "2024-12-15",
        reason: "Extended Vacation"
      }
    };

    const response = await leaveController.updateLeave(mockRequest as any);
    if (response.statusCode === httpStatusCode.success) {
      expect(response.statusCode).to.equal(httpStatusCode.success);
      expect(response.message).to.equal('Leave updated successfully.');
      expect(response.data).to.be.an('object');
    } else {
      expect(response.statusCode).to.equal(httpStatusCode.notFound);
      expect(response.message).to.equal('Leave not found.');
    }
  });

  it("should delete a leave by ID", async () => {
    const mockRequest = {
      params: { id: "leave123" }
    };

    const response = await leaveController.deleteLeaveById(mockRequest as any);
    if (response.statusCode === httpStatusCode.success) {
      expect(response.statusCode).to.equal(httpStatusCode.success);
      expect(response.message).to.equal('Leave deleted successfully.');
      expect(response.data).to.be.an('object');
    } else {
      expect(response.statusCode).to.equal(httpStatusCode.notFound);
      expect(response.message).to.equal('Leave not found.');
    }
  });
});
