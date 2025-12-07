import { create } from "zustand";
import { CoursesState, Course } from "./types";
import type { PaginatedResponse } from "@/types/common.types";

interface CoursesStore extends CoursesState {
  setCourses: (data: PaginatedResponse<Course>) => void;
  setCourse: (course: Course | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialState: CoursesState = {
  courses: [],
  course: null,
  pagination: null,
  isLoading: false,
  error: null,
};

export const useCoursesStore = create<CoursesStore>((set) => ({
  ...initialState,
  
  setCourses: (data) => set({ 
    courses: data.data, 
    pagination: data.pagination,
    error: null 
  }),
  
  setCourse: (course) => set({ course, error: null }),
  
  setLoading: (isLoading) => set({ isLoading }),
  
  setError: (error) => set({ error, isLoading: false }),
  
  reset: () => set(initialState),
}));
