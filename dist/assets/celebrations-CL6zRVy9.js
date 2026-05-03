import"./modulepreload-polyfill-B5Qt9EMX.js";document.body.classList.add("loaded");const p={"chess-tournament":{title:"♟️ Chess Tournament Winner",content:`
            <p style="font-size:1.05rem; line-height:1.8; margin-bottom:1.5rem;">
                Claimed victory in a highly competitive inter-college chess tournament, demonstrating sharp strategic thinking, patience, and the ability to stay composed under pressure. Each round brought tougher opponents, but careful planning and tactical brilliance led to a well-deserved win. This achievement reflects not just skill on the board, but a mindset of discipline and perseverance that extends to every challenge in life.
            </p>
            <div style="background:#f5f5f5; border-radius:12px; padding:2rem; text-align:center; color:#999; border:2px dashed #ddd; margin-top:1rem;">
                <i class='bx bx-image-add' style="font-size:2.5rem; display:block; margin-bottom:0.5rem;"></i>
                <p style="color:#aaa;">Photos will be added here soon</p>
            </div>
        `},"academic-topper":{title:"🎓 Academic Topper Award — 2023-2027 Batch, KLU",content:`
            <p style="font-size:1.05rem; line-height:1.8; margin-bottom:1.5rem;">
                Recognized as the Academic Topper of the 2023-2027 batch at KL University — a prestigious honor earned through consistent dedication, outstanding performance across semesters, and a relentless pursuit of excellence. Balancing rigorous coursework with extracurricular activities, this award stands as a testament to hard work, intellectual curiosity, and the drive to be the best among hundreds of peers.
            </p>
            <div style="background:#f5f5f5; border-radius:12px; padding:2rem; text-align:center; color:#999; border:2px dashed #ddd; margin-top:1rem;">
                <i class='bx bx-image-add' style="font-size:2.5rem; display:block; margin-bottom:0.5rem;"></i>
                <p style="color:#aaa;">Photos will be added here soon</p>
            </div>
        `},"quiz-winner":{title:"💡 Winner in Quiz Competition",content:`
            <p style="font-size:1.05rem; line-height:1.8; margin-bottom:1.5rem;">
                Emerged as the winner in an electrifying quiz competition that tested knowledge across technology, science, current affairs, and logical reasoning. Competing against brilliant minds, quick recall and sharp analytical thinking proved to be the winning edge. This victory highlights a deep passion for learning and the ability to think on one's feet — skills that are essential in the fast-paced world of technology and beyond.
            </p>
            <div style="background:#f5f5f5; border-radius:12px; padding:2rem; text-align:center; color:#999; border:2px dashed #ddd; margin-top:1rem;">
                <i class='bx bx-image-add' style="font-size:2.5rem; display:block; margin-bottom:0.5rem;"></i>
                <p style="color:#aaa;">Photos will be added here soon</p>
            </div>
        `},"zero-one-coding":{title:"🏆 4th Place — Zero One Coding Ladder Contest",content:`
            <p style="font-size:1.05rem; line-height:1.8; margin-bottom:1.5rem;">
                Secured an impressive 4th place finish in the Zero One Coding Ladder Contest — an intense competitive programming event that pushed problem-solving abilities to the limit. Tackling complex algorithmic challenges under tight time constraints, this result showcases strong coding skills, efficient debugging, and the determination to compete at the highest level. A stepping stone toward even greater competitive programming achievements.
            </p>
            <div style="background:#f5f5f5; border-radius:12px; padding:2rem; text-align:center; color:#999; border:2px dashed #ddd; margin-top:1rem;">
                <i class='bx bx-image-add' style="font-size:2.5rem; display:block; margin-bottom:0.5rem;"></i>
                <p style="color:#aaa;">Photos will be added here soon</p>
            </div>
        `}},o=document.getElementById("popupOverlay");document.getElementById("popupContent");const g=document.getElementById("popupBody"),d=document.getElementById("popupClose");function u(e){const t=p[e];t&&(g.innerHTML=`<h2>${t.title}</h2>${t.content}`,o.classList.add("active"),document.body.style.overflow="hidden")}function a(){o.classList.remove("active"),document.body.style.overflow=""}document.querySelectorAll(".celebration-heading-card").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-popup");u(t)})});d&&d.addEventListener("click",a);o&&o.addEventListener("click",e=>{e.target===o&&a()});document.addEventListener("keydown",e=>{e.key==="Escape"&&a()});const l=document.querySelector(".menu-btn"),m=document.querySelector(".nav-links"),s=document.querySelector(".menu-btn i");let i=!1;l&&l.addEventListener("click",()=>{i=!i,m.classList.toggle("active"),i?s.classList.replace("bx-menu","bx-x"):s.classList.replace("bx-x","bx-menu")});document.querySelectorAll(".nav-links a").forEach(e=>{e.addEventListener("click",()=>{i&&(m.classList.remove("active"),s.classList.replace("bx-x","bx-menu"),i=!1)})});const r=document.getElementById("navbar"),c=document.querySelector(".scroll-progress");window.addEventListener("scroll",()=>{r&&(window.scrollY>50?r.classList.add("scrolled"):r.classList.remove("scrolled"));const e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=e/t*100;c&&(c.style.width=n+"%")});const h=document.querySelectorAll(".scroll-reveal"),b={threshold:.15,rootMargin:"0px 0px -50px 0px"},f=new IntersectionObserver(function(e,t){e.forEach(n=>{if(n.isIntersecting)n.target.classList.add("active"),t.unobserve(n.target);else return})},b);h.forEach(e=>{f.observe(e)});document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{var e;(e=document.querySelector(".hero.section"))==null||e.classList.add("active")},100)});
