const projects = [
  {
    index: '01',
    format: 'Breaking news',
    title: 'Finding the people inside a breaking story.',
    premise:
      'In the immediate aftermath of a deadly shooting at Brown University, two students who were inside the building described what they experienced—and how they helped guide others to safety.',
    role: 'CNN',
    note:
      'I spoke with students across campus and identified two who had been in a room steps from where the shooting occurred. I booked and pre-interviewed them, then coordinated logistics for a responsible live appearance under breaking-news conditions.',
    theme: 'interview',
    videoId: 'pDHPTSaE1rQ',
    videoTitle: 'Brown University students recount a deadly campus shooting',
  },
  {
    index: '03',
    format: 'Global affairs',
    title: 'Refusing to let an arrest silence dissent.',
    premise:
      'On his way to our interview, Russian opposition leader Vladimir Kara-Murza was arrested by the Kremlin. His wife Evgenia later joined us instead—determined to continue the mission he could no longer carry forward publicly.',
    role: 'Amanpour & Company',
    note:
      'As the story changed, I helped rebuild the interview around Evgenia, adapting our research and question arc to a rapidly developing situation and focusing the segment on her husband’s arrest and the personal cost of opposing the Kremlin.',
    theme: 'explain',
    videoId: 'H0aQb94rqHY',
    videoTitle:
      'Twice-poisoned Putin critic arrested in Moscow: his wife speaks out',
  },
  {
    index: '04',
    format: 'Live field production',
    title: 'Reporting from inside an election-night campaign.',
    premise:
      'On the eve of New Jersey’s governor’s race and through election night, John Berman reported live from Mikie Sherrill’s campaign as turnout, messaging, and results came into focus.',
    role: 'CNN | Election Night 2025',
    note:
      'I field produced our coverage with the Sherrill campaign across election eve and election night, coordinating live reporting and staying in direct contact with the campaign team for real-time updates.',
    theme: 'program',
    videoId: 'lH9DfwK5L64',
    videoTitle:
      'John Berman reports live from Mikie Sherrill’s campaign in New Jersey',
  },
  {
    index: '02',
    format: 'Long-form interview',
    title: 'Defending the right to think freely in the age of neurotech.',
    premise:
      '“The Battle for Your Brain” author Nita Farahany examines how emerging neurotechnology could read, track, and commercialize brain activity, and what it would take to protect cognitive liberty.',
    role: 'Amanpour & Company',
    note:
      'I led this segment from pitch through final edit, coordinating booking and shaping an editorial arc from the promise of brain-computer technology to workplace surveillance, privacy, and government oversight.',
    theme: 'interview',
    videoId: '53uOBqwycLY',
    videoTitle:
      'Defending the Right to Think Freely in the Age of Neurotech',
  },
];

export default function Home() {
  const orderedProjects = [...projects].sort((a, b) =>
    a.index.localeCompare(b.index),
  );

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="masthead">
        <div className="nameplate">
          <a className="wordmark" href="#top" aria-label="Casey Chiang, home">
            Casey Chiang
          </a>
          <p className="masthead-role">Producer · Journalist</p>
        </div>
        <nav aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#digital-reach">Digital reach</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="content">
        <section className="intro" id="top" aria-labelledby="intro-title">
          <div className="intro-main">
            <div className="intro-copy">
              <h1 id="intro-title">
                <span>Bringing clarity and</span>{' '}
                <span>humanity to the stories</span>{' '}
                <span>shaping our world.</span>
              </h1>
              <div className="intro-footer">
                <p className="intro-summary">
                  Across live news, global affairs, and long-form interviews, I
                  produce consequential journalism that gives complex issues
                  context, urgency, and meaning.
                </p>
                <div className="intro-actions">
                  <a href="/Casey-Chiang-Resume.pdf" download>
                    Download résumé <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
            </div>
            <figure className="intro-control-room" aria-hidden="true">
              <img
                className="intro-control-image"
                src="/control-room.jpg"
                alt=""
                width="2200"
                height="1650"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected work</h2>
          </div>

          <div className="project-list">
            {orderedProjects.map((project, projectIndex) => (
              <article
                className={`project ${projectIndex % 2 ? 'project-reverse' : ''}`}
                id={`project-${project.index}`}
                key={project.index}
              >
                <div
                  className={`project-media theme-${project.theme} ${
                    project.videoId ? 'project-media-video' : ''
                  }`}
                >
                  {project.videoId ? (
                    <iframe
                      className="project-embed"
                      src={`https://www.youtube-nocookie.com/embed/${project.videoId}?rel=0`}
                      title={project.videoTitle}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <span className="media-index">{project.index}</span>
                      <div className="media-field" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                      </div>
                      <p>{project.format}</p>
                      <span className="media-caption">
                        Temporary editorial frame
                      </span>
                    </>
                  )}
                </div>

                <div className="project-copy">
                  <p className="project-type">
                    {project.index} / {project.format}
                  </p>
                  <h3>{project.title}</h3>
                  <p className="project-premise">{project.premise}</p>
                  <dl>
                    <div>
                      <dt>{project.videoId ? 'Credit' : 'Working role'}</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div>
                      <dt>Editorial note</dt>
                      <dd>{project.note}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="digital-reach"
          id="digital-reach"
          aria-labelledby="digital-reach-title"
        >
          <p className="digital-reach-label">Digital reach</p>
          <div className="digital-reach-body">
            <div className="digital-reach-intro">
              <h2 id="digital-reach-title">
                Building an audience for substantive journalism.
              </h2>
              <p>
                At <em>Amanpour &amp; Company</em>, I built and executed a
                cross-platform strategy that carried long-form interviews
                beyond broadcast while preserving their editorial substance.
              </p>
            </div>
            <dl className="digital-reach-metrics">
              <div>
                <dt>114.5M</dt>
                <dd>Total views</dd>
              </div>
              <div>
                <dt>2.5×</dt>
                <dd>YouTube audience growth · +336K subscribers</dd>
              </div>
              <div>
                <dt>660K+</dt>
                <dd>Combined followers across platforms</dd>
              </div>
              <div>
                <dt>47.7%</dt>
                <dd>Daily newsletter open rate</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="about-visual">
            <div className="about-label">
              <p>About</p>
            </div>
            <figure className="about-portrait">
              <img
                src="/casey-chiang-portrait.jpg"
                alt="Casey Chiang working at a television production desk"
                width="4608"
                height="3456"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div className="about-copy">
            <h2 id="about-title">Casey Chiang</h2>
            <div className="about-columns">
              <p>
                At CNN, I am the lead producer for anchor John Berman on the
                network’s three-hour flagship morning newscast, shaping
                fast-moving breaking news and interviews with lawmakers,
                correspondents, and subject-matter experts into sharp,
                substantive live television. Beyond the studio, I field
                produce breaking news and special events with Berman,
                coordinating reporting, logistics, and live production in
                high-pressure situations.
              </p>
              <p>
                Previously, I produced for the Emmy-winning program
                <em> Amanpour &amp; Company</em> on PBS and CNN International,
                developing wide-ranging, in-depth conversations with global
                thought leaders, policymakers, artists, and cultural figures.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <p>Casey Chiang · New York · © 2026</p>
        <p className="footer-contact">
          <a href="mailto:cchiang98@gmail.com">cchiang98@gmail.com</a>
          <span aria-hidden="true">·</span>
          <a
            href="https://www.linkedin.com/in/casey-chiang/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </p>
      </footer>
    </>
  );
}
