import { useParams, Navigate } from 'react-router-dom'
import LessonLayout from '../components/LessonLayout'
import PromptBlock from '../components/PromptBlock'
import { getModuleBySlug, getLessonBySlug } from '../data/courseData'

function renderInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-textPrimary font-semibold">$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/—/g, '&thinsp;&mdash;&thinsp;') // style em dashes if any slip through
}

// Line-by-line parser: handles paragraphs, numbered lists, bullet lists, mixed blocks
function LessonBody({ text }) {
  const lines = text.trim().split('\n')
  const blocks = []
  let current = null

  const flush = () => {
    if (current) { blocks.push(current); current = null }
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()

    if (line === '') {
      flush()
      continue
    }

    const isNumbered = /^\d+\.\s/.test(line)
    const isBullet = /^-\s/.test(line)

    if (isNumbered) {
      if (current?.type !== 'ol') { flush(); current = { type: 'ol', items: [] } }
      current.items.push(line.replace(/^\d+\.\s*/, ''))
    } else if (isBullet) {
      if (current?.type !== 'ul') { flush(); current = { type: 'ul', items: [] } }
      current.items.push(line.replace(/^-\s*/, ''))
    } else {
      if (current?.type === 'p') {
        current.text += ' ' + line
      } else {
        flush()
        current = { type: 'p', text: line }
      }
    }
  }
  flush()

  return (
    <div>
      {blocks.map((block, i) => {
        if (block.type === 'ol') {
          return (
            <ol key={i} className="list-decimal pl-5 space-y-2 mb-5">
              {block.items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
              ))}
            </ol>
          )
        }
        if (block.type === 'ul') {
          return (
            <ul key={i} className="list-disc pl-5 space-y-2 mb-5">
              {block.items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
              ))}
            </ul>
          )
        }
        return (
          <p key={i} className="mb-5 last:mb-0"
            dangerouslySetInnerHTML={{ __html: renderInline(block.text) }}
          />
        )
      })}
    </div>
  )
}

export default function Lesson() {
  const { moduleSlug, lessonSlug } = useParams()
  const mod = getModuleBySlug(moduleSlug)
  const lesson = mod ? getLessonBySlug(moduleSlug, lessonSlug) : null

  if (!mod || !lesson) return <Navigate to="/" replace />

  return (
    <LessonLayout lesson={lesson} module={mod}>
      <LessonBody text={lesson.body} />
      {lesson.promptExample && (
        <PromptBlock
          label={lesson.promptExample.label}
          prompt={lesson.promptExample.prompt}
          note={lesson.promptExample.note}
        />
      )}
    </LessonLayout>
  )
}
