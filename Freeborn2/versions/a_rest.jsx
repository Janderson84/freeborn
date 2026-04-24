/* Version A — Checkout, OTO1, OTO2, Thank You */
const { useState: useStateAC } = React;

/* ============================================================
   CHECKOUT — Step 2
   ============================================================ */
function VersionA_Checkout({ values, onGo }) {
  const { mm, ss } = useCountdown(15 * 60, 'fb_vsl_cd');
  const price = values.price || 17;
  const [bumps, setBumps] = useStateAC({ book: true, stove: false, flash: false });
  const [form, setForm] = useStateAC({
    email: 'sarah.mitchell@aol.com', first: 'Sarah', last: 'Mitchell',
    card: '4242 4242 4242 4242', exp: '09/29', cvv: '421', zip: '43220'
  });

  const bumpItems = [
    { id: 'book',  price: 9, label: 'Energy Independence (softcover)', short: 'Softcover book' },
    { id: 'stove', price: 9, label: 'Freeborn Camping Stove',          short: 'Camping stove' },
    { id: 'flash', price: 9, label: 'Freeborn Tactical Flashlight',    short: 'Tactical flashlight' }
  ];
  const bumpTotal = bumpItems.reduce((s, b) => s + (bumps[b.id] ? b.price : 0), 0);
  const total = price + bumpTotal;

  function go(e) { e?.preventDefault?.(); onGo && onGo(); }
  const toggle = (id) => setBumps(b => ({ ...b, [id]: !b[id] }));

  return (
    <div data-screen-label="A-02 Checkout" style={{
      background: 'var(--a-cream)', color: 'var(--a-ink)',
      fontFamily: '"Libre Caslon Text", Georgia, serif', minHeight: '100vh'
    }}>
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
          fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'var(--a-gold)'
        }}>🔒 Secure 256-bit SSL Checkout</div>
      </div>

      <StepNav theme="a" step={2} />

      <div style={{ maxWidth: 1020, margin: '0 auto', padding: '18px 24px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '6px 14px',
            border: '1px solid var(--a-red)', color: 'var(--a-red)',
            fontFamily: 'Oswald, Impact, sans-serif',
            fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase'
          }}>
            ⚠ Order form expires in {mm}:{ss}
          </div>
          <h1 style={{
            fontFamily: '"Libre Caslon Text", Georgia, serif',
            fontStyle: 'italic', fontWeight: 700,
            fontSize: 'clamp(30px, 4vw, 46px)', margin: '16px 0 4px', lineHeight: 1.1
          }}>
            You're one step from your Blueprint.
          </h1>
          <p style={{ color: 'var(--a-ink-2)', fontSize: 16 }}>
            Complete your order below. Delivered instantly to your email.
          </p>
        </div>

        <form onSubmit={go} style={{
          display: 'grid', gridTemplateColumns: '1.2fr 0.9fr', gap: 28, alignItems: 'start'
        }}>
          {/* LEFT: form */}
          <div>
            {/* contact */}
            <div style={{
              background: '#fff', border: '1px solid rgba(20,22,31,0.18)', padding: '22px 22px 4px'
            }}>
              <div style={{
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--a-navy)', marginBottom: 14
              }}>① Contact Information</div>
              <Field label="Email address" value={form.email} onChange={v => setForm({...form, email: v})} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Field label="First name" value={form.first} onChange={v => setForm({...form, first: v})} />
                <Field label="Last name" value={form.last} onChange={v => setForm({...form, last: v})} />
              </div>
            </div>

            {/* ORDER BUMPS — three options */}
            <div style={{ marginTop: 20 }}>
              <div style={{
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--a-navy)', marginBottom: 10
              }}>One-time upgrades · each $9</div>

              {bumpItems.map((b) => {
                const active = bumps[b.id];
                return (
                  <div key={b.id} style={{
                    background: active ? '#fff8e3' : '#fffdf4',
                    border: active ? '2px dashed var(--a-red)' : '1px dashed rgba(20,22,31,0.25)',
                    padding: '14px 18px', marginBottom: 10,
                    display: 'grid', gridTemplateColumns: '28px 72px 1fr 84px', gap: 14, alignItems: 'center',
                    cursor: 'pointer'
                  }} onClick={() => toggle(b.id)}>
                    <input type="checkbox" checked={active} onChange={() => toggle(b.id)}
                      style={{ width: 22, height: 22, accentColor: 'var(--a-red)' }} />

                    {/* illustrations */}
                    {b.id === 'book' && (
                      <div aria-label="Energy Independence softcover" style={{
                        width: 64, height: 88,
                        background: 'linear-gradient(90deg, #96263a 0 6%, #b63552 6% 100%)',
                        boxShadow: '2px 2px 0 rgba(20,22,31,0.2)',
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                        padding: '6px 6px 6px 10px', color: '#f7d885', textAlign: 'center'
                      }}>
                        <div style={{
                          fontFamily: 'Oswald, Impact, sans-serif',
                          fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase',
                          borderTop: '1px solid #e6b24a', borderBottom: '1px solid #e6b24a', padding: '2px 0'
                        }}>FREEBORN</div>
                        <div style={{
                          fontFamily: '"Libre Caslon Text", Georgia, serif', fontStyle: 'italic',
                          fontSize: 10, lineHeight: 1.05, color: '#fff2c9'
                        }}>Energy<br/>Independence</div>
                        <div style={{
                          fontFamily: 'ui-monospace, Menlo, monospace',
                          fontSize: 6, letterSpacing: '0.16em', opacity: 0.85
                        }}>SOFTCOVER</div>
                      </div>
                    )}
                    {b.id === 'stove' && (
                      <div aria-label="Camping stove" style={{
                        width: 64, height: 64, background: '#2e3640', position: 'relative',
                        border: '2px solid var(--a-navy)', margin: '0 4px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <div style={{
                          width: 40, height: 10, background: '#111',
                          borderLeft: '3px solid #888', borderRight: '3px solid #888', position: 'relative'
                        }} />
                        <div style={{
                          position: 'absolute', top: 10, width: 36, height: 20,
                          background: 'radial-gradient(ellipse at center, #ff6a1c 0%, #c0352a 60%, transparent 75%)'
                        }} />
                        <div style={{
                          position: 'absolute', bottom: 4, left: 4, right: 4, height: 10,
                          background: 'repeating-linear-gradient(90deg, #888 0 4px, #444 4px 8px)'
                        }} />
                      </div>
                    )}
                    {b.id === 'flash' && (
                      <div aria-label="Tactical flashlight" style={{
                        width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <div style={{
                          width: 54, height: 16,
                          background: 'linear-gradient(90deg, #2a2e36 0 40%, #404650 40% 100%)',
                          position: 'relative', border: '1px solid #1a1d22'
                        }}>
                          <div style={{
                            position: 'absolute', right: -8, top: -4, width: 20, height: 24,
                            background: 'linear-gradient(90deg, #5a6270 0%, #8a94a4 100%)',
                            border: '1px solid #1a1d22'
                          }} />
                          <div style={{
                            position: 'absolute', right: -28, top: 0, width: 20, height: 16,
                            background: 'radial-gradient(ellipse at left, rgba(255,225,120,0.85) 0%, transparent 70%)'
                          }} />
                        </div>
                      </div>
                    )}

                    <div>
                      <div style={{
                        fontFamily: 'Oswald, Impact, sans-serif',
                        fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase',
                        color: active ? 'var(--a-red)' : 'var(--a-navy)', marginBottom: 2
                      }}>{active ? 'YES — ADD' : 'ADD'} {b.label}</div>
                      <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--a-ink-2)' }}>
                        {b.id === 'book'  && (<><i>Energy Independence</i> — the <b>softcover</b> edition of the Blueprint. Shipped free to your door.</>)}
                        {b.id === 'stove' && (<>Single-burner propane camping stove. Wind-resistant, built-in igniter, runs on standard 1-lb canisters. For when the lights go out.</>)}
                        {b.id === 'flash' && (<>1,200-lumen tactical flashlight. Rechargeable. Strobe + SOS modes. Throws a beam 300 yards in the dark.</>)}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        fontFamily: '"Libre Caslon Text", Georgia, serif',
                        fontStyle: 'italic', color: 'var(--a-red)', fontSize: 26, lineHeight: 1
                      }}>+$9</div>
                      <div style={{
                        fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 10, opacity: 0.6
                      }}>free shipping</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* payment */}
            <div style={{
              marginTop: 20,
              background: '#fff', border: '1px solid rgba(20,22,31,0.18)', padding: '22px 22px 4px'
            }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                marginBottom: 14
              }}>
                <div style={{
                  fontFamily: 'Oswald, Impact, sans-serif',
                  fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'var(--a-navy)'
                }}>② Payment</div>
                <div style={{
                  fontFamily: 'ui-monospace, Menlo, monospace',
                  fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--a-ink-2)', opacity: 0.75
                }}>VISA · MC · AMEX · DISC</div>
              </div>
              <Field label="Card number" value={form.card} onChange={v => setForm({...form, card: v})} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
                <Field label="Exp." value={form.exp} onChange={v => setForm({...form, exp: v})} />
                <Field label="CVV" value={form.cvv} onChange={v => setForm({...form, cvv: v})} />
                <Field label="Zip" value={form.zip} onChange={v => setForm({...form, zip: v})} />
              </div>
            </div>

            <button type="submit" style={{
              marginTop: 24, width: '100%',
              background: 'var(--a-red)', color: '#fff',
              fontFamily: 'Oswald, Impact, sans-serif',
              fontSize: 20, letterSpacing: '0.16em', textTransform: 'uppercase',
              padding: '22px 0', border: 0,
              boxShadow: '0 12px 0 -2px var(--a-red-dark), 0 18px 40px -15px rgba(164,24,42,0.6)',
              cursor: 'pointer'
            }}>
              Complete My Order — ${total}.00 →
            </button>
            <div style={{
              marginTop: 12, textAlign: 'center',
              fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11,
              letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--a-ink-2)'
            }}>
              🔒 Encrypted · Secured by Stripe · 60-Day Money Back
            </div>
          </div>

          {/* RIGHT: summary */}
          <aside>
            <div style={{
              background: 'var(--a-paper)', border: '1px solid rgba(20,22,31,0.18)',
              padding: '20px 22px'
            }}>
              <div style={{
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--a-navy)', marginBottom: 14
              }}>Your Order</div>

              <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 12, alignItems: 'center' }}>
                <PH label="PDF" h={60} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Energy Independence Blueprint</div>
                  <div style={{ fontSize: 12, color: 'var(--a-ink-2)', opacity: 0.8 }}>Digital · Delivered instantly</div>
                </div>
              </div>
              <div style={{
                marginTop: 14, display: 'flex', justifyContent: 'space-between',
                fontSize: 14
              }}>
                <span>Blueprint</span><span>${price}.00</span>
              </div>
              {bumpItems.filter(b => bumps[b.id]).map(b => (
                <div key={b.id} style={{
                  marginTop: 6, display: 'flex', justifyContent: 'space-between',
                  fontSize: 14, color: 'var(--a-red)'
                }}>
                  <span>+ {b.short}</span><span>${b.price}.00</span>
                </div>
              ))}
              <div style={{
                marginTop: 14, paddingTop: 14,
                borderTop: '1px dashed rgba(20,22,31,0.25)',
                display: 'flex', justifyContent: 'space-between',
                fontFamily: 'Oswald, Impact, sans-serif', fontSize: 18, letterSpacing: '0.08em'
              }}>
                <span>TOTAL TODAY</span><span>${total}.00</span>
              </div>
            </div>

            <div style={{
              marginTop: 16, padding: '18px 20px',
              border: '1px solid rgba(20,22,31,0.18)', background: '#fff'
            }}>
              <div style={{
                fontFamily: 'Oswald, Impact, sans-serif', fontSize: 12,
                letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--a-red)'
              }}>60-Day Guarantee</div>
              <p style={{ fontSize: 13, lineHeight: 1.55, margin: '8px 0 0', color: 'var(--a-ink-2)' }}>
                Save 10× what you paid or email us. We refund every penny.
                No questions, no fine print.
              </p>
            </div>
          </aside>
        </form>
      </div>

      <Footer theme="a" />
    </div>
  );
}

