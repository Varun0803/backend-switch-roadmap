const PHASES = [
  {id:1,name:"JavaScript, properly",range:"Weeks 1–4",v:"--p1",goal:"Rebuild the language from the execution model up. Most rejections at your level come from a shaky answer on closures, the event loop, or prototypes, not from anything exotic."},
  {id:2,name:"Node.js and API engineering",range:"Weeks 5–8",v:"--p2",goal:"Stop being an Express user and become someone who knows what Express is doing. Internals, streams, auth, testing."},
  {id:3,name:"The data layer",range:"Weeks 9–13",v:"--p3",goal:"Where 2.5-year candidates separate from 5-year candidates. Indexing, transactions, modelling trade-offs, caching, queues, and shipping it."},
  {id:4,name:"Design rounds",range:"Weeks 14–17",v:"--p4",goal:"Low-level design under a timer, then high-level design with real numbers. Both are learnable formats, not talent."},
  {id:5,name:"Converting interviews",range:"Weeks 18–20",v:"--p5",goal:"Resume, story, mocks, negotiation. The part almost everyone under-invests in and then blames luck for."}
];

const W = [
 {n:1,p:1,t:"Execution model and closures",dsa:"Arrays and hashing · 20 problems",core:[
  "Execution context, call stack, hoisting, the temporal dead zone",
  "Scope chain, lexical scoping, var vs let vs const in loops",
  "Closures in depth: what is actually captured, and when memory is held",
  "Practical closures: counters, once(), private state, module pattern",
  "Closure-caused memory leaks and how to spot them in Node"],
  ship:"Write a page explaining closures with three examples from real Node code you've written."},
 {n:2,p:1,t:"this, prototypes, objects",dsa:"Strings and prefix sums · 20 problems",core:[
  "The four this-binding rules; arrow functions and lexical this",
  "call, apply, bind — then write polyfills for all three",
  "Prototype chain, __proto__ vs prototype, Object.create",
  "What new actually does — implement myNew()",
  "Classes, extends, super, static, private fields; mixins",
  "Property descriptors, getters and setters, Symbol, well-known symbols"],
  ship:"A polyfills.js with call, apply, bind, new, Object.create, and instanceof, plus tests."},
 {n:3,p:1,t:"Asynchrony from first principles",dsa:"Two pointers and sliding window · 20 problems",core:[
  "Event loop: call stack, task queue, microtask queue, starvation",
  "Ordering drills: setTimeout vs Promise vs queueMicrotask",
  "Promise states and the full then/catch/finally chaining semantics",
  "Implement MyPromise from scratch, then all, allSettled, race, any",
  "async/await as syntax over promises; sequential vs concurrent awaits",
  "Error handling: try/catch around await, rejection propagation, AbortController"],
  ship:"MyPromise passing a test suite you wrote yourself, including chaining and thenables."},
 {n:4,p:1,t:"Functional patterns and utilities",dsa:"Binary search, including search-on-answer · 20 problems",core:[
  "Higher-order functions; write polyfills for map, filter, reduce, flat",
  "Currying, partial application, compose and pipe",
  "debounce, throttle, memoize — and when each is the wrong choice",
  "deepClone, deep equality, structuredClone",
  "Iterators, generators, async iterators, for await...of",
  "CommonJS vs ES modules: resolution, caching, circular imports"],
  ship:"A small utils library with Jest tests and a README. Publishing to npm is optional but looks good."},

 {n:5,p:2,t:"Node internals",dsa:"Recursion; implement merge, quick and heap sort · 18 problems",core:[
  "libuv, the thread pool, and the six event loop phases",
  "setTimeout vs setImmediate vs process.nextTick — and why the answer varies",
  "Blocking the loop: how to detect it, how to measure it",
  "worker_threads for CPU-bound work; cluster for scaling across cores",
  "child_process, signals, graceful shutdown, zero-downtime restarts"],
  ship:"Benchmark a CPU-heavy task inline vs in worker_threads. Write up the numbers."},
 {n:6,p:2,t:"Streams, buffers, and raw HTTP",dsa:"Linked lists · 20 problems",core:[
  "Buffers, encodings, binary data handling",
  "Readable, Writable, Duplex, Transform; object mode",
  "Backpressure, pipe vs pipeline, error propagation in streams",
  "Write a custom Transform stream and process a file larger than memory",
  "The http module: build a server, a router, and body parsing with no framework"],
  ship:"A ~200-line HTTP framework with routing and middleware. This is your best interview prop."},
 {n:7,p:2,t:"Express and API design",dsa:"Stacks, queues, monotonic stack · 20 problems",core:[
  "Middleware internals, next(), error-handling middleware, route ordering",
  "REST design: resources, status codes, versioning, HATEOAS in theory",
  "Pagination (offset vs cursor), filtering, sorting, partial responses",
  "Idempotency keys, retries, safe vs unsafe methods",
  "Validation with zod; centralised error shapes",
  "CORS, helmet, compression, rate limiting, OWASP API Top 10",
  "Structured logging with pino, request IDs, correlation across services"],
  ship:"Turn your mini framework's ideas into a production-shaped Express service skeleton."},
 {n:8,p:2,t:"Auth, testing, and code quality",dsa:"Timed mixed set from weeks 1–7 · 20 problems",core:[
  "Sessions vs JWT; access and refresh token rotation; httpOnly cookies",
  "Password hashing with argon2 or bcrypt; salting, work factors",
  "OAuth 2.0 and OIDC flows end to end; when to use which grant",
  "RBAC and ABAC; permission checks that don't leak",
  "Jest and supertest: unit vs integration, mocking, fixtures, coverage that means something",
  "TypeScript for Node: enough to be productive — types, generics, utility types"],
  ship:"Project 1 kickoff: scope, ER diagram, and a written API contract before any code."},

 {n:9,p:3,t:"SQL you can be grilled on",dsa:"Binary trees: traversals, views, recursion patterns · 22 problems",core:[
  "All join types, group by, having, set operations",
  "Subqueries, correlated subqueries, CTEs, recursive CTEs",
  "Window functions: row_number, rank, lag, lead, running totals",
  "Normalisation 1NF to 3NF, and the cases where you denormalise on purpose",
  "Constraints, foreign keys, cascades, soft deletes and their cost"],
  ship:"A Postgres schema for Project 1 where every index and every denormalisation is justified in writing."},
 {n:10,p:3,t:"Postgres internals and performance",dsa:"BST and tree DP · 20 problems",core:[
  "B-tree, hash, GIN, composite, partial and covering indexes; selectivity",
  "EXPLAIN ANALYZE: reading plans, seq scan vs index scan vs bitmap",
  "The N+1 problem and how ORMs cause it",
  "ACID, isolation levels, and the anomaly each one prevents",
  "MVCC, vacuum, bloat; row locks, deadlocks, SELECT FOR UPDATE",
  "Connection pooling, pgbouncer, migrations, partitioning, read replicas"],
  ship:"Take five slow queries, tune them, and document the before and after plans."},
 {n:11,p:3,t:"MongoDB, deeply",dsa:"Heaps and top-K · 15 · Tries · 8",core:[
  "Embed vs reference; bucket, outlier, computed and subset patterns",
  "Aggregation pipeline: match, group, lookup, facet, unwind, and pipeline order",
  "Compound, multikey, text and TTL indexes; the ESR rule; explain()",
  "Transactions, read and write concerns, replica sets and elections",
  "Shard key selection and what a bad one costs you",
  "Change streams; and an honest list of when Mongo is the wrong choice"],
  ship:"Model the same domain in Postgres and Mongo. Write the trade-off memo. Expect to be asked this."},
 {n:12,p:3,t:"Caching, queues, realtime",dsa:"Graphs I: BFS, DFS, grids, topological sort · 22 problems",core:[
  "Redis data types and what each one is really for",
  "Cache-aside, write-through, write-behind; TTLs, eviction policies, stampedes",
  "Distributed locks and why Redlock is argued about",
  "Rate limiting: token bucket, sliding window log, sliding window counter",
  "BullMQ: jobs, retries, backoff, dead-letter queues, idempotent handlers",
  "Kafka concepts: topics, partitions, offsets, consumer groups, ordering",
  "WebSockets vs SSE vs polling; scaling Socket.io with the Redis adapter"],
  ship:"Add Redis caching, a background worker, and live notifications to Project 1."},
 {n:13,p:3,t:"Shipping and operating it",dsa:"Graphs II: Dijkstra, union-find, MST, cycle detection · 22 problems",core:[
  "Docker: layers, multi-stage builds, small images, docker-compose for local dev",
  "Nginx as reverse proxy; TLS termination; the twelve-factor checklist",
  "CI/CD with GitHub Actions: test, build, push, deploy",
  "AWS basics: EC2, S3, RDS, IAM, CloudWatch — enough to discuss, not to certify",
  "Observability: metrics, structured logs, traces, useful alerts"],
  ship:"Project 1 deployed and dockerized, with CI green, a real README, and an architecture diagram."},

 {n:14,p:4,t:"Low-level design foundations",dsa:"DP I: 1D, house robber, climbing stairs, LIS · 18 problems",core:[
  "SOLID, with a real refactor for each principle",
  "Composition over inheritance; programming to interfaces",
  "Patterns that actually come up: Strategy, Factory, Observer, Decorator, Adapter, Builder, Repository, Singleton",
  "Layered and clean architecture; dependency injection in Node",
  "Domain modelling: entities, value objects, services"],
  ship:"Refactor Project 1 into clear layers. Write up what improved and what it cost."},
 {n:15,p:4,t:"Machine coding under a timer",dsa:"DP II: knapsack family, subset sum, coin change · 18 problems",core:[
  "The routine: clarify, list entities, sketch interfaces, code, test, extend",
  "Build in 90 minutes: parking lot, LRU cache with TTL",
  "Build in 90 minutes: rate limiter, Splitwise expense splitting",
  "Build in 90 minutes: notification service, elevator system",
  "Practise taking one extension requirement at the 75-minute mark"],
  ship:"A machine-coding repo with four solutions, each with tests and a short design note."},
 {n:16,p:4,t:"High-level design foundations",dsa:"DP III: grids, LCS, edit distance, stocks · 18 problems",core:[
  "Latency numbers, back-of-envelope estimation, capacity planning",
  "Load balancing, stateless services, horizontal scaling",
  "Replication, sharding strategies, hot partitions",
  "CAP and PACELC; strong vs eventual consistency in plain terms",
  "Caching layers, CDNs, and cache invalidation strategy",
  "Design and write up: URL shortener, distributed rate limiter, pastebin, file storage"],
  ship:"Four design documents with diagrams, numbers, and an explicit trade-off section each."},
 {n:17,p:4,t:"High-level design, harder",dsa:"Greedy, intervals, bit manipulation, math · 25 problems",core:[
  "Design: chat application with delivery receipts and presence",
  "Design: notification system with fan-out and user preferences",
  "Design: news feed — push vs pull vs hybrid",
  "Design: ticket booking, focused on concurrency and double-booking",
  "Design: search with autocomplete",
  "Monolith vs microservices honestly; API gateway, service discovery",
  "Saga and outbox patterns, event-driven design, idempotency everywhere"],
  ship:"Project 2 shipped: something systems-flavoured — a URL shortener with analytics, or a rate-limiter library."},

 {n:18,p:5,t:"Resume, story, pipeline",dsa:"Redo 60 flagged problems · 2 timed contests",core:[
  "Rewrite the resume: impact first, numbers, scope, your specific contribution",
  "One page. Skills section that matches the job descriptions you're targeting",
  "For every project: why this design, what broke, what you'd change now",
  "Ten STAR stories: conflict, failure, ownership, ambiguity, mentoring",
  "Referrals over cold applications. 15+ applications a week, tracked in a sheet"],
  ship:"Resume v2, LinkedIn updated, 20 applications sent with at least 5 referrals."},
 {n:19,p:5,t:"Mock interviews",dsa:"40 mixed problems, all timed",core:[
  "Three DSA mocks with a real person, thinking out loud throughout",
  "Two machine-coding mocks at full 90 minutes",
  "Two system design mocks — you drive, they poke holes",
  "One JavaScript and Node deep-dive mock",
  "One database round: indexing, transactions, modelling",
  "Record every mock. Watch them back. It is unpleasant and it works."],
  ship:"A feedback log and a ranked list of your three biggest gaps."},
 {n:20,p:5,t:"Close the gaps, take the offer",dsa:"30 revision problems · 2 contests",core:[
  "Drill only the three gaps from your mock log",
  "Company-specific prep: read their engineering blog, know their stack",
  "Full revision pass over every note file, spaced across the week",
  "Behavioural prep: questions to ask them, and why you're leaving",
  "Negotiation: benchmark first, never name the first number, compare total comp",
  "Keep interviewing after the first offer. Competing offers are the whole leverage"],
  ship:"Offers in hand, and a decision you made on the numbers rather than relief."}
];

