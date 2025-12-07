"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { API_PATHS } from "@/constant";
import type { ApiResponse, PaginatedResponse } from "@/types";
import type {
  Course,
  CourseFilterParams,
  Enrollment,
  Review,
  Lesson,
} from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:2312";

async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get("authToken")?.value;
}

function createAuthAxios(token?: string) {
  return axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}

/**
 * Get all courses with filters
 */
export async function getCoursesAction(
  filters?: CourseFilterParams
): Promise<ApiResponse<PaginatedResponse<Course>>> {
  try {
    const axiosInstance = createAuthAxios();
    const queryParams = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, String(value));
        }
      });
    }

    const url = `${API_PATHS.COURSES.GET_ALL}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
    const response = await axiosInstance.get<
      ApiResponse<PaginatedResponse<Course>>
    >(url);

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to fetch courses",
    };
  }
}

/**
 * Get course by ID
 */
export async function getCourseByIdAction(
  id: string
): Promise<ApiResponse<Course>> {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.get<ApiResponse<Course>>(
      API_PATHS.COURSES.GET_BY_ID(id)
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to fetch course",
    };
  }
}

/**
 * Get featured courses
 */
export async function getFeaturedCoursesAction(): Promise<
  ApiResponse<Course[]>
> {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.get<ApiResponse<Course[]>>(
      API_PATHS.COURSES.FEATURED_BUNDLE
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: [],
      error: error.response?.data?.message || "Failed to fetch featured courses",
    };
  }
}

/**
 * Get popular courses
 */
export async function getPopularCoursesAction(): Promise<
  ApiResponse<Course[]>
> {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.get<ApiResponse<Course[]>>(
      API_PATHS.COURSES.POPULAR
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: [],
      error: error.response?.data?.message || "Failed to fetch popular courses",
    };
  }
}

/**
 * Get my enrolled courses
 */
export async function getMyCoursesAction(): Promise<ApiResponse<Course[]>> {
  try {
    const token = await getAuthToken();
    if (!token) {
      return {
        success: false,
        data: [],
        error: "Not authenticated",
      };
    }

    const axiosInstance = createAuthAxios(token);
    const response = await axiosInstance.get<ApiResponse<Course[]>>(
      API_PATHS.COURSES.MY_COURSES
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: [],
      error: error.response?.data?.message || "Failed to fetch my courses",
    };
  }
}

/**
 * Enroll in a course
 */
export async function enrollInCourseAction(
  courseId: string
): Promise<ApiResponse<Enrollment>> {
  try {
    const token = await getAuthToken();
    if (!token) {
      return {
        success: false,
        data: null as any,
        error: "Not authenticated",
      };
    }

    const axiosInstance = createAuthAxios(token);
    const response = await axiosInstance.post<ApiResponse<Enrollment>>(
      API_PATHS.COURSES.ENROLL(courseId)
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to enroll in course",
    };
  }
}

/**
 * Get course progress
 */
export async function getCourseProgressAction(
  courseId: string
): Promise<ApiResponse<Enrollment>> {
  try {
    const token = await getAuthToken();
    if (!token) {
      return {
        success: false,
        data: null as any,
        error: "Not authenticated",
      };
    }

    const axiosInstance = createAuthAxios(token);
    const response = await axiosInstance.get<ApiResponse<Enrollment>>(
      API_PATHS.COURSES.PROGRESS(courseId)
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to fetch course progress",
    };
  }
}

/**
 * Get course curriculum
 */
export async function getCourseCurriculumAction(
  courseId: string
): Promise<ApiResponse<Lesson[]>> {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.get<ApiResponse<Lesson[]>>(
      API_PATHS.COURSES.CURRICULUM(courseId)
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: [],
      error: error.response?.data?.message || "Failed to fetch curriculum",
    };
  }
}

/**
 * Get course reviews
 */
export async function getCourseReviewsAction(
  courseId: string
): Promise<ApiResponse<Review[]>> {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.get<ApiResponse<Review[]>>(
      API_PATHS.COURSES.REVIEWS(courseId)
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: [],
      error: error.response?.data?.message || "Failed to fetch reviews",
    };
  }
}

/**
 * Add course review
 */
export async function addCourseReviewAction(
  courseId: string,
  data: { rating: number; comment?: string }
): Promise<ApiResponse<Review>> {
  try {
    const token = await getAuthToken();
    if (!token) {
      return {
        success: false,
        data: null as any,
        error: "Not authenticated",
      };
    }

    const axiosInstance = createAuthAxios(token);
    const response = await axiosInstance.post<ApiResponse<Review>>(
      API_PATHS.COURSES.REVIEWS(courseId),
      data
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to add review",
    };
  }
}

/**
 * Complete a lesson
 */
export async function completeLessonAction(
  lessonId: string
): Promise<ApiResponse<void>> {
  try {
    const token = await getAuthToken();
    if (!token) {
      return {
        success: false,
        data: null as any,
        error: "Not authenticated",
      };
    }

    const axiosInstance = createAuthAxios(token);
    const response = await axiosInstance.post<ApiResponse<void>>(
      API_PATHS.LESSONS.COMPLETE(lessonId)
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to complete lesson",
    };
  }
}

/**
 * Get lesson by ID
 */
export async function getLessonByIdAction(
  lessonId: string
): Promise<ApiResponse<Lesson>> {
  try {
    const token = await getAuthToken();
    const axiosInstance = createAuthAxios(token);
    const response = await axiosInstance.get<ApiResponse<Lesson>>(
      API_PATHS.LESSONS.GET_BY_ID(lessonId)
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to fetch lesson",
    };
  }
}
