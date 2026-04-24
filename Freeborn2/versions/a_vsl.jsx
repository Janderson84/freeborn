/* Version A — "The Warning" — VSL landing */
const { useState: useStateA } = React;

function VersionA_VSL({ values, onGo }) {
  const { mm, ss } = useCountdown(15 * 60, 'fb_vsl_cd');
  const [videoPlaying, setVideoPlaying] = useStateA(false);
  const price = values.price || 17;
  const showTimer = values.timer !== false;
  const showStack = values.stack !== false;
  const testimonialCount = values.testimonials || 12;

  const testimonials = [
    {
      quote: "I thought this was going to be one of those things that sounds good but doesn't actually work. It wasn't. I qualified for two programs I'd never heard of and I'm saving $340 a month. I can't believe I didn't know about this sooner.",
      name: "Mark T.", loc: "Phoenix, AZ"
    },
    {
      quote: "My husband was skeptical. I bought it anyway. Three weeks later he admitted I was right. We've cut our energy spending by almost half and it took maybe two weekends of actual effort.",
      name: "Diane K.", loc: "Columbus, OH"
    },
    {
      quote: "As someone who's been worried about energy prices for years, this was a relief. Real, practical options — not theory. Not someday technology. Things I could actually do right now.",
      name: "Robert M.", loc: "Nashville, TN"
    },
    {
      quote: "I'm on a fixed income and every dollar counts. The first module alone paid for this ten times over. Wish I'd found it two winters ago.",
      name: "Janet S.", loc: "Harrisburg, PA"
    },
    {
      quote: "Practical, patriotic, no fluff. That's what sold me. My son and I sat down, followed the 30-day plan, and our numbers dropped that first month.",
      name: "David R.", loc: "Boise, ID"
    },
    {
      quote: "I was paying $480 in gas and electric every month. After following the Blueprint, we're at $210. Same house, same family, same weather. The math just works.",
      name: "Carlos V.", loc: "San Antonio, TX"
    },
    {
      quote: "I've bought a lot of 'online guides' that turned out to be garbage. This one is different. It's specific, it names programs by name, and the fast-track actually moves the needle.",
      name: "Beth H.", loc: "Grand Rapids, MI"
    },
    {
      quote: "My daughter sent me the link thinking I'd laugh. I didn't. I read every page. Then I started the 30-day plan. She's now the one asking me for advice.",
      name: "Ralph D.", loc: "Scranton, PA"
    },
    {
      quote: "We're a household of five. Winter used to wreck us. I followed the heating chapter and we got through January $380 under last year's bill. That's real money for my family.",
      name: "Kaylee P.", loc: "Sioux Falls, SD"
    },
    {
      quote: "Small business owner here. I applied the commercial rate strategy to my shop's bill and it alone saved me thousands this year. Paid for itself in a weekend.",
      name: "Tony R.", loc: "Jacksonville, FL"
    },
    {
      quote: "I'm a veteran on a pension and I don't like being taken advantage of. This Blueprint felt like someone finally leveled with me. I recommend it at every VFW meeting now.",
      name: "Walter J.", loc: "Lubbock, TX"
    },
    {
      quote: "Honestly I just wanted to prove it was a scam. I couldn't. Everything in it checks out. My bill last month was the lowest it's been in four years.",
      name: "Stephanie O.", loc: "Greensboro, NC"
    }
  ].slice(0, testimonialCount);

  return (
    <div data-screen-label="A-01 VSL" style={{
      background: 'var(--a-cream)',
      color: 'var(--a-ink)',
      fontFamily: '"Libre Caslon Text", Georgia, serif',
      minHeight: '100vh'
    }}>
      {/* Alert bar */}
      <div style={{
        background: 'var(--a-red)', color: '#fff',
        textAlign: 'center', padding: '10px 16px',
        fontFamily: 'Oswald, Impact, sans-serif',
        fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500
      }}>
        ⚠ &nbsp; PUBLIC ADVISORY: DO NOT PAY ANOTHER GAS BILL UNTIL YOU WATCH THIS &nbsp; ⚠
      </div>

      {/* Brand bar */}
      <div style={{
        background: 'var(--a-navy)', color: 'var(--a-paper)',
        padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '3px solid var(--a-gold)'
      }}>
        <div style={{
          fontFamily: 'Oswald, Impact, sans-serif',
          fontSize: 22, letterSpacing: '0.36em', fontWeight: 600
        }}>FREEBORN</div>
        <div style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--a-gold)', opacity: 0.9
        }}>
          ENERGY INDEPENDENCE DIVISION
        </div>
      </div>

      {/* Hero */}
      <section style={{ maxWidth: 1020, margin: '0 auto', padding: '44px 24px 24px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '6px 14px',
          border: '1px solid var(--a-red)',
          color: 'var(--a-red)',
          fontFamily: 'Oswald, Impact, sans-serif',
          fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase',
          marginBottom: 22
        }}>
          <span style={{ width: 8, height: 8, background: 'var(--a-red)', display: 'inline-block' }} />
          Breaking free from Big Oil — one American family at a time
          <span style={{ width: 8, height: 8, background: 'var(--a-red)', display: 'inline-block' }} />
        </div>

        <h1 style={{
          fontFamily: '"Libre Caslon Text", Georgia, serif',
          fontWeight: 700, fontStyle: 'italic',
          fontSize: 'clamp(36px, 5.6vw, 64px)',
          lineHeight: 1.06, letterSpacing: '-0.01em',
          margin: '0 0 18px', color: 'var(--a-ink)',
          textWrap: 'balance'
        }}>
          They've spent <span style={{ color: 'var(--a-red)' }}>millions</span> hoping<br/>
          you'd never find out about this.
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 1.6vw, 20px)',
          lineHeight: 1.55, maxWidth: 760, margin: '0 auto 28px',
          color: 'var(--a-ink-2)', textWrap: 'pretty'
        }}>
          How everyday American families are quietly slashing their energy bills by
          <b style={{ color: 'var(--a-red)' }}> $200–$400 a month</b> — without solar panels,
          expensive renovations, or moving off the grid.
        </p>

        {/* VSL */}
        <div style={{
          position: 'relative', margin: '0 auto', maxWidth: 920,
          aspectRatio: '16 / 9',
          background: '#000',
          border: '4px solid var(--a-gold)',
          boxShadow: '0 30px 60px -30px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.4) inset'
        }}>
          {/* thumbnail */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 10px, rgba(255,255,255,0.01) 10px 20px)',
            background: '#0a1322',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <div style={{
              position: 'absolute', top: 16, left: 16,
              padding: '4px 10px', background: 'var(--a-red)', color: '#fff',
              fontFamily: 'Oswald, Impact, sans-serif', fontSize: 11, letterSpacing: '0.2em'
            }}>● LIVE PRESENTATION</div>
            <div style={{
              position: 'absolute', top: 16, right: 16, color: 'rgba(255,255,255,0.85)',
              fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11, letterSpacing: '0.16em'
            }}>
              10:42
            </div>

            <div style={{
              textAlign: 'center', color: '#fff',
              padding: '0 40px', pointerEvents: 'none'
            }}>
              <div style={{
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 'clamp(20px, 2.6vw, 34px)',
                letterSpacing: '0.04em', textTransform: 'uppercase'
              }}>
                The Energy Independence<br/>Presentation
              </div>
              <div style={{
                marginTop: 12, fontFamily: '"Libre Caslon Text", Georgia, serif',
                fontStyle: 'italic', fontSize: 15, opacity: 0.85
              }}>
                ▸ SOUND IS ON — Please do not refresh this page
              </div>
            </div>

            {!videoPlaying && (
              <button
                onClick={() => setVideoPlaying(true)}
                aria-label="Play the presentation"
                style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'transparent'
                }}
              >
                <span style={{
                  width: 96, height: 96, borderRadius: '50%',
                  background: 'var(--a-red)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 0 10px rgba(164,24,42,0.25), 0 0 0 24px rgba(164,24,42,0.12)'
                }}>
                  <span style={{
                    borderLeft: '26px solid #fff',
                    borderTop: '16px solid transparent',
                    borderBottom: '16px solid transparent',
                    marginLeft: 8
                  }} />
                </span>
              </button>
            )}
            {videoPlaying && (
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'rgba(0,0,0,0.6)', padding: '10px 14px',
                display: 'flex', alignItems: 'center', gap: 10, color: '#fff',
                fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11
              }}>
                <span style={{ width: 10, height: 10, background: 'var(--a-red)' }} />
                <span>PLAYING · 00:12 / 10:42</span>
                <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.2)' }}>
                  <div style={{ width: '2%', height: '100%', background: 'var(--a-red)' }} />
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{
          marginTop: 14,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--a-ink-2)', opacity: 0.7
        }}>
          ▸ Click the play button to begin · Watch until the end
        </div>
      </section>

      {/* Headline rule */}
      <div style={{ maxWidth: 1020, margin: '40px auto 0', padding: '0 24px' }}>
        <hr className="rule-red" />
      </div>

      {/* Figures row */}
      <section style={{ maxWidth: 1020, margin: '0 auto', padding: '36px 24px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, textAlign: 'center'
        }}>
          {[
            { n: '$3,200', l: 'Typical family yearly savings' },
            { n: '40–60%', l: 'Savings on alternative fuels' },
            { n: '60-Day', l: 'Iron-clad guarantee' }
          ].map((f, i) => (
            <div key={i}>
              <div style={{
                fontFamily: '"Libre Caslon Text", Georgia, serif',
                fontStyle: 'italic', fontWeight: 700,
                fontSize: 'clamp(36px, 4.6vw, 56px)',
                color: 'var(--a-red)', lineHeight: 1
              }}>{f.n}</div>
              <div style={{
                marginTop: 8,
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--a-ink-2)'
              }}>{f.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What you'll discover */}
      <section style={{ background: 'var(--a-paper)', borderTop: '1px solid #00000012', borderBottom: '1px solid #00000012' }}>
        <div style={{ maxWidth: 1020, margin: '0 auto', padding: '56px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{
              fontFamily: 'Oswald, Impact, sans-serif',
              fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--a-red)'
            }}>Inside the Blueprint</div>
            <h2 style={{
              fontFamily: '"Libre Caslon Text", Georgia, serif',
              fontStyle: 'italic', fontWeight: 700,
              fontSize: 'clamp(28px, 3.8vw, 44px)',
              margin: '8px 0 6px'
            }}>
              Six truths <span style={{ color: 'var(--a-red)' }}>Big Oil</span> is hiding from you.
            </h2>
            <div style={{ color: 'var(--a-ink-2)', fontSize: 16 }}>
              The secrets the energy companies have spent millions keeping hidden.
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0,
            border: '1px solid rgba(20,22,31,0.15)'
          }}>
            {[
              {
                n: '01',
                t: 'Government programs Big Oil buried',
                b: "Federal and state programs that could put thousands back in your pocket this year — programs quietly lobbied into invisibility."
              },
              {
                n: '02',
                t: 'Cut gas bills 15–30% this week',
                b: "Legal, documented fuel strategies that work on the vehicle you already drive. No new car. No modifications."
              },
              {
                n: '03',
                t: 'Alternative fuels at 40–60% less',
                b: "Access fuels available right now near you at a fraction of regular gasoline. Most Americans have no idea these options exist."
              },
              {
                n: '04',
                t: 'Eliminate home gas dependency',
                b: "Step-by-step plan to cut the biggest categories — heat, hot water, cooking — with a clear ROI for every change."
              },
              {
                n: '05',
                t: 'The 30-Day fast track',
                b: "No guesswork. A clear sequence of actions that compounds your savings month after month, starting with quick wins in week one."
              },
              {
                n: '06',
                t: '100% legal, available right now',
                b: "No waiting for new tech. No massive upfront investment. No moving off the grid. Works for regular families in regular homes."
              }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '26px 26px',
                background: 'var(--a-cream)',
                borderRight: i % 2 === 0 ? '1px solid rgba(20,22,31,0.15)' : 'none',
                borderBottom: i < 4 ? '1px solid rgba(20,22,31,0.15)' : 'none',
                display: 'flex', gap: 18
              }}>
                <div style={{
                  fontFamily: '"Libre Caslon Text", Georgia, serif',
                  fontStyle: 'italic', color: 'var(--a-gold)',
                  fontSize: 36, lineHeight: 1, minWidth: 44
                }}>{item.n}</div>
                <div>
                  <div style={{
                    fontFamily: 'Oswald, Impact, sans-serif',
                    fontSize: 17, letterSpacing: '0.04em', textTransform: 'uppercase',
                    color: 'var(--a-navy)', marginBottom: 6
                  }}>{item.t}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--a-ink-2)' }}>
                    {item.b}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: 1020, margin: '0 auto', padding: '56px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{
            fontFamily: 'Oswald, Impact, sans-serif',
            fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--a-red)'
          }}>Real families · Real savings</div>
          <h2 style={{
            fontFamily: '"Libre Caslon Text", Georgia, serif',
            fontStyle: 'italic', fontWeight: 700,
            fontSize: 'clamp(28px, 3.6vw, 40px)', margin: '8px 0 4px'
          }}>
            These stories aren't from actors — they're from your neighbors.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(3, testimonials.length)}, 1fr)`,
          gap: 18
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: 'var(--a-paper)',
              border: '1px solid rgba(20,22,31,0.12)',
              padding: '22px 22px 18px',
              display: 'flex', flexDirection: 'column'
            }}>
              <Stars />
              <div style={{
                fontFamily: '"Libre Caslon Text", Georgia, serif',
                fontStyle: 'italic', fontSize: 15, lineHeight: 1.55,
                color: 'var(--a-ink)', margin: '12px 0 16px', flex: 1
              }}>
                “{t.quote}”
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 'auto' }}>
                <PH label="PORTRAIT" w={48} h={48} style={{ borderRadius: 0 }} />
                <div>
                  <div style={{
                    fontFamily: 'Oswald, Impact, sans-serif',
                    fontSize: 13, letterSpacing: '0.1em'
                  }}>{t.name.toUpperCase()}</div>
                  <div style={{
                    fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11,
                    color: 'var(--a-ink-2)', opacity: 0.8
                  }}>{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder letter */}
      <section style={{ background: 'var(--a-navy)', color: 'var(--a-paper)' }}>
        <div style={{
          maxWidth: 1020, margin: '0 auto', padding: '56px 24px',
          display: 'grid', gridTemplateColumns: '280px 1fr', gap: 40, alignItems: 'start'
        }}>
          <div>
            <PH label="FOUNDER PHOTO" h={320} dark />
            <div style={{
              marginTop: 12,
              fontFamily: 'Oswald, Impact, sans-serif',
              fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--a-gold)'
            }}>J. Anderson · Founder, Freeborn</div>
          </div>
          <div>
            <div style={{
              fontFamily: 'Oswald, Impact, sans-serif',
              fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--a-gold)'
            }}>A letter to the American family</div>
            <h3 style={{
              fontFamily: '"Libre Caslon Text", Georgia, serif',
              fontStyle: 'italic', fontWeight: 700,
              fontSize: 'clamp(26px, 3vw, 36px)', lineHeight: 1.15,
              margin: '10px 0 16px'
            }}>
              I built this for my mother. Then for yours.
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
              I watched my mom open her utility bill at the kitchen table and try not to cry.
              Fixed income. Bigger check every month. The same people who set those prices
              were on television telling her there was nothing anyone could do.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
              They were lying. What's inside this blueprint is the exact playbook I built for her —
              the programs, the fuel options, the home tactics — everything we used to cut her
              bill almost in half. It's written for regular Americans who are done being taken advantage of.
            </p>
            <div style={{
              marginTop: 18,
              fontFamily: '"Caveat", "Brush Script MT", cursive',
              fontSize: 38, color: 'var(--a-gold)', lineHeight: 1
            }}>J. Anderson</div>
          </div>
        </div>
      </section>

      {/* Offer / CTA */}
      <section id="offer" style={{ background: 'var(--a-cream)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            border: '1px solid var(--a-red)', color: 'var(--a-red)',
            padding: '6px 14px',
            fontFamily: 'Oswald, Impact, sans-serif',
            fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase'
          }}>★ Limited Introductory Offer ★</div>

          <h2 style={{
            fontFamily: '"Libre Caslon Text", Georgia, serif',
            fontStyle: 'italic', fontWeight: 700,
            fontSize: 'clamp(32px, 4.4vw, 52px)', margin: '18px 0 6px',
            lineHeight: 1.08, textWrap: 'balance'
          }}>
            Yes — I want my Energy<br/>Independence Blueprint.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--a-ink-2)', maxWidth: 620, margin: '10px auto 30px' }}>
            Instant digital delivery. Read it tonight. Start saving this week.
          </p>

          {showStack && (
            <div style={{
              textAlign: 'left', background: '#fff',
              border: '1px solid rgba(20,22,31,0.15)',
              padding: '24px 28px', marginBottom: 28
            }}>
              <div style={{
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--a-navy)', marginBottom: 14
              }}>Here's everything you get today</div>
              {[
                ['The Energy Independence Blueprint (120-page PDF)', 97],
                ['The 30-Day Fast-Track Action Plan', 47],
                ['Government Programs Lookup Sheet (all 50 states)', 39],
                ['The Alternative Fuel Locator Map', 29],
                ['Home Energy Audit Checklist', 19]
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '10px 0', borderBottom: '1px dashed rgba(20,22,31,0.15)',
                  fontSize: 15, color: 'var(--a-ink)'
                }}>
                  <span>{row[0]}</span>
                  <span style={{
                    fontFamily: 'ui-monospace, Menlo, monospace',
                    color: 'var(--a-ink-2)'
                  }}>${row[1]} value</span>
                </div>
              ))}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '14px 0 2px',
                fontFamily: 'Oswald, Impact, sans-serif', fontSize: 16, letterSpacing: '0.08em'
              }}>
                <span>TOTAL VALUE</span>
                <span style={{ textDecoration: 'line-through', color: 'var(--a-ink-2)' }}>$231</span>
              </div>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                paddingTop: 6,
                fontFamily: 'Oswald, Impact, sans-serif', fontSize: 20, letterSpacing: '0.06em',
                color: 'var(--a-red)'
              }}>
                <span>TODAY'S PRICE</span>
                <span>${price}</span>
              </div>
            </div>
          )}

          {showTimer && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              border: '1px solid var(--a-red)',
              background: '#fff',
              padding: '10px 18px', marginBottom: 22
            }}>
              <span style={{
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--a-red)'
              }}>Offer expires in</span>
              <span style={{
                fontFamily: 'ui-monospace, Menlo, monospace',
                fontSize: 22, color: 'var(--a-navy)', letterSpacing: '0.08em', fontWeight: 600
              }}>{mm}:{ss}</span>
            </div>
          )}

          <div>
            <button
              onClick={onGo}
              style={{
                display: 'inline-block',
                background: 'var(--a-red)', color: '#fff',
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 22, letterSpacing: '0.16em', textTransform: 'uppercase',
                padding: '20px 44px', border: 0,
                boxShadow: '0 12px 0 -2px var(--a-red-dark), 0 18px 40px -15px rgba(164,24,42,0.6)',
                cursor: 'pointer'
              }}
            >
              Get Instant Access for ${price} →
            </button>
          </div>

          <div style={{
            marginTop: 18,
            fontFamily: 'ui-monospace, Menlo, monospace',
            fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--a-ink-2)'
          }}>
            🔒 256-bit SSL · 60-Day Money-Back Guarantee · Instant Digital Access
          </div>
        </div>
      </section>

      {/* Guarantee seal */}
      <section style={{ background: 'var(--a-paper)' }}>
        <div style={{
          maxWidth: 920, margin: '0 auto', padding: '48px 24px',
          display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, alignItems: 'center'
        }}>
          <div style={{
            width: 180, height: 180, borderRadius: '50%',
            border: '3px double var(--a-red)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', color: 'var(--a-red)',
            fontFamily: '"Libre Caslon Text", Georgia, serif'
          }}>
            <div style={{ fontStyle: 'italic', fontSize: 14, letterSpacing: '0.12em' }}>IRON-CLAD</div>
            <div style={{
              fontFamily: 'Oswald, Impact, sans-serif',
              fontSize: 44, lineHeight: 1, fontWeight: 700
            }}>60</div>
            <div style={{
              fontFamily: 'Oswald, Impact, sans-serif',
              fontSize: 14, letterSpacing: '0.22em'
            }}>DAY</div>
            <div style={{ fontStyle: 'italic', fontSize: 13 }}>Guarantee</div>
          </div>
          <div>
            <h3 style={{
              fontFamily: '"Libre Caslon Text", Georgia, serif',
              fontStyle: 'italic', fontWeight: 700,
              fontSize: 'clamp(24px, 3vw, 32px)', margin: '0 0 12px'
            }}>
              Save 10× what you paid, or you pay nothing.
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--a-ink-2)', margin: 0 }}>
              Try the entire Energy Independence Blueprint for 60 days. If you implement what's
              inside and don't save at least ten times what you paid — or if you're unsatisfied
              for any reason whatsoever — email us and we'll refund every penny. No questions.
              No hassle. No fine print. We take all the risk.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--a-cream)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '56px 24px' }}>
          <h3 style={{
            fontFamily: '"Libre Caslon Text", Georgia, serif',
            fontStyle: 'italic', fontWeight: 700, textAlign: 'center',
            fontSize: 'clamp(28px, 3.4vw, 36px)', margin: '0 0 26px'
          }}>Questions we get every day.</h3>
          {[
            ["I'm not particularly tech-savvy. Is this too complicated for me?",
             "Not at all. The Blueprint is written specifically for regular people — not engineers, not policy experts. If you can follow a recipe or set up a new phone, you can implement what's inside."],
            ["Do I need expensive equipment or major home improvements?",
             "No. Many of the highest-impact strategies cost nothing upfront — programs you can apply for, options you can access, changes in how you use what you already have. Optional upgrades are included for people who want to go further."],
            ["I live in an apartment or rent my home. Can this still help me?",
             "Yes. Several modules apply whether you own or rent. The vehicle and fuel strategies apply to anyone who drives."],
            ["What if this doesn't work for my situation?",
             "You're covered by a 60-day money-back guarantee. If you implement what's in the Blueprint and don't save at least 10× the purchase price, contact us for a full refund. No questions asked."],
            ["Why haven't I heard about these options before?",
             "That's exactly the right question — and the Blueprint answers it in detail. The short version: the energy industry has powerful financial incentives to keep you paying full price. The information exists. It's just not advertised."]
          ].map((f, i) => (
            <details key={i} style={{
              borderTop: '1px solid rgba(20,22,31,0.18)',
              padding: '18px 0',
              borderBottom: i === 4 ? '1px solid rgba(20,22,31,0.18)' : 'none'
            }}>
              <summary style={{
                cursor: 'pointer',
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 16, letterSpacing: '0.04em', textTransform: 'uppercase',
                color: 'var(--a-navy)', listStyle: 'none', outline: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
              }}>
                <span>{f[0]}</span>
                <span style={{ color: 'var(--a-red)', marginLeft: 12 }}>+</span>
              </summary>
              <div style={{
                marginTop: 10, color: 'var(--a-ink-2)', fontSize: 15, lineHeight: 1.65
              }}>{f[1]}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        background: 'var(--a-red)', color: '#fff', padding: '60px 24px', textAlign: 'center'
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h3 style={{
            fontFamily: '"Libre Caslon Text", Georgia, serif',
            fontStyle: 'italic', fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 44px)', margin: 0, lineHeight: 1.1
          }}>
            Keep writing checks to Big Oil. <span style={{ opacity: 0.7 }}>Or</span> take your household back today.
          </h3>
          <p style={{
            opacity: 0.9, fontSize: 17, lineHeight: 1.6, maxWidth: 620,
            margin: '14px auto 28px'
          }}>
            Click below, get instant access, and make this the last month
            your family pays full price for energy.
          </p>
          <button
            onClick={onGo}
            style={{
              background: '#fff', color: 'var(--a-red)',
              fontFamily: 'Oswald, Impact, sans-serif',
              fontSize: 20, letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '18px 40px', border: 0,
              boxShadow: '0 10px 0 -2px rgba(0,0,0,0.25)',
              cursor: 'pointer'
            }}
          >
            Claim Your Blueprint — ${price} →
          </button>
        </div>
      </section>

      <Footer theme="a" />
    </div>
  );
}

Object.assign(window, { VersionA_VSL });
