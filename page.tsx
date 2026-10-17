
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Database,
  FileSearch,
  FlaskConical,
  Layers3,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  UploadCloud,
} from "lucide-react";

const C = {
  ivory: "#F5F1E9",
  sandstone: "#E8DED1",
  terracotta: "#AD765B",
  espresso: "#352D29",
  copper: "#C99A80",
  paper: "#FFF9F1",
  muted: "#806D61",
  border: "#D7C6B8",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const capabilities = [
  {
    number: "01",
    icon: UploadCloud,
    title: "Data Ingestion",
    label: "UPLOAD / VALIDATE",
    description:
      "Import CSV files, inspect missing values, identify duplicates, and review data quality before analysis.",
    href: "/upload",
    action: "Open Upload",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Intelligence Dashboard",
    label: "ANALYZE / EXPLORE",
    description:
      "Explore dimensions, relationships, correlations, and evidence directly from your uploaded dataset.",
    href: "/dashboard",
    action: "Open Dashboard",
  },
  {
    number: "03",
    icon: FileSearch,
    title: "Detective Mode",
    label: "INVESTIGATE / VERIFY",
    description:
      "Inspect unusual signals, challenge assumptions, and trace findings back to their supporting records.",
    href: "/dashboard",
    action: "Investigate",
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Intelligence Lab",
    label: "SIMULATE / DISCOVER",
    description:
      "Run what-if scenarios, investigate statistical anomalies, and discover unexpected patterns.",
    href: "/lab",
    action: "Enter Lab",
  },
];

function Eyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="home-eyebrow">
      {children}
    </div>
  );
}

function ActionLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`home-button ${
        primary ? "home-button-primary" : ""
      }`}
    >
      {children}
    </Link>
  );
}

function Metric({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="home-mini-card p-4">
      <div className="text-[10px] text-[#806D61]">
        {label}
      </div>

      <div className="home-mono mt-4 text-2xl font-semibold">
        {value}
      </div>

      <div className="mt-2 text-[10px] text-[#806D61]">
        {note}
      </div>
    </div>
  );
}

