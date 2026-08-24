import { useEffect } from 'react';

const BASE_NAME = 'Phạm Tuấn Hưng';
const DEFAULT_TITLE = `${BASE_NAME} — Software Engineer & Backend Developer`;

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    if (title && title.trim().length > 0) {
      document.title = `${title} | ${BASE_NAME}`;
    } else {
      document.title = DEFAULT_TITLE;
    }

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);
}