function Field({ label, value, onChange, type = 'text' }) {
  return (
    <label style={{ display: 'block', marginBottom: 14 }}>
      <div style={{
        fontFamily: 'ui-monospace, Menlo, monospace',
        fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'var(--a-ink-2)', marginBottom: 4, opacity: 0.8
      }}>{label}</div>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 14px',
          fontFamily: '"Libre Caslon Text", Georgia, serif',
          fontSize: 16,
          border: '1px solid rgba(20,22,31,0.2)',
          background: '#faf8f3',
          outline: 'none'
        }}
      />
    </label>
  );
}

/* ============================================================
   OTO1 — Energy Audit upsell
   ============================================================ */
function VersionA_OTO1({ values, onYes, onNo }) {
  return (
    <div data-screen-label="A-03 OTO1" style={{
      background: 'var(--a-cream)', color: 'var(--a-ink)',
      fontFamily: '"Libre Caslon Text", Georgia, serif', minHeight: '100vh'
    }}>
      <div style={{
        background: 'var(--a-navy)', color: 'var(--a-paper)',
        padding: '14px 24px', borderBottom: '3px solid var(--a-gold)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{
          fontFamily: 'Oswald, Impact, sans-serif',
          fontSize: 22, letterSpacing: '0.36em', fontWeight: 600
        }}>FREEBORN</div>
        <div style={{
          fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'var(--a-gold)'
        }}>✓ Order confirmed · #FB-48219</div>
      </div>

      <StepNav theme="a" step={3} />

      <section style={{ maxWidth: 1020, margin: '0 auto', padding: '20px 24px 0', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#1e6b3d', color: '#fff', padding: '8px 16px',
          fontFamily: 'Oswald, Impact, sans-serif',
          fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
          marginBottom: 18
        }}>
          <span>✓</span> Your Blueprint is on its way to your inbox
        </div>
        <div style={{
          fontFamily: 'Oswald, Impact, sans-serif',
          fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'var(--a-red)'
        }}>WAIT — ONE-TIME OFFER · SHOWN ONCE</div>

        <h1 style={{
          fontFamily: '"Libre Caslon Text", Georgia, serif',
          fontStyle: 'italic', fontWeight: 700,
          fontSize: 'clamp(34px, 4.8vw, 58px)', lineHeight: 1.06,
          margin: '10px 0 10px', textWrap: 'balance'
        }}>
          Upload your bills. <span style={{ color: 'var(--a-red)' }}>We'll do the math.</span>
        </h1>
        <p style={{
          fontSize: 'clamp(16px, 1.6vw, 19px)', color: 'var(--a-ink-2)',
          maxWidth: 760, margin: '0 auto 28px', lineHeight: 1.55
        }}>
          The Blueprint works. But most people never actually sit down with their bill
          and file the paperwork. So don't. Send us your last 12 bills — our analysts
          will send back a custom Energy Audit plan within 48 hours.
        </p>
      </section>

      <section style={{ maxWidth: 1020, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          background: '#fff', border: '1px solid rgba(20,22,31,0.18)',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0
        }}>
          <div style={{ padding: '28px 30px', borderRight: '1px solid rgba(20,22,31,0.15)' }}>
            <div style={{
              fontFamily: 'Oswald, Impact, sans-serif',
              fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase',
              color: 'var(--a-gold-2)', marginBottom: 8
            }}>The Freeborn Energy Audit</div>
            <h2 style={{
              fontFamily: '"Libre Caslon Text", Georgia, serif',
              fontStyle: 'italic', fontWeight: 700,
              fontSize: 30, margin: '0 0 12px'
            }}>Done-for-you. No call required.</h2>
            <ol style={{ paddingLeft: 18, fontSize: 15, lineHeight: 1.75, color: 'var(--a-ink-2)', margin: 0 }}>
              <li><b>You upload</b> your last 12 utility bills (PDF or photo — takes 5 minutes).</li>
              <li><b>Our analysts</b> review every line — rate class, tier, taxes, riders.</li>
              <li><b>We match</b> every federal &amp; state program you qualify for by zip code.</li>
              <li><b>You receive</b> a personalized <b>30-day Energy Audit plan</b> in your inbox <b>within 48 hours</b>.</li>
              <li><b>Average plan</b> identifies <b>$1,200–$2,800 / year</b> in savings.</li>
            </ol>
            <div style={{
              marginTop: 16,
              padding: '10px 14px',
              background: 'var(--a-paper)',
              fontFamily: 'ui-monospace, Menlo, monospace',
              fontSize: 12, color: 'var(--a-ink-2)', lineHeight: 1.5
            }}>
              ▸ No call. No calendar. No awkward sales pitch. Just the plan.
            </div>
          </div>

          <div style={{ padding: '28px 30px', background: 'var(--a-paper)' }}>
            {/* UPLOAD DROPZONE MOCKUP */}
            <div style={{
              border: '2px dashed rgba(20,22,31,0.35)',
              background: '#fff',
              padding: '22px 20px',
              textAlign: 'center'
            }}>
              <div style={{
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 36, color: 'var(--a-navy)', lineHeight: 1, marginBottom: 6
              }}>⬆</div>
              <div style={{
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--a-navy)'
              }}>Drop your bills here</div>
              <div style={{
                fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 10,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--a-ink-2)', opacity: 0.75, marginTop: 4
              }}>PDF · JPG · PNG · up to 24 files</div>
              {/* mock uploaded file rows */}
              <div style={{ marginTop: 12, textAlign: 'left' }}>
                {[
                  ['electric_jan.pdf', '✓'],
                  ['electric_feb.pdf', '✓'],
                  ['gas_jan.pdf', '◷ 42%']
                ].map(([n, s], i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between',
                    fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11,
                    padding: '4px 8px',
                    background: i % 2 ? 'rgba(20,22,31,0.04)' : 'transparent',
                    color: 'var(--a-ink-2)'
                  }}><span>{n}</span><span style={{ color: 'var(--a-red)' }}>{s}</span></div>
                ))}
              </div>
            </div>

            <div style={{
              marginTop: 14,
              display: 'flex', alignItems: 'baseline', gap: 14
            }}>
              <div style={{
                textDecoration: 'line-through',
                fontFamily: '"Libre Caslon Text", Georgia, serif', fontStyle: 'italic',
                color: 'var(--a-ink-2)', fontSize: 22
              }}>$197</div>
              <div style={{
                fontFamily: 'Oswald, Impact, sans-serif', fontSize: 52,
                color: 'var(--a-red)', lineHeight: 1
              }}>$37</div>
              <div style={{
                fontFamily: 'ui-monospace, Menlo, monospace',
                fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--a-ink-2)'
              }}>one time · plan in 48 hrs</div>
            </div>

            <button onClick={onYes} style={{
              marginTop: 18, width: '100%',
              background: 'var(--a-red)', color: '#fff',
              fontFamily: 'Oswald, Impact, sans-serif',
              fontSize: 18, letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '18px 20px', border: 0,
              boxShadow: '0 10px 0 -2px var(--a-red-dark)',
              cursor: 'pointer'
            }}>
              YES — Audit My Bills for $37
            </button>

            <button onClick={onNo} style={{
              marginTop: 12, width: '100%', background: 'transparent',
              color: 'var(--a-ink-2)',
              fontFamily: '"Libre Caslon Text", Georgia, serif',
              fontStyle: 'italic', fontSize: 13,
              padding: '10px 0', textDecoration: 'underline', cursor: 'pointer'
            }}>
              No thanks — I'd rather do this on my own
            </button>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '44px 24px 20px' }}>
        <div style={{
          border: '1px solid rgba(20,22,31,0.18)', background: '#fff', padding: '24px 26px'
        }}>
          <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
            <PH label="ANALYST TEAM" w={120} h={120} />
            <div>
              <Stars />
              <p style={{
                fontFamily: '"Libre Caslon Text", Georgia, serif',
                fontStyle: 'italic', fontSize: 17, lineHeight: 1.55,
                margin: '8px 0 10px'
              }}>
                “I uploaded twelve PDFs on a Tuesday. By Thursday they'd emailed me a plan
                with $2,400/year in savings I had no idea about. I didn't talk to a soul.”
              </p>
              <div style={{
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 13, letterSpacing: '0.12em'
              }}>BARBARA L. — TALLAHASSEE, FL</div>
            </div>
          </div>
        </div>
      </section>

      <Footer theme="a" />
    </div>
  );
}