/* ---------- render ---------- */
const KEY = "backend-roadmap-v1";
let state = {};
let storageOK = true;
try{
  const raw = localStorage.getItem(KEY);
  if(raw) state = JSON.parse(raw) || {};
}catch(e){ storageOK = false; }
if(!storageOK){
  const n = document.getElementById('notice');
  n.style.display='block';
  n.textContent = "This browser isn't letting the page save progress. Everything still works, but checkboxes won't survive a reload.";
}

function save(){
  if(!storageOK) return;
  try{ localStorage.setItem(KEY, JSON.stringify(state)); }
  catch(e){ storageOK=false; }
}

function itemsFor(w){
  const out = w.core.map((txt,i)=>({id:"w"+w.n+"c"+i, txt}));
  out.push({id:"w"+w.n+"d", txt:w.dsa});
  out.push({id:"w"+w.n+"s", txt:w.ship});
  return out;
}
const TOTAL = W.reduce((a,w)=>a+itemsFor(w).length,0);

const phasesEl = document.getElementById('phases');
PHASES.forEach(p=>{
  const sec = document.createElement('div');
  sec.className='phase';
  sec.style.setProperty('--pc','var('+p.v+')');
  sec.innerHTML = '<div class="range">'+p.range+'</div><h2>'+p.name+'</h2><p class="goal">'+p.goal+'</p>';
  W.filter(w=>w.p===p.id).forEach(w=>{
    const d = document.createElement('div');
    d.className='week'; d.id='week'+w.n;
    const core = w.core.map((txt,i)=>row("w"+w.n+"c"+i,txt)).join('');
    d.innerHTML =
      '<div class="wnum">Wk '+w.n+'</div>'+
      '<div class="wbody">'+
        '<div class="wtitle">'+w.t+'</div>'+
        '<div class="grp"><h3>Core</h3><ul class="chk">'+core+'</ul></div>'+
        '<div class="grp"><h3>DSA</h3><ul class="chk">'+row("w"+w.n+"d",w.dsa)+'</ul></div>'+
        '<div class="grp"><h3>Ship by Sunday</h3><ul class="chk">'+row("w"+w.n+"s",w.ship)+'</ul></div>'+
      '</div>';
    sec.appendChild(d);
  });
  phasesEl.appendChild(sec);
});

