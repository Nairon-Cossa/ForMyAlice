import React, { useEffect, useState, useRef } from "react";
import {
  Heart, Sparkles, Gift, Mail, Camera, Star, Music2, ArrowDown,
  LockKeyhole, X, ChevronRight, Flower2, Cake, Send, PartyPopper, Volume2, VolumeX
} from "lucide-react";

const memories = [
  {
    date: "A little moment I keep",
    title: "The way you made all of my days feel special",
    text: "Even from miles away, you make my days special. From our little talks to the jokes, laughter, and even our silence, you always find a way to make me smile.",
    photo: "/photos/our-photo-1.jpg",
    emoji: "🌷"
  },
  {
    date: "One for the memory book",
    title: "Your smile deserves its own chapter",
    text: "I hope you never forget how much light you bring into the lives of the people who love you. You make moments warmer just by being yourself.",
    photo: "/photos/our-photo-2.jpg",
    emoji: "🧸"
  },
  {
    date: "My favourite kind of plot twist",
    title: "Getting to know you",
    text: "It was a special moment and it will always be one of my favs because it was the start of a story of love that I never want to end. I hope you know how much I love you and how much I look forward to all the chapters we have yet to write together.",
    photo: "/photos/our-photo-3.jpg",
    emoji: "💌"
  }
];

const notes = [
  {
    label: "Open when you miss me",
    icon: "🫶🏽",
    title: "Come here, amor ♡",
    body: "If I could, I'd pull you into the biggest hug right now and stay there until the world felt quiet again. Until then, let this little corner remind you that you're loved, you're thought of, and you're never far from my heart."
  },
  {
    label: "Open when you need a smile",
    icon: "🌞",
    title: "A tiny reminder",
    body: "First of all: I wont lie you might actually be funnier than me amor, cause when im with you i am just happy and giggling everytime 🧸 Secondly, I hope something makes you laugh today. You deserve soft days, happy surprises, and so many reasons to smile. HM: Mama you are the prettiest woman in the whole world."
  },
  {
    label: "Open when life feels heavy",
    icon: "🌷",
    title: "One breath at a time",
    body: "You don't have to have everything figured out today. Keep Praying, be gentle with yourself, and remember how much strength you carry. I believe in you, amor. I hope you give yourself the same kindness you give other people and especially to me."
  },
  {
    label: "Open when you want to feel loved",
    icon: "💗",
    title: "In case you forgot",
    body: "You matter. Your thoughts matter. Your dreams matter. The little things you do matter. I hope you feel celebrated not only today, but in all the ordinary days that come after it, too. I LOVE YOU."
  }
];