/* ============================================================
   OTO2 — Freeborn Freedom Club (downsell / continuity)
   ============================================================ */
function VersionA_OTO2({ onYes, onNo }) {
  return (
    <div data-screen-label="A-04 OTO2" style={{
      background: 'var(--a-cream)', color: 'var(--a-ink)',
      fontFamily: '"Libre Caslon Text", Georgia, serif', minHeight: '100vh'
    }}>
      <div style={{
        background: 'var(--a-navy)', color: 'var(--a-paper)',
        padding: '14px 24px', borderBottom: '3px solid var(--a-gold)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{
          fontFamily: 'Oswald, Impact, sans-serif',
          fontSize: 22, letterSpacing: '0.36em', fontWeight: 600
        }}>FREEBORN</div>
        <div style={{
          fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'var(--a-gold)'
        }}>INVITATION · MEMBERS ONLY</div>
      </div>

      <StepNav theme="a" step={4} />

      <section style={{ maxWidth: 1020, margin: '0 auto', padding: '20px 24px 40px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Oswald, Impact, sans-serif',
            fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--a-red)'
          }}>ONE LAST INVITATION</div>
          <h1 style={{
            fontFamily: '"Libre Caslon Text", Georgia, serif',
            fontStyle: 'italic', fontWeight: 700,
            fontSize: 'clamp(34px, 4.6vw, 56px)', lineHeight: 1.06,
            margin: '10px 0 10px', textWrap: 'balance'
          }}>
            Join the <span style={{ color: 'var(--a-red)' }}>Freeborn</span> Freedom Club.
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 1.5vw, 19px)', color: 'var(--a-ink-2)',
            maxWidth: 720, margin: '0 auto 22px', lineHeight: 1.55
          }}>
            Monthly briefings, rate-drop alerts, a private community of Americans
            taking back control of their household spending. First month free.
          </p>
        </div>

        <div style={{
          background: '#fff', border: '1px solid rgba(20,22,31,0.18)',
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 0
        }}>
          <div style={{ padding: '28px 30px', borderRight: '1px solid rgba(20,22,31,0.15)' }}>
            <div style={{
              fontFamily: 'Oswald, Impact, sans-serif',
              fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase',
              color: 'var(--a-gold-2)', marginBottom: 8
            }}>Every month you get</div>
            {[
              ['Disaster Preparedness Library', 'Ongoing guides for power outages, fuel shortages, severe weather, grid failures.'],
              ['Off-Grid Living Playbooks', 'Water, shelter, waste, communications — the real skills, not the survivalist cosplay.'],
              ['Alternative Energy Briefings', 'Solar, micro-wind, wood, propane, hydro — what works, what costs what, and where.'],
              ['Sustainable Food Sourcing', 'Gardens, cellars, preservation, local meat — feeding a family without relying on the supply chain.'],
              ['Rapid Alert Notifications', 'Get notified the hour a new rebate or program opens in your state.'],
              ['Private Member Community', 'Real families saving real money and trading what works. No bots, no politics.'],
              ['Monthly Freeborn Intelligence Briefing', 'Rate changes, new programs, what Big Oil moved this month.'],
              ['Live Founder Q&A (monthly)', 'Submit a question. Get it answered. 60 minutes, unfiltered.']
            ].map((row, i) => (
              <div key={i} style={{
                padding: '14px 0',
                borderTop: i === 0 ? '1px dashed rgba(20,22,31,0.18)' : 'none',
                borderBottom: '1px dashed rgba(20,22,31,0.18)',
                display: 'grid', gridTemplateColumns: '24px 1fr', gap: 12, alignItems: 'start'
              }}>
                <div style={{ color: 'var(--a-red)', fontFamily: 'Oswald, Impact, sans-serif' }}>✦</div>
                <div>
                  <div style={{
                    fontFamily: 'Oswald, Impact, sans-serif',
                    fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase'
                  }}>{row[0]}</div>
                  <div style={{ fontSize: 14, color: 'var(--a-ink-2)', marginTop: 2 }}>{row[1]}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: '28px 30px', background: 'var(--a-paper)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <div style={{
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 48, color: 'var(--a-navy)', lineHeight: 1
              }}>$0</div>
              <div style={{
                fontFamily: '"Libre Caslon Text", Georgia, serif',
                fontStyle: 'italic', fontSize: 16, color: 'var(--a-ink-2)'
              }}>first 14 days</div>
            </div>
            <div style={{
              fontFamily: 'ui-monospace, Menlo, monospace',
              fontSize: 11, letterSpacing: '0.14em',
              color: 'var(--a-ink-2)', marginTop: 6
            }}>Then $17/mo · Cancel anytime · No contract</div>

            <button onClick={onYes} style={{
              marginTop: 22, width: '100%',
              background: 'var(--a-navy)', color: '#fff',
              fontFamily: 'Oswald, Impact, sans-serif',
              fontSize: 17, letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '18px 20px', border: 0,
              boxShadow: '0 10px 0 -2px #08182a', cursor: 'pointer'
            }}>
              Start My 14-Day Free Trial
            </button>
            <button onClick={onNo} style={{
              marginTop: 12, width: '100%', background: 'transparent',
              color: 'var(--a-ink-2)',
              fontFamily: '"Libre Caslon Text", Georgia, serif',
              fontStyle: 'italic', fontSize: 13,
              padding: '10px 0', textDecoration: 'underline', cursor: 'pointer'
            }}>
              No thanks, skip the free trial
            </button>

            <div style={{
              marginTop: 18, padding: '12px 14px',
              border: '1px solid rgba(20,22,31,0.18)',
              background: '#fff', fontSize: 13, color: 'var(--a-ink-2)', lineHeight: 1.5
            }}>
              <b style={{ color: 'var(--a-ink)' }}>A note from Freeborn:</b> we built the Club
              because the fight for your household doesn't end with one PDF. See you inside.
            </div>
          </div>
        </div>
      </section>

      <Footer theme="a" />
    </div>
  );
}

