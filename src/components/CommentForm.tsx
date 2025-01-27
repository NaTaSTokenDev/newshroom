import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface CommentFormProps {
  onSubmit: (content: string) => void;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Share your thoughts..."
        className="w-full rounded-md border-amber-200 shadow-sm focus:border-amber-500 focus:ring-amber-500"
        rows={3}
        maxLength={1000}
        required
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors flex items-center"
        >
          <Send className="w-4 h-4 mr-2" />
          Post Comment
        </button>
      </div>
    </form>
  );
}