function row(id,txt){
  const on = state[id] ? ' checked' : '';
  const cls = state[id] ? ' class="on"' : '';
  return '<li'+cls+' data-for="'+id+'"><input type="checkbox" id="'+id+'"'+on+'><label for="'+id+'">'+txt+'</label></li>';
}

/* block grid */
const blocksEl = document.getElementById('blocks');
W.forEach(w=>{
  const p = PHASES.find(x=>x.id===w.p);
  const b = document.createElement('button');
  b.className='cell'; b.type='button';
  b.style.setProperty('--pc','var('+p.v+')');
  b.dataset.week = w.n;
  b.title = 'Week '+w.n+' — '+w.t;
  b.innerHTML = '<span class="fill" id="fill'+w.n+'"></span><span>'+w.n+'</span>';
  b.addEventListener('click',()=>{
    const el = document.getElementById('week'+w.n);
    if(el) el.scrollIntoView({behavior:'smooth',block:'center'});
  });
  blocksEl.appendChild(b);
});
const legendEl = document.getElementById('legend');
PHASES.forEach(p=>{
  const s = document.createElement('span');
  s.innerHTML = '<b style="background:var('+p.v+')"></b>'+p.name;
  legendEl.appendChild(s);
});

/* progress */
function refresh(){
  let done = 0;
  W.forEach(w=>{
    const items = itemsFor(w);
    const d = items.filter(i=>state[i.id]).length;
    done += d;
    const fill = document.getElementById('fill'+w.n);
    if(fill) fill.style.height = Math.round(d/items.length*100)+'%';
    const wk = document.getElementById('week'+w.n);
    if(wk) wk.classList.toggle('complete', d===items.length);
  });
  const pct = TOTAL ? Math.round(done/TOTAL*100) : 0;
  document.getElementById('pct').textContent = pct+'%';
  document.getElementById('barfill').style.width = pct+'%';
  document.getElementById('count').textContent = done+' of '+TOTAL+' done';
}

document.addEventListener('change', e=>{
  if(e.target.type!=='checkbox') return;
  const id = e.target.id;
  if(e.target.checked) state[id]=1; else delete state[id];
  const li = document.querySelector('[data-for="'+id+'"]');
  if(li) li.classList.toggle('on', e.target.checked);
  save(); refresh();
});

document.getElementById('reset').addEventListener('click',()=>{
  state = {};
  document.querySelectorAll('ul.chk input').forEach(i=>{i.checked=false;});
  document.querySelectorAll('ul.chk li').forEach(l=>l.classList.remove('on'));
  save(); refresh();
});

refresh();