/* ============================================================
   THANK YOU — final step / members area preview
   ============================================================ */
function VersionA_Thanks({ onRestart }) {
  return (
    <div data-screen-label="A-05 Thanks" style={{
      background: 'var(--a-cream)', color: 'var(--a-ink)',
      fontFamily: '"Libre Caslon Text", Georgia, serif', minHeight: '100vh'
    }}>
      <div style={{
        background: 'var(--a-navy)', color: 'var(--a-paper)',
        padding: '14px 24px', borderBottom: '3px solid var(--a-gold)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{
          fontFamily: 'Oswald, Impact, sans-serif',
          fontSize: 22, letterSpacing: '0.36em', fontWeight: 600
        }}>FREEBORN · MEMBER AREA</div>
        <div style={{
          fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'var(--a-gold)'
        }}>Welcome, Sarah</div>
      </div>

      <section style={{ maxWidth: 1020, margin: '0 auto', padding: '48px 24px 20px', textAlign: 'center' }}>
        <div style={{
          fontFamily: 'Oswald, Impact, sans-serif',
          fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#1e6b3d'
        }}>✓ Order complete · #FB-48219</div>
        <h1 style={{
          fontFamily: '"Libre Caslon Text", Georgia, serif',
          fontStyle: 'italic', fontWeight: 700,
          fontSize: 'clamp(34px, 4.6vw, 56px)', lineHeight: 1.06,
          margin: '10px 0 10px', textWrap: 'balance'
        }}>
          Welcome to the fight, Sarah.
        </h1>
        <p style={{
          fontSize: 17, color: 'var(--a-ink-2)', maxWidth: 640, margin: '0 auto 0', lineHeight: 1.55
        }}>
          Your Blueprint is in your inbox. Your audit plan is being prepared. Here's what to do next.
        </p>
      </section>

      <section style={{ maxWidth: 1020, margin: '0 auto', padding: '28px 24px 40px' }}>
        <div style={{
          background: '#fff', border: '1px solid rgba(20,22,31,0.18)',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0
        }}>
          {[
            { n: '01', t: 'Download your Blueprint', b: 'Full 120-page PDF + fast-track sheet.', a: 'Download PDF' },
            { n: '02', t: 'Upload your bills', b: 'Send us 12 months of utility bills. Plan back in 48 hrs.', a: 'Upload Bills' },
            { n: '03', t: 'Join the Freedom Club', b: 'Your private community and monthly briefings.', a: 'Open Club' }
          ].map((c, i) => (
            <div key={i} style={{
              padding: '24px 24px',
              borderRight: i < 2 ? '1px solid rgba(20,22,31,0.15)' : 'none'
            }}>
              <div style={{
                fontFamily: '"Libre Caslon Text", Georgia, serif',
                fontStyle: 'italic', color: 'var(--a-gold)', fontSize: 30, lineHeight: 1
              }}>{c.n}</div>
              <div style={{
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 16, letterSpacing: '0.04em', textTransform: 'uppercase',
                color: 'var(--a-navy)', margin: '6px 0'
              }}>{c.t}</div>
              <div style={{ fontSize: 14, color: 'var(--a-ink-2)', lineHeight: 1.55 }}>{c.b}</div>
              <button style={{
                marginTop: 14,
                background: 'var(--a-navy)', color: '#fff',
                fontFamily: 'Oswald, Impact, sans-serif',
                fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase',
                padding: '10px 18px', border: 0, cursor: 'pointer'
              }}>{c.a} →</button>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 22,
          background: 'var(--a-paper)', border: '1px solid rgba(20,22,31,0.18)',
          padding: '24px 26px',
          display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: 20, alignItems: 'center'
        }}>
          <PH label="NEWSLETTER" h={90} />
          <div>
            <div style={{
              fontFamily: 'Oswald, Impact, sans-serif',
              fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--a-red)'
            }}>From the Freeborn newsletter</div>
            <div style={{
              fontFamily: '"Libre Caslon Text", Georgia, serif',
              fontStyle: 'italic', fontSize: 22, lineHeight: 1.2, margin: '6px 0'
            }}>This week: the rebate that just opened in 19 states</div>
            <div style={{ fontSize: 14, color: 'var(--a-ink-2)' }}>
              5-minute read · filed under <i>Programs</i>
            </div>
          </div>
          <button style={{
            background: 'transparent', color: 'var(--a-navy)',
            border: '1px solid var(--a-navy)',
            fontFamily: 'Oswald, Impact, sans-serif',
            fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase',
            padding: '10px 16px', cursor: 'pointer'
          }}>Read →</button>
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <button onClick={onRestart} style={{
            background: 'transparent', color: 'var(--a-ink-2)',
            fontFamily: '"Libre Caslon Text", Georgia, serif', fontStyle: 'italic',
            textDecoration: 'underline', fontSize: 13, cursor: 'pointer'
          }}>↻ Restart the funnel demo</button>
        </div>
      </section>

      <Footer theme="a" />
    </div>
  );
}

Object.assign(window, { VersionA_Checkout, VersionA_OTO1, VersionA_OTO2, VersionA_Thanks });
