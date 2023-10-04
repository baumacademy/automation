// import PocketBase from 'pocketbase';
import Link from 'next/link';
import styles from './Notes.module.css';
import CreateNote from './CreateNote';
import { baseUrl } from '../_utils/utils'

export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const maxDuration = 5


const getNotes = async () => {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');

  const res = await fetch(`${baseUrl}/api/collections/notes/records?page=1&perPage=30`, { cache: 'no-store' });
  const data = await res.json();

  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return(
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}