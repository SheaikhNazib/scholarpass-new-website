"use client";

import { useTransition } from "react";
import { useCoursesStore } from "./store";
import {
  getCoursesAction,
  getCourseByIdAction,
  getFeaturedCoursesAction,
  getPopularCoursesAction,
  getMyCoursesAction,
  enrollInCourseAction,
  getCourseProgressAction,
  getCourseCurriculumAction,
  getCourseReviewsAction,
  addCourseReviewAction,
  completeLessonAction,
  getLessonByIdAction,
} from "./server-actions";
import type { CourseFilterParams } from "./types";

/**
 * Hook for courses operations
 */
export function useCourses(filters?: CourseFilterParams) {
  const store = useCoursesStore();
  const [isPending, startTransition] = useTransition();

  const fetchCourses = async (updatedFilters?: CourseFilterParams) => {
    store.setLoading(true);
    store.setError(null);

    startTransition(async () => {
      try {
        const result = await getCoursesAction(updatedFilters || filters);

        if (result.success) {
          store.setCourses(result.data);
        } else {
          store.setError(result.error || "Failed to fetch courses");
        }
      } catch (error: any) {
        store.setError(error.message || "Failed to fetch courses");
      }
    });
  };

  const fetchCourse = async (courseId: string) => {
    store.setLoading(true);
    store.setError(null);

    startTransition(async () => {
      try {
        const result = await getCourseByIdAction(courseId);

        if (result.success) {
          store.setCourse(result.data);
        } else {
          store.setError(result.error || "Failed to fetch course");
        }
      } catch (error: any) {
        store.setError(error.message || "Failed to fetch course");
      }
    });
  };

  const enroll = async (courseId: string) => {
    store.setLoading(true);
    store.setError(null);

    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await enrollInCourseAction(courseId);

          if (result.success) {
            store.setLoading(false);
            resolve({ success: true, data: result.data });
          } else {
            store.setError(result.error || "Failed to enroll");
            resolve({ success: false, error: result.error });
          }
        } catch (error: any) {
          const errorMessage = error.message || "Failed to enroll";
          store.setError(errorMessage);
          resolve({ success: false, error: errorMessage });
        }
      });
    });
  };

  const completeLesson = async (lessonId: string) => {
    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await completeLessonAction(lessonId);
          resolve(result);
        } catch (error: any) {
          resolve({ success: false, error: error.message });
        }
      });
    });
  };

  const addReview = async (courseId: string, data: { rating: number; comment?: string }) => {
    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await addCourseReviewAction(courseId, data);
          resolve(result);
        } catch (error: any) {
          resolve({ success: false, error: error.message });
        }
      });
    });
  };

  return {
    courses: store.courses,
    course: store.course,
    pagination: store.pagination,
    isLoading: store.isLoading || isPending,
    error: store.error,
    fetchCourses,
    fetchCourse,
    enroll,
    completeLesson,
    addReview,
    refetch: fetchCourses,
  };
}

/**
 * Hook for featured courses
 */
export function useFeaturedCourses() {
  const [isPending, startTransition] = useTransition();
  const store = useCoursesStore();

  const fetchFeatured = async () => {
    store.setLoading(true);

    startTransition(async () => {
      try {
        const result = await getFeaturedCoursesAction();
        if (result.success) {
          store.setCourses({ data: result.data, pagination: { page: 1, limit: result.data.length, total: result.data.length, totalPages: 1 } });
        } else {
          store.setError(result.error || "Failed to fetch featured courses");
        }
      } catch (error: any) {
        store.setError(error.message);
      }
    });
  };

  return {
    courses: store.courses,
    isLoading: store.isLoading || isPending,
    fetchFeatured,
  };
}
