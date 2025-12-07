// Course and learning related types

export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  thumbnail?: string;
  price: number;
  discountedPrice?: number;
  instructor: Instructor;
  category: Category;
  level: CourseLevel;
  duration: number;
  language: string;
  tags?: string[];
  rating?: number;
  totalStudents: number;
  totalReviews: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  curriculum?: Lesson[];
}

export interface Instructor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  bio?: string;
  expertise?: string[];
  rating?: number;
  totalCourses: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
  icon?: string;
}

export enum CourseLevel {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
  ALL_LEVELS = "all_levels",
}

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  courseId: string;
  order: number;
  type: LessonType;
  duration: number;
  videoUrl?: string;
  content?: string;
  resources?: Resource[];
  isPreview: boolean;
  isCompleted?: boolean;
}

export enum LessonType {
  VIDEO = "video",
  TEXT = "text",
  QUIZ = "quiz",
  ASSIGNMENT = "assignment",
}

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  url: string;
  size?: number;
}

export enum ResourceType {
  PDF = "pdf",
  VIDEO = "video",
  AUDIO = "audio",
  DOCUMENT = "document",
  LINK = "link",
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: string;
  progress: number;
  completedLessons: string[];
  lastAccessedAt?: string;
  certificateUrl?: string;
}

export interface Review {
  id: string;
  userId: string;
  courseId: string;
  rating: number;
  comment?: string;
  createdAt: string;
  user?: {
    firstName: string;
    lastName: string;
    avatar?: string;
  };
}

export interface CourseFilterParams {
  search?: string;
  category?: string;
  level?: CourseLevel;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface CoursesState {
  courses: Course[];
  course: Course | null;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  } | null;
  isLoading: boolean;
  error: string | null;
}