function PhotoFrame({ src, emoji, label }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`photo-frame ${failed ? "photo-empty" : ""}`}>
      {!failed ? (
        <img src={src} alt={label} onError={() => setFailed(true)} />
      ) : (
        <div className="photo-placeholder">
          <span>{emoji}</span>
          <small>Add your photo</small>
        </div>
      )}
      <span className="tape tape-one" />
      <span className="tape tape-two" />
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [activeNote, setActiveNote] = useState(null);
  const [letterOpen, setLetterOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (opened) {
      window.setTimeout(() => {
        document.getElementById("birthday")?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  }, [opened]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
    } else {
      audioRef.current.play().then(() => {
        setMusicOn(true);
      }).catch((err) => {
        console.log("Audio playback waiting for file or user gesture:", err);
        setMusicOn(!musicOn);
      });
    }
  };

  const begin = () => {
    setOpened(true);
    setConfetti(true);
    window.setTimeout(() => setConfetti(false), 2400);

    // Optionally start background song when entering
    if (audioRef.current && !musicOn) {
      audioRef.current.play().then(() => setMusicOn(true)).catch(() => {});
    }
  };

  return (
    <main>
      {/* Background Audio Element for "Cariño" by The Marías */}
      <audio ref={audioRef} src="/audio/carino.mp3" loop preload="auto" />

      {confetti && (
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 28 }, (_, i) => (
            <span key={i} style={{ "--i": i }}>
              {["♡", "✦", "♥", "✿"][i % 4]}
            </span>
          ))}
        </div>
      )}

      {!opened && (
        <section className="welcome-screen">
          <div className="floating floating-a">♡</div>
          <div className="floating floating-b">✿</div>
          <div className="floating floating-c">✦</div>
          <div className="welcome-card">
            <div className="mini-badge"><Heart size={14} fill="currentColor" /> made with love</div>
            <div className="envelope-scene">
              <div className="envelope-shadow" />
              <div className="envelope">
                <div className="envelope-back" />
                <div className="letter-peek"><Heart size={25} fill="currentColor" /></div>
                <div className="envelope-front" />
                <div className="envelope-flap" />
                <div className="seal"><Heart size={23} fill="currentColor" /></div>
              </div>
              <span className="tiny-heart heart-left">♡</span>
              <span className="tiny-heart heart-right">✦</span>
            </div>
            <p className="eyebrow">pssst… this is for you</p>
            <h1>Hey, Mama Bear <span className="inline-teddy">🧸</span></h1>
            <p className="welcome-copy">Your future husband that loves you so much made a little corner of the internet just for you.</p>
            <button className="primary-button" onClick={begin}>Open your little gift <Heart size={17} fill="currentColor" /></button>
            <p className="tiny-note">best opened with a smile ♡</p>
          </div>
          <div className="bottom-doodle">a little world for Alice <span>♡</span></div>
        </section>
      )}

      {opened && (
        <>
          <nav className="topbar">
            <a href="#birthday" className="brand"><span className="brand-heart">♡</span> for Alice</a>
            <button className="sound-button" onClick={toggleMusic} aria-label="Toggle music note">
              {musicOn ? <Volume2 size={16} /> : <Music2 size={16} />}
              {musicOn ? "playing: Cariño ♡" : "play Cariño 🎵"}
            </button>
          </nav>
          {musicOn && (
            <div className="music-hint">
              🎵 Now playing: <strong>Cariño — The Marías</strong> ♡
            </div>
          )}

          <section className="hero section-wrap" id="birthday">
            <div className="hero-sticker sticker-star">✦</div>
            <div className="hero-sticker sticker-flower">🌼</div>
            <div className="hero-text">
              <div className="mini-badge"><Sparkles size={14} /> today is all about you</div>
              <p className="eyebrow">to my favourite girl</p>
              <h1>Happy Birthday,<br /><span>Mama Bear</span> 🧸</h1>
              <p className="hero-copy">Today the world gets to celebrate the person I get to call <em>my wife</em>. I made you a tiny world full of little reminders of how special you are to me.</p>
              <a className="primary-button link-button" href="#scrapbook">Come explore <ArrowDown size={17} /></a>
              <div className="signature-line"><span className="signature-heart">♡</span><span>made especially for you, amor</span></div>
            </div>
            <div className="hero-art">
              <div className="hero-photo-wrap">
                <PhotoFrame src="/photos/our-photo-1.jpg" emoji="📸" label="A favourite photo of us" />
              </div>
              <div className="polaroid-note note-one"><span>my favourite</span><strong>human ♡</strong></div>
              <div className="polaroid-note note-two">you + me <span>✿</span></div>
              <div className="hero-heart-doodle">♡</div>
            </div>
          </section>

          <section className="intro-strip">
            <span>♡</span><p>Not just a birthday page. A little keepsake for my favourite girl.</p><span>♡</span>
          </section>

          <section className="section-wrap scrapbook-section" id="scrapbook">
            <div className="section-heading">
              <p className="eyebrow">chapter one · our little scrapbook</p>
              <h2>Little moments,<br /><span>big feelings.</span></h2>
              <p className="section-subtitle">A few pages from a story I'm so happy to be part of.</p>
            </div>
            <div className="memory-grid">
              {memories.map((memory, index) => (
                <article className={`memory-card memory-${index + 1}`} key={memory.title}>
                  <PhotoFrame src={memory.photo} emoji={memory.emoji} label={memory.title} />
                  <div className="memory-content">
                    <p className="memory-date">{memory.date}</p>
                    <h3>{memory.title}</h3>
                    <p>{memory.text}</p>
                  </div>
                  <span className="card-doodle">{index === 1 ? "✿" : "♡"}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="notes-section">
            <div className="section-wrap">
              <div className="section-heading centered">
                <p className="eyebrow">chapter two · just in case</p>
                <h2>Little notes for<br /><span>different days.</span></h2>
                <p className="section-subtitle">Tap one whenever you need a little love from me.</p>
              </div>
              <div className="notes-grid">
                {notes.map((note, i) => (
                  <button className={`note-card note-card-${i + 1}`} key={note.label} onClick={() => setActiveNote(note)}>
                    <span className="note-icon">{note.icon}</span>
                    <span className="note-label">{note.label}</span>
                    <span className="note-open">tap to open <ChevronRight size={15} /></span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="love-list-section section-wrap">
            <div className="love-list-art"><div className="big-heart">♡</div><span className="orbit orbit-one">✦</span><span className="orbit orbit-two">✿</span><span className="orbit orbit-three">♡</span></div>
            <div className="love-list-copy">
              <p className="eyebrow">chapter three · a tiny reminder</p>
              <h2>Things I hope<br />you <span>never forget.</span></h2>
              <ul>
                <li><Heart size={16} fill="currentColor" /> You deserve to be celebrated loudly and loved gently.</li>
                <li><Heart size={16} fill="currentColor" /> You are perfect and extraordinary.</li>
                <li><Heart size={16} fill="currentColor" /> I will always love you my princess.</li>
                <li><Heart size={16} fill="currentColor" /> We will always be together, no one is leaving because we are made for each other.</li>
                <li><Heart size={16} fill="currentColor" /> You make the world softer just by being you.</li>
              </ul>
            </div>
          </section>

          <section className="letter-section">
            <div className="letter-card">
              <div className="letter-flower flower-left">✿</div>
              <div className="letter-flower flower-right">✿</div>
              <div className="mini-badge"><Mail size={14} /> one last thing, amor</div>
              <h2>A letter for<br /><span>my Mama Bear.</span></h2>
              <p>There are some things I want you to be able to come back to, even after your birthday is over.</p>
              <button className="primary-button" onClick={() => setLetterOpen(true)}>Read your letter <Mail size={17} /></button>
              <div className="letter-bottom">sealed with all my love <Heart size={14} fill="currentColor" /></div>
            </div>
          </section>

          <section className="final-section section-wrap">
            <div className="final-sparkle">✧</div>
            <p className="eyebrow">and before you go…</p>
            <h2>One last little<br /><span>surprise.</span></h2>
            {!showSurprise ? (
              <button className="surprise-button" onClick={() => { setShowSurprise(true); setConfetti(true); window.setTimeout(() => setConfetti(false), 2400); }}>
                I want to see it <Gift size={18} />
              </button>
            ) : (
              <div className="surprise-reveal">
                <div className="surprise-teddy">🧸💐</div>
                <h3>Birthday girl, this little world is yours.</h3>
                <p>Keep it. Revisit it. Come back on a random Tuesday when you need a smile. I hope it reminds you that someone thought you were worth turning a whole bunch of lines of code into something full of love.</p>
                <p className="surprise-signature">Happy birthday, amor. ♡</p>
              </div>
            )}
          </section>

          <footer className="footer">
            <div className="footer-heart">♡</div>
            <p>made with love, just for Alice</p>
            <span>your own little corner of the universe · forever a favourite</span>
          </footer>
        </>
      )}

      {activeNote && (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveNote(null)}>
          <article className="note-modal" role="dialog" aria-modal="true" aria-label={activeNote.label} onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setActiveNote(null)} aria-label="Close note"><X size={19} /></button>
            <div className="modal-emoji">{activeNote.icon}</div>
            <p className="eyebrow">{activeNote.label}</p>
            <h2>{activeNote.title}</h2>
            <p className="modal-body">{activeNote.body}</p>
            <div className="modal-signoff">a little hug from me to you ♡</div>
            <button className="primary-button" onClick={() => setActiveNote(null)}>Keep this in my heart <Heart size={16} /></button>
          </article>
        </div>
      )}

      {letterOpen && (
        <div className="modal-backdrop letter-backdrop" role="presentation" onClick={() => setLetterOpen(false)}>
          <article className="birthday-letter" role="dialog" aria-modal="true" aria-label="Birthday letter for Alice" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setLetterOpen(false)} aria-label="Close letter"><X size={19} /></button>
            <div className="letter-stamp">♡</div>
            <p className="eyebrow">to my Alice</p>
            <h2>Happy birthday, amor.</h2>
            <p>My Mama Bear,</p>
            <p>So today is about celebrating you, the person you are, the person you're becoming, and all the beautiful things that make you <em>you</em>.</p>
            <p>I hope this new year of your life brings you peace when things feel loud, courage when things feel uncertain, laughter that makes your stomach hurt, and filled with me, your family and friends who remind you how precious you are.</p>
            <p>I hope you keep being so sweet to me. I hope you keep the younger you, your Mom and your Dad who is up in the beautiful sky proud. I hope you look at yourself with kindness and love, even on the days when it's difficult. And when things get tough, difficult and complicated know that i am here for youand also make sure to always make space for the things that make your heart feel alive.</p>
            <p>Thank you for the wonderful memories we've made, the little moments that became special without us even noticing, and the chance to keep learning more about you. I don't want this page to be just a birthday gift; I want it to be a little reminder you can return to whenever you need one.</p>
            <p>Today, I celebrate you. I am rooting for you. And I'm wishing you a year filled with beautiful surprises, growth, genuine happiness, and love that feels safe and sincere.</p>
            <p>Happy birthday, minha princesa do coração. Keep this little world close, and never forget how special you are to me.</p>
            <p className="letter-love">With all my love,<br /><strong>your Big Back ♡</strong></p>
          </article>
        </div>
      )}
    </main>
  );
}

export default App;