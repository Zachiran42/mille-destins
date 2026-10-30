const make=require('../docs/tales/engine.js'),books=['heure','couronne','eden'].map(k=>require('../docs/tales/'+k+'.js'));
const copy=x=>JSON.parse(JSON.stringify(x));
function solve(S,mode='trial',width=700){const C=make(S),endings={},failures=[],visited=new Set(),buckets=new Map([[S.start,[{s:C.fresh(mode),path:[]}]]]);
for(const id of Object.keys(S.nodes)){let batch=buckets.get(id)||[];const seen=new Set();batch=batch.filter(({s})=>{const key=JSON.stringify([s.run.stats,[...s.run.flags].sort(),[...s.meta.known].sort()]);if(seen.has(key))return false;seen.add(key);return true;});batch.sort((a,b)=>score(b.s)-score(a.s));batch=batch.slice(0,width);
for(const {s,path}of batch){visited.add(id);for(const c of S.nodes[id].choices||[]){if(C.reason(s,c))continue;const t=copy(s);C.choose(t,c.id);if(!C.validate(t))throw Error('Carnet invalide après '+id+':'+c.id);const entry={s:t,path:[...path,{node:id,choice:c.id}]};if(t.run.phase==='ending'){endings[t.run.ending]||=entry;visited.add(t.run.node);}else if(t.run.phase==='defeat')failures.push(entry);else{if(!buckets.has(t.run.node))buckets.set(t.run.node,[]);buckets.get(t.run.node).push(entry);}}}}
return{endings,failures,visited};
function score(s){return s.meta.known.length*3+Object.entries(s.run.stats).reduce((n,[k,v])=>n+v*(k==='voix'?-2:1),0);}}
module.exports={solve,books};
if(require.main===module)for(const S of books)for(const mode of ['trial','ruthless']){const r=solve(S,mode);console.log(S.id,mode,Object.keys(r.endings),'passages',r.visited.size,'défaites',r.failures.length);}
