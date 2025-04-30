import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './MarkdownEditor.css'

interface MarkdownEditorProps {
  initialValue?: string
  onChange?: (value: string) => void
}

export default function MarkdownEditor({ initialValue = '', onChange }: MarkdownEditorProps) {
  const [content, setContent] = useState(initialValue)
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setContent(newValue)
    onChange?.(newValue)
  }

  return (
    <div className="markdown-editor">
      <div className="markdown-editor-tabs">
        <button
          className={`tab ${activeTab === 'write' ? 'active' : ''}`}
          onClick={() => setActiveTab('write')}
        >
          Write
        </button>
        <button
          className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
      </div>

      <div className="markdown-editor-content">
        {activeTab === 'write' ? (
          <textarea
            value={content}
            onChange={handleChange}
            placeholder="Write your markdown content here..."
            className="markdown-textarea"
          />
        ) : (
          <div className="markdown-preview">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
} 