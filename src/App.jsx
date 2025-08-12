import {useEffect, useState} from 'react';

export default function App(){
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(()=>{
    let mounted = true;
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then(r => {
        if (!r.ok) throw new Error('network');
        return r.json();
      })
      .then(d => { if(mounted) setPosts(d); })
      .catch(e => { if(mounted) setErr(e.message); })
      .finally(()=> { if(mounted) setLoading(false); });
    return ()=> { mounted = false; };
  },[]);

  if (loading) return <main>Loading...</main>;
  if (err) return <main>Error: {err}</main>;
  return (
    <main style={{maxWidth:900, margin:'0 auto', padding:16}}>
      <h1>Demo: Posts</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:12}}>
        {posts.map(p => (
          <article key={p.id} style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