function WorkstationPreview() {
  return (
    <div className="relative w-full max-w-[680px]">
      <div className="absolute -left-3 -top-3 h-full w-full border border-[#D7C6B8] bg-[#E8DED1] md:-left-5 md:-top-5" />

      <div className="home-workstation relative overflow-hidden">
        {/* Preview toolbar */}
        <div className="flex items-center justify-between gap-3 border-b border-[#D7C6B8] bg-[#F5F1E9] px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center bg-[#AD765B] text-sm font-bold text-white">
              V
            </div>

            <div>
              <div className="text-[11px] font-bold tracking-[.17em]">
                VEYRA
              </div>

              <div className="text-[8px] uppercase tracking-[.15em] text-[#806D61]">
                Intelligence Workspace
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[9px] text-[#806D61]">
            <span className="h-2 w-2 bg-[#AD765B]" />
            Workspace Preview
          </div>
        </div>

        <div className="grid grid-cols-[75px_1fr] sm:grid-cols-[115px_1fr]">
          {/* Sidebar */}
          <div className="border-r border-[#D7C6B8] bg-[#E8DED1] p-3 sm:p-4">
            <div className="home-eyebrow !text-[7px]">
              WORKSPACE
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-2 border border-[#AD765B] bg-[#EACFBE] p-2">
                <BarChart3
                  size={13}
                  color={C.espresso}
                />

                <span className="hidden text-[9px] sm:inline">
                  Overview
                </span>
              </div>

              <div className="flex items-center gap-2 p-2 text-[#806D61]">
                <Database size={13} />

                <span className="hidden text-[9px] sm:inline">
                  Dataset
                </span>
              </div>

              <div className="flex items-center gap-2 p-2 text-[#806D61]">
                <Search size={13} />

                <span className="hidden text-[9px] sm:inline">
                  Detective
                </span>
              </div>

              <div className="flex items-center gap-2 p-2 text-[#806D61]">
                <FlaskConical size={13} />

                <span className="hidden text-[9px] sm:inline">
                  Lab
                </span>
              </div>
            </div>
          </div>

          {/* Preview content */}
          <div className="min-w-0 p-3 sm:p-5">
            <div className="home-eyebrow !text-[8px]">
              OVERVIEW / ANALYTICS
            </div>

            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
              Dashboard
            </h3>

            <p className="mt-2 text-[10px] text-[#806D61]">
              Explore signals. Discover relationships.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <Metric
                label="Total Records"
                value="3,221"
                note="Illustrative dataset"
              />

              <Metric
                label="Dimensions"
                value="9"
                note="Illustrative dataset"
              />

              <Metric
                label="Correlation Links"
                value="15"
                note="Illustrative dataset"
              />

              <Metric
                label="Completeness"
                value="100%"
                note="Illustrative dataset"
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_.85fr]">
              <div className="home-mini-card p-4">
                <div className="home-eyebrow !text-[8px]">
                  SIGNAL OVERVIEW
                </div>

                <p className="mt-2 text-xs font-semibold">
                  Dimension activity
                </p>

                <div className="mt-5 flex h-28 items-end justify-between gap-2 border-b border-[#D7C6B8] pb-1">
                  {[39, 58, 43, 72, 51, 88, 63, 79].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{
                          height: `${height}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.07,
                        }}
                        className="w-full bg-[#AD765B]"
                        style={{
                          opacity:
                            index % 2 === 0 ? 0.6 : 1,
                        }}
                      />
                    )
                  )}
                </div>

                <p className="mt-3 text-[9px] text-[#806D61]">
                  Illustrative signal visualization
                </p>
              </div>

              <div className="home-mini-card p-4">
                <div className="home-eyebrow !text-[8px]">
                  RELATIONSHIPS
                </div>

                <p className="mt-2 text-xs font-semibold">
                  Correlation strength
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    { label: "Signal A", width: 94 },
                    { label: "Signal B", width: 77 },
                    { label: "Signal C", width: 61 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex justify-between gap-2 text-[9px] text-[#806D61]">
                        <span>{item.label}</span>
                        <span className="home-mono">
                          {(item.width / 100).toFixed(2)}
                        </span>
                      </div>

                      <div className="h-2 bg-[#E8DED1]">
                        <div
                          className="h-full bg-[#C99A80]"
                          style={{
                            width: `${item.width}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-[9px] text-[#806D61]">
                  Example values
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-3 hidden border border-[#D7C6B8] bg-[#FFF9F1] px-5 py-4 shadow-[5px_5px_0_#C7B3A4] md:block">
        <div className="flex items-center gap-3">
          <Activity
            size={18}
            color={C.terracotta}
          />

          <div>
            <p className="text-[10px] font-semibold">
              Evidence-driven analysis
            </p>

            <p className="mt-1 text-[9px] text-[#806D61]">
              Interactive CSV intelligence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="veyra-home min-h-screen overflow-x-hidden bg-[#F5F1E9] text-[#352D29]">
      <style>{`
        .veyra-home {
          font-family: var(--font-outfit), Arial, sans-serif;
        }

        .veyra-home * {
          box-sizing: border-box;
        }

        .veyra-home .home-mono {
          font-family: var(--font-ibm-plex-mono), monospace;
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.045em;
        }

        .veyra-home .home-eyebrow {
          color: #AD765B;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .19em;
        }

        .veyra-home .home-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          border: 1px solid #D7C6B8;
          border-radius: 2px;
          background: #FFF9F1;
          color: #352D29;
          padding: 13px 20px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 4px 4px 0 #C5AD9B;
          transition:
            transform 140ms ease,
            box-shadow 140ms ease,
            background 140ms ease;
        }

        .veyra-home .home-button:hover {
          transform: translate(-2px, -2px);
        }

        .veyra-home .home-button:active {
          transform: translate(4px, 4px);
          box-shadow: none;
        }

        .veyra-home .home-button-primary {
          background: #AD765B;
          color: white;
          border-color: #8F5C45;
          box-shadow: 4px 4px 0 #85513B;
        }

        .veyra-home .home-card {
          background: #FFF9F1;
          border: 1px solid #D7C6B8;
          border-radius: 2px;
          box-shadow:
            5px 5px 0 #C7B3A4,
            8px 10px 18px rgba(53,45,41,.08);
          transition:
            transform 150ms ease,
            box-shadow 150ms ease;
        }

        .veyra-home .home-card:hover {
          transform: translate(-3px, -3px);
          box-shadow:
            8px 8px 0 #C7B3A4,
            11px 13px 20px rgba(53,45,41,.09);
        }

        .veyra-home .home-card:active {
          transform: translate(3px, 3px);
          box-shadow: 2px 2px 0 #C7B3A4;
        }

        .veyra-home .home-mini-card {
          background: #FFF9F1;
          border: 1px solid #D7C6B8;
          border-radius: 1px;
          box-shadow: 3px 3px 0 #C7B3A4;
        }

        .veyra-home .home-workstation {
          background: #FFF9F1;
          border: 1px solid #D7C6B8;
          border-radius: 2px;
          box-shadow:
            9px 9px 0 #BDA493,
            14px 17px 30px rgba(53,45,41,.14);
        }

        .veyra-home a:focus-visible {
          outline: 2px solid #AD765B;
          outline-offset: 5px;
        }

        @media (prefers-reduced-motion: reduce) {
          .veyra-home *,
          .veyra-home *::before,
          .veyra-home *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* NAVIGATION */}
      <header className="relative z-20 border-b border-[#D7C6B8] bg-[#F9F5EF]">
        <nav className="mx-auto flex min-h-[90px] max-w-[1500px] flex-wrap items-center justify-between gap-5 px-6 py-5 lg:px-12">
          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <div className="flex h-11 w-11 items-center justify-center bg-[#AD765B] text-xl font-bold text-white shadow-[4px_4px_0_#85513B]">
              V
            </div>

            <div>
              <p className="text-[18px] font-bold tracking-[.19em]">
                VEYRA
              </p>

              <p className="text-[9px] uppercase tracking-[.16em] text-[#806D61]">
                Data Intelligence
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-xs font-medium md:flex">
            <Link
              href="/upload"
              className="transition-colors hover:text-[#AD765B]"
            >
              Upload
            </Link>

            <Link
              href="/dashboard"
              className="transition-colors hover:text-[#AD765B]"
            >
              Dashboard
            </Link>

            <Link
              href="/lab"
              className="transition-colors hover:text-[#AD765B]"
            >
              Intelligence Lab
            </Link>
          </div>

          <ActionLink href="/upload" primary>
            Enter VEYRA
            <ArrowUpRight size={16} />
          </ActionLink>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-[1500px] items-center gap-14 px-6 pb-24 pt-20 lg:min-h-[740px] lg:grid-cols-[.88fr_1.12fr] lg:gap-12 lg:px-12 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <Eyebrow>
            THE INTELLIGENCE BENEATH THE SURFACE
          </Eyebrow>

          <h1 className="mt-7 text-[clamp(3.5rem,5.6vw,6rem)] font-semibold leading-[1.05] tracking-[-.065em]">
            Beyond data.
            <br />
            <span className="text-[#AD765B]">
              Into insight.
            </span>
          </h1>

          <p className="mt-8 max-w-[490px] text-[15px] leading-8 text-[#806D61]">
            Every dataset holds a hidden architecture.
            VEYRA helps you reveal its patterns,
            investigate relationships, and transform
            complex information into clear intelligence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink href="/upload" primary>
              Explore Your Data
              <ArrowRight size={17} />
            </ActionLink>

            <ActionLink href="/lab">
              <Sparkles
                size={16}
                color={C.terracotta}
              />
              Explore the Lab
            </ActionLink>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#D7C6B8] pt-7">
            {[
              "CSV Intelligence",
              "Evidence-driven Analysis",
              "Interactive Exploration",
            ].map((label) => (
              <div
                key={label}
                className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[.09em] text-[#806D61]"
              >
                <CheckCircle2
                  size={14}
                  color={C.terracotta}
                />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
          className="relative px-3 py-5 md:px-5"
        >
          <WorkstationPreview />
        </motion.div>
      </section>

      {/* WORKFLOW STRIP */}
      <section className="border-y border-[#D7C6B8] bg-[#E8DED1]">
        <div className="mx-auto grid max-w-[1500px] gap-0 px-6 md:grid-cols-3 lg:px-12">
          {[
            {
              icon: Database,
              title: "Understand your dataset",
              subtitle: "Inspect structure and quality",
            },
            {
              icon: TrendingUp,
              title: "Reveal relationships",
              subtitle: "Analyze statistical signals",
            },
            {
              icon: SlidersHorizontal,
              title: "Investigate possibilities",
              subtitle: "Experiment in VEYRA Lab",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 py-7 ${
                index > 0
                  ? "border-t border-[#D7C6B8] md:border-l md:border-t-0 md:pl-8"
                  : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D7C6B8] bg-[#FFF9F1] text-[#AD765B]">
                <item.icon size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  {item.title}
                </p>

                <p className="mt-1 text-xs text-[#806D61]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 lg:px-12 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-[750px]"
        >
          <Eyebrow>
            ONE CONNECTED INTELLIGENCE WORKSPACE
          </Eyebrow>

          <h2 className="mt-5 text-[clamp(2.7rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-.055em]">
            See what others
            <br />
            <span className="text-[#AD765B]">
              overlook.
            </span>
          </h2>

          <p className="mt-7 max-w-[600px] text-[15px] leading-8 text-[#806D61]">
            Move from raw CSV data to quality inspection,
            statistical exploration, investigative
            analysis, and controlled experiments.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
            >
              <Link
                href={item.href}
                className="home-card group flex h-full min-h-[345px] flex-col p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#D7C6B8] bg-[#E8DED1]">
                    <item.icon
                      size={21}
                      color={C.terracotta}
                    />
                  </div>

                  <span className="home-mono text-xs text-[#AD765B]">
                    {item.number}
                  </span>
                </div>

                <Eyebrow>
                  <span className="!text-[8px]">
                    {item.label}
                  </span>
                </Eyebrow>

                <h3 className="mt-4 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-[13px] leading-7 text-[#806D61]">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[#D7C6B8] pt-5 text-xs font-semibold">
                  <span>{item.action}</span>

                  <ArrowUpRight
                    size={17}
                    color={C.terracotta}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PLATFORM PRINCIPLES */}
      <section className="border-y border-[#D7C6B8] bg-[#E8DED1]">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-20 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:px-12">
          <div>
            <Eyebrow>
              BUILT FOR EXPLORATION
            </Eyebrow>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Intelligence
              <br />
              you can inspect.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-[#806D61]">
              VEYRA is designed to make statistical
              exploration more transparent, interactive,
              and approachable.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Quality first",
                description:
                  "Review missing values, duplicate records, and formatting issues.",
              },
              {
                icon: Layers3,
                title: "Dimension clarity",
                description:
                  "Understand column structure and explore numerical relationships.",
              },
              {
                icon: Search,
                title: "Traceable findings",
                description:
                  "Investigate observations using their underlying records.",
              },
              {
                icon: Sparkles,
                title: "Interactive discovery",
                description:
                  "Experiment with scenarios and inspect unusual signals.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="home-mini-card p-6"
              >
                <item.icon
                  size={21}
                  color={C.terracotta}
                />

                <h3 className="mt-5 text-base font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-7 text-[#806D61]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center lg:py-32">
        <div className="mx-auto max-w-[800px]">
          <Eyebrow>
            YOUR NEXT DISCOVERY STARTS HERE
          </Eyebrow>

          <h2 className="mt-6 text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[1.1] tracking-[-.055em]">
            There is more
            <br />
            <span className="text-[#AD765B]">
              beneath the surface.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-8 text-[#806D61]">
            Upload a dataset, inspect its quality,
            and begin discovering the intelligence
            within your data.
          </p>

          <div className="mt-9">
            <ActionLink href="/upload" primary>
              Begin Exploring
              <ArrowRight size={17} />
            </ActionLink>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#D7C6B8] bg-[#E8DED1]">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-6 px-6 py-9 lg:px-12">
          <div>
            <p className="text-sm font-bold tracking-[.18em]">
              VEYRA
            </p>

            <p className="mt-2 text-xs text-[#806D61]">
              Data intelligence, made visible.
            </p>
          </div>

          <div className="flex flex-wrap gap-7 text-xs font-medium">
            <Link
              href="/upload"
              className="hover:text-[#AD765B]"
            >
              Upload
            </Link>

            <Link
              href="/dashboard"
              className="hover:text-[#AD765B]"
            >
              Dashboard
            </Link>

            <Link
              href="/lab"
              className="hover:text-[#AD765B]"
            >
              Lab
            </Link>
          </div>

          <p className="home-mono text-[10px] text-[#806D61]">
            VEYRA / DATA INTELLIGENCE
          </p>
        </div>
      </footer>
    </main>
  );
}
