import { useState, useCallback } from 'react'

const STORAGE_KEY = 'vibe-course-progress'

const loadProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

const saveProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // localStorage unavailable
  }
}

export const useProgress = () => {
  const [progress, setProgress] = useState(loadProgress)

  const markComplete = useCallback((lessonId) => {
    setProgress((prev) => {
      const next = { ...prev, [lessonId]: true }
      saveProgress(next)
      return next
    })
  }, [])

  const markIncomplete = useCallback((lessonId) => {
    setProgress((prev) => {
      const next = { ...prev }
      delete next[lessonId]
      saveProgress(next)
      return next
    })
  }, [])

  const isComplete = useCallback(
    (lessonId) => Boolean(progress[lessonId]),
    [progress]
  )

  const getModuleProgress = useCallback(
    (lessons) => {
      const completed = lessons.filter((l) => progress[l.id]).length
      return { completed, total: lessons.length, percent: Math.round((completed / lessons.length) * 100) }
    },
    [progress]
  )

  const getTotalProgress = useCallback(
    (modules) => {
      const allLessons = modules.flatMap((m) => m.lessons)
      const completed = allLessons.filter((l) => progress[l.id]).length
      return { completed, total: allLessons.length, percent: Math.round((completed / allLessons.length) * 100) }
    },
    [progress]
  )

  const resetProgress = useCallback(() => {
    setProgress({})
    saveProgress({})
  }, [])

  return { progress, markComplete, markIncomplete, isComplete, getModuleProgress, getTotalProgress, resetProgress }
}
