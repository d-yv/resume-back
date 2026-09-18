import createHttpError from 'http-errors';
import { UserData } from '../models/userData.js';

export const getAllUserData = async (req, res, next) => {
  try {
    const userData = await UserData.find();
    res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};

export const getUserDataById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userData = await UserData.findById(id);
    if (!userData) {
      return next(createHttpError(404, 'User data not found'));
    }
    res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};

export const createUserData = async (req, res, next) => {
  try {
    const userData = new UserData(req.body);
    await userData.save();
    res.status(201).json(userData);
  } catch (error) {
    next(error);
  }
};

export const updateUserData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userData = await UserData.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!userData) {
      return next(createHttpError(404, 'User data not found'));
    }
    res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};

export const deleteUserData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userData = await UserData.findByIdAndDelete(id);
    if (!userData) {
      return next(createHttpError(404, 'User data not found'));
    }
    res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};
