import { expect } from 'chai';
import { describe, it } from 'mocha';
import { httpStatusCode } from '../common/httpStatusCodes';
import { AuthController } from '../controller/authController';

describe("AuthController Tests", () => {
  const authController = new AuthController();

  it("should succeed when creating a new user with valid data", async () => {
    const mockRequest = {
      body: {
        name: "Yuvraj Singh",
        empId: 115,
        email: "yuvraj@domain.com",
        password: "123456789",
        role: "USER",
        department: "Developer",
        jobTitle: "SSE",
        managerIds: ["abcd"],
        leaveBalance: "20"
      }
    };

    const response = await authController.signup(mockRequest as any);
    expect(response.statusCode).to.equal(httpStatusCode.success);
    expect(response.message).to.equal('User signed up successfully.');
    expect(response.data).to.have.property('authToken');
  });

  it("should return bad request when trying to signup with an existing email", async () => {
    const mockRequest = {
      body: {
        name: "Duplicate User",
        empId: 116,
        email: "yuvraj@domain.com",  // Reusing the email from the previous test
        password: "duplicate123",
        role: "USER",
        department: "Developer",
        jobTitle: "SSE",
        managerIds: ["abcd"],
        leaveBalance: "20"
      }
    };

    const response = await authController.signup(mockRequest as any);
    expect(response.statusCode).to.equal(httpStatusCode.badRequest);
    expect(response.message).to.include("User with emailId yuvraj@domain.com already exists.");
  });

  it("should return bad request when trying to signup with missing fields", async () => {
    const mockRequest = {
      body: {
        name: "Incomplete User",
        empId: 117,
        email: "incomplete@domain.com",
        // Missing password and other required fields
      }
    };

    const response = await authController.signup(mockRequest as any);
    expect(response.statusCode).to.equal(httpStatusCode.badRequest);
    expect(response.message).to.include("Request body validation failed");  // Adjust based on your error message
  });

  it("should succeed when logging in with correct credentials", async () => {
    const mockRequest = {
      body: {
        email: "yuvraj@domain.com",
        password: "123456789"
      }
    };

    const response = await authController.login(mockRequest as any);
    expect(response.statusCode).to.equal(httpStatusCode.success);
    expect(response.message).to.equal('User logged in successfully.');
    expect(response.data).to.have.property('authToken');
  });

  it("should return not found when logging in with incorrect email", async () => {
    const mockRequest = {
      body: {
        email: "nonexistent@domain.com",
        password: "123456789"
      }
    };

    const response = await authController.login(mockRequest as any);
    expect(response.statusCode).to.equal(httpStatusCode.notFound);
    expect(response.message).to.include("Please try to login with correct credentials.");
  });

  it("should return not found when logging in with incorrect password", async () => {
    const mockRequest = {
      body: {
        email: "yuvraj@domain.com",
        password: "wrongpassword"
      }
    };

    const response = await authController.login(mockRequest as any);
    expect(response.statusCode).to.equal(httpStatusCode.notFound);
    expect(response.message).to.include("Please try to login with correct credentials.");
  });
});
