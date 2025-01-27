import React from 'react';
import { BlogComment } from '../types';
import { Trash2, Clock } from 'lucide-react';

interface CommentListProps {
  comments: BlogComment[];
  onDelete?: (commentId: string) => void;
  isAdmin?: boolean;
}

export function CommentList({ comments, onDelete, isAdmin }: CommentListProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {comments.map(comment => (
        <div key={comment.id} className="bg-amber-50/50 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2 text-sm text-amber-700">
              <Clock className="w-4 h-4" />
              <span>{formatDate(comment.created_at)}</span>
            </div>
            {isAdmin && onDelete && (
              <button
                onClick={() => onDelete(comment.id)}
                className="text-red-600 hover:text-red-700"
                title="Delete comment"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <p className="text-amber-900">{comment.content}</p>
        </div>
      ))}

      {comments.length === 0 && (
        <p className="text-center text-amber-700 py-4">No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
}